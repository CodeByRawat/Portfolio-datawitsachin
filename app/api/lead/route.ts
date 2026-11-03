import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Best-effort per-instance throttle (serverless instances are ephemeral; this only blunts bursts)
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill this, humans never see it. Pretend success.
  if (body.website) return NextResponse.json({ ok: true });

  const str = (k: string, max: number) => String(body[k] ?? "").trim().slice(0, max);
  const name = str("name", 120);
  const email = str("email", 200);
  const company = str("company", 160);
  const interest = str("interest", 120);
  const message = str("message", 4000);
  const source = str("source", 300);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter your name and a valid email." }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.LEAD_TO_EMAIL || user;
  if (!user || !pass || !to) {
    console.error("Lead email not configured: set GMAIL_USER, GMAIL_APP_PASSWORD, LEAD_TO_EMAIL");
    return NextResponse.json({ error: "Email isn't configured yet. Please try again later." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "-"],
    ["Interested in", interest || "-"],
    ["Came from", source || "-"],
    ["Message", message || "-"],
  ];

  try {
    await transporter.sendMail({
      from: `"Data With Sachin leads" <${user}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject: `New lead: ${name}${company ? ` (${company})` : ""} - ${interest || "enquiry"}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<table cellpadding="6" style="font-family:sans-serif;font-size:15px">${rows
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table><p>Hit reply to answer ${esc(name)} directly.</p>`,
    });
  } catch (e) {
    console.error("Lead email failed", e);
    return NextResponse.json({ error: "Couldn't send right now. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

"use client";
import { useState } from "react";
import { INTERESTS } from "@/lib/config";

export default function LeadForm({
  source,
  heading = "Need this built for your business?",
  blurb = "Tell me what you're trying to automate. I'll reply personally and we can book a short call.",
  defaultInterest = "",
  extra = "",
}: {
  source: string;
  heading?: string;
  blurb?: string;
  defaultInterest?: string;
  extra?: string; // e.g. calculator results to include with the message
}) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const booking = process.env.NEXT_PUBLIC_BOOKING_URL;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const f = new FormData(e.currentTarget);
    const message = [String(f.get("message") || ""), extra].filter(Boolean).join("\n\n");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.get("name"), email: f.get("email"), company: f.get("company"),
          interest: f.get("interest"), website: f.get("website"), message,
          source: source + (typeof window !== "undefined" ? ` (${window.location.pathname})` : ""),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setState("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="callout" role="status">
        <h3>Thanks, got it.</h3>
        <p className="msg-ok">I'll email you shortly to set up a call.</p>
        {booking && (
          <p>
            Want to skip the wait? <a href={booking} target="_blank" rel="noopener">Pick a time that suits you</a>.
          </p>
        )}
      </div>
    );
  }

  return (
    <section className="callout" aria-labelledby={`lf-${source}`}>
      <h3 id={`lf-${source}`}>{heading}</h3>
      <p style={{ margin: 0 }}>{blurb}</p>
      <form className="lead" onSubmit={onSubmit}>
        <div className="two">
          <label>Name<input name="name" required maxLength={120} autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required maxLength={200} autoComplete="email" /></label>
        </div>
        <div className="two">
          <label>Company (optional)<input name="company" maxLength={160} autoComplete="organization" /></label>
          <label>
            I'm interested in
            <select name="interest" defaultValue={defaultInterest}>
              <option value="">Select...</option>
              {INTERESTS.map((i) => <option key={i}>{i}</option>)}
            </select>
          </label>
        </div>
        <label>What do you want to automate or build?<textarea name="message" rows={4} maxLength={4000} /></label>
        <div className="hp" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
        <div className="row" style={{ alignItems: "center" }}>
          <button className="btn" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Get in touch"}</button>
          {booking && <a className="btn ghost" href={booking} target="_blank" rel="noopener">Book a call directly</a>}
        </div>
        {state === "error" && <p className="msg-bad" role="alert">{error}</p>}
      </form>
    </section>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";

const OPTIONS = [
  { label: "Automation", note: "Workflows, RPA and integrations that remove the copy-paste." },
  { label: "AI agents", note: "Assistants and agents that read, decide and act, with approvals." },
  { label: "Custom software", note: "CRMs and internal tools shaped around how you work." },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  return (
    <section className="lhero" aria-labelledby="hero-title">
      <p className="eyebrow">Data With Sachin — automation, AI agents &amp; custom software</p>
      <h1 id="hero-title">Less busywork. More shipped work.</h1>
      <p className="sub">
        Automations, AI agents and custom software for your business —<span className="br" aria-hidden="true" />{" "}
        built for teams who care about reliability as much as speed.
      </p>
      <Link href="/contact" className="btn big">
        Book a free consult
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </Link>
      <div className="dock">
        <p className="seg-caption" aria-live="polite">{OPTIONS[active].note}</p>
        <div className="seg" role="group" aria-label="What I build">
          {OPTIONS.map((o, i) => (
            <button key={o.label} type="button" aria-pressed={active === i} onClick={() => setActive(i)}>{o.label}</button>
          ))}
        </div>
        <Link href="/contact" className="info" aria-label="Ask a question">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
        </Link>
      </div>
    </section>
  );
}

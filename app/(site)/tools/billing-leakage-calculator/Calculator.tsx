"use client";
import { useState } from "react";
import LeadForm from "@/components/LeadForm";

const num = (v: string) => Math.max(0, parseFloat(v) || 0);

export default function Calculator() {
  const [people, setPeople] = useState("5");
  const [mins, setMins] = useState("30");
  const [rate, setRate] = useState("200");
  const [real, setReal] = useState("85");
  const [days, setDays] = useState("220");
  const [cur, setCur] = useState("$");

  const perDay = (num(mins) / 60) * num(rate) * (Math.min(num(real), 100) / 100);
  const yearly = perDay * num(days) * num(people);
  const recoverable = yearly / 2;
  const fmt = (n: number) => `${cur}${Math.round(n).toLocaleString()}`;

  const summary = `Billing leakage inputs: ${people} fee earners, ${mins} unrecorded min/day, ${cur}${rate}/hr, ${real}% realisation, ${days} days/yr.\nResult: ~${fmt(yearly)}/yr leakage (~${fmt(recoverable)} if half is recovered).`;

  const field = (label: string, v: string, set: (s: string) => void) => (
    <label>{label}<input type="number" min="0" step="1" inputMode="decimal" value={v} onChange={(e) => set(e.target.value)} /></label>
  );

  return (
    <>
      <div className="tool-box">
        <form className="lead" onSubmit={(e) => e.preventDefault()}>
          <div className="two">{field("Fee earners", people, setPeople)}{field("Unrecorded minutes per person per day", mins, setMins)}</div>
          <div className="two">{field("Average hourly billing rate", rate, setRate)}{field("Realisation rate (%)", real, setReal)}</div>
          <div className="two">
            {field("Working days per year", days, setDays)}
            <label>Currency
              <select value={cur} onChange={(e) => setCur(e.target.value)}>
                <option>$</option><option>£</option><option>€</option><option>₹</option>
              </select>
            </label>
          </div>
        </form>
        <hr style={{ border: 0, borderTop: "1px solid var(--line)", margin: "20px 0" }} />
        <div aria-live="polite">
          <p className="meta" style={{ margin: 0 }}>Estimated annual billing leakage</p>
          <p className="result">{fmt(yearly)}</p>
          <p style={{ margin: 0 }}>Recovering even half of it would be worth about <b>{fmt(recoverable)}</b> a year.</p>
        </div>
      </div>
      <LeadForm
        source="tool:billing-leakage"
        heading="Want to plug the leak?"
        blurb="I can set up automatic time capture, unbilled-time alerts and draft invoices around the system you already use."
        defaultInterest="Legal software (CRM, intake, matter management, billing)"
        extra={summary}
      />
    </>
  );
}

"use client";
import { useState } from "react";
import LeadForm from "@/components/LeadForm";

const num = (v: string) => Math.max(0, parseFloat(v) || 0);

export default function Calculator() {
  const [tasks, setTasks] = useState("100");
  const [mins, setMins] = useState("10");
  const [rate, setRate] = useState("20");
  const [pct, setPct] = useState("70");
  const [cost, setCost] = useState("3000");
  const [cur, setCur] = useState("$");

  const hoursYear = (num(tasks) * num(mins) * 52) / 60;
  const saved = hoursYear * Math.min(num(pct), 100) / 100;
  const savings = saved * num(rate);
  const monthly = savings / 12;
  const payback = monthly > 0 ? num(cost) / monthly : null;
  const fmt = (n: number) => `${cur}${Math.round(n).toLocaleString()}`;

  const summary = `ROI calculator inputs: ${tasks} tasks/week x ${mins} min, ${cur}${rate}/hr, ${pct}% automatable, build budget ${cur}${cost}.\nResult: ${Math.round(saved)} hrs/yr saved, ${fmt(savings)}/yr, payback ${payback ? payback.toFixed(1) + " months" : "n/a"}.`;

  const field = (label: string, v: string, set: (s: string) => void, step = "1") => (
    <label>{label}<input type="number" min="0" step={step} inputMode="decimal" value={v} onChange={(e) => set(e.target.value)} /></label>
  );

  return (
    <>
      <div className="tool-box">
        <form className="lead" onSubmit={(e) => e.preventDefault()}>
          <div className="two">
            {field("Tasks per week", tasks, setTasks)}
            {field("Minutes per task", mins, setMins)}
          </div>
          <div className="two">
            {field("Fully loaded hourly cost", rate, setRate)}
            {field("% you can automate", pct, setPct)}
          </div>
          <div className="two">
            {field("Build / setup budget", cost, setCost)}
            <label>Currency
              <select value={cur} onChange={(e) => setCur(e.target.value)}>
                <option>$</option><option>₹</option><option>€</option><option>£</option>
              </select>
            </label>
          </div>
        </form>
        <hr style={{ border: 0, borderTop: "1px solid var(--line)", margin: "20px 0" }} />
        <div aria-live="polite">
          <p className="meta" style={{ margin: 0 }}>Estimated annual savings</p>
          <p className="result">{fmt(savings)}</p>
          <p style={{ margin: 0 }}>
            <b>{Math.round(saved).toLocaleString()}</b> hours/year freed up ·{" "}
            payback in <b>{payback === null ? "n/a" : payback < 1 ? "under a month" : `${payback.toFixed(1)} months`}</b>
          </p>
        </div>
      </div>
      <LeadForm
        source="tool:roi-calculator"
        heading="Want me to build it?"
        blurb="Send me this estimate and I'll tell you what a realistic build looks like."
        defaultInterest="Process / workflow automation"
        extra={summary}
      />
    </>
  );
}

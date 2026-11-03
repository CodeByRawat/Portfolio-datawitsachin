"use client";
import { useState } from "react";
import LeadForm from "@/components/LeadForm";

const QUESTIONS = [
  "The process runs at least weekly.",
  "The steps are mostly the same every time.",
  "The inputs are digital (email, files, forms, web apps), not paper.",
  "Decisions follow clear rules a new hire could learn in a day.",
  "It touches 2+ systems and someone copies data between them.",
  "Errors in this process are costly or embarrassing.",
  "More than one person spends real time on it each week.",
  "The systems involved have APIs or stable screens.",
  "Someone owns the process and can explain it end to end.",
  "Volume is growing, or you're hiring just to keep up with it.",
];

export default function Checker() {
  const [ans, setAns] = useState<Record<number, boolean>>({});
  const [done, setDone] = useState(false);
  const score = Object.values(ans).filter(Boolean).length;
  const verdict =
    score >= 8 ? "Strong candidate. Automate this first." :
    score >= 5 ? "Promising. Tighten up the rules or inputs, then automate." :
    "Not yet. Standardise the process first; automating chaos just makes it faster.";

  return (
    <>
      <div className="tool-box">
        {QUESTIONS.map((q, i) => (
          <fieldset key={i} className="q" style={{ border: 0, padding: 0, margin: "18px 0" }}>
            <legend style={{ fontWeight: 600, padding: 0, marginBottom: 6 }}>{i + 1}. {q}</legend>
            <div className="row">
              {[true, false].map((v) => (
                <label key={String(v)}>
                  <input type="radio" name={`q${i}`} checked={ans[i] === v} onChange={() => setAns({ ...ans, [i]: v })} />
                  {v ? "Yes" : "No"}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <button className="btn" onClick={() => setDone(true)} disabled={Object.keys(ans).length < QUESTIONS.length}>Show my score</button>
        {Object.keys(ans).length < QUESTIONS.length && <span className="meta"> Answer all 10 to continue.</span>}
        {done && (
          <div aria-live="polite" style={{ marginTop: 20 }}>
            <p className="result">{score} / 10</p>
            <p><b>{verdict}</b></p>
          </div>
        )}
      </div>
      {done && (
        <LeadForm
          source="tool:automation-readiness"
          heading="Let's look at this process together"
          blurb="Describe it and I'll tell you what I'd automate and how."
          defaultInterest="Process / workflow automation"
          extra={`Readiness score: ${score}/10 (${verdict})`}
        />
      )}
    </>
  );
}

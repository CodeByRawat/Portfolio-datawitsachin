import type { Metadata } from "next";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Automation ROI calculator",
  description: "Free calculator: estimate hours saved, annual savings and payback period for automating a business process.",
  alternates: { canonical: "/tools/roi-calculator" },
};

export default function Page() {
  return (
    <div className="narrow">
      <div className="hero" style={{ paddingBottom: 16 }}>
        <h1 style={{ maxWidth: "none" }}>Automation ROI calculator</h1>
        <p className="lead">Plug in a repetitive process and see whether automating it pays off, and how fast.</p>
      </div>
      <Calculator />
      <article className="post">
        <h2>How the numbers work</h2>
        <p>
          Time spent per year = tasks per week × minutes per task × 52. Time saved = that figure × the share you expect to automate.
          Savings = hours saved × fully loaded hourly cost. Payback = build cost ÷ monthly savings. It's deliberately simple, so use
          conservative inputs: a 60-70% automation rate is realistic for most rule-based work, since exceptions still need a human.
        </p>
      </article>
    </div>
  );
}

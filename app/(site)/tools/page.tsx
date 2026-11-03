import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free automation tools",
  description: "Free calculators and checklists to size up an automation project before you spend a rupee or a dollar.",
  alternates: { canonical: "/tools" },
};

export default function Tools() {
  return (
    <div className="wrap">
      <div className="hero" style={{ paddingBottom: 8 }}>
        <h1 style={{ maxWidth: "none" }}>Free automation tools</h1>
        <p className="lead">Quick checks that run in your browser. No signup needed.</p>
      </div>
      <div className="grid">
        <Link className="card" href="/tools/roi-calculator"><h3>Automation ROI calculator</h3><p>Hours saved, annual savings and payback period.</p></Link>
        <Link className="card" href="/tools/automation-readiness"><h3>Automation readiness check</h3><p>Is this process a good candidate for automation?</p></Link>
        <Link className="card" href="/tools/billing-leakage-calculator"><h3>Law firm billing leakage calculator</h3><p>Estimate revenue lost to unrecorded time.</p></Link>
      </div>
    </div>
  );
}

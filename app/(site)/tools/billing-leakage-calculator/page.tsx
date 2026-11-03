import type { Metadata } from "next";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Law firm billing leakage calculator",
  description: "Free calculator: estimate how much revenue a law firm loses each year to unrecorded or unbilled time.",
  alternates: { canonical: "/tools/billing-leakage-calculator" },
};

export default function Page() {
  return (
    <div className="narrow">
      <div className="hero" style={{ paddingBottom: 16 }}>
        <h1 style={{ maxWidth: "none" }}>Law firm billing leakage calculator</h1>
        <p className="lead">Small gaps in time capture add up. See what they could be costing your firm each year.</p>
      </div>
      <Calculator />
      <article className="post">
        <h2>How the numbers work</h2>
        <p>
          Leakage per fee earner per day = unrecorded minutes ÷ 60 × billing rate × your realisation rate (the share of recorded time you
          actually collect). Multiplied by working days and fee earners, that's your annual figure. Fixing, say, half of it is often
          realistic with better time capture. This is an estimate, not an audit: use your own honest numbers.
        </p>
      </article>
    </div>
  );
}

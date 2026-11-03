import type { Metadata } from "next";
import Checker from "./Checker";

export const metadata: Metadata = {
  title: "Automation readiness check",
  description: "Free 10-question check to find out whether a business process is a good candidate for automation or RPA.",
  alternates: { canonical: "/tools/automation-readiness" },
};

export default function Page() {
  return (
    <div className="narrow">
      <div className="hero" style={{ paddingBottom: 16 }}>
        <h1 style={{ maxWidth: "none" }}>Automation readiness check</h1>
        <p className="lead">Answer for one specific process. You'll get a score and what to do next.</p>
      </div>
      <Checker />
    </div>
  );
}

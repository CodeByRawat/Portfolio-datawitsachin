import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Work with me",
  description: "Tell me what you want to automate or build. Custom automation, AI agents, CRMs and internal software.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <div className="narrow">
      <div className="hero" style={{ paddingBottom: 0 }}>
        <h1 style={{ maxWidth: "none" }}>Let's build it.</h1>
        <p className="lead">Share a few lines about the problem. I'll reply personally, usually within a day, to set up a call.</p>
      </div>
      <LeadForm source="contact" heading="Tell me about your project" blurb="No pitch deck needed. Messy is fine." />
    </div>
  );
}

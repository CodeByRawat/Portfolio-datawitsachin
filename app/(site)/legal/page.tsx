import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Legal tech: software and automation for law firms",
  description: "Guides and custom-built software for law firms: legal CRM, intake, matter management, billing, document automation and AI.",
  alternates: { canonical: "/legal" },
};

export default function Legal() {
  const posts = getAllPosts().filter((p) => p.category === "legal");
  return (
    <div className="wrap">
      <div className="hero" style={{ paddingBottom: 8 }}>
        <h1 style={{ maxWidth: "none" }}>Software and automation for law firms</h1>
        <p className="lead">
          Practice management, legal CRM, intake, billing, document automation and AI, explained plainly. When off-the-shelf software
          doesn't fit how your firm works, I build the missing pieces.
        </p>
        <div className="row">
          <Link href="/contact" className="btn">Book a free consult</Link>
          <Link href="/tools/billing-leakage-calculator" className="btn ghost">Check your billing leakage</Link>
        </div>
      </div>
      <h2 className="sec">Guides for legal teams</h2>
      <div className="grid">
        {posts.map((p) => (
          <Link key={p.slug} className="card" href={`/blog/${p.slug}`}><h3>{p.title}</h3><p>{p.description}</p></Link>
        ))}
      </div>
      <div className="narrow" style={{ padding: 0, marginTop: 48 }}>
        <LeadForm
          source="legal"
          heading="Tell me how your firm works"
          blurb="Intake, matters, billing, documents: tell me where the friction is and I'll suggest buy, build or automate."
          defaultInterest="Legal software (CRM, intake, matter management, billing)"
        />
      </div>
    </div>
  );
}

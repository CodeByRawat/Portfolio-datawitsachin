import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  const posts = getAllPosts();
  return (
    <>
      <Hero />

      <div className="wrap below">
        <h2 className="sec" id="services">What I build</h2>
        <div className="grid">
          <div className="card"><h3>Workflow &amp; process automation</h3><p>Replace copy-paste, email chasing and spreadsheet handoffs with reliable automated flows.</p></div>
          <div className="card"><h3>AI agents &amp; assistants</h3><p>Agents that read, decide and act inside your tools, with humans in the loop where it matters.</p></div>
          <div className="card"><h3>Custom software &amp; CRM</h3><p>Purpose-built internal tools and CRMs shaped around how you actually work.</p></div>
          <Link className="card" href="/legal"><h3>Legal tech for law firms</h3><p>CRM, intake, matter management, billing and document automation built around your practice.</p></Link>
          <div className="card"><h3>Document &amp; claims automation</h3><p>Extraction, validation and routing for insurance, finance and operations paperwork.</p></div>
        </div>

        <h2 className="sec">Free tools</h2>
        <div className="grid">
          <Link className="card" href="/tools/roi-calculator"><h3>Automation ROI calculator</h3><p>See hours saved, annual savings and payback period for a process you want to automate.</p></Link>
          <Link className="card" href="/tools/billing-leakage-calculator"><h3>Law firm billing leakage calculator</h3><p>See what unrecorded time costs a firm each year.</p></Link>
          <Link className="card" href="/tools/automation-readiness"><h3>Automation readiness check</h3><p>Ten quick questions to find out if a process is a good automation candidate.</p></Link>
        </div>

        <h2 className="sec">Guides</h2>
        <div className="grid">
          {posts.slice(0, 6).map((p) => (
            <Link key={p.slug} className="card" href={`/blog/${p.slug}`}><h3>{p.title}</h3><p>{p.description}</p></Link>
          ))}
        </div>
        <p><Link href="/blog">All guides →</Link></p>

        <div className="narrow" style={{ padding: 0, marginTop: 48 }}>
          <LeadForm source="home" />
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Automation & AI guides",
  description: "Plain-English guides to RPA, intelligent automation, AI agents, workflow tools and claims automation.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getAllPosts();
  return (
    <div className="wrap">
      <div className="hero" style={{ paddingBottom: 8 }}>
        <h1 style={{ maxWidth: "none" }}>Automation &amp; AI guides</h1>
        <p className="lead">Practical, no-fluff explanations from someone who builds this stuff.</p>
      </div>
      <div className="grid">
        {posts.map((p) => (
          <Link key={p.slug} className="card" href={`/blog/${p.slug}`}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p className="meta" style={{ marginTop: 8 }}>{p.readingMinutes} min read</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

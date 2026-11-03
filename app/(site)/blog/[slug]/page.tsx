import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";
import { SITE } from "@/lib/config";
import LeadForm from "@/components/LeadForm";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);
  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
      author: { "@type": "Person", name: "Sachin Rawat" },
    },
  ];
  if (post.faq.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }

  return (
    <div className="narrow">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article className="post">
        <p className="meta" style={{ marginTop: 28 }}><Link href="/blog">← All guides</Link></p>
        <h1>{post.title}</h1>
        <p className="meta">{post.readingMinutes} min read · Updated {post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        {post.tool && (
          <div className="callout">
            <h3>Try the free tool</h3>
            <p><Link href={post.tool.href}>{post.tool.label} →</Link></p>
          </div>
        )}

        {post.faq.length > 0 && (
          <section className="faq">
            <h2>Frequently asked questions</h2>
            {post.faq.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </section>
        )}
      </article>

      <LeadForm source={`blog:${post.slug}`} />

      <h2 className="sec" style={{ fontSize: 20 }}>Keep reading</h2>
      <div className="grid">
        {related.map((p) => (
          <Link key={p.slug} className="card" href={`/blog/${p.slug}`}><h3>{p.title}</h3></Link>
        ))}
      </div>
    </div>
  );
}

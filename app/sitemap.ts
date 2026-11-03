import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/blog", "/tools", "/tools/roi-calculator", "/tools/automation-readiness", "/tools/billing-leakage-calculator", "/legal", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7 })),
    ...getAllPosts().map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: p.date, priority: 0.8 })),
  ];
}

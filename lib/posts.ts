import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content");

export type Faq = { q: string; a: string };
export type Post = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  category: string;
  date: string;
  tool?: { href: string; label: string };
  faq: Faq[];
  html: string;
  readingMinutes: number;
};

function load(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).length;
  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title,
    description: data.description,
    keyword: data.keyword,
    category: data.category ?? "automation",
    date: String(data.date).slice(0, 10),
    tool: data.tool,
    faq: data.faq ?? [],
    html: marked.parse(content, { async: false }) as string,
    readingMinutes: Math.max(2, Math.round(words / 220)),
  };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(load)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  const file = `${slug}.md`;
  return fs.existsSync(path.join(DIR, file)) ? load(file) : undefined;
}

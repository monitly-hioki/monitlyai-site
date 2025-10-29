import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type NewsItem = {
  date: string;
  title: string;
  slug: string;
  summary: string;
  label?: string;
  body?: string;
};

const NEWS_DIR = path.join(process.cwd(), "content/news");

function toLabel(data: any): string | undefined {
  if (data.label) return String(data.label);
  if (Array.isArray(data.tags) && data.tags.length > 0) return String(data.tags[0]);
  return undefined;
}

export async function getSortedNews(): Promise<NewsItem[]> {
  const files = await fs.readdir(NEWS_DIR);
  const mdFiles = files.filter((f) => f.toLowerCase().endsWith(".md"));

  const items = await Promise.all(
    mdFiles.map(async (f) => {
      const raw = await fs.readFile(path.join(NEWS_DIR, f), "utf8");
      const { data, content } = matter(raw);
      const rawSlug = String(((data as any).slug ?? f));
const slug = rawSlug
  .replace(/\.md$/i, "")
  .replace(/^\d{4}-\d{2}-\d{2}-/, "");

      return {
        date: String((data as any).date),
        title: String((data as any).title),
        slug,
        summary: String((data as any).summary ?? ""),
        label: toLabel(data),
        body: content.trim(),
      } as NewsItem;
    })
  );

  return items.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

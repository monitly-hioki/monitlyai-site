import MarkdownIt from "markdown-it";
import { notFound } from "next/navigation";
import { getSortedNews } from "../data";
import type { Metadata } from "next";
import Script from "next/script";

const md = new MarkdownIt({ html: false, linkify: true, breaks: true });

// 本番URLを .env から参照（なければ既定値）
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://monitlyai-site.vercel.app";

export async function generateStaticParams() {
  const items = await getSortedNews();
  return items.map((i) => ({ slug: i.slug }));
}

// ページ固有のメタデータ（canonical / OG / Twitter）
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const items = await getSortedNews();
  const item = items.find((i) => i.slug === params.slug);
  if (!item) return {};

  const url = `${SITE_URL}/news/${item.slug}`;
  const title = `${item.title} | Monitly.AI`;
  const description = item.summary || item.title;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [{ url: `${SITE_URL}/og/og-default.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og/og-default.jpg`],
    },
  };
}

export default async function NewsPost({ params }: { params: { slug: string } }) {
  const items = await getSortedNews();
  const item = items.find((i) => i.slug === params.slug);
  if (!item) notFound();

  const html = item.body ? md.render(item.body) : "";
  const url = `${SITE_URL}/news/${item.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary || item.title,
    datePublished: item.date,
    dateModified: item.date,
    mainEntityOfPage: url,
    url,
    author: { "@type": "Organization", name: "Monitly.AI" },
    publisher: {
      "@type": "Organization",
      name: "Monitly.AI",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/og/og-default.jpg` },
    },
  };

  return (
    <main className="px-6 md:px-10 py-14 bg-white text-zinc-800">
      {/* 構造化データ */}
      <Script
        id="news-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto">
        <p className="text-xs text-zinc-500">
          {new Date(item.date).toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" })}
        </p>
        <h1 className="mt-2 text-3xl font-semibold">{item.title}</h1>
        {item.summary && <p className="mt-4 text-zinc-700">{item.summary}</p>}
        <div
          className="mt-8 prose prose-zinc max-w-none leading-relaxed
                     prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl
                     prose-a:text-blue-600 hover:prose-a:text-blue-800
                     prose-img:rounded-xl prose-img:my-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}

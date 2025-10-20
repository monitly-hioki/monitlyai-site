import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getSortedNews } from "../data";

function fmt(d: string) {
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export default async function NewsDetail({ params }: { params: { slug: string } }) {
  const news = await getSortedNews();
  const item = news.find((n) => n.slug === params.slug);
  if (!item) return notFound();

  return (
    <main className="min-h-screen px-6 md:px-10 py-16 bg-white">
      <article className="max-w-3xl mx-auto">
        <time className="text-sm text-gray-500">{fmt(item.date)}</time>
        {item.label && <div className="text-xs text-blue-600 mt-1">{item.label}</div>}
        <h1 className="text-3xl md:text-4xl font-semibold mt-2">{item.title}</h1>

        <div className="prose prose-neutral md:prose-lg mt-6 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {item.body || item.summary}
          </ReactMarkdown>
        </div>

        <div className="mt-10">
          <Link href="/news" className="text-blue-600">お知らせ一覧に戻る</Link>
        </div>
      </article>
    </main>
  );
}

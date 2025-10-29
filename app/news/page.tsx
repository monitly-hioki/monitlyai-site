import Link from "next/link";
import { getSortedNews, type NewsItem } from "./data";

export const metadata = {
  title: "お知らせ | Monitly.AI",
  description: "Monitly.AI の最新情報・リリース・登壇などのお知らせ一覧。",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export default async function NewsIndexPage() {
  const items: NewsItem[] = await getSortedNews();

  return (
    <main className="px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold">お知らせ</h1>
        <ul className="mt-10 space-y-4">
          {items.map((n) => (
            <li key={n.slug} className="rounded-2xl border p-5 hover:shadow-sm transition">
              <Link href={`/news/${n.slug}`} className="block">
                <div className="text-sm text-zinc-500">{formatDate(n.date)}</div>
                <h2 className="mt-1 text-xl font-medium">{n.title}</h2>
                {n.summary ? (
                  <p className="mt-2 text-zinc-700 line-clamp-2">{n.summary}</p>
                ) : null}
                {n.label ? (
                  <span className="inline-block mt-3 text-xs px-2 py-1 rounded bg-zinc-100">
                    {n.label}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

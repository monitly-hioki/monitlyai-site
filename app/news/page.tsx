import Link from "next/link";
import { getSortedNews } from "./data";

function fmt(d: string) {
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export default async function NewsPage() {
  const news = await getSortedNews();
  const latest = news.slice(0, 3);
  const rest = news.slice(3);

  return (
    <main className="min-h-screen px-6 md:px-10 py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold">お知らせ</h1>
        <p className="mt-3 text-gray-600">最新ニュース・出展情報・機能アップデート。</p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">最新情報</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {latest.map((n) => (
              <article key={n.slug} className="rounded-2xl border bg-white p-5">
                <time className="text-sm text-gray-500">{fmt(n.date)}</time>
                {n.label && <div className="text-xs text-blue-600 mt-1">{n.label}</div>}
                <h3 className="mt-2 font-medium">
                  <Link href={`/news/${n.slug}`}>{n.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-gray-600">{n.summary}</p>
                <Link href={`/news/${n.slug}`} className="mt-3 inline-block text-blue-600 text-sm">
                  続きを読む →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {rest.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-3">過去のお知らせ</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {rest.map((n) => (
                <article key={n.slug} className="rounded-2xl border bg-white p-5">
                  <time className="text-sm text-gray-500">{fmt(n.date)}</time>
                  {n.label && <div className="text-xs text-blue-600 mt-1">{n.label}</div>}
                  <h3 className="mt-2 font-medium">
                    <Link href={`/news/${n.slug}`}>{n.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{n.summary}</p>
                  <Link href={`/news/${n.slug}`} className="mt-3 inline-block text-blue-600 text-sm">
                    続きを読む →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

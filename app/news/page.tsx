import Link from "next/link";
import { NEWS } from "./_list";
export default function Page() {
  const items = [...NEWS];
  return (
    <main className="min-h-screen">
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold">お知らせ</h1>
          <div className="mt-8 space-y-4">
            {items.map(n => (
              <article key={n.slug} className="p-5 border rounded-2xl bg-gray-50 hover:bg-gray-100 transition">
                <div className="text-sm text-gray-500">{new Date(n.date).toLocaleDateString("ja-JP")}</div>
                <h2 className="mt-1 text-xl font-medium">
                  <Link href={`/news/${n.slug}`} className="hover:underline">{n.title}</Link>
                </h2>
                {n.excerpt && <p className="mt-2 text-sm text-gray-700">{n.excerpt}</p>}
                <div className="mt-3 text-sm text-blue-600 underline">
                  <Link href={`/news/${n.slug}`}>続きを読む</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

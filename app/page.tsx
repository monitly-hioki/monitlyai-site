import Image from "next/image";
import Link from "next/link";
import { getSortedNews } from "./news/data";

function fmt(d: string) {
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export default async function Page() {
  const news = await getSortedNews();
  const latest = news.slice(0, 3);

  return (
    <main className="min-h-screen">
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">生成AIの「運用評価」を標準化し、改善を加速する</h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Monitly.AI は、RAG・AIエージェントの出力品質を継続的に評価し、チームで改善を回すための LLMOps プラットフォームです。
            日本語UI・監査対応・オンプレ運用にも対応。PoC から本番まで一貫して活用できます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/product" className="px-5 py-3 rounded-xl bg-black text-white">製品を見る</Link>
            <Link href="/contact" className="px-5 py-3 rounded-xl border">デモを依頼</Link>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image src="/screens/ops-dashboard.png" alt="運用ダッシュボード" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">運用ダッシュボード（品質・コスト・応答速度を監視）</figcaption>
            </figure>
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image src="/screens/improvement-history.png" alt="改善履歴" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">改善履歴（構成変更と結果を時系列に追跡）</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Monitly の特徴</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">現場に根ざした評価設計</h3>
              <p className="mt-2 text-sm text-gray-600">SME レビューと自動指標を組み合わせ、属人的な評価を仕組み化します。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">RAG／エージェントに最適化</h3>
              <p className="mt-2 text-sm text-gray-600">構成差分・Retriever 設定・応答コストを比較し、改善ポイントを特定します。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">日本企業の運用要件に対応</h3>
              <p className="mt-2 text-sm text-gray-600">SaaS／オンプレ両対応。データ保護・ログ監査・権限管理にも対応します。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-semibold">お知らせ</h2>
            <Link href="/news" className="text-sm text-blue-600">すべて見る →</Link>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {latest.map(n => (
              <article key={n.slug} className="relative p-5 border rounded-2xl bg-white hover:shadow-sm">
                <Link href={`/news/${n.slug}`} className="absolute inset-0" />
                <time className="text-sm text-gray-500">{fmt(n.date)}</time>
                <h3 className="mt-2 font-medium">{n.title}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{n.summary}</p>
                <span className="mt-3 inline-block text-blue-600 text-sm">続きを読む →</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

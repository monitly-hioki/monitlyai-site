import Image from "next/image";
import Link from "next/link";
import { getSortedNews } from "./news/data";

function fmt(d: string) {
  const dt = new Date(d);
  return `${dt.getFullYear()}.${String(dt.getMonth() + 1).padStart(2, "0")}.${String(dt.getDate()).padStart(2, "0")}`;
}

export default async function Page() {
  const news = await getSortedNews();
  const latest = news.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            生成AIの「運用評価」を標準化し、改善を加速する
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Monitly.AI は、RAG・AIエージェントの出力品質を継続的に評価し、改善サイクルをチームで回すためのLLMOpsプラットフォームです。
            日本語UI・監査対応・オンプレ運用にも対応。PoCから本番運用まで一貫して活用できます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/product" className="px-5 py-3 rounded-xl bg-black text-white">
              製品を見る
            </Link>
            <Link href="/contact" className="px-5 py-3 rounded-xl border">
              デモを依頼
            </Link>
          </div>

          {/* スクリーンショット */}
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

      {/* Monitlyの特徴 */}
      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Monitlyの特徴</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">現場に根ざした評価設計</h3>
              <p className="mt-2 text-sm text-gray-600">SMEレビューと自動指標を組み合わせ、属人的な評価を仕組み化します。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">RAG／エージェントに最適化</h3>
              <p className="mt-2 text-sm text-gray-600">構成差分・Retriever設定・応答コストを比較し、改善ポイントを特定。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">日本企業の運用要件に対応</h3>
              <p className="mt-2 text-sm text-gray-600">SaaS／オンプレ両対応。データ保護・ログ監査・権限管理も万全です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 機能概要 */}
      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">主な機能</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-5 text-gray-700">
            <li className="p-5 rounded-xl border bg-white">構成比較（プロンプト／Retriever／データソース）</li>
            <li className="p-5 rounded-xl border bg-white">ログ収集と再現検証（事象ごとに原因分析）</li>
            <li className="p-5 rounded-xl border bg-white">SMEレビュー統合と承認ワークフロー</li>
            <li className="p-5 rounded-xl border bg-white">運用ダッシュボードと改善履歴の可視化</li>
          </ul>
          <div className="mt-8">
            <Link href="/product" className="px-5 py-3 rounded-xl bg-black text-white">
              詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* 最新情報 */}
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

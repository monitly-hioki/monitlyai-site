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
      <section className="px-6 md:px-10 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            生成AIの「運用評価」を標準化し、改善を加速する
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Monitly.AI は、RAG・AIエージェントの出力品質を継続的に評価し、チームで改善を回すための LLMOps プラットフォームです。
            日本語UI／日本企業の運用要件に最適化。PoCから本番まで一貫してご利用いただけます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow transition hover:opacity-90">
              デモを見る
            </Link>
            <Link href="/product" className="px-5 py-3 rounded-xl border">製品を見る</Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">導入支援</Link>
          </div>

          {/* Hero Screens */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/assets/v1/ops-dashboard.png" fill alt="運用ダッシュボード" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                運用ダッシュボード（品質・コスト・応答速度・アラート）
              </figcaption>
            </figure>
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/assets/v1/improvement-history.png" fill alt="改善履歴" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                改善履歴（変更と結果を時系列で可視化）
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Why Monitly */}
      <section className="px-6 md:px-10 py-14 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Monitly（モニトリー）が選ばれる理由</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">評価を“現場の標準”に</h3>
              <p className="mt-2 text-sm text-gray-600">
                自動指標・レビュー・ログを統合し、属人的な評価を脱却。再現可能な改善サイクルを定着させます。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">RAG／エージェント特化</h3>
              <p className="mt-2 text-sm text-gray-600">
                Retriever設定・プロンプト差分・データ更新効果を比較し、実運用に即した品質改善を実現します。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">日本の運用要件に対応</h3>
              <p className="mt-2 text-sm text-gray-600">
                日本語UI、監査ログ、データ保管要件に対応。SaaS／オンプレ両方で柔軟に運用可能です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Digest */}
      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">主な機能</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            構成比較・ログ検証・レビュー統合・運用モニタリングなど、生成AIの品質改善に必要なすべての機能を統合。
            チーム全員で“改善を回す”文化をサポートします。
          </p>
          <div className="mt-8">
            <Link href="/product" className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow transition hover:opacity-90">
              詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">最新のお知らせ</h2>
            <Link href="/news" className="text-sm text-blue-600">すべて見る →</Link>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {latest.map((n) => (
              <article key={n.slug} className="group relative rounded-2xl border bg-white p-5 hover:shadow-sm transition">
                <Link href={`/news/${n.slug}`} aria-label={`${n.title} を読む`} className="absolute inset-0" />
                <time className="text-sm text-gray-500" dateTime={n.date}>{fmt(n.date)}</time>
                {n.label && (
                  <div className="text-xs inline-block mt-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                    {n.label}
                  </div>
                )}
                <h3 className="mt-2 font-medium pr-6">{n.title}</h3>
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

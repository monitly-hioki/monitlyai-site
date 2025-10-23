import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getSortedNews } from "./news/data";

function fmt(d: string) {
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

function NewsSkeleton() {
  return (
    <div className="mt-6 grid md:grid-cols-3 gap-5">
      {[0,1,2].map(i => (
        <div key={i} className="rounded-2xl border bg-white p-5 animate-pulse">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="mt-2 h-3 w-16 bg-gray-200 rounded" />
          <div className="mt-3 h-5 w-3/4 bg-gray-200 rounded" />
          <div className="mt-2 h-4 w-full bg-gray-200 rounded" />
          <div className="mt-2 h-4 w-5/6 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}

async function LatestNewsListInner() {
  const latest = (await getSortedNews()).slice(0, 3);

  return (
    <div className="mt-6 grid md:grid-cols-3 gap-5">
      {latest.map(n => (
        <article key={n.slug} className="group relative rounded-2xl border bg-white p-5 hover:shadow-sm transition">
          <Link href={`/news/${n.slug}`} aria-label={`${n.title} を読む`} className="absolute inset-0" />
          <time className="text-sm text-gray-500" dateTime={n.date}>{fmt(n.date)}</time>
          {n.label && <div className="text-xs inline-block mt-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{n.label}</div>}
          <h3 className="mt-2 font-medium pr-6">{n.title}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{n.summary}</p>
          <span className="mt-3 inline-block text-blue-600 text-sm">続きを読む →</span>
        </article>
      ))}
      {latest.length < 3 &&
        Array.from({ length: 3 - latest.length }).map((_, i) => (
          <div key={`ph-${i}`} aria-hidden className="rounded-2xl border bg-gray-50 p-5" />
        ))
      }
    </div>
  );
}

function LatestNewsSection() {
  return (
    <section className="px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">最新のお知らせ</h2>
          <Link href="/news" className="text-sm text-blue-600">すべて見る →</Link>
        </div>
        <Suspense fallback={<NewsSkeleton />}>
          <LatestNewsListInner />
        </Suspense>
      </div>
    </section>
  );
}

export default async function Page() {
  await getSortedNews();
  return (
    <main className="min-h-screen">
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
            <Link href="/contact" className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-black to-gray-700">デモを見る</Link>
            <Link href="/product" className="px-5 py-3 rounded-xl border">製品を見る</Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">導入支援</Link>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/ops-dashboard.png" fill alt="運用ダッシュボード" className="object-cover hidden md:block" />
                <div className="md:hidden h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">運用ダッシュボード（品質・コスト・応答速度・アラート）</figcaption>
            </figure>
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/improvement-history.png" fill alt="精度改善履歴" className="object-cover hidden md:block" />
                <div className="md:hidden h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">精度改善履歴（変更と結果を時系列に追跡）</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Monitly が選ばれる理由</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">評価を“現場の標準”に</h3>
              <p className="mt-2 text-sm text-gray-600">SMEレビュー・自動指標・ログ管理を統合。属人的な評価を脱却し、再現可能な改善サイクルを定着させます。</p>
            </div>
            <div className="p-5 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">RAG/エージェント特化</h3>
              <p className="mt-2 text-sm text-gray-600">プロンプト差分・Retriever設定・データ更新の効果を横並び比較。実運用の“使われ方”に効く評価ができます。</p>
            </div>
            <div className="p-5 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">日本の運用要件に適合</h3>
              <p className="mt-2 text-sm text-gray-600">日本語UI、監査ログ、データ保管に配慮。SaaS／オンプレ両対応で、社内ポリシーや規制要件にも柔軟に適合します。</p>
            </div>
          </div>
        </div>
      </section>

      
      <LatestNewsSection />

          </main>
  );
}

// app/page.tsx
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
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            生成AIの「運用評価」を標準化し、改善を加速する
          </h1>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Monitly.AI は、RAG・AIエージェントの出力品質を継続的に評価し、チームで改善を回すための LLMOps プラットフォームです。
            日本語UI・権限/監査・オンプレにも対応。PoC から本番まで、手戻りなく評価知見を引き継げます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/product" className="px-5 py-3 rounded-xl bg-black text-white">製品を見る</Link>
            <Link href="/contact" className="px-5 py-3 rounded-xl border">デモを依頼</Link>
          </div>

          {/* 実例スクリーンショット（2枚のみ） */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/screens/ops-dashboard.png"
                  alt="運用ダッシュボード"
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                運用ダッシュボード：品質・コスト・応答速度・アラートをひと目で把握し、異常と改善効果を追跡できます。
              </figcaption>
            </figure>
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src="/screens/improvement-history.png"
                  alt="改善履歴"
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                改善履歴：プロンプト/Retriever/データ更新などの変更と、精度・速度・コストの結果を時系列に記録します。
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 特徴（導入時の意思決定に必要な情報を厚めに） */}
      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Monitly の特徴</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">現場で継続できる評価運用</h3>
              <p className="mt-2 text-sm text-gray-700">
                SME レビュー（業務有識者）と自動指標を統合。テンプレ化したケースと承認フローで、担当が変わっても評価の質を維持できます。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">RAG／エージェントに最適化</h3>
              <p className="mt-2 text-sm text-gray-700">
                プロンプト差分・Retriever 設定・コーパス更新の効果を横並び比較。ログから“繰り返し起きる失敗”を束ね、再現→修正→検証まで最短化。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">日本企業の運用要件に適合</h3>
              <p className="mt-2 text-sm text-gray-700">
                SaaS／専用VPC／オンプレに対応。SSO・ロール権限・監査ログ・データ保管方針に配慮し、情報システム部門の審査も通しやすくします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 最新ニュース（3件） */}
      <section className="px-6 md:px-10 py-16 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-semibold">お知らせ</h2>
            <Link href="/news" className="text-sm text-blue-600">すべて見る →</Link>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {latest.map((n) => (
              <article key={n.slug} className="relative p-5 border rounded-2xl bg-white hover:shadow-sm">
                <Link href={`/news/${n.slug}`} className="absolute inset-0" aria-label={`${n.title} を読む`} />
                <time className="text-sm text-gray-500">{fmt(n.date)}</time>
                {n.label && (
                  <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 align-middle">
                    {n.label}
                  </span>
                )}
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

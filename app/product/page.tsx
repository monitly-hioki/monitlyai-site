import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold">製品概要</h1>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Monitly.AI は、生成AIの出力を継続的に評価・改善するための LLMOps プラットフォームです。
            PoC段階から本番運用まで、チーム全体での改善サイクルを定着させます。
          </p>
        </div>
      </section>

      {/* 運用サイクル */}
      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Monitlyの運用サイクル</h2>
          <p className="mt-3 text-gray-600">
            「データ取得 → 検証 → 評価 → 改善 → 運用」を一つの流れとして管理し、継続的な品質向上を支援します。
          </p>
          <div className="mt-6 rounded-2xl border bg-white p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image src="/screens/monitly-cycle.png" alt="Monitlyの運用サイクル" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* 機能詳細 */}
      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">主な機能</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">構成比較</h3>
              <p className="mt-2 text-sm text-gray-600">プロンプト・Retriever・データソースなど構成単位で比較し、精度やコストへの影響を可視化。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">ログ分析と再現検証</h3>
              <p className="mt-2 text-sm text-gray-600">本番ログを取り込み、類似パターンをグルーピング。事象単位で再現検証が可能。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">SMEレビュー統合</h3>
              <p className="mt-2 text-sm text-gray-600">有識者のレビュー結果をスコア化。自動指標と組み合わせた承認ワークフローを提供。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">改善履歴とダッシュボード</h3>
              <p className="mt-2 text-sm text-gray-600">改善結果を時系列で追跡し、品質・コスト・速度などKPIを一元的に監視。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 画面イメージ */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">画面イメージ</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { src: "/screens/compare-ui.png", caption: "構成比較画面" },
              { src: "/screens/review-workflow.png", caption: "レビュー・承認画面" },
              { src: "/screens/perfomance-ui.png", caption: "性能・指標ビュー" },
            ].map((img) => (
              <figure key={img.src} className="rounded-2xl border bg-white p-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <Image src={img.src} alt={img.caption} fill className="object-cover" />
                </div>
                <figcaption className="mt-3 text-sm text-gray-600">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 導入形態 */}
      <section className="px-6 md:px-10 py-16 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">導入形態</h2>
          <p className="mt-3 text-gray-600">SaaS・VPC・オンプレミスなど、要件に合わせた柔軟な構成を選択可能です。</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">SaaS</h3>
              <p className="mt-2 text-sm text-gray-600">環境構築不要。最短1日で利用開始できます。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">専用VPC</h3>
              <p className="mt-2 text-sm text-gray-600">自社クラウド上での独立運用。アクセス制御・監査ログ対応。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">オンプレミス</h3>
              <p className="mt-2 text-sm text-gray-600">閉域ネットワーク・オフライン環境でも運用可能。</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

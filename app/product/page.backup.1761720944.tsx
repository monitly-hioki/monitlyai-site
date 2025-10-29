import React from "react";

export default function ProductPage() {
  return (
    <main className="bg-white text-zinc-800">
      {/* Hero */}
      <section className="px-6 md:px-10 pt-10 pb-20 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            生成AIを「測り」「良くし」「守る」
          </h1>
          <p className="mt-6 text-zinc-600 text-lg leading-relaxed">
            Monitlyは、RAG・AIエージェント・LLM運用の品質を継続的に評価・改善する
            <br className="hidden md:block" />
            日本企業向けの運用評価プラットフォームです。
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="px-6 md:px-10 py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto space-y-16">
          {[
            { img: "/product/dashboard-ui.png", title: "統合ダッシュボード", text: "開発・運用・評価のデータを一元管理。チーム全体の状態をリアルタイムで把握します。" },
            { img: "/product/performance-ui.png", title: "品質・性能のモニタリング", text: "回答精度・レイテンシ・評価スコアを自動収集。品質劣化を即時に検出します。" },
            { img: "/product/compare-ui.png", title: "構成比較・A/Bテスト", text: "複数プロンプト・モデル・RAG構成を定量比較。改善効果を可視化します。" },
            { img: "/product/review-workflow.png", title: "レビュー・評価ワークフロー", text: "SMEレビューをシステム化し、属人的な判断を排除。客観的な品質基準を確立します。" },
            { img: "/product/ops-alerts.png", title: "運用監視・アラート通知", text: "本番中の出力を常時監視し、異常や逸脱を早期検知。安定したサービス提供を支えます。" },
            { img: "/product/improvement-history.png", title: "改善履歴の追跡・分析", text: "改善結果と影響を履歴として保存。過去との比較で継続的な最適化を可能にします。" }
          ].map((f, i) => (
            <div key={i} className="md:grid md:grid-cols-2 gap-10 items-center">
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={f.img}
                  alt={f.title}
                  className="rounded-2xl shadow-md ring-1 ring-zinc-200 w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{f.title}</h3>
                <p className="mt-4 text-zinc-700 leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">導入メリット</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200">
              <h3 className="text-lg font-semibold">開発から運用までを一気通貫</h3>
              <p className="mt-2 text-zinc-700">
                プロンプト・構成・評価結果を統合。開発と運用をシームレスに接続します。
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200">
              <h3 className="text-lg font-semibold">品質とスピードの両立</h3>
              <p className="mt-2 text-zinc-700">
                比較検証を自動化し、変更の効果を定量的に可視化。改善のサイクルを高速化します。
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200">
              <h3 className="text-lg font-semibold">日本企業の運用要件に最適</h3>
              <p className="mt-2 text-zinc-700">
                SaaS・オンプレミス（オンプレ）の両提供。社内規程・セキュリティ監査にも対応。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Use Cases */}
      <section className="px-6 md:px-10 py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">セキュリティと提供形態</h2>
            <ul className="mt-6 space-y-2 text-zinc-700 list-disc list-inside">
              <li>国内リージョンでの暗号化・分離運用</li>
              <li>アクセス制御・権限管理・監査ログを標準実装</li>
              <li>SaaSおよびオンプレミス（オンプレ）に対応</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">主なユースケース</h2>
            <ul className="mt-6 space-y-2 text-zinc-700 list-disc list-inside">
              <li>社内QA・ナレッジ検索</li>
              <li>ドキュメントレビュー・問い合わせ対応</li>
              <li>AIエージェントの評価・継続改善</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">FAQ</h2>
          <ul className="mt-6">
            <li className="py-3 border-b">
              <p className="font-medium">既存のAIシステムと連携できますか？</p>
              <p className="text-sm text-zinc-600 mt-1">
                LangChain、LlamaIndex、OpenAI API、主要ベクトルDBなどと連携可能です。
              </p>
            </li>
            <li className="py-3 border-b">
              <p className="font-medium">導入開始までの期間は？</p>
              <p className="text-sm text-zinc-600 mt-1">
                要件により異なりますが、最短2週間から利用開始可能です。
              </p>
            </li>
            <li className="py-3 border-b">
              <p className="font-medium">自社データの安全性は確保されていますか？</p>
              <p className="text-sm text-zinc-600 mt-1">
                暗号化・分離・権限管理・監査ログにより保護。オンプレミス環境にも対応します。
              </p>
            </li>
          </ul>
          <div className="mt-10 text-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-xl text-sm font-medium"
            >
              デモ・相談を申し込む
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

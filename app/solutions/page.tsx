// app/solutions/page.tsx
import Link from "next/link";

export const metadata = {
  title: "ソリューション｜Monitly.AI",
  description:
    "生成AI導入から運用までを一気通貫で支援。データ整備・データ基盤構築、RAG/AIエージェントの評価運用、パートナー協業による開発・導入支援。",
  alternates: { canonical: "https://monitlyai-site.vercel.app/solutions" },
};

export default function SolutionsPage() {
  return (
    <main className="bg-white text-zinc-800">
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-zinc-50 to-white text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            生成AI導入から運用改善まで、
            <br className="hidden md:block" />
            一貫したパートナーシップを。
          </h1>
          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            Monitly.AIは、単なるSaaSではなく、
            <br className="hidden md:block" />
            「生成AIを現場で運用できる状態」に導く総合ソリューションを提供します。
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">支援ソリューション領域</h2>
          <p className="mt-4 text-center text-zinc-600">
            データ整備からAI評価運用まで、導入段階に応じた最適なアプローチを提案します。
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "データ基盤構築・整備支援",
                desc: "社内文書・ナレッジ・FAQを活用できる状態へ。収集、正規化、品質検証、ガバナンスまで一気通貫で設計・実装します。",
              },
              {
                title: "生成AIシステム開発・PoC",
                desc: "要件に応じたRAG/AIエージェントを設計・実装。評価指標を定義し、短サイクルで改善する前提でPoCを進めます。",
              },
              {
                title: "SaaSによる運用評価・改善",
                desc: "本番稼働後の出力品質・コスト・パフォーマンスを可視化。劣化検知とA/B比較で継続的な最適化を行います。",
              },
            ].map((s) => (
              <div key={s.title} className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white shadow-sm">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-zinc-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">データ基盤の構築</h2>
          <p className="mt-4 text-center text-zinc-600">
            生成AIの成果はデータ基盤で決まります。要件に合わせ、拡張性・運用性・セキュリティを両立した実装を提供します。
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold">収集・連携</h3>
              <p className="mt-2 text-zinc-700">社内DMS、グーグルドライブ、シェアポイント、グループウェア、チケット、CRM、S3等からの取り込み。差分同期・版管理・権限継承を設計。</p>
            </div>
            <div className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold">前処理・正規化</h3>
              <p className="mt-2 text-zinc-700">テキスト化、分割戦略、レイアウト保持、メタデータ付与。評価可能なデータ粒度へ正規化します。</p>
            </div>
            <div className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold">検索・埋め込み</h3>
              <p className="mt-2 text-zinc-700">VectorDB選定、埋め込みモデル、再検索戦略、ランキング。精度とコストのバランスを最適化。</p>
            </div>
            <div className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold">ガバナンス</h3>
              <p className="mt-2 text-zinc-700">分類・保持ポリシー、PII対策、監査ログ、キー管理。権限・ネットワーク分離やオンプレ運用にも対応。</p>
            </div>
            <div className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold">運用オペレーション</h3>
              <p className="mt-2 text-zinc-700">バッチ/ストリーミング更新、品質監視、回帰検知。モデル・プロンプトのバージョニングとロールバック。</p>
            </div>
            <div className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white shadow-sm">
              <h3 className="text-lg font-semibold">Monitly連携</h3>
              <p className="mt-2 text-zinc-700">計測ポイント、評価ログ、A/B比較を標準化。SaaSと基盤を接続し、改善サイクルを自動化します。</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="inline-block px-6 py-3 bg-black text-white rounded-xl text-sm font-medium">
              データ基盤構築を相談する
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">用途別ソリューション</h2>
          <p className="mt-4 text-center text-zinc-600">Monitly.AIを活用し、現場運用の定着と改善を実現します。</p>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { tag: "社内ナレッジ検索", title: "ドキュメントから最適回答を抽出", effect: "属人化した情報検索を自動化し、社内の即応性を高めます。" },
              { tag: "レビュー支援", title: "文書レビューを半自動化", effect: "基準テンプレに基づくAIレビューで抜け漏れを防ぎ、品質を均一化。" },
              { tag: "問い合わせ対応", title: "一次対応AIの評価と改善", effect: "精度・安全性・再現性を継続的にモニタリングし、品質を維持します。" },
              { tag: "横断エージェント運用", title: "部門横断タスクを自律実行", effect: "各エージェントの連携動作を評価・最適化します。" },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white shadow-sm">
                <div className="text-xs inline-flex px-2 py-1 bg-zinc-100 rounded">{c.tag}</div>
                <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-zinc-700">{c.effect}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">生成AIベンダーとの協業提供</h2>
          <p className="mt-4 text-zinc-600">
            LLMベンダー、SI、クラウド事業者と連携し、
            戦略立案から実装・運用までワンストップで支援します。
          </p>
          <div className="mt-10">
            <Link href="/partners" className="px-6 py-3 bg-black text-white rounded-xl text-sm font-medium">
              パートナープログラムを見る
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 bg-gradient-to-t from-zinc-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">自社の生成AI活用をどう進めるか、まずはご相談ください。</h2>
          <div className="mt-8">
            <Link href="/contact" className="px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-zinc-800">
              導入・支援の相談をする
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

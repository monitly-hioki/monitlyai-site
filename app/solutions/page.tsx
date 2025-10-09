import Container from "@/components/Container";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="py-16 md:py-24 bg-white text-neutral-800">
      <Container>
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ソリューション</h1>
        <p className="text-neutral-600 max-w-3xl">
          Monitly.AIは、生成AIの「評価・比較・運用改善」を中核に、導入前後の意思決定を加速させます。
          本ページでは<strong>導入パターン</strong>、<strong>ユースケース</strong>、<strong>導入プロセス</strong>、<strong>パートナー連携</strong>を具体的に示します。
        </p>

        {/* 導入パターン（比較） */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">導入パターン（3つの選択肢）</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "A. Monitly単体（評価SaaS）",
                desc: "既存のRAG/エージェントやLLM運用に、評価・監視・比較を追加。",
                points: ["ログ連携だけで開始", "精度/コスト/レイテンシの一元可視化", "A/B/多腕比較とSMEレビュー"],
                cta: { href: "/contact", label: "PoCを相談" },
              },
              {
                title: "B. パートナー経由導入",
                desc: "RAG/エージェントの構築はパートナー、評価はMonitlyで一体運用。",
                points: ["要件定義〜実装まで一気通貫", "Monitly連携で改善サイクルを標準化", "特別条件の組込提供に対応"],
                cta: { href: "/partners", label: "パートナープログラム" },
              },
              {
                title: "C. ローカルLLM導入（オンプレ）",
                desc: "社内/閉域でモデルを運用し、評価はMonitlyで実施（Air-gappedに配慮）。",
                points: ["機密データ対応", "モデル・プロンプト最適化", "評価ログの匿名化/最小化設計"],
                cta: { href: "/contact", label: "相談する" },
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold">{card.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{card.desc}</p>
                <ul className="mt-3 text-sm space-y-1 list-disc list-inside">
                  {card.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                <Link href={card.cta.href} className="inline-block mt-4 text-[#0056FF] font-semibold">
                  {card.cta.label} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ユースケース（重複回避して深掘り） */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">ユースケース（改善観点を具体化）</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "カスタマーサポート自動応答",
                kpi: ["解決率↑", "平均応答時間↓", "逸脱応答率↓"],
                desc: "FAQ/RAGの評価テンプレとしきい値通知で、品質劣化を先手で検知。",
              },
              {
                title: "社内ナレッジRAG",
                kpi: ["正答率↑", "引用妥当性↑", "コスト/req↓"],
                desc: "Retriever/Prompt/モデル差分を構成単位で比較、改善履歴を知見化。",
              },
              {
                title: "販売・提案支援エージェント",
                kpi: ["受注率↑", "提案リードタイム↓"],
                desc: "SMEレビュー（合議）をフロー化。人手評価と自動評価を同一指標化。",
              },
              {
                title: "オンプレLLM（機密ドメイン）",
                kpi: ["漏洩リスク回避", "監査容易性↑"],
                desc: "閉域での推論＋匿名化ログで評価。運用監査ログを自動でトレーサブルに。",
              },
            ].map((u, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">{u.title}</div>
                <div className="text-xs text-neutral-500 mt-1">改善KPI: {u.kpi.join(" / ")}</div>
                <p className="mt-3 text-sm text-neutral-700">{u.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 機能マップ（TOPと被らない粒度） */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">機能マップ（運用を仕組み化）</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["構成比較", "Retriever/Prompt/Model/Index/Paramsを構成IDで管理し、A/B/多腕で差分を数値化。"],
              ["SMEレビュー統合", "評価観点テンプレ＋合議ワークフロー。人手評価と自動評価の指標を統一。"],
              ["本番監視", "品質・コスト・レイテンシをダッシュボードで一元監視。しきい値通知に対応。"],
              ["改善履歴", "誰が何を変え、どう良くなったかを時系列で可視化。因果メモをナレッジ化。"],
              ["データ連携", "SDK/API/Webhookでイベント連携。匿名化/マスキング/タグ付けに対応。"],
              ["監査・再現性", "評価条件・バージョン・モデル差分を記録し、再現可能な検証を標準化。"],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">{t}</div>
                <p className="mt-2 text-sm text-neutral-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 導入プロセス（責任分界も明示） */}
        <section className="mt-16 bg-[#F7F9FA] rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">導入プロセス（2〜8週間目安）</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["1. 現状診断", "ログ/要件の棚卸し・KPI仮説合意（Monitly）"],
              ["2. 設計", "評価観点/比較計画を設計（Monitly）"],
              ["3. 実装", "RAG/Agent構築（パートナー）＋評価連携（Monitly）"],
              ["4. 本番運用", "ダッシュボード運用・月次レビュー（Monitly/貴社/パートナー）"],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-neutral-500">Step {i + 1}</div>
                <div className="mt-1 font-semibold">{t}</div>
                <p className="mt-2 text-sm text-neutral-700">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            ※ RAG/エージェントの構築自体は原則パートナーが担当。Monitlyは評価・改善基盤を提供。ローカルLLM導入はMonitlyで対応可能。
          </p>
        </section>

        {/* パートナー連携（詳細は /partners ） */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-3">パートナー連携による導入加速</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            RAG/エージェント導入はパートナーと共創し、Monitlyで継続改善を回します。
            パートナー向けには<strong>特別条件での組込提供（Embedded/OEM）</strong>にも対応しています。
          </p>
          <Link
            href="/partners"
            className="inline-block mt-4 bg-[#0056FF] text-white px-6 py-3 rounded-xl font-semibold"
          >
            パートナープログラムを見る →
          </Link>
        </section>

        {/* CTA */}
        <section className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="font-semibold">PoC相談（無料）</div>
            <p className="mt-2 text-neutral-600 text-sm">評価テンプレとログ連携で、最短2週間の効果検証。</p>
            <Link href="/contact" className="inline-block mt-3 text-[#0056FF] font-semibold">お問い合わせ →</Link>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="font-semibold">パートナーとして協業</div>
            <p className="mt-2 text-neutral-600 text-sm">RAG/Agent構築やOEM組込で共に市場を拡大。</p>
            <Link href="/partners" className="inline-block mt-3 text-[#0056FF] font-semibold">詳細を見る →</Link>
          </div>
        </section>
      </Container>
    </main>
  );
}

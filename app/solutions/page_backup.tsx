import Section from "@/components/Section";
import Container from "@/components/Container";

type Sol = { title: string; lead: string; bullets: string[]; ctaHref: string; cta: string; };
const solutions: Sol[] = [
  { title: "RAG評価ソリューション", lead: "Retriever / Index / Prompt / Model を構成単位で比較し、精度・コスト・レイテンシを同一指標で可視化。",
    bullets: ["構成比較（A/B/多腕）：Recall/Precision/Hit@k を自動集計","データ起因エラーの特定：ドキュメント粒度での貢献度/リーク検知","専門担当者レビュー統合：評価テンプレ＋合議フローで“人の判断”を仕組み化"], ctaHref: "/product", cta: "製品機能を見る →" },
  { title: "AIエージェント運用ソリューション", lead: "ツール使用ログ、分岐、失敗理由を可視化。成功条件を定義し、再現可能な運用へ。",
    bullets: ["ツール呼び出しトレース：成功/失敗と前後関係を時系列で可視化","成功条件（SLO）定義：業務KPIに直結する閾値とアラート","改善ループ：失敗パターン→対策のナレッジ化、リグレッション防止"], ctaHref: "/company", cta: "会社情報 →" },
  { title: "エンタープライズ対応", lead: "セキュリティ要件・運用統制に合わせた導入。オンプレ/プライベートネットワークにも対応。",
    bullets: ["監査ログ・アクセス制御（RBAC）・IP制限・SAML","データ分離保管・保持期間ポリシー・バックアップ手順","PoC→段階移行：評価設計→SLO定義→本番運用"], ctaHref: "/security", cta: "セキュリティ方針 →" },
];
export default function SolutionsPage() {
  return (<>
    <section className="bg-gradient-to-b from-[#EAF2FF] to-white py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">ソリューション — 測る、比べる、運用する。</h1>
            <p className="mt-5 text-lg text-neutral-600 max-w-xl">目的は「改善の再現性」。RAG評価・エージェント運用・エンタープライズ導入の3軸で、属人的な運用を数字で正す。</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center rounded-2xl bg-[#0056FF] text-white px-5 py-3 font-semibold">相談する</a>
              <a href="/product" className="inline-flex items-center rounded-2xl border border-[#0056FF] text-[#0056FF] bg-white px-5 py-3 font-semibold">製品を見る</a>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="h-[260px] grid place-items-center text-neutral-500">アーキテクチャ概念図（差し替え）</div>
          </div>
        </div>
      </Container>
    </section>
    <Section title="Monitly.AIが提供する3つの解決策" bg="soft">
      <div className="grid md:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="text-xl font-semibold">{s.title}</div>
            <p className="mt-2 text-neutral-600 text-sm">{s.lead}</p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5">{s.bullets.map((b, bi) => <li key={bi}>{b}</li>)}</ul>
            <a href={s.ctaHref} className="mt-4 inline-block text-[#0056FF] font-semibold">{s.cta}</a>
          </div>
        ))}
      </div>
    </Section>
  </>); }

import Section from "@/components/Section";
import Container from "@/components/Container";
import Image from "next/image";

export default function ProductPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#EAF2FF] to-white py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                製品 — 測れる運用で、検索統合AI（RAG)/Agentを強くする。
              </h1>
              <p className="mt-5 text-lg text-neutral-600 max-w-xl">
                精度・コスト・レイテンシを同一指標で継続監視。パターン比較と専門担当者レビューを仕組み化し、
                「なぜ良くなったか」を再現できる状態にする。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center rounded-2xl bg-[#0056FF] text-white px-5 py-3 font-semibold">デモを見る</a>
                <a href="/solutions" className="inline-flex items-center rounded-2xl border border-[#0056FF] text-[#0056FF] bg-white px-5 py-3 font-semibold">ユースケース</a>
              </div>
            </div>
            <div className="relative">
              <Image src="/dashboard.png" alt="Dashboard" width={800} height={480} className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 w-56 border border-neutral-200">
                <div className="text-sm text-neutral-500">Accuracy</div>
                <div className="text-2xl font-bold">92%</div>
                <div className="text-xs text-green-600">+5% vs last</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 w-56 border border-neutral-200">
                <div className="text-sm text-neutral-500">Latency</div>
                <div className="text-2xl font-bold">-12%</div>
                <div className="text-xs text-green-600">improved</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="コア機能">
        <div className="space-y-12">
          {[
            ["パターン比較（A/B/複数パターン比較）", "Retriever / Prompt / Index / Model / Parameters を構成単位で比較。差分を数値化。"],
            ["専門担当者レビュー統合", "テンプレ化した評価観点＋合議ワークフロー。人手評価を仕組みに組み込む。"],
            ["本番監視（KPIダッシュボード（結果可視化)）", "品質・コスト・レイテンシを1画面で。閾値通知・インシデント注記に対応。"],
            ["改善履歴と因果メモ", "誰が何を変えてどう良くなったかを時系列で可視化。再現可能な知見として蓄積。"],
          ].map(([t, d], i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-8 items-start ${i % 2 ? "md:grid-flow-dense" : ""}`}>
              <div className={`${i % 2 ? "md:order-2" : ""}`}>
                <h3 className="text-2xl font-semibold">{t}</h3>
                <p className="mt-3 text-neutral-600">{d}</p>
              </div>
              <div className={`${i % 2 ? "md:order-1" : ""}`}>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow">
                  <div className="h-[240px] w-full rounded-lg bg-[#F7F9FA] grid place-items-center text-neutral-500 text-sm">
                    機能スクリーンショット（差し替え）
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

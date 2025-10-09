"use client";

import Section from "@/components/Section";
import Container from "@/components/Container";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EAF2FF] to-white py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                製品 — 測れる運用で、RAG/Agentを強くする。
              </h1>
              <p className="mt-5 text-lg text-neutral-600 max-w-xl">
                精度・コスト・レイテンシを<strong>同一指標</strong>で継続監視。構成比較とSMEレビューを仕組み化し、
                「なぜ良くなったか」を再現できる状態にする。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center rounded-2xl bg-[#0056FF] text-white px-5 py-3 font-semibold">
                  デモを見る
                </a>
                <a href="/contact" className="inline-flex items-center rounded-2xl border border-[#0056FF] text-[#0056FF] bg-white px-5 py-3 font-semibold">
                  PoCを相談
                </a>
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

      {/* 現状の課題 */}
      <Section title="現状の課題" bg="soft">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["属人的な運用", "プロンプトやデータの変更が記録・比較されず、再現性が低い。"],
            ["指標の不統一", "精度/コスト/レイテンシが別管理で、意思決定が遅い。"],
            ["本番のブラックボックス化", "失敗事例やSMEレビューが改善サイクルに戻らない。"],
          ].map(([t, d], i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">{t}</div>
              <p className="mt-2 text-neutral-600 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* コア機能 */}
      <Section title="コア機能">
        <div className="space-y-12">
          {[
            ["構成比較（A/B/多腕）", "Retriever / Prompt / Index / Model / Parameters を構成単位で比較。差分を数値化。"],
            ["SMEレビュー統合", "テンプレ化した評価観点＋合議ワークフロー。人手評価を仕組み化。"],
            ["本番監視（KPIダッシュボード）", "品質・コスト・レイテンシを1画面で。閾値通知・インシデント注記に対応。"],
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

      {/* データモデル */}
      <Section title="データモデル（イベント定義）" bg="soft">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <p className="text-neutral-600 text-sm">
            各リクエストを「Event」として記録：<strong>query</strong> / <strong>response</strong> / <strong>context</strong> / <strong>latency</strong> /
            <strong>cost</strong> / <strong>scores</strong>（複数指標） / <strong>variant</strong>（構成ID） / <strong>tags</strong>（ユースケース） など。
            これにより、構成比較・SMEレビュー・本番監視が同一データで回る。
          </p>
        </div>
      </Section>{/* 導入フロー */}
      <Section title="導入フロー" bg="soft2">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["現状評価（1〜2週）", "既存データの取り込み・KPI仮説の合意形成"],
            ["改善サイクル設計（2〜4週）", "評価テンプレ・SMEフロー・A/B計画の確立"],
            ["本番運用へ移行", "閾値設定・通知・月次レビューによる継続改善"],
          ].map(([t, d], i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-neutral-500">Step {i + 1}</div>
              <div className="mt-1 text-lg font-semibold">{t}</div>
              <p className="mt-2 text-neutral-600 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section title="まずはPoCから">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="font-semibold">PoCプラン（無料〜）</div>
            <p className="mt-2 text-neutral-600 text-sm">
              1〜2ヶ月の短期検証。評価設計とレポート込み。意思決定に必要な数字を揃える。
            </p>
            <a href="/contact" className="mt-3 inline-block text-[#0056FF] font-semibold">お問い合わせ →</a>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="font-semibold">商談・PoC相談</div>
            <p className="mt-2 text-neutral-600 text-sm">ユースケースを共有いただければ、最短ルートでセットアップする。</p>
            <a href="/contact" className="mt-3 inline-block text-[#0056FF] font-semibold">デモ予約 →</a>
          </div>
        </div>
      </Section>
    </>
  );
}

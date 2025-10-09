import Container from "@/components/Container";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="bg-white text-neutral-800">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EAF2FF] to-white py-16 md:py-24">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            生成AIの成果を、評価の仕組みで継続的に高める。
          </h1>
          <p className="mt-4 text-neutral-600 max-w-3xl">
            Monitly.AIは、生成AIの“結果を改善し続ける”ための<strong>評価プラットフォーム</strong>です。
モデルやプロンプトを変える前に「何が良く、何が課題か」を見える化し、
導入後の成果を<strong>定量的に</strong>高めます。
          </p>

          {/* 提供形態（プロダクト主導を明示） */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-neutral-500">提供の中心</div>
              <div className="mt-1 font-semibold">Monitlyプロダクト（SaaS）</div>
              <p className="mt-2 text-sm text-neutral-700">
                精度・コスト・レイテンシを一元管理。構成比較、SMEレビュー、本番監視に対応。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-neutral-500">開始方法</div>
              <div className="mt-1 font-semibold">一気通貫 もしくは フェーズ単位</div>
              <p className="mt-2 text-sm text-neutral-700">
                全体導入に加え、<strong>「評価だけ先に」</strong>など部分導入から着手可能。既存RAG/エージェントにも後付けできます。
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-neutral-500">実装パートナー</div>
              <div className="mt-1 font-semibold">必要に応じて連携</div>
              <p className="mt-2 text-sm text-neutral-700">
                RAG/エージェントの構築はパートナーと協業可能。<strong>評価は常にMonitlyが中核</strong>です。
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-2xl bg-[#0056FF] text-white px-6 py-3 font-semibold">
              PoC相談をする
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-2xl border border-[#0056FF] text-[#0056FF] bg-white px-6 py-3 font-semibold">
              資料を請求する
            </Link>
          </div>

          {/* 1文で“両方可”を宣言 */}
          <p className="mt-4 text-sm text-neutral-500">
            ※ Monitly.AIは、導入準備から運用改善までを一気通貫で支援します。すでに導入済みの企業も、評価・改善フェーズだけを切り出して導入可能です。
          </p>
        </Container>
      </section>

      {/* フェーズ1：導入準備と基盤整備（用語は平易に） */}
      <section className="py-16 md:py-24 bg-[#F7F9FA]">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">フェーズ1｜導入準備と基盤整備</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">
            初期の躓きは多くが「データの散在」と「評価軸の不在」です。まずはAIが使える土台を整えます。
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ["データの整理と設計", "社内文書・FAQ・ナレッジを整理し、検索されやすい形へ。"],
              ["評価軸の明確化", "精度/自然さ/一貫性/コスト/応答速度など、測る基準を決める。"],
              ["プロンプト改善の設計", "評価→改善→再評価の流れを仕組み化し、再現可能に。"],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">{t}</div>
                <p className="mt-2 text-sm text-neutral-700">{d}</p>
                <p className="mt-3 text-xs text-neutral-500">※ このフェーズのみの支援から開始可能です。</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-block mt-6 text-[#0056FF] font-semibold">
            無料相談で現状を診断 →
          </Link>
        </Container>
      </section>

      {/* フェーズ2：実装と導入支援（パートナー連携） */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">フェーズ2｜実装と導入支援（パートナー連携）</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">
            RAG/エージェントの構築は、貴社チームまたはパートナーと連携して実施。Monitlyの評価を前提設計に組み込みます。
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ["RAG・エージェント導入", "要件定義〜実装までを並走。導入時点から評価連携。"],
              ["ローカルLLM対応", "機密要件に応じてオンプレ/閉域構成を支援。"],
              ["評価を中核に", "モデル/プロンプト/検索の比較検証を前提に設計。"],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">{t}</div>
                <p className="mt-2 text-sm text-neutral-700">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500">※ 実装はパートナー連携可。Monitlyは評価プラットフォームを提供し続けます。</p>
          <Link href="/partners" className="inline-block mt-6 text-[#0056FF] font-semibold">
            パートナープログラムを見る →
          </Link>
        </Container>
      </section>

      {/* フェーズ3：運用と継続的な改善（プロダクトのコア） */}
      <section className="py-16 md:py-24 bg-[#F7F9FA]">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">フェーズ3｜運用と継続的な改善（Monitlyの中核）</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">
            導入して終わりにしない。Monitlyのダッシュボードで、日々の結果を測り、最適な構成に更新し続けます。
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ["構成比較とA/B/多腕", "モデル・プロンプト・Retriever等を構成IDで比較し、差分を数値化。"],
              ["SMEレビュー統合", "専門家/チーム評価を仕組み化。人手評価と自動評価の指標を統一。"],
              ["本番監視とアラート", "品質・コスト・レイテンシを1画面で監視し、劣化兆候を検知。"],
              ["改善履歴と因果メモ", "誰が何を変え、どう良くなったかを時系列で可視化。"],
              ["データ連携と匿名化", "SDK/API/Webhookで柔軟に連携。匿名化・マスキングに対応。"],
              ["再現性・監査", "評価条件・バージョン・差分を記録し、いつでも再現・説明可能に。"],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">{t}</div>
                <p className="mt-2 text-sm text-neutral-700">{d}</p>
                {i===0 && <p className="mt-3 text-xs text-neutral-500">※ 他社構築のRAG/エージェントにも後付け可能です。</p>}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-2xl bg-[#0056FF] text-white px-6 py-3 font-semibold">
              運用改善のデモを見る
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-2xl border border-[#0056FF] text-[#0056FF] bg-white px-6 py-3 font-semibold">
              PoCから始める
            </Link>
          </div>
        </Container>
      </section>

      {/* Closing CTA（受託感を避けつつ、プロダクト中心で締め） */}
      <section className="bg-[#0056FF] text-white py-16 md:py-20">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">「評価がある導入」で、成果を出し続ける。</h2>
          <p className="mt-3 text-neutral-100 max-w-3xl">
            Monitly.AIは、成果を上げるための“導入後を支える評価基盤”です。
現状を共有いただければ、貴社の課題とゴールに最適な導入ステップをご提案します。
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-2xl bg-white text-[#0056FF] px-6 py-3 font-semibold">
              無料相談
            </Link>
            <Link href="/partners" className="inline-flex items-center rounded-2xl border border-white text-white px-6 py-3 font-semibold">
              協業・OEMの相談
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

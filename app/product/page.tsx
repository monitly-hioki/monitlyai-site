// app/product/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            評価を中心に据えた、生成AI運用の新しいワークフロー
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            Monitlyは、RAG／AIエージェントの精度・コスト・応答速度を可視化し、改善サイクルを自動化する
            LLMOpsプラットフォームです。<br />
            開発と運用の間に生じる“属人化・再現性欠如・改善遅延”を解消し、
            チームで継続的に品質を高める仕組みを提供します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">
              デモのご相談
            </Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">
              導入事例を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 全体構成イメージ */}
      <section className="px-6 md:px-10 py-16 bg-white border-t">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Monitlyが描く運用サイクル</h2>
          <p className="mt-4 text-gray-600">
            「データ取得 → 検証 → 評価 → 改善 → 運用」を1つの循環フローとして捉え、
            チーム単位での継続的学習（Continuous Evaluation）を可能にします。
          </p>
          <div className="relative mt-10 aspect-[16/8] rounded-2xl overflow-hidden border bg-gray-50 flex items-center justify-center">
            <Image
              src="/screens/perfomance-ui.png"
              alt="運用サイクル図"
              fill
              className="object-contain opacity-90"
            />
          </div>
        </div>
      </section>

      {/* コア機能 */}
      <section className="px-6 md:px-10 py-20 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">コア機能</h2>
          <div className="mt-10 space-y-12">
            <div>
              <h3 className="text-xl font-medium">① 構成比較と実験トラッキング</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                プロンプト・Retriever・データソースのバリエーションを統一フォーマットで比較。
                精度・コスト・速度を同一条件下で検証でき、再現性のあるベンチマークを構築します。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">② 本番ログの収集と再現検証</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                運用中のログを自動収集し、再現テストを即時生成。
                発生頻度・失敗傾向・改善後効果を時系列で追跡し、継続的な検証基盤を提供します。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">③ SMEレビューと自動評価の融合</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                有識者（SME）のレビュー結果をスコア化し、BLEU・ROUGE・GPT Judgeなどの自動評価と組み合わせ。
                人とAIの判断を融合させた「説明可能な評価」を実現します。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">④ ダッシュボードと改善履歴の可視化</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                各構成の精度・コスト・応答速度・網羅率を時系列でトラッキング。
                改善施策の効果を可視化し、意思決定に必要なKPIをダッシュボード上で俯瞰できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* アーキテクチャ */}
      <section className="px-6 md:px-10 py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">アーキテクチャ概要</h2>
          <p className="mt-4 text-gray-600">
            Monitlyは、SDK／API連携を通じて既存RAG・Agent構成に軽量追加できる設計です。
            SaaS・VPC・オンプレのいずれの環境でも、データが閉域内で処理される構成を採用しています。
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-2xl bg-gray-50">
              <h3 className="font-medium">SDK / API連携</h3>
              <p className="mt-2 text-sm text-gray-600">
                Python / Node.js SDKを提供。既存アプリケーションから簡単に評価ログ送信・スコア取得が可能。
              </p>
            </div>
            <div className="p-6 border rounded-2xl bg-gray-50">
              <h3 className="font-medium">データ保護・統制</h3>
              <p className="mt-2 text-sm text-gray-600">
                評価ログはワークスペース単位で分離保存。IP制限、SSO、監査ログに対応。
                セキュリティポリシーを遵守しながら利用できます。
              </p>
            </div>
            <div className="p-6 border rounded-2xl bg-gray-50">
              <h3 className="font-medium">拡張性</h3>
              <p className="mt-2 text-sm text-gray-600">
                OpenAI / Azure / Anthropic / Vertex AIなど主要LLMをサポート。
                ローカルLLM（Ollama / LM Studio）への接続も順次対応中。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 導入オプション（圧縮） */}
      <section className="px-6 md:px-10 py-20 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">導入オプション</h2>
          <p className="mt-4 text-gray-600">
            セキュリティ要件やITポリシーに応じて、クラウド／閉域／オンプレを柔軟に選択可能。
            いずれも機能差はなく、運用規模に応じたスケーリングを提供します。
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">SaaS</h3>
              <p className="mt-2 text-sm text-gray-600">最短1日で利用開始。PoC・小規模検証に最適。</p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">専用VPC</h3>
              <p className="mt-2 text-sm text-gray-600">自社クラウド上で運用。IP制限・KMS連携・監査ログ対応。</p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">オンプレミス</h3>
              <p className="mt-2 text-sm text-gray-600">閉域網・検疫環境・更新パッケージ配布対応。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">生成AI運用の“評価文化”をつくる</h2>
          <p className="mt-3 text-gray-300">
            Monitlyは、PoC止まりから脱却し、改善が循環する組織を支援します。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-white text-black font-medium">
              デモを依頼する
            </Link>
            <Link href="/news" className="px-6 py-3 rounded-xl border border-white text-white font-medium">
              最新情報を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

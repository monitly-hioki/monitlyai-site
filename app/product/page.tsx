// app/product/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-10 py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Monitly（モニトリー）
          </h1>
          <p className="mt-5 text-gray-600 text-base md:text-lg">
            RAG／AIエージェントの評価・比較・改善・運用を一元化する LLMOps プラットフォーム。
            チーム単位で継続的に品質向上を進めるための日本発ツールです。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモのご相談</Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">ユースケースを見る</Link>
          </div>
        </div>
      </section>

      {/* 機能ブロック（詳細） */}
      <section className="px-6 md:px-10 py-16 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">主要機能</h2>
          <p className="mt-4 text-gray-600">
            Monitly は、RAG／AIエージェントの運用過程を構成・ログ・レビュー・KPIの４層で把握し、
            定量・定性の両軸から継続的に改善を支援します。
          </p>

          <div className="mt-8 space-y-12">
            {/* 1 */}
            <div>
              <h3 className="text-xl font-medium">① 構成比較と実験管理</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                プロンプト・Retriever・データソースなど、各構成のバージョン差分を管理。
                精度・コスト・応答速度を横並びで比較し、最適構成を定量的に評価します。
              </p>
            </div>

            {/* 2 */}
            <div>
              <h3 className="text-xl font-medium">② ログ収集・再現検証・ケース分析</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                本番ログから再現ケースを自動生成。事象パターンごとに束ね、出力傾向や失敗要因を可視化。
                改善すべき箇所を特定し、再現性の高い検証を実施します。
              </p>
            </div>

            {/* 3 */}
            <div>
              <h3 className="text-xl font-medium">③ SMEレビュー・自動評価統合</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                有識者（SME）のレビューをスコア化し、自動評価指標と突き合わせ。
                承認ワークフローと履歴管理を統合し、品質保証を標準化します。
              </p>
            </div>

            {/* 4 */}
            <div>
              <h3 className="text-xl font-medium">④ 運用モニタリングと改善履歴</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                精度・コスト・速度・網羅率などのKPIをダッシュボードで一元可視化。
                改善施策と結果を時系列で追跡し、継続的なチューニングを支援します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* スクリーンショット */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">スクリーンショット</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/compare-ui.png" alt="構成比較" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                構成比較ビュー（プロンプト／Retriever／データソースの差分）
              </figcaption>
            </figure>
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/review-workflow.png" alt="レビュー・承認ワークフロー" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                SMEレビュー・承認フロー統合画面
              </figcaption>
            </figure>
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/perfomance-ui.png" alt="性能・指標ビュー" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                指標ビュー（精度／コスト／速度／網羅率の可視化）
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 導入形態（変更なし） */}
      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">導入形態</h2>
          <p className="mt-3 text-gray-600">
            利用開始スピード、セキュリティ要件、社内インフラとの親和性にあわせて柔軟にお選びいただけます。
          </p>

          {/* 以下同内容（省略可） */}
        </div>
      </section>
    </main>
  );
}

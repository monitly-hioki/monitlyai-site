import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '製品概要｜Monitly.AI',
  description:
    'RAG/エージェントの評価・比較・承認・運用監視をワンストップで。評価指標、SMEレビュー、差分可視化、コスト最適化、アラート連携など機能詳細。',
  alternates: { canonical: 'https://monitlyai-site.vercel.app/product' },
}

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="px-6 md:px-10 pt-16 pb-10 border-b">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold">製品概要：Monitly.AI でできること</h1>
          <p className="mt-4 text-gray-700 max-w-3xl">
            本番ログを起点に、評価・比較・承認・運用監視までを統合。精度・速度・コストのバランスをチームで最適化します。
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-b">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold">1. 評価とケース管理</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700 text-sm">
              <li>本番ログからのケース化、データセット管理（バージョン対応）</li>
              <li>自動評価（スコア）とSMEレビューの統合、重み付け</li>
              <li>回帰検知（品質の劣化検出）とアラート出力</li>
            </ul>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border bg-gray-50">
            <Image src="/assets/v1/perfomance-ui.png" alt="評価ダッシュボード" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-b">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1 relative aspect-[16/9] overflow-hidden rounded-2xl border bg-gray-50">
            <Image src="/assets/v1/review-workflow.png" alt="承認ワークフロー" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold">2. 比較と承認ワークフロー</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700 text-sm">
              <li>プロンプト/Retriever/モデル差分の可視化とA/B比較</li>
              <li>影響範囲（ケース/タグ/ドメイン単位）のスコア差分</li>
              <li>承認済み構成のみ反映、監査対応の完全な履歴保持</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-b">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold">3. 運用監視とコスト最適化</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700 text-sm">
              <li>精度・速度・コストのSLO/アラート連携（Slack等）</li>
              <li>コスト要因（トークン/外部API/再検索回数）の分解</li>
              <li>異常検知とロールバック支援</li>
            </ul>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border bg-gray-50">
            <Image src="/assets/v1/compare-ui.png" alt="比較UI" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-b">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">他サービスとの違い</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border rounded-2xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left">観点</th>
                  <th className="p-3 text-left">Monitly.AI</th>
                  <th className="p-3 text-left">一般的な評価ツール</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">本番ログ連携</td>
                  <td className="p-3">ケース化/タグ管理/回帰検知まで一体化</td>
                  <td className="p-3">別ツールでの運用が前提</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">承認ワークフロー</td>
                  <td className="p-3">差分→承認→反映を監査可能に一気通貫</td>
                  <td className="p-3">比較止まりでガバナンスは別途</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">コスト最適化</td>
                  <td className="p-3">精度/速度/コストの三点最適を可視化</td>
                  <td className="p-3">コストは外部集計が必要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
              機能デモを依頼
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 space-y-6">
            <details className="rounded-xl border p-4">
              <summary className="font-medium">既存の評価基盤/Observabilityと併用できますか？</summary>
              <p className="mt-2 text-sm text-gray-700">
                はい。ログ/イベントの連携やWebhookでのアラート連携に対応します。詳細は導入時にご案内します。
              </p>
            </details>
            <details className="rounded-XL border p-4">
              <summary className="font-medium">モデルやベクタDBのベンダーロックはありますか？</summary>
              <p className="mt-2 text-sm text-gray-700">
                いいえ。主要LLM/ベクタDB/検索基盤と連携できる設計です。
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Monitly.AI｜RAG/エージェント評価と運用可視化 LLMOps',
  description:
    'RAGとAIエージェントの“結果”を可視化し、継続的に良くする。評価・比較・運用をひとつのダッシュボードで。',
  alternates: { canonical: 'https://monitlyai-site.vercel.app/' },
  openGraph: {
    title: 'Monitly.AI｜RAG/エージェント評価と運用可視化 LLMOps',
    description: 'RAGとAIエージェントの“結果”を可視化し、継続的に良くする。',
    type: 'website',
    url: 'https://monitlyai-site.vercel.app',
    images: [{ url: '/og/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monitly.AI｜RAG/エージェント評価と運用可視化 LLMOps',
    description: 'RAGとAIエージェントの“結果”を可視化し、継続的に良くする。',
    images: ['/og/og-default.jpg'],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            生成AIを「測り」「良くし」「守る」
            <br className="hidden md:block" />
            日本企業のための LLMOps プラットフォーム
          </h1>
          <p className="mt-5 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Monitly.AI は、生成AI・RAG・エージェントの運用を可視化・評価・改善まで統合。
            属人的判断から脱却し、品質を継続的に高める仕組みを提供します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white" aria-label="デモのご相談">
              デモのご相談
            </Link>
            <Link href="/product" className="px-5 py-3 rounded-xl border" aria-label="製品を見る">
              製品を見る
            </Link>
          </div>
          <div className="relative mx-auto mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl border bg-gray-50">
            <Image
              src="/assets/v1/compare-ui.png"
              alt="構成比較画面ダイジェスト"
              fill
              priority
              sizes="(min-width: 1024px) 768px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">よくあるつまずき、そのままにしていませんか？</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl border bg-gray-50">
              <div className="font-medium">PoCで止まる</div>
              <p className="mt-2 text-gray-700 text-sm">
                本番ログが活かされず、仮説検証のループが回らない。改善が属人的で再現性がない。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-gray-50">
              <div className="font-medium">品質が安定しない</div>
              <p className="mt-2 text-gray-700 text-sm">
                SME評価や自動指標が分散し、バージョン差分の影響が読めない。監査対応の履歴も不足。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-gray-50">
              <div className="font-medium">コストが読めない</div>
              <p className="mt-2 text-gray-700 text-sm">
                精度・速度・コストのトレードオフが可視化されず、意思決定に時間がかかる。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">導入効果</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <div className="text-lg font-medium">開発スピード +30%</div>
              <p className="mt-2 text-sm text-gray-700">改善仮説の可視化と検証自動化でサイクルを高速化。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <div className="text-lg font-medium">品質スコア安定化</div>
              <p className="mt-2 text-sm text-gray-700">SMEレビューと自動評価の統合で属人性を排除。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <div className="text-lg font-medium">運用コスト -25%</div>
              <p className="mt-2 text-sm text-gray-700">比較・検証・承認を統合し、運用/人件費を削減。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">PoC・導入の進め方</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl border bg-gray-50">
              <div className="font-medium">1. 現状確認</div>
              <p className="mt-2 text-sm text-gray-700">ユースケースと既存構成をヒアリング。評価観点を定義。</p>
            </div>
            <div className="p-5 rounded-2xl border bg-gray-50">
              <div className="font-medium">2. 計測設計</div>
              <p className="mt-2 text-sm text-gray-700">ログ/ケース準備、指標/レビュー体制の設計。</p>
            </div>
            <div className="p-5 rounded-2xl border bg-gray-50">
              <div className="font-medium">3. 検証→承認</div>
              <p className="mt-2 text-sm text-gray-700">差分の可視化→承認→反映をワークフローで回す。</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
              デモ・導入相談
            </Link>
            <Link href="/partners" className="px-6 py-3 rounded-xl border hover:bg-gray-50 transition">
              パートナープログラム
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

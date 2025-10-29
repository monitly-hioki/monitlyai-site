import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "製品情報｜Monitly.AI",
  description: "RAG・AIエージェントの品質を測り、改善を仕組みに変える。SaaS/オンプレ両対応のLLMOpsプラットフォーム。",
}

const heroImages = {
  compare: "/images/ui-compare.png",
  history: "/images/ui-history.png",
  ops: "/images/ui-ops.png",
  metrics: "/images/ui-metrics.png",
  review: "/images/ui-review.png",
}

const competitors = [
  { name: "Monitly.AI", jp: "完全対応", rag: "特化", deploy: "SaaS/オンプレ", sme: "あり", rollback: "あり", sdk: "軽量統合", compliance: "国内対応" },
  { name: "LangSmith", jp: "なし", rag: "部分", deploy: "SaaSのみ", sme: "なし", rollback: "部分", sdk: "あり", compliance: "未対応" },
  { name: "Humanloop", jp: "なし", rag: "部分", deploy: "SaaSのみ", sme: "なし", rollback: "なし", sdk: "あり", compliance: "未対応" },
  { name: "Weights & Biases", jp: "なし", rag: "なし", deploy: "SaaSのみ", sme: "なし", rollback: "なし", sdk: "あり", compliance: "未対応" },
]

const faqs = [
  { q: "PoCでどんな成果を確認できますか？", a: "精度・コスト・応答速度を数値で比較し、改善効果をレポートとして出力できます。" },
  { q: "自社RAGに後付けできますか？", a: "できます。既存構成にSDKを挿入するだけで自動連携します。" },
  { q: "評価項目はカスタマイズできますか？", a: "可能です。評価基準・採点ロジックをプロジェクトごとに定義できます。" },
  { q: "社内ネットワークのみで運用可能ですか？", a: "可能です。オンプレまたはVPCデプロイに対応し、認証や監査要件に合わせて構成します。" },
  { q: "導入までの期間は？", a: "SaaS版は即日、オンプレ版は環境条件により概ね2〜3週間で稼働します。" },
]

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                RAG・AIエージェントの“品質”を測り、改善を仕組みに変える
              </h1>
              <p className="mt-5 text-slate-600">
                Monitly.AIは、生成AI運用における品質評価・比較・改善・本番管理を一元化するLLMOpsプラットフォーム。
                継続的な改善をチームのプロセスとして標準化します。
              </p>
              <div className="mt-8 flex gap-3">
                <Link href="/contact" className="rounded-xl px-5 py-3 bg-slate-900 text-white text-sm">無料デモを見る</Link>
                <Link href="/contact" className="rounded-xl px-5 py-3 bg-white ring-1 ring-slate-200 text-sm">導入・カスタム相談</Link>
              </div>
              <p className="mt-4 text-xs text-slate-500">SaaSとオンプレの両プランに対応</p>
            </div>
            <div className="relative rounded-2xl shadow-lg ring-1 ring-slate-200 bg-white p-3">
              <Image src={heroImages.compare} alt="複数構成比較" width={1000} height={640} className="rounded-xl w-full h-auto" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">“属人的な改善”から“再現可能な改善”へ</h2>
        <p className="mt-4 text-slate-600">
          どの変更が効いたのか、誰が何をして結果がどうなったのかを明確化。変更履歴と指標を紐づけて、改善をチームで再現します。
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5">
            <Image src={heroImages.ops} alt="運用ダッシュボード" width={1200} height={760} className="rounded-lg w-full h-auto" />
            <h3 className="mt-4 font-medium">運用ダッシュボード</h3>
            <p className="text-sm text-slate-600 mt-1">品質・コスト・応答を監視し、異常を素早く検知。</p>
          </div>
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5">
            <Image src={heroImages.metrics} alt="メトリクス統合" width={1200} height={760} className="rounded-lg w-full h-auto" />
            <h3 className="mt-4 font-medium">比較・分析</h3>
            <p className="text-sm text-slate-600 mt-1">精度・再現率・F1・コストを構成横断で比較。</p>
          </div>
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5">
            <Image src={heroImages.review} alt="レビュー承認" width={1200} height={760} className="rounded-lg w-full h-auto" />
            <h3 className="mt-4 font-medium">レビュー承認</h3>
            <p className="text-sm text-slate-600 mt-1">SME承認をテンプレ化し、監査対応を簡潔に。</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5">
            <Image src={heroImages.history} alt="改善履歴" width={1200} height={760} className="rounded-lg w-full h-auto" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">継続的な改善をプロセスに組み込む</h2>
            <ul className="mt-6 space-y-3 text-slate-700 text-sm">
              <li className="py-3 border-b">
  <p className="font-medium">PoCはスモールスタートの試験導入ですか？</p>
  <p className="text-sm text-zinc-600 mt-1">いいえ。Monitlyの「実装共創プログラム」は検証のための縮小導入ではなく、本番想定の評価・改善・監視の仕組みを御社データと業務文脈で共同構築し、そのまま本番へ移行できる状態を作ることを目的とします。</p>
</li>
            </ul>
          </div>
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">
            <h3 className="text-lg font-medium">オンプレ／VPC</h3>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li>社内ネットワークで安全運用</li>
              <li>社内認証・社内DB連携・監査要件に適合</li>
              <li>カスタム指標や独自ワークフローに対応</li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">SDK/APIで既存RAGシステムへ軽量統合</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">導入プロセス</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">
            <div className="text-xs uppercase tracking-wide text-slate-500">Step 1</div>
            <h3 className="mt-1 font-medium">接続する</h3>
            <p className="text-sm text-slate-700 mt-2">APIキーまたはSDKで既存AIに接続</p>
          </div>
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">
            <div className="text-xs uppercase tracking-wide text-slate-500">Step 2</div>
            <h3 className="mt-1 font-medium">評価する</h3>
            <p className="text-sm text-slate-700 mt-2">テスト作成と並列比較を自動実行</p>
          </div>
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">
            <div className="text-xs uppercase tracking-wide text-slate-500">Step 3</div>
            <h3 className="mt-1 font-medium">改善・反映</h3>
            <p className="text-sm text-slate-700 mt-2">最適構成を本番へ反映し履歴管理</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">他サービスとの違い</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left">項目</th>
                {competitors.map(c=>(
                  <th key={c.name} className="px-4 py-3 text-left">{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="px-4 py-3">日本語UI対応</td>{competitors.map(c=><td key={c.name+"jp"} className="px-4 py-3">{c.jp}</td>)}</tr>
              <tr><td className="px-4 py-3">RAG/Agent評価特化</td>{competitors.map(c=><td key={c.name+"rag"} className="px-4 py-3">{c.rag}</td>)}</tr>
              <tr><td className="px-4 py-3">デプロイ形態</td>{competitors.map(c=><td key={c.name+"dep"} className="px-4 py-3">{c.deploy}</td>)}</tr>
              <tr><td className="px-4 py-3">SMEレビュー承認</td>{competitors.map(c=><td key={c.name+"sme"} className="px-4 py-3">{c.sme}</td>)}</tr>
              <tr><td className="px-4 py-3">改善履歴・ロールバック</td>{competitors.map(c=><td key={c.name+"rb"} className="px-4 py-3">{c.rollback}</td>)}</tr>
              <tr><td className="px-4 py-3">SDK統合</td>{competitors.map(c=><td key={c.name+"sdk"} className="px-4 py-3">{c.sdk}</td>)}</tr>
              <tr><td className="px-4 py-3">国内法規制対応</td>{competitors.map(c=><td key={c.name+"comp"} className="px-4 py-3">{c.compliance}</td>)}</tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((f,i)=>(
            <div key={i} className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">
              <h3 className="font-medium">{f.q}</h3>
              <p className="text-sm text-slate-700 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-slate-900 text-white p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">生成AIを「測り・良くし・守る」基盤へ</h2>
          <p className="mt-3 text-slate-300">SaaS/オンプレ対応、カスタマイズ可。まずはデモから。</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact" className="rounded-xl px-5 py-3 bg-white text-slate-900 text-sm">無料デモを見る</Link>
            <Link href="/contact" className="rounded-xl px-5 py-3 bg-slate-800 text-white ring-1 ring-white/20 text-sm">導入・カスタム相談</Link>
          </div>
        </div>
      </section>
    <section id="adoption" className="px-6 md:px-10 py-12 bg-zinc-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold">実装共創プログラム（PoCではありません）</h2>
    <p className="mt-3 text-zinc-700">導入容易性を測る小規模検証ではなく、業務KPIに直結する評価指標の設計、モデル/プロンプト/構成の比較・改善手順、本番モニタリングとフィードバック動線までを御社チームと共同で実装します。標準6〜8週間で、成果物はそのまま本番運用へ移行可能です。</p>
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      <div className="p-6 rounded-2xl bg-white shadow-sm">
        <h3 className="text-lg font-semibold">参加条件</h3>
        <ul className="mt-2 text-zinc-600 list-disc list-inside space-y-1">
<li className="py-3 border-b">
  <p className="font-medium">PoCはスモールスタートの試験導入ですか？</p>
  <p className="text-sm text-zinc-600 mt-1">いいえ。Monitlyの「実装共創プログラム」は検証のための縮小導入ではなく、本番想定の評価・改善・監視の仕組みを御社データと業務文脈で共同構築し、そのまま本番へ移行できる状態を作ることを目的とします。</p>
</li>

          <li>自社または委託でRAG/エージェントを開発・運用中</li>
          <li>評価と改善を内製運用する意思がある</li>
          <li>匿名化した成果の事例化に同意可能</li>
        </ul>
      </div>
      <div className="p-6 rounded-2xl bg-white shadow-sm">
        <h3 className="text-lg font-semibold">アウトカム</h3>
        <ul className="mt-2 text-zinc-600 list-disc list-inside space-y-1">
          <li>業務KPIに紐づく評価指標セット</li>
          <li>モデル/プロンプト/構成の比較・改善手順</li>
          <li>本番計測・監視・フィードバックの仕組み</li>
        </ul>
      </div>
      <div className="p-6 rounded-2xl bg-white shadow-sm">
        <h3 className="text-lg font-semibold">期間・体制</h3>
        <ul className="mt-2 text-zinc-600 list-disc list-inside space-y-1">
          <li>標準6〜8週間</li>
          <li>御社PM/SME × Monitly混成チーム</li>
          <li>有償・枠数限定（要件適合）</li>
        </ul>
      </div>
    </div>
  </div>
</section>
</main>
  )
}

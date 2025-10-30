// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getSortedNews } from "./news/data";

export const metadata = {
  title: "Monitly.AI｜RAG/エージェント評価と運用可視化 LLMOps",
  description:
    "RAGとAIエージェントの“結果”を可視化し、継続的に良くする。評価・比較・運用をひとつのダッシュボードで。",
  alternates: { canonical: "https://monitly.ai" },
  openGraph: {
    title: "Monitly.AI｜RAG/エージェント評価と運用可視化 LLMOps",
    description: "RAGとAIエージェントの“結果”を可視化し、継続的に良くする。",
    url: "https://monitly.ai",
    type: "website",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monitly.AI｜RAG/エージェント評価と運用可視化 LLMOps",
    description: "RAGとAIエージェントの“結果”を可視化し、継続的に良くする。",
    images: ["/og/og-default.jpg"],
  },
};

export default async function Page() {
  const news = await getSortedNews();
  const latest = news.slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-zinc-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            生成AIを「測り」「良くし」「守る」
            <br className="hidden md:block" />
            日本企業のための LLMOps プラットフォーム
          </h1>
          <p className="mt-6 text-zinc-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Monitly.AI（モニトリーAI）は、生成AI・RAG・エージェントの運用を可視化・評価・改善まで統合。
            属人的な判断から脱却し、品質を継続的に高める仕組みを提供します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white text-sm font-medium">
              デモのご相談
            </Link>
            <Link href="/product" className="px-5 py-3 rounded-xl border text-sm font-medium">
              製品を見る
            </Link>
          </div>
          <div className="relative mx-auto mt-12 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl shadow-sm ring-1 ring-zinc-200">
            <Image
              src="/assets/ui-image.png"
              alt="Monitly.AI ダッシュボード画面"
              fill
              priority
              sizes="(min-width: 1024px) 768px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">
            よくあるつまずきを、そのままにしていませんか？
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl border bg-gray-50">
              <h3 className="font-semibold text-lg">評価が属人的で再現できない</h3>
              <p className="mt-2 text-zinc-700 text-sm leading-relaxed">
                LLMの改善効果を定量的に測れず、チーム内で判断がばらつく。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-gray-50">
              <h3 className="font-semibold text-lg">本番環境の品質が見えない</h3>
              <p className="mt-2 text-zinc-700 text-sm leading-relaxed">
                運用中の出力ログが散在し、異常検知や品質監視が属人的。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-gray-50">
              <h3 className="font-semibold text-lg">改善サイクルが回らない</h3>
              <p className="mt-2 text-zinc-700 text-sm leading-relaxed">
                開発・評価・運用が分断され、継続改善のプロセスが定着しない。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 md:px-10 py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Monitly がすべてをつなぐ</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed max-w-3xl mx-auto">
            開発・評価・運用を一つのダッシュボードで統合。
            継続的な品質改善をチーム全体で回せるようにします。
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200">
              <h3 className="font-semibold text-lg">開発と評価の統合</h3>
              <p className="mt-2 text-zinc-700 text-sm leading-relaxed">
                プロンプト・構成・結果を一元管理。比較検証を自動化し、定量評価を標準化。
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200">
              <h3 className="font-semibold text-lg">運用の可視化</h3>
              <p className="mt-2 text-zinc-700 text-sm leading-relaxed">
                本番品質を常時監視し、異常や劣化を即時検出。継続的な改善を支援。
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200">
              <h3 className="font-semibold text-lg">日本企業に最適な構成</h3>
              <p className="mt-2 text-zinc-700 text-sm leading-relaxed">
                SaaS とオンプレミスの両提供。セキュリティ監査や社内規程に準拠。
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="px-6 md:px-10 py-20 bg-white border-t">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold text-center">すぐに効く導入パターン</h2>
    <div className="mt-10 grid md:grid-cols-3 gap-6">
      <div className="p-6 rounded-2xl bg-white ring-1 ring-zinc-200">
        <p className="text-xs font-medium text-zinc-500">現場運用</p>
        <h3 className="mt-1 font-semibold text-lg">本番の見える化</h3>
        <p className="mt-2 text-zinc-700 text-sm leading-relaxed">出力ログとユーザー評価を一画面に集約。異常や劣化を即検知し、手戻りを削減。</p>
      </div>
      <div className="p-6 rounded-2xl bg-white ring-1 ring-zinc-200">
        <p className="text-xs font-medium text-zinc-500">開発改善</p>
        <h3 className="mt-1 font-semibold text-lg">比較と検証の標準化</h3>
        <p className="mt-2 text-zinc-700 text-sm leading-relaxed">プロンプト・モデル・RAG構成を定量比較。意思決定を速く、再現性を高く。</p>
      </div>
      <div className="p-6 rounded-2xl bg-white ring-1 ring-zinc-200">
        <p className="text-xs font-medium text-zinc-500">統制・品質</p>
        <h3 className="mt-1 font-semibold text-lg">ガバナンスの定着</h3>
        <p className="mt-2 text-zinc-700 text-sm leading-relaxed">権限・監査ログ・変更履歴で統制。属人化を排し、組織の標準を作る。</p>
      </div>
    </div>
    <div className="mt-8 text-center">
      <a href="/contact" className="inline-block px-6 py-3 bg-black text-white rounded-xl text-sm font-medium">まずは相談する</a>
    </div>
  </div>
</section>

<section className="px-6 md:px-10 py-16 bg-zinc-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold text-center">連携・対応</h2>
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      <div className="p-6 rounded-2xl bg-white ring-1 ring-zinc-200">
        <h3 className="font-semibold text-lg">フレームワーク</h3>
        <p className="mt-2 text-zinc-700 text-sm leading-relaxed">LangChain、LlamaIndex、OpenAI API</p>
      </div>
      <div className="p-6 rounded-2xl bg-white ring-1 ring-zinc-200">
        <h3 className="font-semibold text-lg">ベクトルDB・ストレージ</h3>
        <p className="mt-2 text-zinc-700 text-sm leading-relaxed">主要ベクトルDB、オブジェクトストレージ各種</p>
      </div>
      <div className="p-6 rounded-2xl bg-white ring-1 ring-zinc-200">
        <h3 className="font-semibold text-lg">提供形態</h3>
        <p className="mt-2 text-zinc-700 text-sm leading-relaxed">SaaS、オンプレミス。日本企業の運用要件に準拠</p>
      </div>
    </div>
  </div>
</section>

      {/* News Section */}
      <section className="px-6 md:px-10 py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold">最新のお知らせ</h2>
            <Link href="/news" className="text-sm text-zinc-600 hover:text-zinc-800">
              一覧を見る →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latest.map(({ slug, title, date, summary }) => (
              <Link
                key={slug}
                href={`/news/${slug}`}
                className="block rounded-2xl bg-white ring-1 ring-zinc-200 p-6 hover:shadow-sm transition"
              >
                <p className="text-xs text-zinc-500">{new Date(date).toLocaleDateString("ja-JP")}</p>
                <h3 className="mt-2 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-zinc-700 line-clamp-3">{summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

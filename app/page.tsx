import Image from "next/image";
import Script from "next/script";

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
            <a className="px-5 py-3 rounded-xl bg-black text-white" href="/contact" aria-label="デモのご相談">
              デモのご相談
            </a>
            <a className="px-5 py-3 rounded-xl border" href="/product" aria-label="製品を見る">
              製品を見る
            </a>
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

      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Monitly.AIは何ができますか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RAGやエージェントの評価・比較・承認・運用監視を統合し、継続的な品質改善を支援します。"
                }
              },
              {
                "@type": "Question",
                "name": "どんな導入効果がありますか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "開発スピード向上、品質スコア安定化、運用コスト削減などの効果が期待できます。"
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}

import Link from "next/link";

export default function PartnersPage() {
  return (
    <main className="bg-white text-zinc-800">
      <section className="px-6 md:px-10 pt-12 pb-16 bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Monitly.AI パートナーシッププログラム
          </h1>
          <p className="mt-5 text-zinc-600 text-lg leading-relaxed max-w-3xl mx-auto">
            生成AIの導入・運用・評価における共創を通じて、企業の変革を加速させるための
            パートナープログラムです。共に持続的な価値を生み出すパートナーを募集しています。
          </p>
        </div>
      </section>

      <section id="tiers" className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            3つのパートナー区分
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white">
              <h3 className="text-xl font-semibold">アライアンスパートナー</h3>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                Monitly.AIの理念に共感し、企業への導入を共に推進いただくパートナーです。
                新たな顧客接点を開拓し、双方のネットワークを活かして市場価値を拡大します。
              </p>
            </div>
            <div className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white">
              <h3 className="text-xl font-semibold">インテグレーションパートナー</h3>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                システムインテグレーターやAI開発企業向けの協業枠です。
                RAG・エージェント構築、評価、運用設計をMonitly.AIと連携しながら提供します。
              </p>
            </div>
            <div className="p-6 rounded-2xl ring-1 ring-zinc-200 bg-white">
              <h3 className="text-xl font-semibold">共同ソリューションパートナー</h3>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                Monitly.AIを中核に据えた新規サービスやプロダクトを共創するパートナーです。
                技術、知見、データ基盤を統合し、クライアント企業に最適な生成AIソリューションを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">支援領域</h2>
            <ul className="mt-6 space-y-2 text-zinc-700 list-disc list-inside leading-relaxed">
              <li>生成AI導入・評価の技術コンサルティング</li>
              <li>RAG・エージェントの構築・モニタリング連携支援</li>
              <li>データ基盤の設計・構築および社内データ整備支援</li>
              <li>継続的改善サイクル設計と評価プロセス標準化</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">パートナーへの提供価値</h2>
            <ul className="mt-6 space-y-2 text-zinc-700 list-disc list-inside leading-relaxed">
              <li>技術・営業両面での共同提案支援</li>
              <li>共通の評価テンプレートと分析ダッシュボードの利用</li>
              <li>マーケティング・広報面での共催施策</li>
              <li>共同案件での収益分配・契約スキーム設計</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">参加までの流れ</h2>
            <ol className="mt-6 space-y-2 text-zinc-700 list-decimal list-inside leading-relaxed">
              <li>お問い合わせフォームよりエントリー</li>
              <li>オンラインでの事前ヒアリング</li>
              <li>目的・体制に応じた協業スキームの策定</li>
              <li>合意後、協定締結および共同活動開始</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">主な協業テーマ</h2>
            <ul className="mt-6 space-y-2 text-zinc-700 list-disc list-inside leading-relaxed">
              <li>生成AI導入支援・評価・運用モニタリング</li>
              <li>社内データ整備・RAG基盤構築</li>
              <li>生成AIサービスの共同開発・共同提供</li>
              <li>業界横断での評価基準策定や標準化への貢献</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="apply" className="px-6 md:px-10 py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">お問い合わせ・参画のご相談</h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            ご関心をお持ちの企業様は、下記フォームよりご連絡ください。
            目的や体制を伺い、最適な協業スキームをご提案いたします。
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-xl text-sm font-medium"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

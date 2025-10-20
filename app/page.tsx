export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="px-6 md:px-10 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            RAG / AIエージェントの
            <span className="block">“運用評価と改善”を仕組み化</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Monitly.AIは、生成AI（RAG・エージェント）の出力品質を継続的に評価・改善・共有するためのLLMOpsプラットフォームです。
            日本語UI・日本企業の運用要件に最適化。PoCから本番まで一貫して使えます。
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/product" className="px-5 py-3 rounded-xl bg-black text-white">製品を見る</a>
            <a href="/solutions" className="px-5 py-3 rounded-xl border">ユースケース</a>
            <a href="/product" className="hover:opacity-80">製品</a>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 border-t">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl border bg-white">
            <h3 className="font-medium">評価を“現場仕様”に</h3>
            <p className="mt-2 text-sm text-gray-600">SME評価・バージョン比較・ログ管理を一つに。属人的な評価運用を脱却し、再現可能な改善サイクルを実現。</p>
          </div>
          <div className="p-5 rounded-2xl border bg-white">
            <h3 className="font-medium">RAG/Agentに特化</h3>
            <p className="mt-2 text-sm text-gray-600">ドキュメント更新やプロンプト差分、Retriever設定の効果を可視化。現実の“使われ方”に効く機能群。</p>
          </div>
          <div className="p-5 rounded-2xl border bg-white">
            <h3 className="font-medium">日本の運用要件に対応</h3>
            <p className="mt-2 text-sm text-gray-600">日本語評価、データ保管、社内ITツール連携を重視。SaaS/オンプレ両対応で導入のハードルを下げます。</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">主な機能</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-4 text-gray-700">
            <li className="p-4 rounded-xl border bg-white">構成比較（プロンプト・Retriever・データソース）</li>
            <li className="p-4 rounded-xl border bg-white">ログ収集とグルーピング、ケース再現</li>
            <li className="p-4 rounded-xl border bg-white">SME評価・フィードバックの活用</li>
            <li className="p-4 rounded-xl border bg-white">本番モニタリングと改善履歴の可視化</li>
          </ul>
          <div className="mt-8">
            <a href="/product" className="px-5 py-3 rounded-xl bg-black text-white">機能の詳細</a>
          </div>
        </div>
      </section>
    </main>
  );
}

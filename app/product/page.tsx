export default function Page() {
  return (
    <main className="px-6 md:px-10 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold">Monitly.AI 製品</h1>
        <p className="mt-4 text-gray-600">RAG/AIエージェントの品質評価・改善・運用管理を一元化するLLMOpsプラットフォーム。</p>

        <section className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl border"><h3 className="font-medium">構成比較</h3><p className="mt-2 text-sm text-gray-600">プロンプト・Retriever・データソース差分を横並び比較。</p></div>
          <div className="p-5 rounded-2xl border"><h3 className="font-medium">ログ&グルーピング</h3><p className="mt-2 text-sm text-gray-600">実運用ログを収集し症状別に束ねて再現検証。</p></div>
          <div className="p-5 rounded-2xl border"><h3 className="font-medium">SME評価</h3><p className="mt-2 text-sm text-gray-600">有識者レビューをスコア化し改善につなげる。</p></div>
          <div className="p-5 rounded-2xl border"><h3 className="font-medium">運用要件</h3><p className="mt-2 text-sm text-gray-600">日本語UI、監査ログ、データ保管。SaaS/オンプレ両対応。</p></div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">導入とアーキテクチャ</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-4">
            <li className="p-4 rounded-xl border">SaaS：最短でPoC開始。既存構成へ軽量追加</li>
            <li className="p-4 rounded-xl border">オンプレ：社内ネットワーク/規制要件に準拠</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモ相談</a>
            <a href="/solutions" className="px-5 py-3 rounded-xl border">ユースケースを見る</a>
          </div>
        </section>
      </div>
    </main>
  );
}

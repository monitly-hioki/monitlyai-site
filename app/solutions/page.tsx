export default function Page() {
  return (
    <main className="px-6 md:px-10 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold">ソリューション</h1>
        <p className="mt-4 text-gray-600">評価→改善→再評価の循環で、現場で使われ続ける生成AIへ。</p>

        <section className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl border">
            <h3 className="font-medium">社内QA・ナレッジRAG</h3>
            <p className="mt-2 text-sm text-gray-600">手順書更新の反映遅延や回答根拠の不透明さを解消。</p>
            <a href="/product" className="inline-block mt-3 text-sm underline">関連機能を見る</a>
          </div>
          <div className="p-5 rounded-2xl border">
            <h3 className="font-medium">顧客サポート自動応答</h3>
            <p className="mt-2 text-sm text-gray-600">ログから症状を分類し、回答精度を継続改善。</p>
            <a href="/product" className="inline-block mt-3 text-sm underline">関連機能を見る</a>
          </div>
          <div className="p-5 rounded-2xl border">
            <h3 className="font-medium">ドキュメント生成補助</h3>
            <p className="mt-2 text-sm text-gray-600">テンプレ差分管理とSMEレビューをワークフロー化。</p>
            <a href="/product" className="inline-block mt-3 text-sm underline">関連機能を見る</a>
          </div>
          <div className="p-5 rounded-2xl border">
            <h3 className="font-medium">規制・コンプラ対応</h3>
            <p className="mt-2 text-sm text-gray-600">監査ログ/権限管理/データ保管要件に適合。</p>
            <a href="/product" className="inline-block mt-3 text-sm underline">関連機能を見る</a>
          </div>
        </section>

        <div className="mt-10">
          <a href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">課題の相談をする</a>
        </div>
      </div>
    </main>
  );
}

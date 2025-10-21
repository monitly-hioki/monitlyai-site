// app/page.tsx
export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="px-6 md:px-10 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            生成AIの「運用評価」を仕組み化するプラットフォーム
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Monitly.AIは、RAG・AIエージェントの出力品質を継続的に評価し、改善をチームで回せるようにするLLMOpsプラットフォームです。
            日本語UI・日本企業の運用要件に最適化し、PoCから本番運用まで一貫してご利用いただけます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモを見る</a>
            <a href="/product" className="px-5 py-3 rounded-xl border">製品を見る</a>
            <a href="/solutions" className="px-5 py-3 rounded-xl border">導入支援（ソリューション）</a>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <figure className="rounded-2xl border bg-white p-4">
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />
              <figcaption className="mt-3 text-sm text-gray-600">運用ダッシュボード（品質・コスト・速度の可視化）</figcaption>
            </figure>
            <figure className="rounded-2xl border bg-white p-4">
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />
              <figcaption className="mt-3 text-sm text-gray-600">精度改善履歴（誰が何を変え、結果がどう変化したか）</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Monitlyが解決すること</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">評価を現場の標準に</h3>
              <p className="mt-2 text-sm text-gray-600">
                SMEレビュー・自動指標・ログ管理を統合し、属人的な評価から脱却。再現可能な改善サイクルを定着させます。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">RAG/エージェントに特化</h3>
              <p className="mt-2 text-sm text-gray-600">
                プロンプト差分・Retriever設定・データ更新の効果を横並び比較。現場の“使われ方”に効く評価ができます。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">日本の運用要件に対応</h3>
              <p className="mt-2 text-sm text-gray-600">
                日本語UI、監査ログ、データ保管に配慮。SaaS／オンプレ両対応で、社内ポリシーや規制要件にも柔軟に適合します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">できること（概要）</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-4 text-gray-700">
            <li className="p-4 rounded-xl border bg-white">構成比較（プロンプト・Retriever・データソース）</li>
            <li className="p-4 rounded-xl border bg-white">ログ収集とグルーピング、ケース再現</li>
            <li className="p-4 rounded-xl border bg-white">SMEレビューと承認フローの標準化</li>
            <li className="p-4 rounded-xl border bg-white">運用ダッシュボードと改善履歴の可視化</li>
          </ul>
          <div className="mt-8">
            <a href="/product" className="px-5 py-3 rounded-xl bg-black text-white">機能の詳細を見る</a>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">導入形態</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">SaaS</h3>
              <p className="mt-2 text-sm text-gray-600">最短でPoC開始。既存RAG/エージェント構成に軽量追加できます。</p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">オンプレミス</h3>
              <p className="mt-2 text-sm text-gray-600">社内ネットワークや各種ポリシーに準拠して構築可能です。</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">導入・デモのご相談</a>
            <a href="/news" className="px-5 py-3 rounded-xl border">最新のお知らせ</a>
          </div>
        </div>
      </section>
    </main>
  );
}

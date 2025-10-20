export default function CompanyPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">会社情報</h1>

        <section className="mb-16">
          <dl className="divide-y divide-gray-200 border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-gray-50">
              <dt className="font-medium text-gray-700">会社名</dt>
              <dd className="col-span-2 text-gray-800">Monitly.AI株式会社（英語表記：Monitly.AI Inc.）</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 px-6 py-4">
              <dt className="font-medium text-gray-700">所在地</dt>
              <dd className="col-span-2 text-gray-800">
                〒141-0033 東京都品川区西品川１丁目１−１<br />
                住友不動産大崎ガーデンタワー 9階
              </dd>
            </div>
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-gray-50">
              <dt className="font-medium text-gray-700">代表取締役</dt>
              <dd className="col-span-2 text-gray-800">日置 智之</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 px-6 py-4">
              <dt className="font-medium text-gray-700">設立</dt>
              <dd className="col-span-2 text-gray-800">2025年4月</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-gray-50">
              <dt className="font-medium text-gray-700">事業内容</dt>
              <dd className="col-span-2 text-gray-800">
                生成AI（RAG・AIエージェント）運用評価プラットフォーム「モニトリー」の企画・開発・提供
              </dd>
            </div>
          </dl>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">アクセス</h2>
          <p className="text-gray-700 mb-4">
            JR「大崎駅」徒歩8分。住友不動産大崎ガーデンタワー 9階。
          </p>
          <iframe
            src="https://www.google.com/maps?q=東京都品川区西品川１丁目１−１+住友不動産大崎ガーデンタワー&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </main>
  );
}

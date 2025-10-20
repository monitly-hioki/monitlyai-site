export default function CompanyPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">会社情報</h1>

        <p className="text-gray-600 mb-12">
          Monitly.AI株式会社は、生成AI（RAG・AIエージェント）運用評価プラットフォーム
          「モニトリー」の企画・開発・提供を行っています。
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">会社概要</h2>
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
              <dt className="font-medium text-gray-700">資本金</dt>
              <dd className="col-span-2 text-gray-800">非公開</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 px-6 py-4">
              <dt className="font-medium text-gray-700">事業内容</dt>
              <dd className="col-span-2 text-gray-800">
                生成AI（RAG・AIエージェント）運用評価プラットフォーム「モニトリー」の企画・開発・提供
              </dd>
            </div>
          </dl>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">沿革</h2>
          <ul className="space-y-4 border-l-2 border-gray-200 pl-6">
            <li>
              <span className="text-sm text-gray-500">2025年4月</span>
              <div className="text-gray-800">Monitly.AI株式会社 設立</div>
            </li>
            <li>
              <span className="text-sm text-gray-500">2025年4月</span>
              <div className="text-gray-800">AI・人工知能EXPO 春 に出展（ジンベイ社と共同）</div>
            </li>
            <li>
              <span className="text-sm text-gray-500">2025年5月</span>
              <div className="text-gray-800">Deepcore・NTT西日本などとPoC協議開始</div>
            </li>
            <li>
              <span className="text-sm text-gray-500">2025年10月</span>
              <div className="text-gray-800">Monitly.AIサイトリニューアル</div>
            </li>
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">アクセス</h2>
          <p className="text-gray-700 mb-4">
            JR「大崎駅」徒歩8分。住友不動産大崎ガーデンタワー 9階にオフィスを構えています。
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

export default function Page() {
  const features = [
    {
      title: "ケース管理",
      desc: "評価単位を定義し、データセットとして再利用。テストケース/本番ログを整理し、改善結果を追跡できます。",
    },
    {
      title: "構成比較（プロンプト・Retriever・データソース）",
      desc: "候補構成の差分と効果を横並び可視化。精度・コスト・応答時間などKPIを定量比較できます。",
    },
    {
      title: "SMEレビュー統合",
      desc: "有識者レビューをスコア化し、AI指標と統合。改善履歴や定量KPIと紐づけて管理できます。",
    },
    {
      title: "ログ収集・再現",
      desc: "本番対話ログを安全に収集し、条件を揃えて再現・差分検証。原因分析から改善立案まで一気通貫で支援します。",
    },
    {
      title: "運用ダッシュボード",
      desc: "精度・速度・コストなど主要KPIを横断監視。劣化検知や通知で“運用の見える化”を実現します。",
    },
    {
      title: "エンタープライズ対応",
      desc: "日本語UI、監査ログ、データ保管。SaaS/オンプレ両対応で内部統制・ガバナンス要件に対応します。",
    },
  ];

  const workflow = [
    "ケース登録（評価対象・指標・データセットの定義）",
    "AI実行と自動/人手評価の収集",
    "ログ集約・差分分析（原因特定）",
    "SMEレビューと承認フロー",
    "改善アクション → 再検証（評価ループ）",
  ];

  const differentiators = [
    "属人的な運用を“仕組み化”——評価→分析→改善を一元管理",
    "既存RAG/エージェント構成に軽量追加（SDK/API）で導入が速い",
    "日本語RAGに最適化した指標・UIで現場の使いやすさを担保",
  ];

  const roadmap = [
    "ローカルLLM連携（Ollama / LM Studio との接続強化）",
    "モデル比較・自動ベンチマークの拡充",
    "チーム承認・レポーティングの自動化",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="px-6 md:px-10 pt-16 pb-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            生成AIの運用を<span className="whitespace-nowrap">“見える化”</span>する評価基盤
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            RAG・AIエージェントの出力品質を定量評価し、改善と再現を仕組み化。
            Monitlyは「評価→分析→改善」をチームで回すためのLLMOpsプラットフォームです。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">
              デモを見る
            </a>
            <a href="/contact#poc" className="px-5 py-3 rounded-xl border">
              PoCプランに参加する
            </a>
            <a href="/solutions" className="px-5 py-3 rounded-xl border">
              ユースケースを見る
            </a>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="px-6 md:px-10 py-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border bg-white">
            <h2 className="text-xl font-semibold">現場の課題</h2>
            <p className="mt-3 text-gray-600">
              生成AIの導入後、“どう評価し、どう改善するか”が属人的で再現性がなく、
              チーム共有や意思決定に時間がかかります。
            </p>
          </div>
          <div className="p-6 rounded-2xl border bg-white">
            <h2 className="text-xl font-semibold">Monitlyの解決</h2>
            <p className="mt-3 text-gray-600">
              ケース管理・構成比較・レビュー統合・ログ再現・運用監視を一元化。
              評価ループを標準化し、継続的な改善を当たり前にします。
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-10 py-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">主な機能</h2>
          <div className="mt-5 grid md:grid-cols-3 gap-5">
            {features.map((f) => (
              <article key={f.title} className="p-5 rounded-2xl border bg-white">
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 md:px-10 py-10">
        <div className="max-w-6xl mx-auto rounded-2xl border bg-white p-6">
          <h2 className="text-2xl font-semibold">運用イメージ（評価ループ）</h2>
          <ol className="mt-4 space-y-2 list-decimal list-inside text-gray-700">
            {workflow.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Monitly */}
      <section className="px-6 md:px-10 pb-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          {differentiators.map((d, i) => (
            <div key={i} className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">特徴 {i + 1}</h3>
              <p className="mt-2 text-sm text-gray-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deployment / Architecture */}
      <section className="px-6 md:px-10 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">導入とアーキテクチャ</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-4">
            <li className="p-4 rounded-xl border bg-white">
              <span className="font-medium">SaaS：</span> 最短でPoC開始。既存RAG/エージェント構成へ軽量追加で導入。
            </li>
            <li className="p-4 rounded-xl border bg-white">
              <span className="font-medium">オンプレ：</span> 社内ネットワーク/規制要件に準拠。データ持ち出し制限下でも運用可能。
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            連携予定：Ollama / LM Studio などローカルLLMへの接続強化（ロードマップ）。
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="px-6 md:px-10 pb-10">
        <div className="max-w-6xl mx-auto rounded-2xl border bg-white p-6">
          <h2 className="text-2xl font-semibold">今後の展開</h2>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
            {roadmap.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3">
          <a href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">
            デモを見る
          </a>
          <a href="/contact#poc" className="px-5 py-3 rounded-xl border">
            PoCプランに参加する
          </a>
          <a href="/news" className="px-5 py-3 rounded-xl border">
            最新情報を見る
          </a>
        </div>
      </section>
    </main>
  );
}

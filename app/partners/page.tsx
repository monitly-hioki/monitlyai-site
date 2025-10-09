import Container from "@/components/Container";

export default function PartnerProgramPage() {
  return (
    <main className="py-16 md:py-24 bg-white text-neutral-800">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">パートナープログラム</h1>

        <section className="space-y-8">
          <p>
            Monitly.AIは、生成AI導入における「品質評価と継続的改善」を社会に定着させるため、
            パートナー企業との共創を通じて、より高品質で持続的なAI運用の実現を目指しています。
          </p>
          <p>
            RAG構築、エージェント設計、LLM統合、データ基盤整備など、
            各社の強みとMonitlyの評価基盤を組み合わせ、
            “導入で終わらない生成AI”を共に創り上げます。
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">パートナー区分</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-neutral-200 text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="p-3 border">区分</th>
                  <th className="p-3 border">目的</th>
                  <th className="p-3 border">主な対象</th>
                  <th className="p-3 border">提供内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border font-semibold">リファラルパートナー</td>
                  <td className="p-3 border">顧客への紹介・共同提案</td>
                  <td className="p-3 border">コンサル、SI、販売代理店</td>
                  <td className="p-3 border">無償PoC枠・営業支援資料・共同セールス</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">インテグレーションパートナー</td>
                  <td className="p-3 border">自社案件にMonitlyを組込み</td>
                  <td className="p-3 border">AIベンダー、ソリューション企業</td>
                  <td className="p-3 border">SDK/API特別条件・技術支援・共同マーケティング</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">エンベデッドパートナー</td>
                  <td className="p-3 border">自社製品にMonitlyの評価機能をOEM組込み</td>
                  <td className="p-3 border">SaaS企業、LLMプロバイダー</td>
                  <td className="p-3 border">OEM契約・再販権・共同ブランド・専用サポート</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">参加のメリット</h2>
          <ul className="space-y-3 list-disc list-inside text-sm">
            <li>SDK/API連携・PoC伴走・評価設計支援・導入サポート</li>
            <li>PoC期間中の特別条件でのライセンス提供</li>
            <li>共同ブランド展開・展示会やイベントでの共催</li>
            <li>Monitly公式サイトでの製品紹介・連携事例掲載</li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">主なパートナー候補（2025年10月時点）</h2>
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li>ジンベイ株式会社：生成AIソリューション開発・RAG構築支援</li>
            <li>Irwin & Co 株式会社：AI戦略コンサルティング・企業導入支援</li>
            <li>※今後、教育・インフラ・プロンプトエンジニアリング領域へも拡大予定</li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">参加までの流れ</h2>
          <ol className="list-decimal list-inside space-y-3 text-sm">
            <li>お問い合わせ・申請（hioki@aradia.asia へご連絡ください）</li>
            <li>ヒアリング・適合確認（事業領域・体制・技術構成を確認）</li>
            <li>契約・共同活動開始（SDK利用、PoC支援、共同プロモーションを開始）</li>
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">将来展望</h2>
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li>Monitlyパートナーマーケットプレイスの公開（評価対応ソリューション一覧）</li>
            <li>共通評価テンプレート／データセットの共同開発</li>
            <li>年次イベント「Monitly Partner Summit」開催予定</li>
          </ul>
        </section>

        <section className="mt-20 text-center">
          <p className="text-lg font-semibold mb-3">パートナープログラムへの参加・ご相談はこちら</p>
          <a
            href="mailto:hioki@aradia.asia"
            className="inline-block bg-[#0056FF] text-white px-6 py-3 rounded-xl font-semibold"
          >
            お問い合わせ
          </a>
        </section>
      </Container>
    </main>
  );
}

import Container from "@/components/Container";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="py-16 md:py-24 bg-white text-neutral-800">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">ソリューション</h1>

        <section className="space-y-8">
          <p>
            Monitly.AIは、生成AIの「運用評価」と「改善サイクル構築」を支援するプラットフォームです。
            導入後の精度・コスト・レイテンシを可視化し、開発と運用の橋渡しを行います。
          </p>
          <p>
            お客様の状況に応じて、データ基盤構築、プロンプトエンジニアリング、ローカルLLM導入支援、
            そしてパートナー企業との協業によるRAG・エージェント構築まで幅広く対応します。
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">主な提供ソリューション</h2>
          <ul className="space-y-4 list-disc list-inside text-sm">
            <li>RAG/エージェントの評価・運用可視化（Monitlyプラットフォーム）</li>
            <li>ローカルLLM導入・運用支援（オンプレ環境対応）</li>
            <li>データ基盤構築・ログ連携支援</li>
            <li>プロンプトエンジニアリングとSME評価設計</li>
            <li>パートナー企業による生成AIソリューション導入支援</li>
          </ul>
        </section>

        <section className="mt-24 bg-[#F7F9FA] rounded-2xl p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold mb-4">パートナー連携による導入支援</h2>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Monitly.AIでは、生成AI導入を支援する各分野のパートナー企業と連携しています。
            RAG構築、エージェント開発、データ整備などをワンストップで支援し、
            Monitlyによる評価・改善の仕組み化をサポートします。
          </p>
          <Link
            href="/partners"
            className="inline-flex items-center bg-[#0056FF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0040cc]"
          >
            パートナープログラムを見る →
          </Link>
        </section>
      </Container>
    </main>
  );
}

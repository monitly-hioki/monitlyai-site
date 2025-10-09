import Container from "@/components/Container";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="py-16 md:py-24 bg-white text-neutral-800">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ソリューション</h1>
        <p className="text-neutral-600 max-w-3xl">
          Monitly.AIは、生成AIの導入と運用を「測れる仕組み」で支える評価プラットフォームです。
          上流のデータ整備から、導入・運用・改善まで、実践的なアプローチで支援します。
        </p>

        {/* 上流：AI導入のための土台づくり */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">上流：AI導入のための土台づくり</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-lg">データ基盤構築（AIが使える状態に整える）</div>
              <p className="mt-2 text-sm text-neutral-700">
                生成AIの導入は、まずデータを「活かせる状態」にすることから始まります。
                社内に散らばる情報や文書を整理し、AIが正確に理解・検索できるように構造化します。
                これにより、誤答や回答漏れを減らし、RAG・エージェントの精度向上に直結します。
              </p>
              <ul className="mt-3 text-sm list-disc list-inside text-neutral-600 space-y-1">
                <li>社内文書・FAQ・ナレッジの統合整理</li>
                <li>検索しやすいデータ設計・メタ情報整備</li>
                <li>AI活用を見据えた情報整理・運用ルール設計</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-lg">プロンプト評価・改善設計支援</div>
              <p className="mt-2 text-sm text-neutral-700">
                生成AIの出力品質は、プロンプトの設計と評価方法で大きく変わります。
                Monitlyでは、評価観点の設計から、改善サイクルの回し方までを体系的に支援。
                チームが共通の基準でプロンプトを改善できるようにします。
              </p>
              <ul className="mt-3 text-sm list-disc list-inside text-neutral-600 space-y-1">
                <li>評価観点（精度・自然さ・一貫性など）の設計</li>
                <li>SME（専門家）評価の仕組みづくり</li>
                <li>改善効果を数値で比較・検証</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 中流：RAG・エージェント導入支援 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">中流：RAG・エージェント導入支援（パートナー連携）</h2>
          <p className="text-neutral-700 mb-6">
            RAG構築やエージェント開発は、Monitlyの認定パートナーと連携して提供します。
            パートナーが開発・実装を担当し、Monitlyが「評価と改善の仕組み」を組み込みます。
            Monitlyを使わない導入支援も可能です。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-lg">協業による導入支援</div>
              <ul className="mt-3 text-sm list-disc list-inside text-neutral-600 space-y-1">
                <li>要件定義から構築までをワンストップで支援</li>
                <li>Monitlyによる評価設計・効果測定を併走</li>
                <li>技術検証（PoC）から本番導入まで一貫対応</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-lg">主なパートナー例</div>
              <ul className="mt-3 text-sm list-disc list-inside text-neutral-600 space-y-1">
                <li>ジンベイ株式会社：生成AIソリューション開発支援</li>
                <li>Irwin & Co 株式会社：AI導入コンサルティング支援</li>
                <li>その他、今後順次拡大予定</li>
              </ul>
              <Link href="/partners" className="inline-block mt-4 text-[#0056FF] font-semibold">
                パートナープログラムを見る →
              </Link>
            </div>
          </div>
        </section>

        {/* 下流：運用評価・継続改善 */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">下流：運用評価と継続改善</h2>
          <p className="text-neutral-700 mb-6">
            Monitly.AIプラットフォームの中心機能である「運用評価」。
            精度・コスト・レイテンシなどの指標を一元管理し、改善のサイクルを継続的に回します。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["構成比較", "モデル・プロンプト・Retrieverなど、構成ごとの性能を比較し、最適化。"],
              ["SMEレビュー統合", "人手評価と自動評価を組み合わせ、評価基準を統一。"],
              ["本番監視", "運用中の品質・コスト・応答速度をモニタリング。劣化兆候を検知。"],
              ["改善履歴の可視化", "誰がどの変更を行い、どう良くなったかを時系列で追跡。"],
              ["データ連携", "ログ連携・タグ付け・匿名化設定など柔軟に対応。"],
              ["再現性・監査", "実験・検証条件を記録し、再現性を確保。"],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">{t}</div>
                <p className="mt-2 text-sm text-neutral-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 導入プロセス */}
        <section className="mt-16 bg-[#F7F9FA] rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">導入プロセス（最短2〜8週間）</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["1. 現状診断", "データ環境・業務課題を整理し、AI導入の方向性を明確化。"],
              ["2. 設計", "評価指標・運用ルール・改善サイクルを設計。"],
              ["3. 実装", "RAG/エージェント構築＋Monitly評価基盤を接続。"],
              ["4. 運用・改善", "定期レビューと継続改善を実施。"],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-neutral-500">Step {i + 1}</div>
                <div className="mt-1 font-semibold">{t}</div>
                <p className="mt-2 text-sm text-neutral-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="font-semibold">PoC相談（無料）</div>
            <p className="mt-2 text-neutral-600 text-sm">
              最短2週間で評価設計・改善効果の検証を行います。
            </p>
            <Link href="/contact" className="inline-block mt-3 text-[#0056FF] font-semibold">
              お問い合わせ →
            </Link>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="font-semibold">パートナーとして協業</div>
            <p className="mt-2 text-neutral-600 text-sm">
              RAG・エージェント開発や評価連携で共に市場を拡大します。
            </p>
            <Link href="/partners" className="inline-block mt-3 text-[#0056FF] font-semibold">
              詳細を見る →
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}

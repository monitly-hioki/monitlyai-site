// app/product/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold">Monitly（モニトリー）</h1>
          <p className="mt-5 text-gray-700 text-lg leading-relaxed max-w-3xl">
            Monitly は、生成AI・RAG・エージェントの品質を「継続的に」上げ続けるための LLMOps プラットフォームです。
            評価ケースの標準化、構成比較、レビュー承認、運用監視までを一本化し、
            改善の意思決定を速く・確実にします。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモのご相談</Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">導入支援を見る</Link>
          </div>
        </div>
      </section>

      {/* 運用サイクル */}
      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Monitly が描く運用サイクル</h2>
          <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
            「データ取得 → 検証 → 評価 → 改善 → 運用」を循環フローとして捉え、チーム単位の継続的学習（Continuous Evaluation）を可能にします。
          </p>

          <figure className="mt-8 rounded-2xl border bg-white p-4 inline-block">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/screens/monitlycircle.png"
                alt="Monitly運用サイクル"
                className="w-full max-w-[700px] h-auto mx-auto"
                loading="eager"
                decoding="async"
              />
            </div>
            <figcaption className="mt-3 text-sm text-gray-600 text-center">
              データ取得／検証／評価／改善／運用を一体化し、改善の仮説検証を短サイクルで回します。
            </figcaption>
          </figure>

          <div className="mt-10 grid md:grid-cols-5 gap-4 text-sm text-gray-700 text-left">
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">データ取得</div>
              <div className="mt-1">本番ログや既存テストを収集。プライバシー配慮で追跡可能な形式に整備。</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">検証</div>
              <div className="mt-1">再現ケース化して条件固定。構成差分の比較検証が可能。</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">評価</div>
              <div className="mt-1">SMEレビュー＋自動指標を統合。チームで合意形成しやすい基準を維持。</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">改善</div>
              <div className="mt-1">プロンプト／Retriever／コーパス更新の効果を時系列で可視化。</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">運用</div>
              <div className="mt-1">KPI監視とアラート、承認済み構成のみ本番反映。リスクを抑えて継続運用。</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold">Monitly（モニトリー）</h1>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            生成AIの出力を継続的に評価・改善するための LLMOps プラットフォームです。PoC から本番運用まで、チーム全体での改善サイクルを定着させます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモのご相談</Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">導入支援を見る</Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Monitly が描く運用サイクル</h2>
          <p className="mt-3 text-gray-600">「データ取得 → 検証 → 評価 → 改善 → 運用」を一つの循環フローとして捉え、チームでの継続的学習（Continuous Evaluation）を可能にします。</p>
          <div className="mt-6 rounded-2xl border bg-white p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image src="/screens/monitly-cycle.png" alt="Monitly の運用サイクル" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">機能詳細</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">構成比較</h3>
              <p className="mt-2 text-sm text-gray-600">プロンプト・Retriever・データソースなど構成単位での差分を横並びで比較。精度・応答速度・コストへの影響を可視化します。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">ログ分析と再現検証</h3>
              <p className="mt-2 text-sm text-gray-600">本番ログを取り込み、類似パターンを抽出・束ねて再現。事象単位の原因追跡と改善立案を効率化します。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">レビュー・承認</h3>
              <p className="mt-2 text-sm text-gray-600">業務有識者（SME）のレビューをスコア化。自動指標と突き合わせ、承認済み構成のみを本番反映できます。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">ダッシュボードと履歴</h3>
              <p className="mt-2 text-sm text-gray-600">品質・コスト・応答速度などの KPI を横断可視化。変更と結果の関係を時系列で追跡します。</p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">運用・監視</div>
              <div className="mt-2 text-sm text-gray-700">メトリクス監視、しきい値アラート、レビュー進捗の見える化</div>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">接続性</div>
              <div className="mt-2 text-sm text-gray-700">OpenAI／Azure OpenAI／Anthropic 等。ローカル LLM（Ollama／LM Studio）は順次強化</div>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">認証・権限</div>
              <div className="mt-2 text-sm text-gray-700">SSO、ロール権限、監査ログ、IP 制限</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">画面イメージ</h2>
        </div>
        <div className="mt-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <figure className="rounded-2xl border bg-white p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image src="/screens/compare-ui.png" alt="構成比較画面" fill className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-gray-600">構成比較（プロンプト／Retriever／データソース）</figcaption>
          </figure>
          <figure className="rounded-2xl border bg-white p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image src="/screens/review-workflow.png" alt="レビュー・承認画面" fill className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-gray-600">レビュー・承認（差分確認と承認フロー）</figcaption>
          </figure>
          <figure className="rounded-2xl border bg-white p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image src="/screens/perfomance-ui.png" alt="性能・指標ビュー" fill className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-gray-600">性能・指標ビュー（精度／コスト／速度の俯瞰）</figcaption>
          </figure>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">導入形態</h2>
          <p className="mt-3 text-gray-600">SaaS・専用 VPC・オンプレミスなど、要件に合わせた柔軟な構成を選択可能です。</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">SaaS</h3>
              <p className="mt-2 text-sm text-gray-600">環境構築不要。最短 1 日で利用開始できます。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">専用 VPC</h3>
              <p className="mt-2 text-sm text-gray-600">自社クラウド上での独立運用。アクセス制御・監査ログ対応。</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">オンプレミス</h3>
              <p className="mt-2 text-sm text-gray-600">閉域ネットワーク・オフライン環境でも運用可能。</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">導入・デモのご相談</Link>
            <Link href="/news" className="px-5 py-3 rounded-xl border">最新のお知らせ</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

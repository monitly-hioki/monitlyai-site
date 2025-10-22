// app/product/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-10 py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Monitly（モニトリー）</h1>
          <p className="mt-5 text-gray-600 text-base md:text-lg">
            RAG／AIエージェントの評価・比較・改善・運用を一元化する LLMOps プラットフォームです。
            日本語UIと日本企業の運用要件に最適化し、PoCから本番まで継続的な品質向上を支援します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモ・機能説明のご相談</Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">導入支援の詳細</Link>
          </div>
        </div>
      </section>

      {/* 運用サイクル（公式トーンの図版） */}
      <section className="px-6 md:px-10 py-14 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Monitly が描く運用サイクル</h2>
          <p className="mt-3 text-gray-600">
            「データ取得 → 検証 → 評価 → 改善 → 運用」を一つの循環フローとして捉え、チーム単位での継続的学習（Continuous Evaluation）を可能にします。
          </p>
          <div className="mt-6 rounded-2xl border bg-white p-4">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/screens/monitly-cycle.png"
                alt="Monitlyの運用サイクル（データ取得→検証→評価→改善→運用）"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 機能ディープダイブ（TOPの“ハイライト”と役割分担） */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">機能ディープダイブ</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">比較スタジオ（A/B/多構成）</h3>
              <p className="mt-2 text-sm text-gray-600">
                プロンプト／Retriever／データソースなど構成単位で実験を定義。精度・再現率・コスト等を自動集計し、優位差をチャートで可視化します。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">評価セット & SMEレビュー</h3>
              <p className="mt-2 text-sm text-gray-600">
                業務ドメインに沿った評価テンプレートを用意。レビュワー割当・採点・コメントをワークフロー化し、承認ゲートで本番反映を制御します。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">ログリプレイ & フィードバック</h3>
              <p className="mt-2 text-sm text-gray-600">
                運用ログから“再現ケース”を生成し、類似パターンで束ねて分析。スレッドで議論した改善案を構成変更にひも付けて管理できます。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">変更履歴 & ロールバック</h3>
              <p className="mt-2 text-sm text-gray-600">
                誰が何を変更し、結果がどう変わったかを時系列で追跡。問題発生時は前バージョンへ安全にロールバックできます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UIギャラリー（見出しを洗練） */}
      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">UIギャラリー</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/compare-ui.png" alt="構成比較" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                構成比較（プロンプト／Retriever／データソースの差分）
              </figcaption>
            </figure>
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/review-workflow.png" alt="レビュー・承認フロー" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                レビュー・承認（差分確認と承認ワークフロー）
              </figcaption>
            </figure>
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/perfomance-ui.png" alt="性能・指標ビュー" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                性能・指標ビュー（精度／コスト／速度の俯瞰）
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 導入形態（製品ページに集約） */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">導入形態</h2>
          <p className="mt-3 text-gray-600">
            利用開始スピード、セキュリティ要件、社内インフラとの親和性にあわせて柔軟にお選びいただけます。
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">SaaS（最短導入）</h3>
              <p className="mt-1 text-sm text-gray-500">小規模チームやPoCに最適</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-4">
                <li>環境構築不要。最短1日で評価を開始</li>
                <li>ブラウザのみで運用負荷を最小化</li>
                <li>ワークスペース単位でログ・評価データを分離管理</li>
                <li>アラート通知・ダッシュボードを即利用可</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">専用VPC（プライベートクラウド）</h3>
              <p className="mt-1 text-sm text-gray-500">自社クラウドでの厳密な統制</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-4">
                <li>貴社クラウド上に専用環境を構築</li>
                <li>IP許可制やPrivateLink等のネットワーク制御</li>
                <li>監査ログ出力・KMS連携など拡張</li>
                <li>スケーリングやバックアップ方針を貴社基準に</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">オンプレミス（規制対応）</h3>
              <p className="mt-1 text-sm text-gray-500">オンプレミス環境・厳格ガバナンス向け</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-4">
                <li>オンプレミス環境・検疫ネットワークでの運用</li>
                <li>Kubernetes／Docker によるデプロイ</li>
                <li>更新パッケージ配布・オフライン運用</li>
                <li>監査・保存ポリシーを社内規程に準拠</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">認証・権限</div>
              <div className="mt-2 text-sm text-gray-700">SSO、ロール権限、監査ログ、IP制限</div>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">モデル接続</div>
              <div className="mt-2 text-sm text-gray-700">
                OpenAI／Azure OpenAI／Anthropic 等。ローカルLLM（Ollama／LM Studio）は強化予定
              </div>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">運用</div>
              <div className="mt-2 text-sm text-gray-700">メトリクス監視、アラート通知、バックアップ方針</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモ・機能説明のご相談</Link>
            <Link href="/news" className="px-5 py-3 rounded-xl border">最新のお知らせ</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

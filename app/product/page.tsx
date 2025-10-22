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
          <p className="mt-5 text-gray-700 text-lg leading-relaxed">
            生成AIの品質を“継続的に”上げ続けるための LLMOps プラットフォーム。評価ケースの標準化、構成比較、レビュー承認、運用監視までを一本化し、改善の意思決定を速く・確実にします。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモのご相談</Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">導入支援を見る</Link>
          </div>
        </div>
      </section>

      {/* 運用サイクル */}
      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Monitly が描く運用サイクル</h2>
          <p className="mt-3 text-gray-700">
            「データ取得 → 検証 → 評価 → 改善 → 運用」を循環フローとして捉え、チーム単位の継続的学習（Continuous Evaluation）を可能にします。
          </p>

          <div className="mt-6 rounded-2xl border bg-white p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/screens/monitly-cycle.png"
                alt="Monitly の運用サイクル"
                fill
                unoptimized
                sizes="(min-width: 768px) 70vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-5 gap-4 text-sm text-gray-700">
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
              <div className="mt-1">SME レビュー＋自動指標を統合。チームで合意形成しやすい基準を維持。</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">改善</div>
              <div className="mt-1">プロンプト／Retriever／コーパス更新の効果を時系列で可視化。</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">運用</div>
              <div className="mt-1">KPI 監視とアラート、承認済み構成のみ本番反映。リスクを抑えて継続運用。</div>
            </div>
          </div>
        </div>
      </section>

      {/* 機能詳細（コピー拡張） */}
      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">機能詳細</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">構成比較</h3>
              <p className="mt-2 text-sm text-gray-700">
                プロンプト、Retriever、データソースを構成単位で管理。A/B 比較で精度・速度・コストのトレードオフを数値で判断できます。改善前後の差分は自動でハイライトされ、承認履歴と紐づきます。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">ログ分析と再現検証</h3>
              <p className="mt-2 text-sm text-gray-700">
                本番ログから類似パターンを抽出・束ね、代表ケースに再現。発生頻度が高い/影響が大きい事象を優先的に潰せます。データ更新の影響範囲もケース単位で追えます。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">レビュー・承認（SME 統合）</h3>
              <p className="mt-2 text-sm text-gray-700">
                業務有識者のレビューをスコア化し、自動指標と突き合わせ。差分確認→承認→本番反映までをワークフロー化し、品質ゲートを明確にします。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">ダッシュボードと履歴</h3>
              <p className="mt-2 text-sm text-gray-700">
                精度・応答速度・コスト・モニタリングの各 KPI を横断表示。アラートと改善履歴を一つのタイムラインで追えるため、打ち手の効果を説明しやすくなります。
              </p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">運用・監視</div>
              <div className="mt-2 text-sm text-gray-700">しきい値アラート、レビュー進捗、構成ごとの安定度トラッキング</div>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">接続性</div>
              <div className="mt-2 text-sm text-gray-700">OpenAI／Azure OpenAI／Anthropic 等。ローカル LLM（Ollama／LM Studio）は順次強化</div>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">認証・権限</div>
              <div className="mt-2 text-sm text-gray-700">SSO、ロール権限、監査ログ、IP 制限。ワークスペース/プロジェクト単位で分離管理</div>
            </div>
          </div>
        </div>
      </section>

      {/* 画面イメージ（見出しをコーポレート寄りに） */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">製品画面</h2>
        </div>
        <div className="mt-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <figure className="rounded-2xl border bg-white p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/screens/compare-ui.png"
                alt="構成比較画面"
                fill
                unoptimized
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-gray-600">
              構成比較：プロンプト／Retriever／データソースの差分を横並びで把握
            </figcaption>
          </figure>
          <figure className="rounded-2xl border bg-white p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/screens/review-workflow.png"
                alt="レビューと承認"
                fill
                unoptimized
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-gray-600">
              レビュー・承認：差分確認→承認→本番反映までをワークフローで管理
            </figcaption>
          </figure>
          <figure className="rounded-2xl border bg-white p-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="/screens/perfomance-ui.png"
                alt="性能・指標ビュー"
                fill
                unoptimized
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-gray-600">
              性能・指標：精度／応答速度／コストを俯瞰し、改善効果を可視化
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 導入形態（要点に絞って重複を避ける） */}
      <section className="px-6 md:px-10 py-16 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">導入形態</h2>
          <p className="mt-3 text-gray-700">
            SaaS・専用 VPC・オンプレミスから選択可能。社内セキュリティ/監査要件やネットワーク制約に合わせて展開できます。
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">SaaS</h3>
              <ul className="mt-2 text-sm text-gray-700 list-disc pl-4 space-y-1">
                <li>環境構築不要：最短 1 日で評価開始</li>
                <li>運用負荷最小：ブラウザ中心で利用</li>
                <li>ワークスペース分離：ログ/評価データを安全に管理</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">専用 VPC</h3>
              <ul className="mt-2 text-sm text-gray-700 list-disc pl-4 space-y-1">
                <li>貴社クラウド上に専用環境を構築</li>
                <li>IP 許可制・PrivateLink 等のネットワーク制御</li>
                <li>監査ログ外部出力・KMS 連携・バックアップ方針を貴社基準に</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">オンプレミス</h3>
              <ul className="mt-2 text-sm text-gray-700 list-disc pl-4 space-y-1">
                <li>閉域/検疫ネットワークでの運用に対応</li>
                <li>Kubernetes / Docker デプロイ、オフライン更新</li>
                <li>社内規程準拠の監査・保存ポリシー運用</li>
              </ul>
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

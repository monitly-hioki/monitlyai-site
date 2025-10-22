// app/product/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-10 py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Monitly（モニトリー）
          </h1>
          <p className="mt-5 text-gray-600 text-base md:text-lg">
            生成AI（RAG／エージェント）の評価・比較・改善・運用を一つのワークフローに統合。
            日本語UIと日本企業の運用要件に最適化し、PoCから本番まで継続的な品質向上を支援します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow transition hover:opacity-90"
            >
              デモのご相談
            </Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">
              導入支援を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Product narrative (重複なし：ホームの“ハイライト”ではなく、狙いを説明) */}
      <section className="px-6 md:px-10 py-14 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            評価を運用に組み込み、改善を止めない
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">現場データで回す</h3>
              <p className="mt-2 text-sm text-gray-600">
                本番ログやレビュー結果を評価に直結。机上のベンチではなく、実運用に即した改善を継続できます。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">チームで回す</h3>
              <p className="mt-2 text-sm text-gray-600">
                担当者・SME・運用の役割をまたいで、差分の確認・承認・ロールバックまでを一貫管理。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">監査とガバナンス</h3>
              <p className="mt-2 text-sm text-gray-600">
                操作履歴・評価根拠・承認経路を可視化。SaaS／専用VPC／オンプレに柔軟対応します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monitly Cycle */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Monitly が描く運用サイクル</h2>
          <p className="mt-4 text-gray-600">
            「データ取得 → 検証 → 評価 → 改善 → 運用」をひとつの循環フローとして捉え、
            チーム単位での継続的学習（Continuous Evaluation）を実現します。
          </p>
          <div className="mt-10 relative aspect-[16/9] max-w-3xl mx-auto rounded-2xl overflow-hidden border bg-gray-50">
            <Image
              src="/screens/monitly-cycle.png"
              alt="Monitlyの運用サイクル（データ取得→検証→評価→改善→運用）"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Deep capabilities（ホームと差別化：より具体的・実務寄り） */}
      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">主要機能（詳細）</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">ケース定義／データセット管理</h3>
              <p className="mt-2 text-sm text-gray-600">
                本番ログやテスト入力から評価単位を整理し、再利用可能なケースとして管理。対象カテゴリや難易度、想定ユースケースでフィルタリング可能。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">構成比較（プロンプト／Retriever／データソース）</h3>
              <p className="mt-2 text-sm text-gray-600">
                設定差分を横並びで比較し、精度・応答時間・コスト・再現率などへの影響を可視化。改善の打ち手を数値で判断できます。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">本番ログの取り込みと再現検証</h3>
              <p className="mt-2 text-sm text-gray-600">
                ログを安全に収集し、事象パターンで束ねて条件固定の再現実行。原因分析から改善案のAB比較、ロールバックまで一元化。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">業務ドメインレビュー（SME）＆承認</h3>
              <p className="mt-2 text-sm text-gray-600">
                SMEコメントをスコア化し、自動指標と突き合わせ。差分確認→承認→本番反映の一連をプロジェクト単位で運用できます。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">運用ダッシュボード／SLOモニタリング</h3>
              <p className="mt-2 text-sm text-gray-600">
                品質・コスト・速度・失敗率などのKPIを一望。閾値超過時はアラート、改善の前後比較も同画面で確認可能。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <h3 className="font-medium">変更履歴・ロールバック・エビデンス出力</h3>
              <p className="mt-2 text-sm text-gray-600">
                いつ誰が何を変え、結果がどうなったかを時系列で追跡。承認ログと共にエビデンスとして出力できます。
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">
              機能について相談する
            </Link>
          </div>
        </div>
      </section>

      {/* Screenshots（ホームと非重複：比較／レビュー／パフォーマンス） */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">スクリーンショット</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/compare-ui.png" alt="構成比較（差分の効果を横並び可視化）" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                構成比較：プロンプト／Retriever／データソースの差分影響を定量把握
              </figcaption>
            </figure>

            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/review-workflow.png" alt="レビュー・承認ワークフロー" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                レビュー・承認：SMEスコア、差分確認、承認履歴を一元管理
              </figcaption>
            </figure>

            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                {/* ファイル名は perfomance-ui.png（タイポ）で配置済み */}
                <Image src="/screens/perfomance-ui.png" alt="性能・指標ビュー（品質／コスト／速度）" fill className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                性能指標：品質・コスト・応答速度を俯瞰、期間比較も可能
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Integrations & Deployment（ホームの“導入形態”と役割を分け、対応範囲にフォーカス） */}
      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">対応範囲とデプロイ</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">モデル接続</div>
              <div className="mt-2 text-sm text-gray-700">
                OpenAI／Azure OpenAI／Anthropic 等。ローカルLLM（Ollama／LM Studio）は対応強化予定。
              </div>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">認証・権限・監査</div>
              <div className="mt-2 text-sm text-gray-700">SSO、ロール権限、監査ログ、IP制限、操作履歴の保持。</div>
            </div>
            <div className="p-5 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">デプロイ形態</div>
              <div className="mt-2 text-sm text-gray-700">
                SaaS／専用VPC／オンプレミスから選択。ネットワーク制御やバックアップ方針に準拠可能。
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">
              導入・評価のご相談
            </Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">
              データ整備や検証支援を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

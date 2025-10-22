// app/product/page.tsx
import Image from "next/image";
import Link from "next/link";
import CycleDiagram from "./CycleDiagram";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold">Monitly（モニトリー）</h1>
          <p className="mt-5 text-gray-700 text-lg leading-relaxed">
            生成AIの品質を“継続的に”上げ続けるための LLMOps プラットフォーム。評価ケースの標準化、構成比較、
            レビュー承認、運用監視までを一本化し、改善の意思決定を速く・確実にします。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモのご相談</Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">導入支援を見る</Link>
          </div>
        </div>
      </section>

      {/* 運用サイクル（SVGに置換済） */}
      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Monitly が描く運用サイクル</h2>
          <p className="mt-3 text-gray-700">
            「データ取得 → 検証 → 評価 → 改善 → 運用」を循環フローとして捉え、チーム単位の継続的学習（Continuous Evaluation）を可能にします。
          </p>

- <div className="mt-6 rounded-2xl border bg-white p-4">
-   - <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
-   <svg viewBox="0 0 800 800" className="w-full h-auto" role="img" aria-label="Monitly の運用サイクル（データ取得→検証→評価→改善→運用）">
+ <div className="mx-auto max-w-[820px]">
+   <svg
+     viewBox="0 0 800 800"
+     preserveAspectRatio="xMidYMid meet"
+     className="block w-full h-auto"
+     role="img"
+     aria-label="Monitly の運用サイクル（データ取得→検証→評価→改善→運用）"
+   >
      {/* 以下 SVG の中身はそのまま */}
   </svg>
 </div>

-     <svg ...>（省略）</svg>
-   </div>
- </div>
+ <figure className="mt-6 rounded-2xl border bg-white p-4">
+   <div className="mx-auto max-w-[820px]">
+     <svg ... className="block w-full h-auto">（中身は今のSVGそのまま）</svg>
+   </div>
+   <figcaption className="mt-3 text-sm text-gray-600">
+     データ取得／検証／評価／改善／運用を一体化し、改善の仮説検証を短サイクルで回します。
+   </figcaption>
+ </figure>





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

      {/* 機能詳細 */}
      <section className="px-6 md:px-10 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">機能詳細</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">構成比較</h3>
              <p className="mt-2 text-sm text-gray-700">
                プロンプト、Retriever、データソースを構成単位で管理。A/B 比較で精度・速度・コストのトレードオフを数値で判断。
                改善前後の差分は自動ハイライト、承認履歴と紐づけて説明容易に。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">ログ分析と再現検証</h3>
              <p className="mt-2 text-sm text-gray-700">
                本番ログから類似パターンを自動グループ化し代表ケース化。頻度×影響で優先度付けし、修正→再検証を短サイクル化。
                データ更新の影響範囲もケース単位で追跡可能。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">レビュー・承認（SME 統合）</h3>
              <p className="mt-2 text-sm text-gray-700">
                業務有識者のレビューをスコア化し、自動指標と突き合わせ。差分確認→承認→本番反映をワークフロー化し、
                品質ゲートを明確化、属人性を排除。
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">ダッシュボードと履歴</h3>
              <p className="mt-2 text-sm text-gray-700">
                精度・応答速度・コスト・アラートを横断表示。改善履歴と KPI を同時系列で可視化し、施策の因果を説明しやすく、
                監査対応にも有効。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 製品画面（スクリーンショット 3枚） */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">製品画面</h2>
        </div>
        <div className="mt-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <figure className="rounded-2xl border bg-white p-4">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/screens/compare-ui.png"
                alt="構成比較画面"
                width={1600}
                height={900}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-gray-600">
              構成比較：プロンプト／Retriever／データソースの差分を横並びで把握
            </figcaption>
          </figure>

          <figure className="rounded-2xl border bg-white p-4">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/screens/review-workflow.png"
                alt="レビューと承認ワークフロー"
                width={1600}
                height={900}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-gray-600">
              レビュー・承認：差分確認→承認→本番反映までをワークフローで管理
            </figcaption>
          </figure>

          <figure className="rounded-2xl border bg-white p-4">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/screens/perfomance-ui.png" /* 綴りそのまま */
                alt="性能・指標ビュー"
                width={1600}
                height={900}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-gray-600">
              性能・指標：精度／応答速度／コストを俯瞰し、改善効果を可視化
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 対応環境・セキュリティ */}
      <section className="px-6 md:px-10 py-16 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">対応環境・セキュリティ</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">デプロイ形態</div>
              <div className="mt-2 text-sm text-gray-700">SaaS／専用 VPC／オンプレミス</div>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">モデル接続</div>
              <div className="mt-2 text-sm text-gray-700">OpenAI／Azure OpenAI／Anthropic 等。ローカル LLM（Ollama／LM Studio）は順次強化</div>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <div className="text-sm text-gray-500">認証・権限</div>
              <div className="mt-2 text-sm text-gray-700">SSO、ロール権限、監査ログ、IP 制限。WS/プロジェクト単位の分離管理</div>
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

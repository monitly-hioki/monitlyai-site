// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getSortedNews } from "./news/data";

function fmt(d: string) {
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export default async function Page() {
  const news = await getSortedNews();
  const latest = news.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-10 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            生成AIの「運用評価」を標準化し、改善を加速する
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Monitly.AI は、RAG・AIエージェントの出力品質を継続的に評価し、チームで改善を回すための LLMOps プラットフォームです。
            日本語UI／日本企業の運用要件に最適化。PoCから本番まで一貫してご利用いただけます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモを見る</Link>
            <Link href="/product" className="px-5 py-3 rounded-xl border">製品を見る</Link>
            <Link href="/solutions" className="px-5 py-3 rounded-xl border">導入支援</Link>
          </div>

          {/* Screenshots (画像を /public/screens に置いたら自動で表示) */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <figure className="rounded-2xl border bg-white p-4">
              {/* 画像を配置済みなら下2行を活かす。未配置なら自動でグレー枠だけ表示 */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/ops-dashboard.png" fill alt="運用ダッシュボード" className="object-cover hidden md:block" />
                <div className="md:hidden h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">運用ダッシュボード（品質・コスト・応答速度・アラート）</figcaption>
            </figure>
            <figure className="rounded-2xl border bg-white p-4">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image src="/screens/improvement-history.png" fill alt="精度改善履歴" className="object-cover hidden md:block" />
                <div className="md:hidden h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">精度改善履歴（変更と結果を時系列に追跡）</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-10 py-14 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Monitly が選ばれる理由</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">評価を“現場の標準”に</h3>
              <p className="mt-2 text-sm text-gray-600">
                SMEレビュー・自動指標・ログ管理を統合。属人的な評価を脱却し、再現可能な改善サイクルを定着させます。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">RAG/エージェント特化</h3>
              <p className="mt-2 text-sm text-gray-600">
                プロンプト差分・Retriever設定・データ更新の効果を横並び比較。実運用の“使われ方”に効く評価ができます。
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-white hover:shadow-sm transition">
              <h3 className="font-medium">日本の運用要件に適合</h3>
              <p className="mt-2 text-sm text-gray-600">
                日本語UI、監査ログ、データ保管に配慮。SaaS／オンプレ両対応で、社内ポリシーや規制要件にも柔軟に適合します。
              </p>
            </div>
          </div>
        </div>
      </section>

   {/* Feature highlight */}
<section className="px-6 md:px-10 py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold">機能ハイライト</h2>
    <ul className="mt-6 grid md:grid-cols-2 gap-4 text-gray-700">
      <li className="p-5 rounded-xl border bg-white">
        <h3 className="font-medium">構成比較（プロンプト／Retriever／データソース）</h3>
        <p className="mt-2 text-sm text-gray-600">
          モデルやプロンプトの設定差分を横並びで比較し、どの要素が精度や応答速度に影響しているかを特定します。
        </p>
      </li>
      <li className="p-5 rounded-xl border bg-white">
        <h3 className="font-medium">ログ収集・グルーピング／ケース再現</h3>
        <p className="mt-2 text-sm text-gray-600">
          本番運用中のログを安全に収集し、再現ケースを自動生成。改善サイクルのトレーサビリティを実現します。
        </p>
      </li>
      <li className="p-5 rounded-xl border bg-white">
        <h3 className="font-medium">SMEレビュー統合と承認フロー</h3>
        <p className="mt-2 text-sm text-gray-600">
          専門家や担当者によるレビューをスコア化し、チーム全体で改善を推進。承認・差分確認も一元化。
        </p>
      </li>
      <li className="p-5 rounded-xl border bg-white">
        <h3 className="font-medium">運用ダッシュボード＆改善履歴の可視化</h3>
        <p className="mt-2 text-sm text-gray-600">
          品質・コスト・速度などの指標をリアルタイムに監視し、改善履歴を時系列で追跡できます。
        </p>
      </li>
    </ul>
    <div className="mt-8">
      <a href="/product" className="px-5 py-3 rounded-xl bg-black text-white">機能の詳細へ</a>
    </div>
  </div>
</section>


import Link from "next/link";
import { getSortedNews } from "@/app/news/data";
import { Suspense } from "react";

function formatDate(d: string) {
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

function NewsSkeleton() {
  return (
    <div className="mt-6 grid md:grid-cols-3 gap-5">
      {[0,1,2].map(i => (
        <div key={i} className="rounded-2xl border bg-white p-5 animate-pulse">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="mt-2 h-3 w-16 bg-gray-200 rounded" />
          <div className="mt-3 h-5 w-3/4 bg-gray-200 rounded" />
          <div className="mt-2 h-4 w-full bg-gray-200 rounded" />
          <div className="mt-2 h-4 w-5/6 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}

async function LatestNewsList() {
  const latest = (await getSortedNews()).slice(0, 3);

  return (
    <div className="mt-6 grid md:grid-cols-3 gap-5">
      {latest.map(n => (
        <article key={n.slug} className="group relative rounded-2xl border bg-white p-5 hover:shadow-sm transition">
          <Link
            href={`/news/${n.slug}`}
            aria-label={`${n.title} を読む`}
            className="absolute inset-0"
          />
          <time className="text-sm text-gray-500" dateTime={n.date}>
            {formatDate(n.date)}
          </time>
          {n.label && <div className="text-xs inline-block mt-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{n.label}</div>}
          <h3 className="mt-2 font-medium pr-6">{n.title}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{n.summary}</p>
          <span className="mt-3 inline-block text-blue-600 text-sm">続きを読む →</span>
        </article>
      ))}
    </div>
  );
}

export function LatestNewsSection() {
  return (
    <section className="px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">最新のお知らせ</h2>
          <Link href="/news" className="text-sm text-blue-600">すべて見る →</Link>
        </div>
        <Suspense fallback={<NewsSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <LatestNewsList />
        </Suspense>
      </div>
    </section>
  );
}


{/* Deployment options */}
<section className="px-6 md:px-10 py-16 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold">導入形態</h2>
    <p className="mt-3 text-gray-600">
      利用開始スピード、セキュリティ要件、社内インフラとの親和性にあわせて柔軟に選べます。
    </p>

    <div className="mt-8 grid md:grid-cols-3 gap-5">
      <div className="p-6 rounded-2xl border bg-white">
        <h3 className="font-medium">SaaS（最短導入）</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-4">
          <li>環境構築不要。最短1日で評価を開始</li>
          <li>ブラウザアクセスのみ。運用負荷を最小化</li>
          <li>ログ・評価データはワークスペース単位で分離管理</li>
          <li>アラート通知・ダッシュボードを即利用可</li>
        </ul>
      </div>

      <div className="p-6 rounded-2xl border bg-white">
        <h3 className="font-medium">専用VPC（プライベートクラウド）</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-4">
          <li>貴社クラウドアカウント上に専用環境を構築</li>
          <li>IP許可制やPrivateLink等のネットワーク制御に対応</li>
          <li>監査ログの外部出力やキーマネジメントと連携</li>
          <li>スケーリングやバックアップ方針を貴社基準で運用</li>
        </ul>
      </div>

      <div className="p-6 rounded-2xl border bg-white">
        <h3 className="font-medium">オンプレミス（閉域・規制対応）</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-4">
          <li>閉域網・検疫ネットワークでの運用に対応</li>
          <li>Kubernetes/Dockerベースのデプロイ</li>
          <li>更新パッケージ配布・オフライン運用に対応</li>
          <li>監査・保存ポリシーを社内規程に準拠</li>
        </ul>
      </div>
    </div>

    <div className="mt-10 grid md:grid-cols-3 gap-5">
      <div className="p-5 rounded-2xl border bg-gray-50">
        <div className="text-sm text-gray-500">認証・権限</div>
        <div className="mt-2 text-sm text-gray-700">SSO、ロール権限、監査ログ、IP制限</div>
      </div>
      <div className="p-5 rounded-2xl border bg-gray-50">
        <div className="text-sm text-gray-500">モデル接続</div>
        <div className="mt-2 text-sm text-gray-700">
          OpenAI/Azure OpenAI/Anthropic等。ローカルLLM（Ollama/LM Studio）は強化予定
        </div>
      </div>
      <div className="p-5 rounded-2xl border bg-gray-50">
        <div className="text-sm text-gray-500">運用</div>
        <div className="mt-2 text-sm text-gray-700">メトリクス監視、アラート通知、バックアップ方針</div>
      </div>
    </div>

    <div className="mt-8 flex flex-wrap gap-3">
      <a href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">導入・デモのご相談</a>
      <a href="/product" className="px-5 py-3 rounded-xl border">製品の詳細</a>
      <a href="/solutions" className="px-5 py-3 rounded-xl border">ユースケース</a>
    </div>
  </div>
</section>


    </main>
  );
}

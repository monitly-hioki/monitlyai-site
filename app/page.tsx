import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold">Monitly（モニトリー）</h1>
          <p className="mt-5 text-gray-700 text-lg leading-relaxed max-w-3xl">
            生成AI・RAG・エージェントの品質改善を継続的に回す LLMOps プラットフォーム。
            テスト・比較・承認・運用監視をひとつにまとめ、改善の意思決定を速く・確実にします。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-black text-white">デモのご相談</Link>
            <Link href="/product" className="px-5 py-3 rounded-xl border">製品を見る</Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 border-t bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">できること</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-4 text-sm text-gray-700 text-left">
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">構成比較</div>
              <div className="mt-1">プロンプトやRetrieverの変更を安全に比較・承認。</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">再現検証</div>
              <div className="mt-1">本番ログをケース化し、影響範囲を特定。</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">ダッシュボード</div>
              <div className="mt-1">精度・速度・コスト・アラートを横断可視化。</div>
            </div>
            <div className="p-4 rounded-xl border bg-gray-50">
              <div className="font-medium">ガバナンス</div>
              <div className="mt-1">承認済み構成のみ反映し、監査に耐える履歴を保持。</div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/product" className="inline-block rounded-xl bg-black text-white px-5 py-3">詳しい機能を見る</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

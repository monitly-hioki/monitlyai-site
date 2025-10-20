import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-medium">製品</div>
            <ul className="mt-3 space-y-2">
              <li><Link href="/product" className="hover:underline">製品概要</Link></li>
              <li><Link href="/solutions" className="hover:underline">ソリューション</Link></li>
              <li><Link href="/news" className="hover:underline">お知らせ</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">会社</div>
            <ul className="mt-3 space-y-2">
              <li><Link href="/company" className="hover:underline">会社情報</Link></li>
              <li><Link href="/partners" className="hover:underline">パートナープログラム</Link></li>
              <li><Link href="/contact" className="hover:underline">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">ポリシー</div>
            <ul className="mt-3 space-y-2">
              <li><Link href="/terms" className="hover:underline">利用規約</Link></li>
              <li><Link href="/privacy" className="hover:underline">プライバシー</Link></li>
              <li><Link href="/security" className="hover:underline">セキュリティ</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Monitly.AI</div>
            <p className="mt-3 text-gray-600">RAG / AIエージェントの運用評価と改善を仕組み化する LLMOps プラットフォーム。</p>
            <div className="mt-4">
              <Link href="/contact" className="inline-block rounded-xl bg-black text-white px-4 py-2">デモを依頼</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()} Monitly.AI
        </div>
      </div>
    </footer>
  );
}

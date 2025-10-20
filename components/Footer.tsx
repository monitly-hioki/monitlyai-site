import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* 会社 */}
          <nav aria-label="会社">
            <div className="font-medium">会社</div>
            <ul className="mt-3 space-y-2">
              <li><Link href="/company" className="hover:underline">会社情報</Link></li>
              <li><Link href="/partners" className="hover:underline">パートナープログラム</Link></li>
              <li><Link href="/contact" className="hover:underline">お問い合わせ</Link></li>
            </ul>
          </nav>

          {/* 製品 */}
          <nav aria-label="製品">
            <div className="font-medium">製品</div>
            <ul className="mt-3 space-y-2">
              <li><Link href="/product" className="hover:underline">製品概要</Link></li>
              <li><Link href="/solutions" className="hover:underline">ソリューション</Link></li>
              <li><Link href="/news" className="hover:underline">お知らせ</Link></li>
            </ul>
          </nav>

          {/* リソース */}
          <nav aria-label="リソース">
            <div className="font-medium">リソース</div>
            <ul className="mt-3 space-y-2">
              <li><Link href="/security" className="hover:underline">セキュリティポリシー</Link></li>
              <li><Link href="/privacy" className="hover:underline">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="hover:underline">利用規約</Link></li>
            </ul>
          </nav>

          {/* ブランド & 住所 & CTA */}
          <div>
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Monitly.AI ロゴ"
                width={120}
                height={32}
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-gray-600 leading-6">
              RAG / AIエージェントの運用評価と改善を仕組み化する LLMOps プラットフォーム。
            </p>
            <p className="mt-4 text-gray-500 text-xs leading-5">
              〒141-0033 東京都品川区西品川１丁目１−１<br />
              住友不動産大崎ガーデンタワー 9階
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block rounded-xl bg-black text-white px-4 py-2 hover:bg-gray-800 transition"
              >
                デモを依頼
              </Link>
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

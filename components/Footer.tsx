import Link from "next/link";
import Container from "@/components/Container";
export default function Footer(){
  return (
    <footer className="w-full bg-neutral-900 text-neutral-300">
      <Container className="py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-white">Monitly.AI株式会社</div>
            <div className="text-sm mt-2">〒141-0033 東京都品川区西品川1-1-1 TUNNEL TOKYO 9F</div>
          </div>
          <div>
            <div className="font-semibold text-white">Company</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/company" className="hover:underline">会社情報</Link></li>
              <li><Link href="/news" className="hover:underline">お知らせ</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Legal</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/privacy" className="hover:underline">プライバシー</Link></li>
              <li><Link href="/terms" className="hover:underline">利用規約</Link></li>
              <li><Link href="/security" className="hover:underline">セキュリティ声明</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Contact</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/contact" className="hover:underline">デモ予約</Link></li>
              <li><a href="mailto:hioki@aradia.asia" className="hover:underline">hioki@aradia.asia</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-neutral-700 text-sm">© {new Date().getFullYear()} Monitly.AI Inc. All rights reserved.</div>
      </Container>
    </footer>
  )
}

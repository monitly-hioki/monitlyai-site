import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://monitlyai-site.vercel.app"),
  title: { default: "Monitly.AI｜RAG/エージェント評価と運用可視化 LLMOps", template: "%s｜Monitly.AI" },
  description: "RAGとAIエージェントの“結果”を可視化し、継続的に良くする。評価・比較・運用をひとつのダッシュボードで。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://monitlyai-site.vercel.app/",
    siteName: "Monitly.AI",
    title: "Monitly.AI｜RAG/エージェント評価と運用可視化 LLMOps",
    description: "RAGとAIエージェントの“結果”を可視化し、継続的に良くする。",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Monitly.AI｜RAG/エージェント評価と運用可視化 LLMOps",
    description: "RAGとAIエージェントの“結果”を可視化し、継続的に良くする。",
    images: ["/og/og-default.jpg"]
  },
  icons: { icon: "/favicon.ico" }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

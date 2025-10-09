import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Monitly.AI｜検索統合AI（RAG)/AI対話型AI（エージェント）の評価と運用可視化",
  description: "RAGとAI対話型AI（エージェント）の“結果”を可視化し、継続的に良くする。評価・比較・運用をひとつのダッシュボード（結果可視化)で。",
  icons: [{ rel: "icon", url: "/favicon.ico" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
<div className="text-center text-xs text-white bg-[#0056FF] py-1">BUILD: {process.env.NEXT_PUBLIC_COMMIT || (process.env.VERCEL_GIT_COMMIT_SHA ? process.env.VERCEL_GIT_COMMIT_SHA.slice(0,7) : "local") }</div>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

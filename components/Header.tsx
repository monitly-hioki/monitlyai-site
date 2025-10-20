"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-[#EAF2FF] to-white">
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-10 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="w-8 h-8 rounded-xl bg-[#0056FF]" />
          Monitly.AI
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <Link href="/product">製品</Link><Link href="/solutions" className="hover:text-neutral-900">
            ソリューション
          </Link>
            
          <Link href="/news" className="hover:text-neutral-900">
            お知らせ
          </Link>
          <Link href="/company" className="hover:text-neutral-900">
            会社情報
          </Link>
          <Link href="/partners" className="hover:text-neutral-900">
            パートナープログラム
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-2xl bg-[#0056FF] text-white px-5 py-2 font-semibold"
          >
            デモを見る
          </Link>
        </nav>

        <button
          className="md:hidden text-neutral-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 space-y-3">
          <Link href="/solutions" className="block">
            ソリューション
          </Link>
          <Link href="/news" className="block">
            お知らせ
          </Link>
          <Link href="/company" className="block">
            会社情報
          </Link>
          <Link href="/partners" className="block">
            パートナープログラム
          </Link>
          <Link
            href="/contact"
            className="block bg-[#0056FF] text-white px-4 py-2 rounded-xl text-center font-semibold"
          >
            デモを見る
          </Link>
        </div>
      )}
    </header>
  );
}

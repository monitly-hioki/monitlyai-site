"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-gradient-to-b from-[#EAF2FF] to-white"
        }`}
      >
        <div className="mx-auto max-w-container px-6 md:px-8 lg:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-neutral-900">
            {/* 余計な青い四角ロゴは置かない */}
            Monitly.AI
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
            <Link href="/product" className="hover:text-neutral-900">製品</Link>
            <Link href="/solutions" className="hover:text-neutral-900">ソリューション</Link>
            <Link href="/news" className="hover:text-neutral-900">お知らせ</Link>
            <Link href="/company" className="hover:text-neutral-900">会社情報</Link>
            <Link href="/partners" className="hover:text-neutral-900">パートナープログラム</Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-2xl bg-[#0056FF] text-white px-5 py-2 font-semibold hover:bg-[#0041CC]"
            >
              デモを見る
            </Link>
          </nav>

          <button
            className="md:hidden text-neutral-700"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="メニュー開閉"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 space-y-3">
            <Link href="/product" className="block">製品</Link>
            <Link href="/solutions" className="block">ソリューション</Link>
            <Link href="/news" className="block">お知らせ</Link>
            <Link href="/company" className="block">会社情報</Link>
            <Link href="/partners" className="block">パートナープログラム</Link>
            <Link
              href="/contact"
              className="block bg-[#0056FF] text-white px-4 py-2 rounded-xl text-center font-semibold"
            >
              デモを見る
            </Link>
          </div>
        )}
      </header>

      {/* 固定ヘッダーの高さぶん余白を確保（約64px） */}
      <div className="h-16 md:h-[72px]" />
    </>
  );
}

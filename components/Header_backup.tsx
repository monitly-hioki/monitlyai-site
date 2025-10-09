import Link from "next/link";
export default function Header() {
  const link = (href: string, label: string) => (
    <Link href={href} className="hover:text-neutral-900">
      {label}
    </Link>
  );
  return (
    <header className="bg-gradient-to-b from-[#EAF2FF] to-white">
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-10 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="w-8 h-8 rounded-xl bg-[#0056FF]" />
          Monitly.AI
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          {" "}
          {link("/solutions", "Solutions")}
          {link("/news", "News")}
          {link("/company", "Company")}
          <Link
            href="/contact"
            className="inline-flex items-center rounded-2xl bg-[#0056FF] text-white px-5 py-2 font-semibold"
          >
            デモを見る
          </Link>
        </nav>
      </div>
    </header>
  );
}

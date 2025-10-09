import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";
import { NEWS } from "./data";

export default function NewsListPage() {
  const sorted = [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <section className="bg-gradient-to-b from-[#EAF2FF] to-white py-16 md:py-24">
        <Container>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            お知らせ
          </h1>
          <p className="mt-5 text-lg text-neutral-600 max-w-xl">
            最新ニュース・出展情報・機能アップデート。
          </p>
        </Container>
      </section>
      <Section title="最新情報">
        <div className="grid md:grid-cols-3 gap-6">
          {sorted.map((n) => (
            <Link
              key={n.slug}
              href={`/news/${n.slug}`}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-sm text-neutral-500">{n.date}</div>
              <div className="mt-1 text-[#0056FF] text-xs font-semibold">
                {n.category}
              </div>
              <div className="mt-2 text-lg font-semibold">{n.title}</div>
              <p className="mt-2 text-neutral-600 text-sm">{n.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

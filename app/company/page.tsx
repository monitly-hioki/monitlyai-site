import Section from "@/components/Section";
import Container from "@/components/Container";
import Image from "next/image";
export default function CompanyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#EAF2FF] to-white py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                会社情報
              </h1>
              <p className="mt-5 text-lg text-neutral-600 max-w-xl">
                RAGとAI対話型AI（エージェント）の「運用品質」を可視化し、継続的に改善する土台を提供します。
              </p>
            </div>
            <div className="relative">
              <Image
                src="/dashboard.png"
                alt="Monitly.AI"
                width={800}
                height={480}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </Container>
      </section>
      <Section title="会社概要" bg="soft">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "社名：Monitly.AI株式会社",
            "拠点：東京・ベトナム（後日更新）",
            "連絡先：hioki@aradia.asia",
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm text-neutral-600">{t}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

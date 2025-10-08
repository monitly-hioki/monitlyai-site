import Section from "@/components/Section";
export default function ContactPage(){
  return (
    <Section title="お問い合わせ" lead="デモのご依頼・PoCのご相談はこちらから。">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="font-semibold">フォーム（Tally例）</div>
          <p className="mt-2 text-neutral-600 text-sm">実運用URLに差し替えてください。</p>
          <div className="mt-4">
            <iframe src="https://tally.so/embed/m6qL2N?alignLeft=1&hideTitle=1" width="100%" height="600" frameBorder="0" title="Monitly.AI Contact Form" />
          </div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="font-semibold">直接のご連絡</div>
          <p className="mt-2 text-neutral-600 text-sm">メール：<a className="text-[#0056FF]" href="mailto:hioki@aradia.asia">hioki@aradia.asia</a></p>
          <p className="mt-1 text-neutral-600 text-sm">ご都合の良い時間帯をお知らせください。</p>
        </div>
      </div>
    </Section>
  )
}

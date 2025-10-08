import { notFound } from "next/navigation";
import { NEWS } from "../data";
import Container from "@/components/Container";
export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const post = NEWS.find((n) => n.slug === params.slug);
  if (!post) return notFound();
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-neutral-500">{post.date}</div>
          <div className="text-xs text-[#0056FF] font-semibold mt-1">{post.category}</div>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{post.title}</h1>
          <div className="mt-8 text-neutral-700 leading-relaxed whitespace-pre-wrap">{post.content.trim()}</div>
          <div className="mt-10"><a href="/news" className="text-[#0056FF] font-semibold">← ニュース一覧へ戻る</a></div>
        </div>
      </Container>
    </section>
  );
}

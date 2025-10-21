import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getSortedNews } from "../data";

function fmt(d: string) {
  const dt = new Date(d);
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export default async function NewsDetail({ params }: { params: { slug: string } }) {
  const news = await getSortedNews();
  const item = news.find((n) => n.slug === params.slug);
  if (!item) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto w-full max-w-4xl px-5 md:px-8 py-10 md:py-16">
        <div className="mb-6 md:mb-8">
          <Link
            href="/news"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            ← お知らせ一覧に戻る
          </Link>
        </div>

        <header className="mb-6 md:mb-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <time>{fmt(item.date)}</time>
            {item.label && (
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                {item.label}
              </span>
            )}
          </div>
          <h1 className="mt-3 md:mt-4 text-2xl md:text-4xl leading-tight font-semibold tracking-tight text-gray-900">
            {item.title}
          </h1>
        </header>

        <article
          className="
            rounded-2xl bg-white shadow-sm ring-1 ring-black/5
            p-5 md:p-8
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ node, ...props }) => (
                <h2
                  className="mt-10 mb-3 text-xl md:text-2xl font-semibold tracking-tight text-gray-900"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="mt-8 mb-2 text-lg md:text-xl font-semibold text-gray-900"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="my-4 leading-8 text-gray-800" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="my-4 list-disc pl-6 space-y-1.5 text-gray-800" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="my-4 list-decimal pl-6 space-y-1.5 text-gray-800" {...props} />
              ),
              li: ({ node, ...props }) => <li className="leading-7" {...props} />,
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-gray-900" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
                  {...props}
                />
              ),
              hr: () => <hr className="my-8 border-t border-gray-200" />,
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="my-6 border-l-4 border-gray-300 pl-4 italic text-gray-700"
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }: any) =>
                inline ? (
                  <code className="rounded bg-gray-100 px-1 py-0.5 text-[0.9em]" {...props} />
                ) : (
                  <code
                    className="block w-full overflow-x-auto rounded-lg bg-gray-900 px-4 py-3 text-sm text-gray-100"
                    {...props}
                  />
                ),
              table: ({ node, ...props }) => (
                <div className="my-6 overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-0 text-left text-sm" {...props} />
                </div>
              ),
              th: ({ node, ...props }) => (
                <th className="border-b border-gray-200 bg-gray-50 px-3 py-2 font-medium" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="border-b border-gray-100 px-3 py-2 align-top" {...props} />
              ),
            }}
          >
            {item.body || item.summary}
          </ReactMarkdown>
        </article>

        <div className="mt-10">
          <Link
            href="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            ← お知らせ一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

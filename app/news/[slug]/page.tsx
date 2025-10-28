export const dynamic = 'force-static'
export const dynamicParams = false

import manifest from "@/content/news/manifest.json"
import path from "path"
import fs from "fs/promises"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { notFound } from "next/navigation"

export async function generateStaticParams(){
  return (manifest.slugs || []).map(slug => ({ slug }))
}

export default async function NewsDetail({ params }: { params: { slug: string } }) {
  const file = path.join(process.cwd(), "content/news", `${params.slug}.md`)
  try {
    const raw = await fs.readFile(file, "utf8")
    const { data, content } = matter(raw)
    const title = String(data.title ?? "")
    const d: any = (data as any).date
    const date = typeof d === "string" ? d : d instanceof Date ? d.toISOString().slice(0,10) : ""
    return (
      <article className="px-6 md:px-10 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
          <div className="text-xs text-gray-500 mt-2">{date}</div>
          <div className="mt-8 prose-article">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </div>
      </article>
    )
  } catch {
    notFound()
  }
}

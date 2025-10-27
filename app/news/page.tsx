import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

export const metadata = {
  title: "お知らせ｜Monitly.AI",
  description: "Monitly.AIの最新ニュース・リリース情報・イベント出展情報をお届けします。"
}

export default async function NewsPage() {
  const dir = path.join(process.cwd(), "content/news")
  const files = await fs.readdir(dir)
  const posts = await Promise.all(
    files.filter(f => f.endsWith(".md")).map(async (file) => {
      const raw = await fs.readFile(path.join(dir, file), "utf8")
      const { data } = matter(raw)
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title ?? "",
        date: typeof data.date === "string" ? data.date : new Date(data.date).toISOString().slice(0, 10)
      }
    })
  )
  const sorted = posts.sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <main className="px-6 md:px-10 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-10">お知らせ</h1>
      <ul className="space-y-6">
        {sorted.map((p) => (
          <li key={p.slug}>
            <Link href={`/news/${p.slug}`} className="block group">
              <div className="text-sm text-gray-500">{p.date}</div>
              <div className="text-lg font-medium group-hover:underline">{p.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

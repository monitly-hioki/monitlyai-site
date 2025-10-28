import path from "path"
import fs from "fs/promises"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"

<<<<<<< HEAD
type Post = {
  slug: string
  title: string
  date: string
  hero?: string
  excerpt: string
}

function toExcerpt(md: string, max = 120) {
  const text = md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/[#>*_~\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  return text.length > max ? text.slice(0, max) + "…" : text
}

export const revalidate = 60

export default async function NewsIndex() {
  const dir = path.join(process.cwd(), "content/news")
  const files = await fs.readdir(dir)
  const items: Post[] = []

  for (const f of files.filter(v => v.endsWith(".md"))) {
    const slug = f.replace(/\.md$/, "")
    const raw = await fs.readFile(path.join(dir, f), "utf8")
    const { data, content } = matter(raw)
    const title = String(data.title ?? "")
    const date = typeof data.date === "string" ? data.date : ""
    const hero = typeof (data as any).hero === "string" ? (data as any).hero : undefined
    const excerpt = String((data as any).excerpt ?? toExcerpt(content))
    items.push({ slug, title, date, hero, excerpt })
  }

  items.sort((a, b) => (a.date < b.date ? 1 : -1))

=======
type Item={slug:string;title:string;date:string;excerpt:string}

async function listNews():Promise<Item[]>{
  const dir=path.join(process.cwd(),"content/news")
  const files=await fs.readdir(dir).catch(()=>[])
  const items:Item[]=[]
  for(const f of files){
    if(!f.endsWith(".md")) continue
    const slug=f.replace(/\.md$/,"")
    const raw=await fs.readFile(path.join(dir,f),"utf8")
    const {data,content}=matter(raw)
    const title=String((data as any).title??"")
    const d=(data as any).date
    const date=typeof d==="string"?d:(d instanceof Date?d.toISOString().slice(0,10):"")
    const excerpt=(content||"").replace(/\n+/g," ").slice(0,140)
    items.push({slug,title,date,excerpt})
  }
  return items.sort((a,b)=>a.date<b.date?1:-1)
}

export default async function NewsIndex(){
  const items=await listNews()
>>>>>>> bf1d46f (feat(news): indexカード化・本文レイアウト改善; layoutヘッダー/フッター復帰; tailwindプラグイン導入)
  return (
    <main className="px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">お知らせ</h1>
<<<<<<< HEAD
        <p className="mt-3 text-sm text-zinc-600">最新順に表示しています。</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(post => (
            <Link
              href={`/news/${post.slug}`}
              key={post.slug}
              className="group rounded-2xl border bg-white hover:shadow-md transition-shadow"
              aria-label={post.title}
            >
              <div className="p-4">
                {post.hero ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-50">
                    <Image
                      src={post.hero}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 400px, 90vw"
                      className="object-cover group-hover:scale-105 transition-transform"
                      priority={false}
                    />
                  </div>
                ) : null}
                <div className="mt-4 text-xs text-zinc-500">{post.date}</div>
                <h2 className="mt-1 text-lg font-semibold leading-snug line-clamp-2">{post.title}</h2>
                <p className="mt-2 text-sm text-zinc-700 line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 text-sm font-medium text-blue-600">続きを読む →</div>
              </div>
=======
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(x=>(
            <Link key={x.slug} href={`/news/${x.slug}`} className="group rounded-2xl border p-5 hover:shadow-sm transition">
              <div className="text-xs text-gray-500">{x.date}</div>
              <h2 className="mt-2 text-lg font-semibold leading-snug group-hover:underline">{x.title}</h2>
              <p className="mt-3 text-sm text-gray-600 line-clamp-3">{x.excerpt}</p>
              <div className="mt-4 text-sm font-medium text-blue-600">続きを読む →</div>
>>>>>>> bf1d46f (feat(news): indexカード化・本文レイアウト改善; layoutヘッダー/フッター復帰; tailwindプラグイン導入)
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

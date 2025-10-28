import path from "path"
import fs from "fs/promises"
import matter from "gray-matter"
import Link from "next/link"

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
  return (
    <main className="px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">お知らせ</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(x=>(
            <Link key={x.slug} href={`/news/${x.slug}`} className="group rounded-2xl border p-5 hover:shadow-sm transition">
              <div className="text-xs text-gray-500">{x.date}</div>
              <h2 className="mt-2 text-lg font-semibold leading-snug group-hover:underline">{x.title}</h2>
              <p className="mt-3 text-sm text-gray-600 line-clamp-3">{x.excerpt}</p>
              <div className="mt-4 text-sm font-medium text-blue-600">続きを読む →</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

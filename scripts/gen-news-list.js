const fs=require('fs');const path=require('path');const matter=require('gray-matter');
const dir=path.join(process.cwd(),'content/news');
const files=fs.existsSync(dir)?fs.readdirSync(dir).filter(f=>f.endsWith('.md')):[];
const items=files.map(f=>{
  const slug=f.replace(/\.md$/,'');
  const raw=fs.readFileSync(path.join(dir,f),'utf8');
  const {data}=matter(raw);
  const dateRaw=data.date;
  const date=typeof dateRaw==='string'?dateRaw:(dateRaw instanceof Date?dateRaw.toISOString().slice(0,10):'');
  return {slug,title:String(data.title||slug),excerpt:String(data.excerpt||''),date};
}).sort((a,b)=>a.date<b.date?1:-1);
const out=`export type NewsItem = { slug: string; title: string; excerpt: string; date: string };\nexport const NEWS: NewsItem[] = ${JSON.stringify(items,null,2)};\n`;
fs.mkdirSync(path.join(process.cwd(),'app/news'),{recursive:true});
fs.writeFileSync(path.join(process.cwd(),'app/news/_list.ts'),out);
console.log('NEWS_ITEMS=',items.map(i=>i.slug));

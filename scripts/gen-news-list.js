const fs=require('fs'),path=require('path');
const ROOT=process.cwd(),NEWS_DIR=path.join(ROOT,'app','news'),OUT=path.join(NEWS_DIR,'_list.ts');
function getDirs(p){return fs.readdirSync(p,{withFileTypes:true}).filter(d=>d.isDirectory()&&fs.existsSync(path.join(p,d.name,'page.tsx'))&&!d.name.startsWith('_')).map(d=>d.name)}
function extractTitle(src){const m=src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);return m?m[1].replace(/\s+/g,' ').trim():''}
function extractExcerpt(src){const m=src.match(/<p[^>]*>([\s\S]*?)<\/p>/i);return m?m[1].replace(/\s+/g,' ').trim():''}
function readPost(slug){const pTsx=path.join(NEWS_DIR,slug,'page.tsx');if(!fs.existsSync(pTsx))return null;const src=fs.readFileSync(pTsx,'utf8');const title=extractTitle(src)||slug;const excerpt=extractExcerpt(src);const date=fs.statSync(pTsx).mtime.toISOString();return{slug,title,excerpt,date}}
const items=getDirs(NEWS_DIR).map(readPost).filter(Boolean).sort((a,b)=>b.date.localeCompare(a.date));
const out='export type NewsItem = { slug: string; title: string; excerpt: string; date: string };\\n'
+'export const NEWS: NewsItem[] = '+JSON.stringify(items,null,2)+';\\n'
+'export const latest = (n: number = 3) => [...NEWS].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,n);\\n';
fs.writeFileSync(OUT,out,'utf8');
console.log('news items:',items.map(i=>i.slug).join(','));

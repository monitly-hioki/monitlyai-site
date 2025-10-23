const fs = require('fs');
const path = require('path');
const ROOT = process.cwd();
const NEWS_DIR = path.join(ROOT, 'app', 'news');
const OUT = path.join(NEWS_DIR, '_list.ts');
function getDirs(p) {
  return fs.existsSync(p) ? fs.readdirSync(p, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name).filter(n => !n.startsWith('_')) : [];
}
function extract(field, src) {
  if (field === 'title') { const m = src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i); if (m) return m[1].replace(/\s+/g,' ').trim(); }
  if (field === 'excerpt') { const m = src.match(/<p[^>]*>([\s\S]*?)<\/p>/i); if (m) return m[1].replace(/\s+/g,' ').trim(); }
  return '';
}
function readPost(slug) {
  const pTsx = path.join(NEWS_DIR, slug, 'page.tsx');
  if (!fs.existsSync(pTsx)) return null;
  const src = fs.readFileSync(pTsx, 'utf8');
  const title = extract('title', src) || slug;
  const excerpt = extract('excerpt', src);
  const stat = fs.statSync(path.join(NEWS_DIR, slug));
  const date = stat.mtime.toISOString();
  return { slug, title, excerpt, date };
}
const items = getDirs(NEWS_DIR).map(readPost).filter(Boolean).sort((a,b)=>b.date.localeCompare(a.date));
const out = [
  'export type NewsItem = { slug: string; title: string; excerpt: string; date: string };',
  'export const NEWS: NewsItem[] = ' + JSON.stringify(items, null, 2) + ';',
  'export const latest = (n: number = 3) => [...NEWS].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,n);'
].join('\n');
fs.writeFileSync(OUT, out, 'utf8');
process.stdout.write('wrote ' + OUT + ' (' + items.length + ' items)\\n');

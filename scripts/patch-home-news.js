const fs = require('fs');
const p = 'app/page.tsx';
let s = fs.readFileSync(p,'utf8');
if (!/from "\.\/news\/_list";/.test(s)) {
  s = s.replace(/^/, 'import { latest as latestNews } from "./news/_list";\n');
}
const sec =
`\n<section className="px-6 md:px-10 py-20 bg-white border-t">
  <div className="max-w-6xl mx-auto">
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-semibold">最新のお知らせ</h2>
      <a href="/news" className="text-sm text-blue-600 underline">すべて見る</a>
    </div>
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      {latestNews(3).map(n => (
        <a key={n.slug} href={"/news/" + n.slug} className="p-5 border rounded-2xl bg-gray-50 hover:bg-gray-100 transition block">
          <div className="font-medium text-lg">{n.title}</div>
          <p className="mt-2 text-sm text-gray-700">{n.excerpt}</p>
          <div className="mt-3 text-sm text-blue-600 underline">続きを読む</div>
        </a>
      ))}
    </div>
  </div>
</section>\n`;
if (s.includes('最新のお知らせ') && s.includes('/news/')) {
  s = s.replace(/<section[^>]*>[\s\S]*?最新のお知らせ[\s\S]*?<\/section>/m, sec);
} else {
  s = s.replace(/<\/main>\s*<\/main>\s*<\/?[^>]*footer[^>]*>|\<\/main\>\s*$/m, (m)=>sec + m);
}
fs.writeFileSync(p, s);
process.stdout.write('patched ' + p + '\\n');

const fs=require('fs');
const F='app/product/page.tsx';
let s=fs.readFileSync(F,'utf8');

// 画像参照の正規化
s=s.replace(/src=['"]\.?\/?public\/product\/(hero|dashboard|compare|timeline)\.(png|jpe?g|webp)['"]/g,
            (_,n,e)=>`src="/product/${n}.${e.toLowerCase()}"`);
s=s.replace(/src=['"]\.?\/?(?:images?|img|asset|assets)\/(hero|dashboard|compare|timeline)\.(png|jpe?g|webp)['"]/g,
            (_,n,e)=>`src="/product/${n}.${e.toLowerCase()}"`);

// next/image → img（自己終了を保証）
s=s.replace(/import\s+Image\s+from\s+['"]next\/image['"];?/g,'');
s=s.replace(/<Image([^>]*?)\/>/g,(m,attrs)=>{
  const a=attrs.replace(/\bwidth=\{?\d+\}?/g,'').replace(/\bheight=\{?\d+\}?/g,'').replace(/\s{2,}/g,' ');
  return `<img${a} />`;
});
// 万一の `<img ...>` 非自己終了を修正
s=s.replace(/<img([^>]*?)>(?<\/img>)/g,'<img$1 />');

// ヒーロー画像を <main> 直下に一度だけ挿入
if(!/\/product\/hero\.(png|jpe?g|webp)/.test(s)){
  s=s.replace(/<main([^>]*)>/, (m,attrs)=>
    `<main${attrs}>
<section className="px-6 md:px-10 pt-8">
  <div className="max-w-6xl mx-auto">
    <img src="/product/hero.png" alt="Monitly" className="w-full max-h-[520px] object-cover rounded-2xl shadow" />
  </div>
</section>`);
}

// 表現の整理
s=s.replace(/実装共創プログラム（PoCではありません）/g,'実装共創プログラム');

// 不要な PoC FAQ を除去
s=s.replace(/<li[^>]*>[\s\S]*?PoCでどんな成果を確認できますか？[\s\S]*?<\/li>\s*/,'');
// 「スモールスタート」Q&A は残すが文言を最終版に整える（既存があれば更新）
s=s.replace(/<li[^>]*>[\s\S]*?PoCはスモールスタートの試験導入ですか？[\s\S]*?<\/li>/,
`<li className="py-3 border-b">
  <p className="font-medium">PoCはスモールスタートの試験導入ですか？</p>
  <p className="text-sm text-zinc-600 mt-1">いいえ。Monitlyの実装共創プログラムは縮小検証ではありません。本番前提で、評価指標設計・比較/改善・監視/フィードバックを御社データと業務文脈で共同構築し、そのまま本番運用へ移行できる状態を作ります。</p>
</li>`);

fs.writeFileSync(F,s);

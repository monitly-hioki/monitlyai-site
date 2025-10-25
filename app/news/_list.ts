export type NewsItem = { slug: string; title: string; excerpt: string; date: string };\nexport const NEWS: NewsItem[] = [
  {
    "slug": "[slug]",
    "title": "{item.title}",
    "excerpt": "",
    "date": "2025-10-25T05:40:26.027Z"
  }
];\nexport const latest = (n: number = 3) => [...NEWS].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,n);\n
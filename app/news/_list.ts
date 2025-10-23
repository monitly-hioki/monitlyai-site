export type NewsItem = { slug: string; title: string; excerpt: string; date: string };
export const NEWS: NewsItem[] = [
  {
    "slug": "[slug]",
    "title": "{item.title}",
    "excerpt": "",
    "date": "2025-10-21T08:02:36.457Z"
  }
];
export const latest = (n: number = 3) => [...NEWS].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,n);
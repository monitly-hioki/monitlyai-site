export type NewsPost = { slug: string; title: string; date: string; category: "プレスリリース" | "出展情報" | "機能アップデート"; summary: string; content: string; };
export const NEWS: NewsPost[] = [
  { slug: "ai-expo-2025-spring", title: "「AI・人工知能EXPO 春 2025」に出展しました", date: "2025-04-13", category: "出展情報", summary: "AI・人工知能EXPO春に出展。検索統合AI（RAG)・対話型AI（エージェント）評価プラットフォームを初公開。", content: "展示の詳細テキスト（差し替え）" },
  { slug: "feature-update-july", title: "新機能「専門担当者レビュー統合」ベータ版を公開", date: "2025-07-01", category: "機能アップデート", summary: "人的レビューと数値指標を統合可能に。", content: "機能の詳細テキスト（差し替え）" },
  { slug: "linkstation-group", title: "リンクステーショングループとの提携について", date: "2025-10-01", category: "プレスリリース", summary: "グループ提携契約を締結。エンタープライズ展開を加速。", content: "提携の詳細テキスト（差し替え）" },
];

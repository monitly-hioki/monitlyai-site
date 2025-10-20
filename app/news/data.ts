export type NewsItem = {
  date: string;
  title: string;
  slug: string;
  summary: string;
  label?: string;
  body?: string;
};

export const NEWS: NewsItem[] = [
  {
    date: "2025-10-01",
    title: "取締役就任のお知らせ",
    slug: "board-appointment",
    label: "プレスリリース",
    summary: "経営体制強化に伴う取締役人事について。",
    body: "Monitly.AI株式会社は、経営体制の強化を目的として新たに取締役を選任。生成AI事業の拡大とプロダクト成長に向け、開発・事業両面での意思決定を迅速化する。"
  },
  {
    date: "2025-09-25",
    title: "製品アップデート：UI刷新・レビュー承認・ダッシュボード強化",
    slug: "product-update-ui",
    label: "機能アップデート",
    summary: "主要UI刷新。レビュー承認・SME評価・ダッシュボード分析を強化。",
    body: "評価プラットフォーム「Monitly」において主要UIを刷新。レビュー承認フロー、SME評価画面、ダッシュボード分析機能を強化し、運用チーム間での評価履歴共有と改善分析を容易にした。"
  },
  {
    date: "2025-08-10",
    title: "パートナープログラム（紹介・導入・OEM）開始のお知らせ",
    slug: "partner-program",
    label: "パートナー情報",
    summary: "紹介・導入・OEMパートナー制度を正式開始。",
    body: "Monitly.AIは、製品導入支援・OEM連携を促進するパートナープログラムを開始。RAG/AIエージェント運用を支援する企業・SIerとの協業を強化し、導入支援から共同販売までを体系化。"
  },
  {
    date: "2025-07-27",
    title: "第19次ものづくり補助金に採択されました",
    slug: "monohojo",
    label: "公的支援",
    summary: "生成AI運用評価プラットフォーム開発が採択。",
    body: "生成AI運用評価プラットフォーム「Monitly」の開発計画が、経済産業省『ものづくり・商業・サービス生産性向上促進補助金（第19次）』に採択。生成AI評価の効率化・自動化に向けた技術開発を推進。"
  },
  {
    date: "2025-06-01",
    title: "PoCプラン提供開始のお知らせ",
    slug: "poc-plan",
    label: "プラン/価格",
    summary: "導入前の検証フェーズに最適化したPoC専用プランを提供開始。",
    body: "生成AI評価プラットフォーム『Monitly』にPoC専用プランを追加。導入前の評価実験・検証段階で利用可能とし、短期導入や効果測定に最適化。"
  },
  {
    date: "2025-04-20",
    title: "第9回 AI・人工知能EXPO【春】に出展しました",
    slug: "ai-expo-spring",
    label: "出展情報",
    summary: "検索統合AI（RAG）・対話型AI（エージェント）評価プラットフォームを初公開。",
    body: "Monitly.AIはジンベイ株式会社と共同で『第9回 AI・人工知能EXPO【春】』に出展。生成AI（RAG・AIエージェント）運用評価の課題をテーマに、PoC協力企業を募集。"
  },
  {
    date: "2025-04-04",
    title: "評価プラットフォーム「Monitly」アルファ版の開発を開始しました",
    slug: "alpha-start",
    label: "開発",
    summary: "RAG/AIエージェントの評価を可視化・自動化する基盤の開発を開始。",
    body: "生成AIの運用評価を支援するプラットフォーム『Monitly』のアルファ版開発を開始。RAGおよびAIエージェントの評価を自動化し、改善サイクルを定量的に可視化する仕組みを構築中。"
  }
];

export const getSortedNews = (): NewsItem[] =>
  [...NEWS].sort((a, b) => +new Date(b.date) - +new Date(a.date));

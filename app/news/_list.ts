export type NewsItem={slug:string;title:string;excerpt:string;date:string}
export const NEWS:NewsItem[]=[
  {slug:"partner-program-launch",title:"パートナープログラム開始のお知らせ",excerpt:"紹介・導入・OEMの各プランを正式リリースしました。",date:"2025-04-18T00:00:00.000Z"},
  {slug:"ai-expo-report",title:"AI EXPO出展レポート",excerpt:"NEC・NTT西日本・KIRINなど大手企業との対話ハイライト。",date:"2025-04-20T00:00:00.000Z"},
  {slug:"monitly-update-2025q2",title:"Monitly 2025Q2 アップデート",excerpt:"評価ワークフロー機能を強化し、より柔軟な比較分析を実現。",date:"2025-06-30T00:00:00.000Z"}
]
export const latest=(n:number=3)=>[...NEWS].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,n)

// app/product/CycleDiagram.tsx
import clsx from "clsx";

type Props = { className?: string };

export default function CycleDiagram({ className }: Props) {
  // 正方形 600x600 の座標系。中央 (300,300)、半径 220
  return (
    <svg
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid meet"
      className={clsx("w-full h-full", className)}
      role="img"
      aria-label="Monitly の運用サイクル（データ取得→検証→評価→改善→運用）"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f7f9fc" />
        </linearGradient>
        <marker
          id="arrow"
          markerWidth="16"
          markerHeight="16"
          refX="8"
          refY="8"
          orient="auto"
        >
          <path d="M0,0 L16,8 L0,16 z" fill="#4b5563" />
        </marker>
      </defs>

      <rect x="0" y="0" width="600" height="600" rx="24" fill="url(#bg)" />

      {/* 円（5分割して各末端に矢印を付ける） */}
      <g
        stroke="#4b5563"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        markerEnd="url(#arrow)"
      >
        {/* 角度は度数法でコメント。中心(300,300)、半径220 */}
        {/* 運用 → データ取得（30°→-40°） */}
        <path d="M491.0,190.0 A220,220 0 0 1 540.0,300.0" />
        {/* データ取得 → 改善（-40°→-110°） */}
        <path d="M540.0,300.0 A220,220 0 0 1 491.0,410.0" />
        {/* 改善 → 検証（-110°→-180°） */}
        <path d="M491.0,410.0 A220,220 0 0 1 300.0,520.0" />
        {/* 検証 → 評価（-180°→-250°） */}
        <path d="M300.0,520.0 A220,220 0 0 1 109.0,410.0" />
        {/* 評価 → 運用（-250°→30°） */}
        <path d="M109.0,410.0 A220,220 0 0 1 491.0,190.0" />
      </g>

      {/* ロゴテキスト */}
      <text
        x="300"
        y="335"
        textAnchor="middle"
        fontSize="84"
        fontWeight="700"
        fill="#0b0f19"
      >
        Monitly
      </text>

      {/* ラベル（角度位置に合わせて配置） */}
      <g fontSize="54" fontWeight="700" fill="#1d4ed8">
        {/* 運用 30°付近 */}
        <text x="310" y="145">運用</text>
        {/* データ取得 -40°付近（右側） */}
        <text x="470" y="315">データ</text>
        <text x="490" y="370">取得</text>
        {/* 改善 -110°付近（右下） */}
        <text x="380" y="520">改善</text>
        {/* 検証 -180°付近（下） */}
        <text x="260" y="560">検証</text>
        {/* 評価 -250°付近（左） */}
        <text x="170" y="430">評価</text>
      </g>
    </svg>
  );
}

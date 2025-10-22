// app/product/CycleDiagram.tsx
// 外部依存なしの純粋な SVG。正方形で中央寄せ、スケールしても崩れません。

type Props = { className?: string };

export default function CycleDiagram({ className }: Props) {
  return (
    <svg
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-label="Monitly の運用サイクル（データ取得→検証→評価→改善→運用）"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f6f8fb" />
        </linearGradient>
        <marker id="arrow" markerWidth="16" markerHeight="16" refX="8" refY="8" orient="auto">
          <path d="M0,0 L16,8 L0,16 Z" fill="#4b5563" />
        </marker>
      </defs>

      {/* 背景 */}
      <rect x="0" y="0" width="600" height="600" rx="28" fill="url(#bg)" />

      {/* 円弧（5分割、矢印付き） */}
      <g stroke="#4b5563" strokeWidth="10" fill="none" strokeLinecap="round" markerEnd="url(#arrow)">
        {/* 中心(300,300)、半径220 */}
        <path d="M491,190 A220,220 0 0 1 540,300" />  {/* 運用→データ取得 */}
        <path d="M540,300 A220,220 0 0 1 491,410" />  {/* データ取得→改善 */}
        <path d="M491,410 A220,220 0 0 1 300,520" />  {/* 改善→検証 */}
        <path d="M300,520 A220,220 0 0 1 109,410" />  {/* 検証→評価 */}
        <path d="M109,410 A220,220 0 0 1 491,190" />  {/* 評価→運用 */}
      </g>

      {/* 中央ロゴ */}
      <text x="300" y="335" textAnchor="middle" fontSize="84" fontWeight="700" fill="#0b0f19">
        Monitly
      </text>

      {/* ラベル */}
      <g fontSize="54" fontWeight="700" fill="#1d4ed8">
        <text x="310" y="145">運用</text>
        <text x="470" y="315">データ</text>
        <text x="490" y="370">取得</text>
        <text x="380" y="520">改善</text>
        <text x="260" y="560">検証</text>
        <text x="170" y="430">評価</text>
      </g>
    </svg>
  );
}

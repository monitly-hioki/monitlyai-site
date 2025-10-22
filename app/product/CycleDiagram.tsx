// app/product/CycleDiagram.tsx
export default function CycleDiagram() {
  return (
    <svg
      viewBox="0 0 800 800"
      className="w-full h-auto"
      role="img"
      aria-label="Monitly の運用サイクル（データ取得→検証→評価→改善→運用）"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f6f7fb" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="800" height="800" fill="url(#bg)" rx="24" />

      {/* 円弧 */}
      <g stroke="#4b5563" strokeWidth="10" fill="none" strokeLinecap="round">
        <path d="M400 150 A250 250 0 0 1 676 342" />
        <path d="M676 458 A250 250 0 0 1 400 650" />
        <path d="M224 458 A250 250 0 0 1 124 342" />
        <path d="M400 150 A250 250 0 0 0 124 342" />
        <path d="M400 650 A250 250 0 0 0 676 458" />
      </g>

      {/* 矢印先端 */}
      <g fill="#4b5563">
        <path d="M662 335 l30 10 -24 20 z" />
        <path d="M664 451 l23 22 -31 6 z" />
        <path d="M214 451 l8 32 -30 -12 z" />
        <path d="M140 330 l30 -8 -10 30 z" />
        <path d="M485 648 l-30 8 10 -30 z" />
      </g>

      {/* 中央ロゴ */}
      <text x="400" y="420" textAnchor="middle" fontSize="96" fontWeight="700" fill="#0b0f19">
        Monitly
      </text>

      {/* ラベル（青）※「改善」を含む */}
      <g fontSize="64" fontWeight="700" fill="#1d4ed8">
        <text x="610" y="360">データ</text>
        <text x="640" y="430">取得</text>
        <text x="360" y="710">検証</text>
        <text x="270" y="360">評価</text>
        <text x="360" y="210">運用</text>
        <text x="520" y="610">改善</text>
      </g>
    </svg>
  );
}

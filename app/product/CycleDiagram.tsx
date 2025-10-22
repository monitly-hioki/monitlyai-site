// app/product/CycleDiagram.tsx
export default function CycleDiagram() {
  return (
    <svg
      viewBox="0 0 600 600"
      role="img"
      aria-label="Monitly の運用サイクル（データ取得→検証→評価→改善→運用）"
      className="w-full h-auto"
    >
      {/* 背景グラデーション */}
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f3f4f6" />
        </radialGradient>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#4b5563" />
        </marker>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)" rx="24" />

      {/* 円弧（5分割） */}
      {[
        [300, 120, 300, 120], // 開始点ダミー（インデックス合わせ）
        // データ取得(右)→検証(下)
        [300, 120, 470, 300],
        // 検証(下)→評価(左)
        [470, 300, 300, 480],
        // 評価(左)→改善(左上)
        [300, 480, 130, 300],
        // 改善(左上)→運用(上)
        [130, 300, 230, 170],
        // 運用(上)→データ取得(右)
        [230, 170, 300, 120],
      ].map((p, i) =>
        i === 0 ? null : (
          <path
            key={i}
            d={`M ${p[0]} ${p[1]} Q 300 300, ${p[2]} ${p[3]}`}
            fill="none"
            stroke="#4b5563"
            strokeWidth="8"
            markerEnd="url(#arrow)"
            opacity="0.9"
          />
        )
      )}

      {/* 中央ロゴ文字 */}
      <text x="300" y="310" textAnchor="middle" fontSize="64" fontWeight="700" fill="#0b1220">
        Monitly
      </text>

      {/* ラベル */}
      <g fontSize="36" fontWeight="700" fill="#1d4ed8">
        <text x="475" y="310" textAnchor="start">データ{'\n'}取得</text>
        <text x="300" y="540" textAnchor="middle">検証</text>
        <text x="125" y="310" textAnchor="end">評価</text>
        <text x="210" y="160" textAnchor="end">改善</text>
        <text x="300" y="95" textAnchor="middle">運用</text>
      </g>
    </svg>
  );
}

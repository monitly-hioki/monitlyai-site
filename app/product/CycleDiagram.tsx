// app/product/CycleDiagram.tsx
export default function CycleDiagram() {
  return (
    <svg viewBox="0 0 1200 900" className="w-full h-auto" role="img" aria-label="Monitly の運用サイクル">
      <defs>
        <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f7f9fc" />
        </linearGradient>
      </defs>

      <rect width="1200" height="900" fill="url(#bg)" rx="28" />

      {/* circle path */}
      <g stroke="#3b4754" strokeWidth="18" fill="none" strokeLinecap="round">
        <path d="M600,165
                 a335,335 0 1,1 -0.1,0" />
        {/* 4 small arrow heads */}
        <path d="M865 355 l-20 55" />
        <path d="M740 720 l-55-20" />
        <path d="M455 720 l55-20" />
        <path d="M330 355 l20 55" />
      </g>

      {/* center logo text */}
      <text x="600" y="480" textAnchor="middle" fontSize="120" fontWeight="700" fill="#0b0e11">
        Monitly
      </text>

      {/* labels */}
      <g fontWeight="700" fontSize="84" fill="#1971ff">
        <text x="600" y="230" textAnchor="middle">運用</text>
        <text x="880" y="420" textAnchor="middle">データ{'\n'}取得</text>
        <text x="600" y="760" textAnchor="middle">検証</text>
        <text x="320" y="420" textAnchor="middle">評価</text>
        <text x="880" y="620" textAnchor="middle">改善</text>
      </g>
    </svg>
  );
}

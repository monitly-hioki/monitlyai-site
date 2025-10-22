type Props = { className?: string };

export default function CycleDiagram({ className }: Props) {
  return (
    <svg
      viewBox="0 0 640 640"
      width="100%"
      height="100%"
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
        <marker id="arrow" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
          <path d="M0,0 L12,6 L0,12 Z" fill="#4b5563" />
        </marker>
      </defs>

      <rect x="0" y="0" width="640" height="640" rx="28" fill="url(#bg)" />

      <g stroke="#4b5563" strokeWidth="8" fill="none" strokeLinecap="round" markerEnd="url(#arrow)">
        <path d="M470,180 A220,220 0 0 1 540,320" />
        <path d="M540,320 A220,220 0 0 1 470,460" />
        <path d="M470,460 A220,220 0 0 1 320,540" />
        <path d="M320,540 A220,220 0 0 1 170,460" />
        <path d="M170,460 A220,220 0 0 1 470,180" />
      </g>

      <text x="320" y="340" textAnchor="middle" fontSize="84" fontWeight="700" fill="#0b0f19">
        Monitly
      </text>

      <g fontSize="54" fontWeight="700" fill="#1d4ed8">
        <text x="300" y="130">運用</text>
        <text x="472" y="300">データ</text>
        <text x="490" y="356">取得</text>
        <text x="362" y="540">改善</text>
        <text x="255" y="580">検証</text>
        <text x="160" y="440">評価</text>
      </g>
    </svg>
  );
}

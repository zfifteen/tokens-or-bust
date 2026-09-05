export function LoopDiagram() {
  return (
    <svg
      viewBox="0 0 320 220"
      className="h-auto w-full"
      role="img"
      aria-label="The conversion-rate loop: hub equity funds capex, silicon sells tokens and rental, cash is supposed to retire the paper."
    >
      <rect width="320" height="220" fill="transparent" />
      <circle
        cx="160"
        cy="110"
        r="78"
        fill="none"
        stroke="currentColor"
        className="text-hair"
        strokeWidth="1"
      />
      <circle
        cx="160"
        cy="110"
        r="78"
        fill="none"
        stroke="currentColor"
        className="text-brass/40"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      <LoopNode x={160} y={28} label="Hub equity" sub="NVDA mark" />
      <LoopNode x={258} y={110} label="Capex" sub="chips + sites" />
      <LoopNode x={160} y={192} label="Tokens / rental" sub="the cash print" accent />
      <LoopNode x={62} y={110} label="Paper" sub="$105B cap" />

      <text
        x="160"
        y="108"
        textAnchor="middle"
        className="fill-brass"
        fontFamily="IBM Plex Mono, ui-monospace, monospace"
        fontSize="10"
        letterSpacing="0.12em"
      >
        H5
      </text>
      <text
        x="160"
        y="122"
        textAnchor="middle"
        className="fill-mute"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="10"
      >
        conversion rate
      </text>
    </svg>
  );
}

function LoopNode({
  x,
  y,
  label,
  sub,
  accent,
}: {
  x: number;
  y: number;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  const w = 92;
  const h = 36;
  return (
    <g transform={`translate(${x - w / 2}, ${y - h / 2})`}>
      <rect
        width={w}
        height={h}
        rx="8"
        className={accent ? "fill-panel stroke-brass" : "fill-panel stroke-hair"}
        strokeWidth="1"
      />
      <text
        x={w / 2}
        y="15"
        textAnchor="middle"
        className="fill-ink"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="11"
      >
        {label}
      </text>
      <text
        x={w / 2}
        y="27"
        textAnchor="middle"
        className="fill-faint"
        fontFamily="IBM Plex Mono, ui-monospace, monospace"
        fontSize="9"
      >
        {sub}
      </text>
    </g>
  );
}

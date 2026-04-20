/** Unique thematic SVG illustrations for each field. All use the site's gold/ember palette. */

const goldA = "rgba(184,134,11,0.55)";
const goldB = "rgba(184,134,11,0.25)";
const goldC = "rgba(184,134,11,0.12)";
const ember = "rgba(217,119,6,0.70)";

/* ─── helpers ──────────────────────────────────────────────── */
const Base = ({ children }: { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 420 280"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/* ─── 1. Science – atom / orbital rings ─────────────────────── */
const ScienceIllustration = () => (
  <Base>
    {/* nucleus */}
    <circle cx="210" cy="140" r="14" fill={goldA} />
    <circle cx="210" cy="140" r="8" fill={ember} />
    {/* orbit 1 – horizontal ellipse */}
    <ellipse cx="210" cy="140" rx="90" ry="32" stroke={goldA} strokeWidth="1.2" />
    {/* orbit 2 – tilted 60° */}
    <ellipse cx="210" cy="140" rx="90" ry="32" stroke={goldA} strokeWidth="1.2"
      transform="rotate(60 210 140)" />
    {/* orbit 3 – tilted 120° */}
    <ellipse cx="210" cy="140" rx="90" ry="32" stroke={goldA} strokeWidth="1.2"
      transform="rotate(120 210 140)" />
    {/* electrons */}
    <circle cx="300" cy="140" r="5" fill={goldB} />
    <circle cx="165" cy="108" r="5" fill={goldB} />
    <circle cx="165" cy="172" r="5" fill={goldB} />
    {/* outer ring */}
    <circle cx="210" cy="140" r="116" stroke={goldC} strokeWidth="1" strokeDasharray="4 6" />
    {/* data scatter */}
    {[
      [60, 50], [350, 60], [380, 210], [50, 230], [320, 255], [90, 255],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="2.5" fill={goldB} />
    ))}
    {/* connector lines */}
    <line x1="60" y1="50" x2="120" y2="100" stroke={goldC} strokeWidth="0.8" />
    <line x1="350" y1="60" x2="295" y2="105" stroke={goldC} strokeWidth="0.8" />
    <line x1="380" y1="210" x2="318" y2="178" stroke={goldC} strokeWidth="0.8" />
  </Base>
);

/* ─── 2. Engineering – gear system ──────────────────────────── */
const EngineeringIllustration = () => {
  const Gear = ({
    cx, cy, r, teeth, rot = 0, strokeC = goldA,
  }: { cx: number; cy: number; r: number; teeth: number; rot?: number; strokeC?: string }) => {
    const toothH = r * 0.22;
    const angleStep = (2 * Math.PI) / teeth;
    const pts: string[] = [];
    for (let i = 0; i < teeth; i++) {
      const a = rot * (Math.PI / 180) + i * angleStep;
      const a1 = a - angleStep * 0.2;
      const a2 = a + angleStep * 0.2;
      pts.push(`${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)}`);
      pts.push(`${cx + (r + toothH) * Math.cos(a)},${cy + (r + toothH) * Math.sin(a)}`);
      pts.push(`${cx + r * Math.cos(a2)},${cy + r * Math.sin(a2)}`);
    }
    return (
      <g>
        <polygon points={pts.join(" ")} stroke={strokeC} strokeWidth="1.2" fill={goldC} />
        <circle cx={cx} cy={cy} r={r * 0.38} stroke={strokeC} strokeWidth="1" fill="none" />
        <circle cx={cx} cy={cy} r="3" fill={strokeC} />
      </g>
    );
  };
  return (
    <Base>
      <Gear cx={155} cy={135} r={68} teeth={16} rot={0} strokeC={goldA} />
      <Gear cx={290} cy={110} r={44} teeth={11} rot={8} strokeC={goldA} />
      <Gear cx={270} cy={215} r={32} teeth={9} rot={-5} strokeC={goldB} />
      {/* connect lines */}
      <line x1="60" y1="200" x2="100" y2="180" stroke={goldC} strokeWidth="1" />
      <line x1="360" y1="230" x2="310" y2="210" stroke={goldC} strokeWidth="1" />
      <line x1="380" y1="60" x2="330" y2="80" stroke={goldC} strokeWidth="1" />
      {/* scatter nodes */}
      {[[60, 200], [380, 60], [360, 230]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={goldB} />
      ))}
    </Base>
  );
};

/* ─── 3. Commerce – rising chart ─────────────────────────────── */
const CommerceIllustration = () => {
  const bars = [
    { x: 80, h: 60 }, { x: 130, h: 85 }, { x: 180, h: 70 },
    { x: 230, h: 110 }, { x: 280, h: 90 }, { x: 330, h: 140 },
  ];
  const baseline = 220;
  const linePoints = bars.map((b) => `${b.x + 14},${baseline - b.h}`).join(" ");

  return (
    <Base>
      {/* grid lines */}
      {[60, 100, 140, 180].map((y) => (
        <line key={y} x1="60" y1={y} x2="390" y2={y} stroke={goldC} strokeWidth="0.8" />
      ))}
      {/* baseline */}
      <line x1="60" y1={baseline} x2="390" y2={baseline} stroke={goldB} strokeWidth="1" />
      {/* bars */}
      {bars.map(({ x, h }, i) => (
        <rect key={i} x={x} y={baseline - h} width="28" height={h}
          fill={i === bars.length - 1 ? goldA : goldC}
          stroke={goldB} strokeWidth="1" />
      ))}
      {/* trend line */}
      <polyline points={linePoints} stroke={ember} strokeWidth="2" fill="none"
        strokeLinejoin="round" />
      {/* dots on line */}
      {bars.map(({ x, h }, i) => (
        <circle key={i} cx={x + 14} cy={baseline - h} r="4"
          fill={i === bars.length - 1 ? ember : goldB}
          stroke="none" />
      ))}
      {/* label ticks */}
      {bars.map(({ x }, i) => (
        <line key={i} x1={x + 14} y1={baseline} x2={x + 14} y2={baseline + 6}
          stroke={goldB} strokeWidth="1" />
      ))}
      {/* corner accent */}
      <path d="M380 40 L390 40 L390 50" stroke={goldB} strokeWidth="1.2" fill="none" />
      <path d="M40 230 L30 230 L30 220" stroke={goldB} strokeWidth="1.2" fill="none" />
    </Base>
  );
};

/* ─── 4. Technology – circuit board ─────────────────────────── */
const TechnologyIllustration = () => {
  const traces = [
    "M 60 80 L 160 80 L 160 140 L 260 140",
    "M 260 140 L 360 140 L 360 80 L 390 80",
    "M 60 170 L 120 170 L 120 200 L 200 200 L 200 140",
    "M 200 140 L 200 100 L 310 100 L 310 60",
    "M 160 80 L 160 40 L 260 40 L 260 80",
    "M 360 140 L 360 200 L 300 200 L 300 240",
    "M 120 170 L 80 170 L 80 240 L 180 240",
  ];
  const nodes = [
    [160, 80], [260, 140], [360, 80], [200, 140], [310, 60],
    [160, 40], [300, 240], [180, 240],
  ];
  const chips = [
    { x: 195, y: 115, w: 50, h: 30 },
    { x: 335, y: 120, w: 40, h: 24 },
    { x: 85, y: 155, w: 36, h: 22 },
  ];
  return (
    <Base>
      {traces.map((d, i) => (
        <path key={i} d={d} stroke={goldB} strokeWidth="1.5" fill="none" />
      ))}
      {nodes.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="7" fill={goldC} stroke={goldA} strokeWidth="1" />
          <circle cx={cx} cy={cy} r="3" fill={goldA} />
        </g>
      ))}
      {chips.map(({ x, y, w, h }, i) => (
        <rect key={i} x={x} y={y} width={w} height={h}
          fill={goldC} stroke={goldA} strokeWidth="1" rx="2" />
      ))}
      {/* micro pins on chips */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={195 + i * 12} y1={115} x2={195 + i * 12} y2={108}
          stroke={goldB} strokeWidth="1" />
      ))}
      {/* corner label */}
      <text x="370" y="265" fontSize="9" fill={goldB} fontFamily="monospace">v4.1.0</text>
    </Base>
  );
};

/* ─── 5. Law – scales of justice ────────────────────────────── */
const LawIllustration = () => (
  <Base>
    {/* pillar */}
    <line x1="210" y1="60" x2="210" y2="220" stroke={goldA} strokeWidth="2.5" />
    <rect x="185" y="215" width="50" height="10" fill={goldB} stroke={goldA} strokeWidth="1" rx="1" />
    {/* base */}
    <rect x="155" y="225" width="110" height="8" fill={goldC} stroke={goldA} strokeWidth="1" rx="1" />
    {/* beam */}
    <line x1="90" y1="100" x2="330" y2="100" stroke={goldA} strokeWidth="2" />
    {/* fulcrum triangle */}
    <polygon points="210,88 220,104 200,104" fill={goldA} />
    {/* left chain + pan */}
    <line x1="120" y1="100" x2="120" y2="148" stroke={goldB} strokeWidth="1.2" strokeDasharray="3 3" />
    <ellipse cx="120" cy="155" rx="38" ry="10" fill={goldC} stroke={goldA} strokeWidth="1" />
    {/* right chain + pan */}
    <line x1="300" y1="100" x2="300" y2="148" stroke={goldB} strokeWidth="1.2" strokeDasharray="3 3" />
    <ellipse cx="300" cy="155" rx="38" ry="10" fill={goldC} stroke={goldA} strokeWidth="1" />
    {/* decorative columns */}
    {[70, 355].map((x, i) => (
      <g key={i}>
        <rect x={x - 8} y={60} width={16} height={160} fill={goldC} stroke={goldB} strokeWidth="0.8" />
        <rect x={x - 12} y={55} width={24} height={8} fill={goldB} stroke={goldA} strokeWidth="0.8" />
        <rect x={x - 12} y={218} width={24} height={8} fill={goldB} stroke={goldA} strokeWidth="0.8" />
      </g>
    ))}
    {/* floating dots */}
    {[[180, 50], [240, 50], [60, 200], [360, 200]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="2.5" fill={goldB} />
    ))}
  </Base>
);

/* ─── 6. African History – geometric adinkra pattern ─────────── */
const AfricanHistoryIllustration = () => (
  <Base>
    {/* outer diamond */}
    <polygon points="210,30 380,140 210,250 40,140"
      stroke={goldA} strokeWidth="1.5" fill={goldC} />
    {/* inner diamond */}
    <polygon points="210,65 345,140 210,215 75,140"
      stroke={goldB} strokeWidth="1.2" fill="none" />
    {/* inner inner */}
    <polygon points="210,100 310,140 210,180 110,140"
      stroke={goldA} strokeWidth="1" fill={goldC} />
    {/* center circle */}
    <circle cx="210" cy="140" r="22" stroke={goldA} strokeWidth="1.5" fill="none" />
    <circle cx="210" cy="140" r="8" fill={goldA} />
    {/* axis lines */}
    <line x1="40" y1="140" x2="380" y2="140" stroke={goldB} strokeWidth="0.8" />
    <line x1="210" y1="30" x2="210" y2="250" stroke={goldB} strokeWidth="0.8" />
    {/* kente corner accents */}
    {[
      [40, 140], [380, 140], [210, 30], [210, 250],
    ].map(([cx, cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="5" fill={ember} />
        <circle cx={cx} cy={cy} r="9" stroke={ember} strokeWidth="1" fill="none" />
      </g>
    ))}
    {/* triangle corner marks */}
    <polygon points="210,30 225,55 195,55" fill={goldB} />
    <polygon points="210,250 225,225 195,225" fill={goldB} />
    <polygon points="40,140 65,125 65,155" fill={goldB} />
    <polygon points="380,140 355,125 355,155" fill={goldB} />
  </Base>
);

/* ─── 7. Visual Arts – abstract composition ─────────────────── */
const VisualArtsIllustration = () => (
  <Base>
    {/* large canvas frame */}
    <rect x="50" y="40" width="320" height="200" stroke={goldB} strokeWidth="1.5" fill="none" rx="1" />
    {/* rule of thirds grid */}
    <line x1="157" y1="40" x2="157" y2="240" stroke={goldC} strokeWidth="0.8" />
    <line x1="263" y1="40" x2="263" y2="240" stroke={goldC} strokeWidth="0.8" />
    <line x1="50" y1="107" x2="370" y2="107" stroke={goldC} strokeWidth="0.8" />
    <line x1="50" y1="173" x2="370" y2="173" stroke={goldC} strokeWidth="0.8" />
    {/* main compositional circle */}
    <circle cx="157" cy="107" r="45" stroke={goldA} strokeWidth="1.5" fill={goldC} />
    {/* secondary shape */}
    <rect x="210" y="125" width="110" height="80" stroke={goldA} strokeWidth="1.5"
      fill="none" transform="rotate(-8 265 165)" />
    {/* accent triangle */}
    <polygon points="263,107 320,173 206,173"
      stroke={goldB} strokeWidth="1" fill={goldC} />
    {/* palette dots */}
    {[
      [90, 200, ember], [120, 200, goldA], [150, 200, goldB],
    ].map(([cx, cy, color], i) => (
      <circle key={i} cx={cx as number} cy={cy as number} r="8"
        fill={color as string} stroke="none" />
    ))}
    {/* diagonal slash accent */}
    <line x1="50" y1="40" x2="370" y2="240" stroke={goldC} strokeWidth="1" strokeDasharray="6 8" />
    {/* corner crop marks */}
    {[[50, 40], [370, 40], [50, 240], [370, 240]].map(([x, y], i) => {
      const dx = i % 2 === 0 ? 12 : -12;
      const dy = i < 2 ? 12 : -12;
      return (
        <g key={i}>
          <line x1={x} y1={y} x2={x + dx} y2={y} stroke={goldA} strokeWidth="1.5" />
          <line x1={x} y1={y} x2={x} y2={y + dy} stroke={goldA} strokeWidth="1.5" />
        </g>
      );
    })}
  </Base>
);

/* ─── 8. Creative Arts – waveform ────────────────────────────── */
const CreativeArtsIllustration = () => {
  const mid = 140;
  const wavePoints = Array.from({ length: 60 }, (_, i) => {
    const x = 40 + i * 5.7;
    const amp = 40 + 30 * Math.sin(i * 0.4);
    const y = mid + amp * Math.sin(i * 0.6);
    return `${x},${y}`;
  }).join(" ");

  return (
    <Base>
      {/* staff lines */}
      {[-30, -15, 0, 15, 30].map((offset) => (
        <line key={offset} x1="40" y1={mid + offset} x2="380" y2={mid + offset}
          stroke={goldC} strokeWidth="0.7" />
      ))}
      {/* main waveform */}
      <polyline points={wavePoints} stroke={goldA} strokeWidth="2"
        fill="none" strokeLinejoin="round" />
      {/* secondary waveform (echo) */}
      <polyline
        points={Array.from({ length: 60 }, (_, i) => {
          const x = 40 + i * 5.7;
          const amp = 20 + 15 * Math.sin(i * 0.4 + 1);
          const y = mid + amp * Math.sin(i * 0.6 + 0.8);
          return `${x},${y}`;
        }).join(" ")}
        stroke={goldB} strokeWidth="1" fill="none" strokeLinejoin="round"
      />
      {/* beat nodes */}
      {[0, 12, 24, 36, 48].map((i) => {
        const x = 40 + i * 5.7;
        const amp = 40 + 30 * Math.sin(i * 0.4);
        const y = mid + amp * Math.sin(i * 0.6);
        return <circle key={i} cx={x} cy={y} r="4" fill={ember} />;
      })}
      {/* vertical bar lines */}
      {[100, 200, 300].map((x) => (
        <line key={x} x1={x} y1={mid - 55} x2={x} y2={mid + 55}
          stroke={goldB} strokeWidth="1" />
      ))}
      {/* note symbols (simplified) */}
      {[[85, 70], [195, 68], [295, 72]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y + 8} r="5" fill={goldB} />
          <line x1={x + 5} y1={y + 8} x2={x + 5} y2={y - 12}
            stroke={goldB} strokeWidth="1.5" />
        </g>
      ))}
    </Base>
  );
};

/* ─── 9. Social Sciences – people network ────────────────────── */
const SocialSciencesIllustration = () => {
  const nodes = [
    { cx: 210, cy: 140, r: 16 },   // center hub
    { cx: 130, cy: 90, r: 10 },
    { cx: 290, cy: 90, r: 10 },
    { cx: 100, cy: 170, r: 8 },
    { cx: 320, cy: 170, r: 8 },
    { cx: 160, cy: 220, r: 9 },
    { cx: 260, cy: 220, r: 9 },
    { cx: 80, cy: 120, r: 7 },
    { cx: 340, cy: 120, r: 7 },
    { cx: 200, cy: 60, r: 7 },
    { cx: 370, cy: 200, r: 6 },
    { cx: 50, cy: 200, r: 6 },
  ];
  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 2], [1, 7], [1, 9], [2, 8], [2, 9],
    [3, 7], [4, 8], [4, 10], [3, 11],
    [5, 6], [5, 11], [6, 10],
  ];
  return (
    <Base>
      {/* edges */}
      {edges.map(([a, b], i) => (
        <line key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={goldC} strokeWidth="1" />
      ))}
      {/* nodes */}
      {nodes.map(({ cx, cy, r }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r + 4} fill={goldC} />
          <circle cx={cx} cy={cy} r={r}
            fill={i === 0 ? goldA : goldB}
            stroke={i === 0 ? ember : goldA}
            strokeWidth="1" />
          {/* human silhouette (simple) */}
          <circle cx={cx} cy={cy - r * 0.35} r={r * 0.3} fill={i === 0 ? "rgba(0,0,0,0.4)" : "none"} />
        </g>
      ))}
      {/* pulse ring on center */}
      <circle cx="210" cy="140" r="30" stroke={ember} strokeWidth="0.8"
        fill="none" strokeDasharray="4 6" />
      <circle cx="210" cy="140" r="50" stroke={goldC} strokeWidth="0.6"
        fill="none" strokeDasharray="3 8" />
    </Base>
  );
};

/* ─── 10. Innovation – lightbulb / radiant idea ──────────────── */
const InnovationIllustration = () => (
  <Base>
    {/* radiating lines */}
    {Array.from({ length: 12 }, (_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const r1 = 65, r2 = 130;
      return (
        <line key={i}
          x1={210 + r1 * Math.cos(angle)} y1={140 + r1 * Math.sin(angle)}
          x2={210 + r2 * Math.cos(angle)} y2={140 + r2 * Math.sin(angle)}
          stroke={goldC} strokeWidth="1" />
      );
    })}
    {/* idea nodes at ray tips */}
    {Array.from({ length: 6 }, (_, i) => {
      const angle = (i * 60 * Math.PI) / 180;
      const r = 130;
      return (
        <circle key={i}
          cx={210 + r * Math.cos(angle)} cy={140 + r * Math.sin(angle)}
          r="6" fill={goldB} stroke={goldA} strokeWidth="1" />
      );
    })}
    {/* bulb outline */}
    <path
      d="M210,70 C240,70 262,90 262,118 C262,138 252,152 245,162 L245,178 L175,178 L175,162 C168,152 158,138 158,118 C158,90 180,70 210,70 Z"
      stroke={goldA} strokeWidth="2" fill={goldC} />
    {/* filament */}
    <path d="M190,162 Q200,148 210,162 Q220,148 230,162"
      stroke={goldA} strokeWidth="1.5" fill="none" />
    {/* base rings */}
    <rect x="183" y="178" width="54" height="8" rx="2"
      stroke={goldA} strokeWidth="1.2" fill={goldC} />
    <rect x="188" y="186" width="44" height="7" rx="2"
      stroke={goldB} strokeWidth="1" fill={goldC} />
    {/* glow center */}
    <circle cx="210" cy="118" r="22" fill="rgba(217,119,6,0.15)" />
    <circle cx="210" cy="118" r="10" fill={ember} opacity="0.6" />
  </Base>
);

/* ─── 11. R&D – flask + data curve ───────────────────────────── */
const ResearchDevIllustration = () => {
  const curvePoints = [
    [80, 200], [110, 185], [140, 190], [170, 165],
    [200, 145], [230, 120], [260, 110], [290, 90],
    [320, 75], [350, 60],
  ];
  return (
    <Base>
      {/* axes */}
      <line x1="60" y1="220" x2="380" y2="220" stroke={goldB} strokeWidth="1.2" />
      <line x1="60" y1="220" x2="60" y2="40" stroke={goldB} strokeWidth="1.2" />
      {/* axis arrows */}
      <polygon points="380,220 372,215 372,225" fill={goldB} />
      <polygon points="60,40 55,48 65,48" fill={goldB} />
      {/* grid */}
      {[80, 120, 160, 200].map((y) => (
        <line key={y} x1="60" y1={y} x2="380" y2={y}
          stroke={goldC} strokeWidth="0.7" strokeDasharray="4 5" />
      ))}
      {/* data curve */}
      <polyline
        points={curvePoints.map(([x, y]) => `${x},${y}`).join(" ")}
        stroke={goldA} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      {/* data points */}
      {curvePoints.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === curvePoints.length - 1 ? 6 : 4}
          fill={i === curvePoints.length - 1 ? ember : goldB} />
      ))}
      {/* flask (right side decoration) */}
      <path d="M340,50 L340,90 L365,130 L315,130 L340,90"
        stroke={goldA} strokeWidth="1.5" fill={goldC} />
      <ellipse cx="340" cy="130" rx="25" ry="8"
        stroke={goldA} strokeWidth="1.5" fill={goldC} />
      {/* bubbles in flask */}
      {[[332, 118], [348, 110], [338, 100]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill={goldB} />
      ))}
      {/* DNA hint – double helix (small) */}
      <path d="M80,50 C95,60 110,70 80,80 C95,90 110,100 80,110"
        stroke={goldB} strokeWidth="1.2" fill="none" />
      <path d="M110,50 C95,60 80,70 110,80 C95,90 80,100 110,110"
        stroke={goldB} strokeWidth="1.2" fill="none" />
      {[[80, 50], [110, 50], [80, 80], [110, 80], [80, 110], [110, 110]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill={goldB} />
      ))}
    </Base>
  );
};

/* ─── 12. Strategic Design – compass / target system ─────────── */
const StrategicDesignIllustration = () => (
  <Base>
    {/* concentric rings */}
    {[100, 78, 55, 33, 14].map((r, i) => (
      <circle key={i} cx="210" cy="140" r={r}
        stroke={i === 0 ? goldA : i === 1 ? goldB : goldC}
        strokeWidth={i === 0 ? 1.5 : 1}
        fill={i === 4 ? ember : "none"}
        opacity={i === 4 ? 0.8 : 1} />
    ))}
    {/* cross-hair */}
    <line x1="60" y1="140" x2="360" y2="140" stroke={goldB} strokeWidth="1" />
    <line x1="210" y1="30" x2="210" y2="250" stroke={goldB} strokeWidth="1" />
    {/* diagonal cross-hair */}
    <line x1="105" y1="35" x2="315" y2="245" stroke={goldC} strokeWidth="0.8" />
    <line x1="315" y1="35" x2="105" y2="245" stroke={goldC} strokeWidth="0.8" />
    {/* compass points */}
    {[
      [210, 30, "N"], [380, 140, "E"], [210, 250, "S"], [40, 140, "W"],
    ].map(([cx, cy, label], i) => (
      <g key={i}>
        <polygon
          points={`${cx},${(cy as number) - 10} ${(cx as number) + 6},${(cy as number) + 4} ${(cx as number) - 6},${(cy as number) + 4}`}
          fill={goldA} transform={`rotate(${i * 90} ${cx} ${cy})`}
        />
      </g>
    ))}
    {/* orbit nodes */}
    {Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 45 * Math.PI) / 180;
      return (
        <circle key={i}
          cx={210 + 100 * Math.cos(angle)} cy={140 + 100 * Math.sin(angle)}
          r="4" fill={i % 2 === 0 ? goldA : goldB} />
      );
    })}
    {/* outer dashed ring */}
    <circle cx="210" cy="140" r="140"
      stroke={goldC} strokeWidth="1" fill="none" strokeDasharray="5 7" />
    {/* system flow arrows */}
    {[45, 135, 225, 315].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const r = 118;
      const cx = 210 + r * Math.cos(rad);
      const cy = 140 + r * Math.sin(rad);
      return <circle key={i} cx={cx} cy={cy} r="5" fill={ember} opacity="0.7" />;
    })}
  </Base>
);

/* ─── Map ────────────────────────────────────────────────────── */
const illustrationMap: Record<string, () => JSX.Element> = {
  "science": ScienceIllustration,
  "engineering": EngineeringIllustration,
  "commerce": CommerceIllustration,
  "technology": TechnologyIllustration,
  "law": LawIllustration,
  "african-history": AfricanHistoryIllustration,
  "visual-arts": VisualArtsIllustration,
  "creative-arts": CreativeArtsIllustration,
  "social-sciences": SocialSciencesIllustration,
  "innovation": InnovationIllustration,
  "research-development": ResearchDevIllustration,
  "strategic-design": StrategicDesignIllustration,
};

export const FieldIllustration = ({ slug }: { slug: string }) => {
  const Component = illustrationMap[slug];
  if (!Component) return null;
  return <Component />;
};

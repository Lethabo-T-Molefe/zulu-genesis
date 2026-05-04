import { SITE_NAME } from "@/lib/seo";

const GOLD = "hsl(42, 76%, 46%)";
const GOLD_DIM = "hsl(42, 76%, 46%, 0.18)";
const BG = "hsl(0, 0%, 4%)";

function gearPoints(
  cx: number,
  cy: number,
  n: number,
  ro: number,
  ri: number,
): string {
  const pts: string[] = [];
  const hw = (0.38 * Math.PI) / n;
  for (let i = 0; i < n; i++) {
    const a = (i * 2 * Math.PI) / n;
    const na = ((i + 1) * 2 * Math.PI) / n;
    pts.push(
      `${(cx + ro * Math.cos(a - hw)).toFixed(2)},${(cy + ro * Math.sin(a - hw)).toFixed(2)}`,
    );
    pts.push(
      `${(cx + ro * Math.cos(a + hw)).toFixed(2)},${(cy + ro * Math.sin(a + hw)).toFixed(2)}`,
    );
    pts.push(
      `${(cx + ri * Math.cos(a + hw + 0.05)).toFixed(2)},${(cy + ri * Math.sin(a + hw + 0.05)).toFixed(2)}`,
    );
    pts.push(
      `${(cx + ri * Math.cos(na - hw - 0.05)).toFixed(2)},${(cy + ri * Math.sin(na - hw - 0.05)).toFixed(2)}`,
    );
  }
  return pts.join(" ");
}

// Large gear: 12 teeth, centered at (150, 165)
const LARGE_CX = 150;
const LARGE_CY = 165;
const largeGear = gearPoints(LARGE_CX, LARGE_CY, 12, 68, 53);

// Small gear: 8 teeth interlocked at ~315° from large gear
// pitch radii: large=(68+53)/2=60.5, small=(42+32)/2=37 → center dist=97.5
// at 315°: x=150+97.5·cos(-45°)≈219, y=165+97.5·sin(-45°)≈96
const SMALL_CX = 219;
const SMALL_CY = 96;
const smallGear = gearPoints(SMALL_CX, SMALL_CY, 8, 42, 32);

// Speed ratio: large=9s (12 teeth), small=6s (8 teeth → 12/8·6=9 ✓)

const UnderConstruction = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
    {/* Ambient glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse 60% 50% at 50% 55%, ${GOLD_DIM} 0%, transparent 70%)`,
      }}
    />

    {/* Site name */}
    <div className="z-10 mb-10">
      <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold/50">
        {SITE_NAME}
      </span>
    </div>

    {/* Animated gears SVG */}
    <div className="z-10 mb-10">
      <svg
        viewBox="0 0 300 270"
        width="300"
        height="270"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Maintenance in progress"
      >
        {/* Outer slow-rotating dashed ring */}
        <circle
          cx={LARGE_CX}
          cy={LARGE_CY}
          r="128"
          fill="none"
          stroke={GOLD}
          strokeWidth="0.8"
          strokeOpacity="0.12"
          strokeDasharray="6 14"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${LARGE_CX} ${LARGE_CY}`}
            to={`360 ${LARGE_CX} ${LARGE_CY}`}
            dur="40s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Inner counter-rotating dashed ring */}
        <circle
          cx={LARGE_CX}
          cy={LARGE_CY}
          r="100"
          fill="none"
          stroke={GOLD}
          strokeWidth="0.5"
          strokeOpacity="0.08"
          strokeDasharray="3 9"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${LARGE_CX} ${LARGE_CY}`}
            to={`-360 ${LARGE_CX} ${LARGE_CY}`}
            dur="26s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Large gear — clockwise, 9s */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${LARGE_CX} ${LARGE_CY}`}
            to={`360 ${LARGE_CX} ${LARGE_CY}`}
            dur="9s"
            repeatCount="indefinite"
          />
          <polygon points={largeGear} fill={GOLD} fillOpacity="0.88" />
          {/* Hub */}
          <circle cx={LARGE_CX} cy={LARGE_CY} r="30" fill={BG} />
          <circle
            cx={LARGE_CX}
            cy={LARGE_CY}
            r="22"
            fill="none"
            stroke={GOLD}
            strokeWidth="1"
            strokeOpacity="0.35"
          />
          <circle cx={LARGE_CX} cy={LARGE_CY} r="7" fill={GOLD} fillOpacity="0.25" />
          <circle cx={LARGE_CX} cy={LARGE_CY} r="3.5" fill={GOLD} fillOpacity="0.7" />
        </g>

        {/* Small gear — counter-clockwise, 6s (speed ratio 12:8) */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${SMALL_CX} ${SMALL_CY}`}
            to={`-360 ${SMALL_CX} ${SMALL_CY}`}
            dur="6s"
            repeatCount="indefinite"
          />
          <polygon points={smallGear} fill={GOLD} fillOpacity="0.72" />
          <circle cx={SMALL_CX} cy={SMALL_CY} r="17" fill={BG} />
          <circle
            cx={SMALL_CX}
            cy={SMALL_CY}
            r="5"
            fill={GOLD}
            fillOpacity="0.4"
          />
          <circle cx={SMALL_CX} cy={SMALL_CY} r="2.5" fill={GOLD} fillOpacity="0.75" />
        </g>

        {/* Pulsing ring around the large gear hub */}
        <circle
          cx={LARGE_CX}
          cy={LARGE_CY}
          r="84"
          fill="none"
          stroke={GOLD}
          strokeWidth="0.6"
          strokeOpacity="0.05"
        >
          <animate
            attributeName="r"
            values="82;88;82"
            dur="3.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.05;0.14;0.05"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>

    {/* Text */}
    <div className="z-10 text-center">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/50 mb-4">
        System Status
      </div>
      <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4 leading-tight">
        Under{" "}
        <span className="text-gold-gradient">Maintenance</span>
      </h1>
      <p className="text-ash text-sm md:text-base leading-relaxed max-w-xs mx-auto mb-8">
        We're making improvements. We'll be back shortly.
      </p>

      {/* Staggered pulsing dots */}
      <div className="flex items-center justify-center gap-2.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default UnderConstruction;

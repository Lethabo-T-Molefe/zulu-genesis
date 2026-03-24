import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TeamPortraitFrameProps = {
  src: string;
  alt: string;
  caption: string;
};

const BASE_RX = 2;
const BASE_RY = -2;

export const TeamPortraitFrame = ({ src, alt, caption }: TeamPortraitFrameProps) => {
  const tiltTargetRef = useRef<HTMLDivElement>(null);
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);
  const [scrollTilt, setScrollTilt] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  const updateScrollTilt = useCallback(() => {
    const el = tiltTargetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const nx = (cx / window.innerWidth) * 2 - 1;
    const ny = (cy / window.innerHeight) * 2 - 1;
    const maxRy = 5;
    const maxRx = 4;
    setScrollTilt({
      x: -ny * maxRx * 0.45,
      y: nx * maxRy * 0.45,
    });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setScrollTilt({ x: 0, y: 0 });
      return;
    }
    let raf = 0;
    const tick = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateScrollTilt);
    };
    tick();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, [reducedMotion, updateScrollTilt]);

  const motionOk = !reducedMotion;
  const rx = BASE_RX + scrollTilt.x + (motionOk && hover ? 2 : 0);
  const ry = BASE_RY + scrollTilt.y + (motionOk && hover ? -3 : 0);
  const liftY = motionOk ? (pressed ? -6 : hover ? -8 : 0) : 0;
  const liftZ = motionOk ? (pressed ? 14 : hover ? 12 : 0) : 0;
  const scale = motionOk && pressed ? 0.985 : 1;

  const baseShadow =
    "0 20px 50px -15px rgba(0,0,0,0.55), 0 0 0 1px hsl(42 76% 46% / 0.18), 0 1px 0 0 hsl(42 80% 62% / 0.22) inset, 0 -16px 40px -12px hsl(42 76% 46% / 0.12)";
  const liftShadow =
    "0 28px 56px -12px rgba(0,0,0,0.65), 0 0 0 1px hsl(42 76% 46% / 0.25), 0 1px 0 0 hsl(42 80% 62% / 0.35) inset, 0 -20px 50px -10px hsl(42 76% 46% / 0.15)";
  const shadowLift =
    motionOk && (pressed || hover) ? liftShadow : baseShadow;

  const transform = motionOk
    ? `rotateX(${rx}deg) rotateY(${ry}deg) translateY(${liftY}px) translateZ(${liftZ}px) scale(${scale})`
    : undefined;

  return (
    <div className="relative mx-auto max-w-md lg:mx-0 [perspective:1100px] [perspective-origin:50%_35%]">
      <div
        className="pointer-events-none absolute -bottom-1 left-[12%] right-[12%] z-0 h-6 rounded-[50%] bg-black/60 blur-2xl transition-opacity duration-300"
        style={{ opacity: pressed ? 0.85 : hover ? 0.75 : 0.6 }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -bottom-3 left-[8%] right-[8%] z-0 h-10 rounded-[50%] bg-gold/[0.06] blur-3xl" aria-hidden />

      <div
        ref={tiltTargetRef}
        role="group"
        aria-label="Portrait — tap or scroll to explore depth"
        className={cn(
          "relative z-10 transform-gpu touch-manipulation select-none will-change-transform [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent]",
          "transition-[transform,box-shadow] motion-reduce:transition-none",
          reducedMotion ? "duration-150" : "duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        )}
        style={{
          transform,
          boxShadow: shadowLift,
        }}
        onPointerDown={(e) => {
          if (e.pointerType === "mouse" && e.button !== 0) return;
          try {
            e.currentTarget.setPointerCapture(e.pointerId);
          } catch {
            /* ignore */
          }
          setPressed(true);
        }}
        onPointerUp={() => setPressed(false)}
        onPointerCancel={() => setPressed(false)}
        onPointerLeave={() => setPressed(false)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false);
          setPressed(false);
        }}
      >
        <div
          className="rounded-sm p-[1px] shadow-[2px_3px_0_-1px_rgba(0,0,0,0.35)]"
          style={{
            background:
              "linear-gradient(145deg, hsl(var(--gold-light) / 0.65) 0%, hsl(var(--gold) / 0.35) 25%, hsl(var(--gold) / 0.08) 55%, hsl(var(--ember) / 0.35) 100%)",
          }}
        >
          <div className="rounded-sm bg-gradient-to-br from-background via-background to-charcoal/90 p-3 sm:p-4 shadow-[inset_0_2px_12px_rgba(0,0,0,0.45)]">
            <div className="relative border border-gold/30 bg-hut/90 shadow-[inset_0_1px_0_hsl(42_80%_62%/0.12),inset_0_-12px_32px_rgba(0,0,0,0.35)]">
              <span
                className="pointer-events-none absolute -left-px -top-px z-10 h-7 w-7 border-l-2 border-t-2 border-gold/80 shadow-[1px_1px_0_rgba(0,0,0,0.3)]"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -right-px -top-px z-10 h-7 w-7 border-r-2 border-t-2 border-gold/80 shadow-[-1px_1px_0_rgba(0,0,0,0.3)]"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -bottom-px -left-px z-10 h-7 w-7 border-b-2 border-l-2 border-gold/80 shadow-[1px_-1px_0_rgba(0,0,0,0.3)]"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -bottom-px -right-px z-10 h-7 w-7 border-b-2 border-r-2 border-gold/80 shadow-[-1px_-1px_0_rgba(0,0,0,0.3)]"
                aria-hidden
              />

              <div className="relative aspect-[3/4] w-full overflow-hidden [transform:translateZ(4px)]">
                <span
                  className="pointer-events-none absolute -right-1 bottom-0 z-0 font-mono text-[clamp(3.5rem,18vw,7rem)] leading-none text-gold/[0.08] select-none [transform:translateZ(-8px)]"
                  aria-hidden
                >
                  ∞
                </span>
                <img
                  src={src}
                  alt={alt}
                  className={cn(
                    "relative z-[1] h-full w-full object-cover object-top [transform:translateZ(6px)] shadow-[0_8px_24px_rgba(0,0,0,0.4)]",
                    "transition-[filter,transform] duration-200",
                    pressed && "brightness-110 contrast-[1.02]",
                  )}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-background/30 via-transparent to-gold/[0.06] [transform:translateZ(8px)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent [transform:translateZ(10px)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-mono relative z-10 mt-5 text-center text-[10px] uppercase tracking-[0.35em] text-gold/45 lg:text-left">
        {caption}
      </p>
    </div>
  );
};

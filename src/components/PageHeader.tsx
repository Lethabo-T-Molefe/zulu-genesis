import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { brandLogos } from "@/lib/brand-assets";

interface PageHeaderProps {
  label: string;
  title: string;
  titleAccent: string;
  description: string;
  graphic?: React.ReactNode;
}

const PageHeader = ({ label, title, titleAccent, description, graphic }: PageHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate text lines
    if (ref.current) {
      animate(ref.current.querySelectorAll(".ph-line"), {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: stagger(120),
        ease: "outExpo",
      });
    }

    if (!graphicRef.current) return;

    // Collect geometry elements that should get the stroke-draw effect.
    // Skip elements with a pre-set stroke-dasharray (decorative dashed rings etc.)
    // and skip explicitly filled shapes — those just appear via the wrapper fade.
    const drawEls = Array.from(
      graphicRef.current.querySelectorAll<SVGGeometryElement>(
        "line, circle, path, polygon, polyline, rect"
      )
    ).filter(el => {
      const fill = el.getAttribute("fill");
      return !el.getAttribute("stroke-dasharray") && (fill === null || fill === "none");
    });

    // Prime each element's stroke so it starts invisible (offset == full length)
    drawEls.forEach(el => {
      try {
        const len = el.getTotalLength();
        el.style.strokeDasharray = String(len);
        el.style.strokeDashoffset = String(len);
      } catch {
        // getTotalLength not available — element will still appear via wrapper fade
      }
    });

    // Wrapper: fade in + gentle rise, slightly after text starts
    animate(graphicRef.current, {
      opacity: [0, 1],
      translateY: [22, 0],
      duration: 900,
      delay: 460,
      ease: "outExpo",
    });

    // Stroke-draw each geometry element with a stagger so they appear sequentially
    if (drawEls.length) {
      animate(drawEls, {
        strokeDashoffset: 0,
        duration: 1400,
        delay: stagger(45, { start: 480 }),
        ease: "outCubic",
      });
    }
  }, []);

  return (
    <section className="relative pt-24 md:pt-36 lg:pt-44 pb-16 md:pb-20 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className={graphic ? "flex items-center gap-8 lg:gap-16" : ""}>
          <div ref={ref} className={graphic ? "flex-1 min-w-0" : "max-w-4xl"}>
            <div className="ph-line flex items-center gap-3 mb-4" style={{ opacity: 0 }}>
              <img
                src={brandLogos.submark}
                alt=""
                className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 object-contain opacity-85"
              />
              <span className="text-mono text-xs uppercase tracking-[0.3em] text-gold">{label}</span>
            </div>
            <h1 className="text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              <span className="ph-line inline-block" style={{ opacity: 0 }}>{title}</span>
              <br />
              <span className="ph-line inline-block text-gold-gradient" style={{ opacity: 0 }}>{titleAccent}</span>
            </h1>
            <p className="ph-line text-base md:text-lg lg:text-xl text-ash max-w-2xl leading-relaxed" style={{ opacity: 0 }}>
              {description}
            </p>
          </div>
          {graphic && (
            <div
              ref={graphicRef}
              className="hidden lg:flex shrink-0 w-80 xl:w-96 items-center justify-center text-gold"
              style={{ opacity: 0 }}
            >
              {graphic}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

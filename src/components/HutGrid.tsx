import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger, utils } from "animejs";
import { fieldsData } from "@/data/fieldsData";

const HutGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const hallRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);

          // Header text stagger
          if (headerRef.current) {
            animate(headerRef.current.querySelectorAll(".header-line"), {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              delay: stagger(150),
              easing: "outExpo",
            });
          }

          // Grid cards — stagger from top-left with scale + rotation
          if (gridRef.current) {
            animate(gridRef.current.querySelectorAll(".hut-card"), {
              opacity: [0, 1],
              translateY: [40, 0],
              scale: [0.92, 1],
              rotateX: [8, 0],
              duration: 700,
              delay: stagger(70, { grid: [4, 3], from: "first" }),
              easing: "outExpo",
            });
          }

          // Central hall — dramatic scale entrance
          if (hallRef.current) {
            animate(hallRef.current, {
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 1000,
              delay: 1200,
              easing: "outElastic(1, .6)",
            });

            // Pulsing glow ring on the infinity symbol
            animate(hallRef.current.querySelector(".hall-infinity"), {
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4],
              duration: 3000,
              delay: 2000,
              loop: true,
              easing: "inOutSine",
            });
          }
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [revealed]);

  // Hover ripple effect for cards
  const handleCardHover = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const glowLine = card.querySelector(".glow-line") as HTMLElement;
    if (glowLine) {
      utils.remove(glowLine);
      animate(glowLine, {
        opacity: [0, 1, 0],
        translateX: ["-100%", "100%"],
        duration: 800,
        easing: "inOutQuad",
      });
    }
  };

  return (
    <section id="fields" ref={sectionRef} className="relative py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section header */}
        <div ref={headerRef} className="mb-12 md:mb-16 lg:mb-24">
          <div className="header-line text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>
            The Village of Knowledge
          </div>
          <h2 className="text-display text-3xl md:text-5xl lg:text-7xl text-foreground">
            <span className="header-line inline-block" style={{ opacity: 0 }}>12 Fields.</span>
            <br />
            <span className="header-line inline-block text-gold-gradient" style={{ opacity: 0 }}>One Vision.</span>
          </h2>
          <Link to="/fields" className="header-line btn-gold-outline text-xs mt-8 inline-flex" style={{ opacity: 0 }}>
            Explore All Fields
          </Link>
        </div>

        {/* Hut grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12">
          {fieldsData.map((hut) => (
            <Link
              key={hut.slug}
              to={`/fields/${hut.slug}`}
              className="hut-card bg-hut rounded-sm p-6 md:p-8 cursor-pointer group transition-all duration-500 relative overflow-hidden"
              style={{ opacity: 0, perspective: "600px" }}
              onMouseEnter={handleCardHover}
            >
              {/* Animated glow sweep */}
              <div className="glow-line absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0" />

              <hut.icon className="w-8 h-8 mb-4 text-gold/70 group-hover:text-gold group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
              <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-2">{hut.prefix}</div>
              <h3 className="text-display text-xl text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">
                {hut.name}
              </h3>
              <p className="text-sm text-ash leading-relaxed">{hut.desc}</p>

              <div className="mt-4 pt-4 border-t border-gold-subtle flex items-center justify-between">
                <span className="text-mono text-[9px] uppercase tracking-widest text-gold/40 group-hover:text-gold/70 transition-colors">
                  ∞ Business Dept. Active
                </span>
                <span className="text-mono text-[9px] text-gold/30 group-hover:text-gold transition-colors">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Central Hall */}
        <div
          ref={hallRef}
          className="bg-hut glow-gold rounded-sm p-6 md:p-8 lg:p-12 text-center border border-gold/20 relative overflow-hidden"
          style={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">The Central Hall</div>
            <h3 className="text-display text-2xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Integrated Innovation Council
            </h3>
            <p className="text-ash max-w-2xl mx-auto leading-relaxed mb-6">
              36 elite specialists — three from each field — converge to synthesize
              multidisciplinary knowledge into unified, powerful solution models.
              Where quantum entanglement meets intellectual collaboration.
            </p>
            <div className="hall-infinity infinity-symbol text-5xl mb-6">∞</div>
            <Link to="/solution-lab" className="btn-ember text-xs inline-flex">
              Enter the Solution Lab <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HutGrid;

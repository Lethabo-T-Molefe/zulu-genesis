import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";

const pillars = [
  {
    number: "01",
    name: "Deep Work",
    desc: "Uninterrupted, focused intellectual effort that produces distilled, high-impact results. We reject shallow busy-work in favor of cognitive intensity.",
    symbol: "◆",
  },
  {
    number: "02",
    name: "Kaizen",
    desc: "Continuous incremental refinement. Every process, every solution, every mind within our network is in a perpetual state of disciplined improvement.",
    symbol: "△",
  },
  {
    number: "03",
    name: "Goldilocks Rule",
    desc: "Challenges calibrated to be 'just right' — stimulating enough to drive growth, achievable enough to sustain momentum and mastery.",
    symbol: "○",
  },
];

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);

          // Decorative lines — draw from center outward
          animate([topLineRef.current, bottomLineRef.current], {
            scaleX: [0, 1],
            duration: 1200,
            easing: "inOutQuart",
          });

          // Header — stagger lines
          if (headerRef.current) {
            animate(headerRef.current.querySelectorAll(".phil-line"), {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              delay: stagger(120, { start: 300 }),
              easing: "outExpo",
            });
          }

          // Cards — stagger from center with 3D rotation
          if (cardsRef.current) {
            animate(cardsRef.current.querySelectorAll(".pillar-card"), {
              opacity: [0, 1],
              translateY: [50, 0],
              rotateY: [15, 0],
              duration: 900,
              delay: stagger(180, { start: 700, from: "center" }),
              easing: "outExpo",
            });

            // Symbols — separate bouncy animation
            animate(cardsRef.current.querySelectorAll(".pillar-symbol"), {
              scale: [0, 1],
              rotate: [180, 0],
              opacity: [0, 0.3],
              duration: 800,
              delay: stagger(200, { start: 1200, from: "center" }),
              easing: "outElastic(1, .5)",
            });
          }
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [revealed]);

  // Hover: symbol spins
  const handleSymbolHover = (e: React.MouseEvent) => {
    const symbol = e.currentTarget.querySelector(".pillar-symbol");
    if (symbol) {
      animate(symbol, {
        rotate: "+=360",
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.7, 0.3],
        duration: 800,
        easing: "inOutSine",
      });
    }
  };

  return (
    <section id="philosophy" ref={sectionRef} className="relative py-20 md:py-32 lg:py-48 bg-charcoal">
      <div
        ref={topLineRef}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        style={{ transform: "scaleX(0)" }}
      />

      <div className="container mx-auto px-6 md:px-12">
        <div ref={headerRef} className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="phil-line text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>
            Philosophical Foundations
          </div>
          <h2 className="text-display text-3xl md:text-5xl lg:text-7xl text-foreground mb-6">
            <span className="phil-line inline-block" style={{ opacity: 0 }}>The Divine Triangle</span>
            <br />
            <span className="phil-line inline-block text-gold-gradient" style={{ opacity: 0 }}>of Success</span>
          </h2>
          <p className="phil-line text-ash max-w-xl mx-auto leading-relaxed mb-8" style={{ opacity: 0 }}>
            Three interlocking principles engineered for sustainable excellence —
            scientifically modelled, rigorously applied.
          </p>
          <Link to="/philosophies" className="phil-line btn-gold-outline text-xs inline-flex" style={{ opacity: 0 }}>
            Explore the Divine Triangle
          </Link>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="pillar-card bg-hut rounded-sm p-6 md:p-8 lg:p-10 relative overflow-hidden group cursor-pointer"
              style={{ opacity: 0, perspective: "800px" }}
              onMouseEnter={handleSymbolHover}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-ember/50 transition-all duration-700" />

              <div className="text-mono text-xs text-gold/40 mb-6">{pillar.number}</div>
              <div className="pillar-symbol text-4xl text-gold/30 mb-4" style={{ opacity: 0 }}>{pillar.symbol}</div>
              <h3 className="text-display text-2xl text-foreground mb-4">{pillar.name}</h3>
              <p className="text-sm text-ash leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={bottomLineRef}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        style={{ transform: "scaleX(0)" }}
      />
    </section>
  );
};

export default PhilosophySection;

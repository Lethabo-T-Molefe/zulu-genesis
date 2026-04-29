import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";
import { Users, Atom, BarChart3, Infinity as InfinityIcon } from "lucide-react";

const principles = [
  {
    icon: Users,
    title: "36 Elite Specialists",
    desc: "Three from each of the 12 fields — converging in the Central Hall to synthesize knowledge into unified solutions.",
  },
  {
    icon: Atom,
    title: "Quantum Entanglement",
    desc: "Interconnected knowledge systems produce emergent solutions far greater than the sum of their parts.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    desc: "Every Integrated Solution Model is built with clear metrics, KPIs, and accountability frameworks from day one.",
  },
  {
    icon: InfinityIcon,
    title: "Infinite Iteration",
    desc: "Solutions are never 'finished' — Kaizen ensures every model undergoes perpetual refinement and adaptation.",
  },
];

const SolutionLabSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);
          if (headerRef.current) {
            animate(headerRef.current.querySelectorAll(".sl-line"), {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 800,
              delay: stagger(120),
              ease: "outExpo",
            });
          }
          if (cardsRef.current) {
            animate(cardsRef.current.querySelectorAll(".sl-card"), {
              opacity: [0, 1],
              translateY: [30, 0],
              scale: [0.95, 1],
              duration: 700,
              delay: stagger(90, { start: 400 }),
              ease: "outExpo",
            });
          }
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <section id="solution-lab" ref={sectionRef} className="relative py-10 md:py-16 bg-charcoal">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div ref={headerRef} className="mb-7 md:mb-10">
          <div className="sl-line text-mono text-xs uppercase tracking-[0.3em] text-gold mb-3" style={{ opacity: 0 }}>
            Integrated Solution Lab
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <div>
              <h2 className="text-display text-2xl md:text-3xl lg:text-4xl text-foreground">
                <span className="sl-line inline-block" style={{ opacity: 0 }}>The Central Hall</span>
                <br />
                <span className="sl-line inline-block text-gold-gradient" style={{ opacity: 0 }}>Where Fields Converge</span>
              </h2>
            </div>
            <div>
              <p className="sl-line text-sm text-ash leading-relaxed mb-5" style={{ opacity: 0 }}>
                The operational heart of Sec(t) Infinity — where 36 elite specialists from 12 disciplines
                synthesize multidisciplinary knowledge into unified, powerful Integrated Solution Models
                engineered for real-world impact.
              </p>
              <Link to="/solution-lab" className="sl-line btn-ember text-xs inline-flex" style={{ opacity: 0 }}>
                Enter the Solution Lab <span className="text-base leading-none">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {principles.map((p) => (
            <div
              key={p.title}
              className="sl-card bg-hut rounded-sm p-5 border border-gold/10 group hover:border-gold/30 transition-colors duration-500"
              style={{ opacity: 0 }}
            >
              <p.icon
                className="w-6 h-6 text-gold/60 mb-3 group-hover:text-gold transition-colors"
                strokeWidth={1.5}
              />
              <h3 className="text-display text-base text-foreground mb-1">{p.title}</h3>
              <p className="text-xs text-ash leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
};

export default SolutionLabSection;

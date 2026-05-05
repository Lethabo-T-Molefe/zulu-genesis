import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Users, Atom, BarChart3, Infinity } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const process = [
  { step: "01", title: "Field Delegation", desc: "Three elite specialists are selected from each of the 12 huts — chosen for their depth, range, and collaborative capacity." },
  { step: "02", title: "Knowledge Synthesis", desc: "The 36 specialists converge in the Central Hall, bringing distilled research, findings, and solutions from their respective fields." },
  { step: "03", title: "Multidisciplinary Integration", desc: "Through systems thinking and the Quantum Entanglement principle, disparate insights are woven into unified, coherent solution models." },
  { step: "04", title: "Solution Modelling", desc: "Integrated Solution Models are designed, tested, and refined — measurable, scalable, and ready for real-world deployment." },
  { step: "05", title: "Impact Delivery", desc: "Solutions are commissioned, measured, and continuously improved through Kaizen — producing sustainable real-world impact." },
];

const principles = [
  { icon: Users, title: "36 Elite Specialists", desc: "Three from each of the 12 fields — mercurial, aristocratic-cognitive thinkers who operate at the intersection of disciplines." },
  { icon: Atom, title: "Quantum Entanglement", desc: "The principle that interconnected knowledge systems produce emergent solutions greater than the sum of their parts." },
  { icon: BarChart3, title: "Measurable Impact", desc: "Every solution model is designed with clear metrics, KPIs, and accountability frameworks from day one." },
  { icon: Infinity, title: "Infinite Iteration", desc: "Solutions are never 'finished' — the Kaizen philosophy ensures perpetual refinement and adaptation." },
];

const SolutionLab = () => {
  const { authenticated } = useAuth();
  const prinRef = useRef<HTMLDivElement>(null);
  const procRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState({ prin: false, proc: false });

  useEffect(() => {
    const observe = (el: HTMLElement | null, key: keyof typeof revealed) => {
      if (!el) return;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !revealed[key]) {
          setRevealed((p) => ({ ...p, [key]: true }));
          animate(el.querySelectorAll(".anim-item"), {
            opacity: [0, 1], translateY: [30, 0], duration: 800,
            delay: stagger(100), ease: "outExpo",
          });
        }
      }, { threshold: 0.1 });
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = observe(prinRef.current, "prin");
    const c2 = observe(procRef.current, "proc");
    return () => { c1?.(); c2?.(); };
  }, [revealed]);

  return (
    <PageLayout>
      <SEOHead
        title="Solution Lab in South Africa | 36 Specialist Model"
        description="Discover how Sec(t) Infinity's Central Hall brings together 36 elite specialists from 12 fields to design, test, and deploy integrated solution models for complex African and global challenges."
        path="/solution-lab"
        keywords="Sec(t) Infinity Solution Lab, Central Hall, integrated solutions, multidisciplinary research, 36 specialists, knowledge synthesis, innovation lab Africa"
      />
      <PageHeader
        label="Integrated Solution Lab"
        title="The Central Hall"
        titleAccent="Where Fields Converge"
        description="The heart of Sec(t) Infinity — where 36 elite specialists from 12 disciplines synthesize multidisciplinary knowledge into unified, powerful Integrated Solution Models."
        graphic={
          <svg viewBox="0 0 240 240" fill="none" stroke="currentColor" strokeLinecap="round" className="w-full h-auto">
            {/* Outer dashed orbit */}
            <circle cx="120" cy="120" r="92" strokeWidth="0.6" opacity="0.18" strokeDasharray="2 5"/>
            {/* 12 spokes from center to orbit */}
            <line x1="120" y1="120" x2="212" y2="120" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="200" y2="74" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="166" y2="40" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="120" y2="28" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="74" y2="40" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="40" y2="74" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="28" y2="120" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="40" y2="166" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="74" y2="200" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="120" y2="212" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="166" y2="200" strokeWidth="0.8" opacity="0.45"/>
            <line x1="120" y1="120" x2="200" y2="166" strokeWidth="0.8" opacity="0.45"/>
            {/* 12 outer field nodes */}
            <circle cx="212" cy="120" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="200" cy="74" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="166" cy="40" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="120" cy="28" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="74" cy="40" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="40" cy="74" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="28" cy="120" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="40" cy="166" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="74" cy="200" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="120" cy="212" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="166" cy="200" r="5" strokeWidth="1.2" opacity="0.7"/>
            <circle cx="200" cy="166" r="5" strokeWidth="1.2" opacity="0.7"/>
            {/* Central Hall hub */}
            <circle cx="120" cy="120" r="26" strokeWidth="1.5" opacity="0.85"/>
            <circle cx="120" cy="120" r="14" fill="currentColor" opacity="0.15"/>
            <path d="M120 108 L132 120 L120 132 L108 120 Z" strokeWidth="1.1" opacity="0.7"/>
          </svg>
        }
      />

      <section ref={prinRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>Core Principles</div>
          <h2 className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-16" style={{ opacity: 0 }}>
            How <span className="text-gold-gradient">Integration Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="anim-item bg-hut rounded-sm p-8 border border-gold/10 group hover:border-gold/30 transition-colors duration-500" style={{ opacity: 0 }}>
                <p.icon className="w-8 h-8 text-gold/60 mb-4 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <h3 className="text-display text-xl text-foreground mb-3">{p.title}</h3>
                {authenticated && (
                  <p className="text-base text-ash leading-relaxed">{p.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {authenticated && (
      <section ref={procRef} className="py-20 md:py-32 bg-charcoal relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>The Process</div>
          <h2 className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-16" style={{ opacity: 0 }}>
            From Field to <span className="text-gold-gradient">Integrated Solution</span>
          </h2>
          <div className="space-y-6">
            {process.map((item, i) => (
              <div key={item.step} className="anim-item flex gap-4 md:gap-6 lg:gap-10 items-start" style={{ opacity: 0 }}>
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gold/30 flex items-center justify-center">
                    <span className="text-display text-lg text-gold">{item.step}</span>
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px h-6 bg-gold/20 mx-auto mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-display text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-base text-ash leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/join" className="btn-ember text-xs inline-flex">
              Join the Network <span className="text-base leading-none">+</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>
      )}
    </PageLayout>
  );
};

export default SolutionLab;

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";

const pillars = [
  {
    number: "01",
    name: "Deep Work",
    symbol: "◆",
    tagline: "Focused Intellectual Intensity",
    description: "Uninterrupted, focused intellectual effort that produces distilled, high-impact results. We reject shallow busy-work in favor of cognitive intensity.",
    details: [
      "Extended periods of uninterrupted concentration on cognitively demanding tasks",
      "Elimination of distractions and context-switching that erode intellectual output",
      "Production of work at the frontier of one's abilities — where true innovation lives",
      "Every specialist in our village dedicates structured deep work blocks to their craft",
    ],
  },
  {
    number: "02",
    name: "Kaizen",
    symbol: "△",
    tagline: "Continuous Incremental Refinement",
    description: "Continuous incremental refinement. Every process, every solution, every mind within our network is in a perpetual state of disciplined improvement.",
    details: [
      "Small, consistent improvements compound into transformative change over time",
      "Every system, process, and solution is subject to iterative review and refinement",
      "A culture of never being satisfied with 'good enough' — excellence is a moving target",
      "Applied across all 12 fields to ensure perpetual evolution of our ecosystem",
    ],
  },
  {
    number: "03",
    name: "Goldilocks Rule",
    symbol: "○",
    tagline: "Optimally Challenging Work",
    description: "Challenges calibrated to be 'just right' — stimulating enough to drive growth, achievable enough to sustain momentum and mastery.",
    details: [
      "Tasks calibrated at approximately 4% beyond current capability for optimal growth",
      "Avoids the paralysis of impossibility and the stagnation of comfort zones",
      "Scientifically proven to maximize engagement, learning velocity, and creative output",
      "Applied in project scoping, research design, and educational programming across fields",
    ],
  },
];

const Philosophies = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const intRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState({ cards: false, int: false });

  useEffect(() => {
    const observe = (el: HTMLElement | null, key: keyof typeof revealed) => {
      if (!el) return;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !revealed[key]) {
          setRevealed((p) => ({ ...p, [key]: true }));
          animate(el.querySelectorAll(".anim-item"), {
            opacity: [0, 1], translateY: [30, 0], duration: 800,
            delay: stagger(120), ease: "outExpo",
          });
        }
      }, { threshold: 0.1 });
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = observe(cardsRef.current, "cards");
    const c2 = observe(intRef.current, "int");
    return () => { c1?.(); c2?.(); };
  }, [revealed]);

  return (
    <PageLayout>
      <SEOHead
        title="Philosophies — The Divine Triangle of Success"
        description="Discover the three governing principles of Sec(t) Infinity: Deep Work, Kaizen, and the Goldilocks Rule. The Divine Triangle of Success is the constitutional framework behind every business and solution."
        path="/philosophies"
        keywords="Divine Triangle of Success, Deep Work, Kaizen, Goldilocks Rule, Sec(t) Infinity philosophy, productivity framework, innovation principles"
      />
      <PageHeader
        label="Philosophical Foundations"
        title="The Divine Triangle"
        titleAccent="of Success"
        description="The Supreme Law governing ALL Sec(t) Infinity businesses and SolutionZ — three interlocking principles scientifically modelled for sustainable excellence."
      />

      <section ref={cardsRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-12">
            {pillars.map((pillar, idx) => (
              <div key={pillar.name} className="anim-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 bg-hut rounded-sm p-6 md:p-8 lg:p-12 border border-gold/10" style={{ opacity: 0 }}>
                <div className="lg:col-span-2">
                  <div className="text-mono text-xs text-gold/40 mb-2">{pillar.number}</div>
                  <div className="text-5xl text-gold/30 mb-4">{pillar.symbol}</div>
                  <h3 className="text-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-2">{pillar.name}</h3>
                  <div className="text-mono text-xs uppercase tracking-widest text-gold/60 mb-4">{pillar.tagline}</div>
                  <p className="text-ash leading-relaxed">{pillar.description}</p>
                </div>
                <div className="lg:col-span-3 space-y-4">
                  <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">How It Applies</div>
                  {pillar.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-background/50 rounded-sm">
                      <span className="text-gold text-xs mt-1 shrink-0">◆</span>
                      <span className="text-sm text-foreground leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={intRef} className="py-20 md:py-32 bg-charcoal relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>Integrated Governance</div>
            <h2 className="anim-item text-display text-2xl md:text-4xl lg:text-5xl text-foreground mb-8" style={{ opacity: 0 }}>
              The Constitution of <span className="text-gold-gradient">Our Ecosystem</span>
            </h2>
            <p className="anim-item text-ash leading-relaxed mb-6" style={{ opacity: 0 }}>
              The Divine Triangle is not merely a suggestion — it is the integrated constitution
              and governance philosophy that underpins every decision, project, and interaction
              within the Sec(t) Infinity network. Deep Work produces quality. Kaizen ensures
              evolution. The Goldilocks Rule sustains momentum.
            </p>
            <p className="anim-item text-ash leading-relaxed mb-10" style={{ opacity: 0 }}>
              Together, they form a self-reinforcing system where focused effort leads to
              refined output, which generates perfectly calibrated new challenges — creating
              an infinite cycle of growth, mastery, and innovation.
            </p>
            <div className="anim-item flex flex-wrap justify-center gap-4" style={{ opacity: 0 }}>
              <Link to="/solution-lab" className="btn-ember text-xs">
                See It in Action <span className="text-base leading-none">→</span>
              </Link>
              <Link to="/fields" className="btn-gold-outline text-xs">
                Explore the Fields
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>
    </PageLayout>
  );
};

export default Philosophies;

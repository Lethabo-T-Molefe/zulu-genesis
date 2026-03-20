import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" ref={ref} className="relative py-32 md:py-48 bg-charcoal">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Philosophical Foundations
          </div>
          <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            The Divine Triangle
            <br />
            <span className="text-gold-gradient">of Success</span>
          </h2>
          <p className="text-ash max-w-xl mx-auto leading-relaxed">
            Three interlocking principles engineered for sustainable excellence — 
            scientifically modelled, rigorously applied.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              animate={visible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-hut rounded-sm p-8 md:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-ember/50 transition-all duration-700" />
              
              <div className="text-mono text-xs text-gold/40 mb-6">{pillar.number}</div>
              <div className="text-4xl text-gold/30 mb-4 group-hover:text-gold/60 transition-colors duration-500">{pillar.symbol}</div>
              <h3 className="text-display text-2xl text-foreground mb-4">{pillar.name}</h3>
              <p className="text-sm text-ash leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
};

export default PhilosophySection;

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AcademiaSection = () => {
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
    <section id="academia" ref={ref} className="relative py-32 md:py-48 bg-charcoal">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">Sec(t) Academia</div>
            <h2 className="text-display text-4xl md:text-5xl text-foreground mb-6">
              Cultivating<br />
              <span className="text-gold-gradient">Hybrid Professionals</span>
            </h2>
            <p className="text-ash leading-relaxed mb-8">
              Our learning institution produces professionals fluent across multiple disciplines — 
              thinkers who can bridge Science and Commerce, Engineering and Law, 
              Technology and African Heritage.
            </p>
            <a href="#contact" className="btn-ember text-xs">
              Apply Now <span className="text-base leading-none">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-hut rounded-sm p-8 md:p-10"
          >
            <h3 className="text-display text-xl text-foreground mb-6">
              ∞ Infinity Tutoring
            </h3>
            <div className="space-y-4 mb-8">
              {[
                "Hybrid (Physical + Online) tutoring",
                "Grade 8 through Post-Graduate",
                "Holiday Coding Classes (AI-aligned)",
                "All 12 fields of specialization",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-gold text-xs mt-1">◆</span>
                  <span className="text-sm text-secondary-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-gold-subtle">
              <div className="text-mono text-[9px] uppercase tracking-widest text-gold/50">
                Specializations aligned with AI · Science · Engineering · Commerce · Technology · Law
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
};

export default AcademiaSection;

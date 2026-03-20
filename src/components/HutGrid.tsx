import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const huts = [
  { name: "Science", prefix: "i-Science", icon: "🔬", desc: "Fundamental research and scientific discovery" },
  { name: "Engineering", prefix: "i-Engineering", icon: "⚙️", desc: "Design, build, and innovate systems" },
  { name: "Commerce", prefix: "i-Commerce", icon: "📊", desc: "Financial strategy and commercial intelligence" },
  { name: "Technology", prefix: "i-Technology", icon: "💻", desc: "Digital systems and AI-aligned development" },
  { name: "Law", prefix: "i-Law", icon: "⚖️", desc: "Governance, policy, and legal frameworks" },
  { name: "African History", prefix: "i-History", icon: "📜", desc: "Heritage preservation and cultural wisdom" },
  { name: "Visual Arts", prefix: "i-Visual Arts", icon: "🎨", desc: "Visual communication and design thinking" },
  { name: "Creative Arts", prefix: "i-Creative Arts", icon: "✨", desc: "Expression, narrative, and cultural production" },
  { name: "Social Sciences", prefix: "i-Social", icon: "🌍", desc: "Understanding societies and human behavior" },
  { name: "Innovation", prefix: "i-Innovation", icon: "💡", desc: "Invention and breakthrough methodologies" },
  { name: "Research & Dev", prefix: "i-R&D", icon: "🧪", desc: "Applied research and product development" },
  { name: "Strategic Design", prefix: "i-Strategy", icon: "🎯", desc: "Systems architecture and strategic planning" },
];

const HutCard = ({ hut, index }: { hut: typeof huts[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={visible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-hut rounded-sm p-6 md:p-8 cursor-pointer group transition-all duration-500 relative overflow-hidden"
    >
      {/* Glow line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/60 transition-all duration-700" />
      
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{hut.icon}</div>
      <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-2">{hut.prefix}</div>
      <h3 className="text-display text-xl text-foreground mb-2 group-hover:text-gold-gradient transition-colors duration-300">
        {hut.name}
      </h3>
      <p className="text-sm text-ash leading-relaxed">{hut.desc}</p>
      
      {/* Infinity business badge */}
      <div className="mt-4 pt-4 border-t border-gold-subtle">
        <span className="text-mono text-[9px] uppercase tracking-widest text-gold/40 group-hover:text-gold/70 transition-colors">
          ∞ Business Dept. Active
        </span>
      </div>
    </motion.div>
  );
};

const HutGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="fields" ref={sectionRef} className="relative py-32 md:py-40">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">The Village of Knowledge</div>
          <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-foreground">
            12 Fields.<br />
            <span className="text-gold-gradient">One Vision.</span>
          </h2>
        </motion.div>

        {/* Hut grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12">
          {huts.map((hut, i) => (
            <HutCard key={hut.name} hut={hut} index={i} />
          ))}
        </div>

        {/* Central Hall */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-hut glow-gold rounded-sm p-8 md:p-12 text-center border border-gold/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">The Central Hall</div>
            <h3 className="text-display text-3xl md:text-5xl text-foreground mb-4">
              Integrated Innovation Council
            </h3>
            <p className="text-ash max-w-2xl mx-auto leading-relaxed mb-6">
              36 elite specialists — three from each field — converge to synthesize 
              multidisciplinary knowledge into unified, powerful solution models. 
              Where quantum entanglement meets intellectual collaboration.
            </p>
            <div className="infinity-symbol text-5xl animate-pulse-gold">∞</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HutGrid;

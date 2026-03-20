import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
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
    <section id="about" ref={ref} className="relative py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Mission</div>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              Africa as a<br />
              <span className="text-gold-gradient">Global Producer</span>
            </h2>
            <div className="space-y-6 text-ash leading-relaxed">
              <p>
                To position Africa as a global hub of innovation, invention, and production — 
                not merely a consumer, but a world-class producer leading in scientific discovery, 
                technological invention, industrial production, and entrepreneurial innovation.
              </p>
              <p>
                We invest in research, design systems, build enterprises, engineer solutions, 
                and champion entrepreneurial and financial intelligence across every discipline 
                in our ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Right - capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {[
              "Engineering & Scientific Innovation",
              "Commercial Intelligence & Financial Strategy",
              "Technology Development & System Design",
              "Governance Alignment Under Law",
              "Concept → Design → Execution → Commissioning",
              "Multidisciplinary Project Consulting",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 12 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 p-4 border-b border-gold-subtle group hover:bg-gold/5 transition-colors duration-300"
              >
                <span className="text-mono text-[10px] text-gold/50 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground group-hover:text-gold transition-colors duration-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

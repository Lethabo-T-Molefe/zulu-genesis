import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroVillage from "@/assets/hero-village.jpg";

const CodeRainColumn = ({ delay, left }: { delay: number; left: string }) => {
  const chars = "∞∑∫∂πΔΩλφψ01";
  const randomChar = () => chars[Math.floor(Math.random() * chars.length)];
  
  return (
    <div
      className="absolute top-0 text-mono text-xs text-gold/20 animate-code-rain whitespace-nowrap"
      style={{ left, animationDelay: `${delay}s`, animationDuration: `${6 + Math.random() * 6}s` }}
    >
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} style={{ opacity: 1 - i * 0.05 }}>{randomChar()}</div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroVillage}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Code rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <CodeRainColumn key={i} delay={i * 0.7} left={`${8 + i * 8}%`} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-mono text-xs uppercase tracking-[0.3em] text-gold mb-8"
          >
            United Minds · Infinite Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] text-foreground mb-8"
          >
            Engineering
            <br />
            <span className="text-gold-gradient">The Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-ash max-w-2xl mb-12 leading-relaxed"
          >
            Through the Divine Triangle of Success — Deep Work, Kaizen, 
            and the Goldilocks Rule — we forge multidisciplinary solutions 
            for complex global problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a href="#fields" className="btn-ember">
              Enter the Village
              <span className="infinity-symbol text-lg">∞</span>
            </a>
            <a href="#about" className="btn-gold-outline">
              Our Mission
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-12 mt-20 pt-8 border-t border-gold-subtle"
          >
            {[
              { value: "12", label: "Fields of Mastery" },
              { value: "36", label: "Elite Specialists" },
              { value: "∞", label: "Solutions Engineered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-display text-3xl md:text-4xl text-gold-gradient">{stat.value}</div>
                <div className="text-mono text-xs uppercase tracking-widest text-ash mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

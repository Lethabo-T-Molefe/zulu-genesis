import { useEffect, useRef, useCallback } from "react";
import { animate, stagger, createTimeline, utils } from "animejs";
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
  const taglineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Master timeline for hero entrance
    const tl = createTimeline({
      defaults: { ease: "outExpo" },
    });

    // Background image zoom-in
    tl.add(bgRef.current, {
      scale: [1.15, 1],
      opacity: [0, 0.45],
      duration: 2000,
    }, 0);

    // Tagline — letter-by-letter reveal
    if (taglineRef.current) {
      const text = taglineRef.current.textContent || "";
      taglineRef.current.innerHTML = text
        .split("")
        .map((char) => `<span class="inline-block" style="opacity:0">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      tl.add(taglineRef.current.querySelectorAll("span"), {
        opacity: [0, 1],
        translateY: [8, 0],
        duration: 600,
        delay: stagger(25),
      }, 200);
    }

    // Headline — word stagger with scale
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".hero-word");
      tl.add(words, {
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.95, 1],
        duration: 900,
        delay: stagger(120),
      }, 400);
    }

    // Subtext — fade & slide
    tl.add(subtextRef.current, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    }, 900);

    // Buttons — stagger in
    if (buttonsRef.current) {
      tl.add(buttonsRef.current.children, {
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 600,
        delay: stagger(150),
      }, 1100);
    }

    // Stats — count up with stagger
    if (statsRef.current) {
      const statEls = statsRef.current.querySelectorAll(".stat-item");
      tl.add(statEls, {
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 700,
        delay: stagger(100),
      }, 1400);

      // Animate stat divider line
      tl.add(statsRef.current.querySelector(".stat-divider"), {
        scaleX: [0, 1],
        duration: 1000,
        ease: "inOutQuart",
      }, 1300);
    }

    // Floating particles
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      animate(particles, {
        translateX: () => utils.random(-80, 80),
        translateY: () => utils.random(-80, 80),
        scale: () => [0, utils.random(5, 15) / 10],
        opacity: () => [0, utils.random(2, 6) / 10],
        duration: () => utils.random(3000, 6000),
        delay: () => utils.random(0, 2000),
        alternate: true,
        loop: true,
        ease: "inOutSine",
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-36 lg:pt-40">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          ref={bgRef}
          src={heroVillage}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0, transform: "scale(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Floating gold particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Code rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <CodeRainColumn key={i} delay={i * 0.7} left={`${8 + i * 8}%`} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-5xl">
          <div
            ref={taglineRef}
            className="text-mono text-xs uppercase tracking-[0.15em] sm:tracking-[0.3em] text-gold mb-8"
          >
            United Minds · Infinite Solutions
          </div>

          <h1
            ref={headlineRef}
            className="text-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground mb-8"
          >
            <span className="hero-word inline-block" style={{ opacity: 0 }}>Engineering</span>
            <br />
            <span className="hero-word inline-block text-gold-gradient" style={{ opacity: 0 }}>The&nbsp;Future</span>
          </h1>

          <p
            ref={subtextRef}
            className="text-lg md:text-xl text-ash max-w-2xl mb-12 leading-relaxed"
            style={{ opacity: 0 }}
          >
            Through the Divine Triangle of Success — Deep Work, Kaizen,
            and the Goldilocks Rule — we forge multidisciplinary solutions
            for complex global problems.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <a href="#fields" className="btn-ember" style={{ opacity: 0 }}>
              Enter the Village
              <span className="infinity-symbol text-lg">∞</span>
            </a>
            <a href="#about" className="btn-gold-outline" style={{ opacity: 0 }}>
              Our Mission
            </a>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 mt-12 md:mt-20 pt-8 relative">
            <div className="stat-divider absolute top-0 left-0 right-0 h-px bg-gold/20" style={{ transformOrigin: "left", transform: "scaleX(0)" }} />
            {[
              { value: "12", label: "Fields of Mastery" },
              { value: "36", label: "Elite Specialists" },
              { value: "∞", label: "Solutions Engineered" },
            ].map((stat) => (
              <div key={stat.label} className="stat-item" style={{ opacity: 0 }}>
                <div className="text-display text-2xl sm:text-3xl md:text-4xl text-gold-gradient">{stat.value}</div>
                <div className="text-mono text-xs uppercase tracking-widest text-ash mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

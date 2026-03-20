import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import logoGold from "@/assets/logo-gold.png";

const FooterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bigLogoRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);

          // CTA heading — letter morphing effect
          if (ctaRef.current) {
            const lines = ctaRef.current.querySelectorAll(".cta-line");
            anime({
              targets: lines,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 900,
              delay: anime.stagger(150),
              easing: "easeOutExpo",
            });

            // CTA button bounce
            anime({
              targets: ctaRef.current.querySelector(".cta-btn"),
              opacity: [0, 1],
              scale: [0.8, 1],
              duration: 600,
              delay: 700,
              easing: "easeOutElastic(1, .6)",
            });
          }

          // Divider draw
          if (dividerRef.current) {
            anime({
              targets: dividerRef.current,
              scaleX: [0, 1],
              duration: 1000,
              delay: 900,
              easing: "easeInOutQuart",
            });
          }

          // Footer grid columns stagger
          if (gridRef.current) {
            anime({
              targets: gridRef.current.querySelectorAll(".footer-col"),
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 700,
              delay: anime.stagger(120, { start: 1100 }),
              easing: "easeOutExpo",
            });
          }

          // Big logo — dramatic reveal
          if (bigLogoRef.current) {
            anime({
              targets: bigLogoRef.current,
              opacity: [0, 0.04],
              scale: [0.8, 1],
              letterSpacing: ["0.1em", "0em"],
              duration: 1500,
              delay: 1500,
              easing: "easeOutExpo",
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
    <footer id="contact" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* CTA */}
        <div ref={ctaRef} className="text-center mb-24">
          <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            <span className="cta-line inline-block" style={{ opacity: 0 }}>Join the</span>
            <br />
            <span className="cta-line inline-block text-gold-gradient" style={{ opacity: 0 }}>Network</span>
          </h2>
          <p className="cta-line text-ash max-w-lg mx-auto mb-8 leading-relaxed" style={{ opacity: 0 }}>
            Are you a researcher, scientist, engineer, entrepreneur, or intellectual
            ready to contribute to infinite solutions?
          </p>
          <a href="mailto:contact@sectinfinity.com" className="cta-btn btn-ember inline-flex" style={{ opacity: 0 }}>
            Let's Connect <span className="text-base leading-none">+</span>
          </a>
        </div>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-16"
          style={{ transform: "scaleX(0)" }}
        />

        {/* Footer grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="footer-col" style={{ opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoGold} alt="" className="h-8 w-8 object-contain" />
              <span className="text-display text-sm text-gold-gradient">Sec(t) Infinity SolutionZ</span>
            </div>
            <p className="text-xs text-ash leading-relaxed">
              Engineering the future through disciplined thinking,
              continuous improvement, and optimally challenging innovation.
            </p>
          </div>

          <div className="footer-col" style={{ opacity: 0 }}>
            <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">Navigate</div>
            <div className="space-y-2">
              {["About", "Fields", "Philosophy", "Academia"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-ash hover:text-gold transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col" style={{ opacity: 0 }}>
            <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">Connect</div>
            <div className="space-y-2 text-sm text-ash">
              <div>contact@sectinfinity.com</div>
              <div>Working Globally</div>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold" />
                <span className="text-mono text-[10px] uppercase tracking-widest text-ember">
                  Accepting Projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Massive logo */}
        <div className="text-center" style={{ opacity: 0 }} ref={bigLogoRef}>
          <div className="text-display text-[8rem] md:text-[14rem] lg:text-[18rem] text-foreground leading-none select-none">
            SEC(T)&nbsp;∞
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <div className="text-mono text-[10px] text-ash/40 uppercase tracking-widest">
            © 2025 Sec(t) Infinity SolutionZ · United Minds. Infinite Solutions.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

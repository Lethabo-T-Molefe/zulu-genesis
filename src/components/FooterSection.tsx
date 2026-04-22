import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { animate, stagger } from "animejs";
import { brandLogos } from "@/lib/brand-assets";

const FooterSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bigLogoRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const { pathname } = useLocation();
  const showCTA = pathname === "/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);

          // CTA heading — only on home page
          if (showCTA && ctaRef.current) {
            const lines = ctaRef.current.querySelectorAll(".cta-line");
            animate(lines, {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 900,
              delay: stagger(150),
              easing: "outExpo",
            });

            const ctaBtn = ctaRef.current.querySelector(".cta-btn");
            if (ctaBtn) {
              animate(ctaBtn, {
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 600,
                delay: 700,
                easing: "outElastic(1, .6)",
              });
            }
          }

          // Divider draw
          if (dividerRef.current) {
            animate(dividerRef.current, {
              scaleX: [0, 1],
              duration: 1000,
              delay: showCTA ? 900 : 0,
              easing: "inOutQuart",
            });
          }

          // Footer grid columns stagger
          if (gridRef.current) {
            animate(gridRef.current.querySelectorAll(".footer-col"), {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 700,
              delay: stagger(120, { start: showCTA ? 1100 : 200 }),
              easing: "outExpo",
            });
          }

          // Big logo — dramatic reveal
          if (bigLogoRef.current) {
            animate(bigLogoRef.current, {
              opacity: [0, 1],
              scale: [0.92, 1],
              duration: 1500,
              delay: 1500,
              easing: "outExpo",
            });
          }
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [revealed, showCTA]);

  return (
    <footer id="contact" ref={sectionRef} className="relative py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* CTA — home page only */}
        {showCTA && (
          <div ref={ctaRef} className="text-center mb-16 md:mb-20 lg:mb-24">
            <div className="cta-line flex justify-center mb-8" style={{ opacity: 0 }}>
              <img
                src={brandLogos.secondary}
                alt=""
                className="h-14 sm:h-16 md:h-20 w-auto max-w-[min(320px,90vw)] object-contain opacity-90"
              />
            </div>
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              <span className="cta-line inline-block" style={{ opacity: 0 }}>Join the</span>
              <br />
              <span className="cta-line inline-block text-gold-gradient" style={{ opacity: 0 }}>Network</span>
            </h2>
            <p className="cta-line text-base text-ash max-w-lg mx-auto mb-8 leading-relaxed" style={{ opacity: 0 }}>
              Are you a researcher, scientist, engineer, entrepreneur, or intellectual
              ready to contribute to infinite solutions?
            </p>
            <Link to="/join" className="cta-btn btn-ember inline-flex" style={{ opacity: 0 }}>
              Let's Connect <span className="text-base leading-none">+</span>
            </Link>
          </div>
        )}

        {/* Divider */}
        <div
          ref={dividerRef}
          className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-16"
          style={{ transform: "scaleX(0)" }}
        />

        {/* Footer grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Brand */}
          <div className="footer-col" style={{ opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <img src={brandLogos.primary} alt="" className="h-30 w-auto max-w-[140px] object-contain object-left" />
            </div>
            <p className="text-xs text-ash leading-relaxed">
              Engineering the future through disciplined thinking,
              continuous improvement, and optimally challenging innovation.
            </p>
            <p className="mt-4 text-xs text-ash/80 leading-relaxed">
              Sec(t) Infinity SolutionZ at sectinfinity.com unites science, engineering, commerce,
              technology, law, African history, visual and creative arts, social sciences, innovation,
              research and development, and strategic design—the Village of Knowledge with Deep Work,
              Kaizen, and the Goldilocks Rule. Explore Sec(t) Academia, the Solution Lab, and how to
              join our Africa innovation network.
            </p>
          </div>

          {/* Navigate + Connect — share a self-end wrapper so their tops align */}
          <div className="footer-col md:col-span-2 md:self-end grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ opacity: 0 }}>
            <div>
              <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">Navigate</div>
              <div className="space-y-2">
                {[
                  { label: "About", href: "/about" },
                  { label: "Fields", href: "/fields" },
                  { label: "Philosophies", href: "/philosophies" },
                  { label: "Solution Lab", href: "/solution-lab" },
                  { label: "Academia", href: "/academia" },
                  { label: "Join", href: "/join" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-sm text-ash hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">Connect</div>
              <div className="space-y-2 text-sm text-ash">
                <a href="mailto:info@sectinfinity.com" className="block hover:text-gold transition-colors duration-300">
                  info@sectinfinity.com
                </a>
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
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <div className="text-mono text-[10px] text-ash/40 uppercase tracking-widest">
            © 2026 Sec(t) Infinity SolutionZ · United Minds. Infinite Solutions.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

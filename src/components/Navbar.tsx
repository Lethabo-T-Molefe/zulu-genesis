import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import anime from "animejs";
import logoGold from "@/assets/logo-gold.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Fields", href: "#fields" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Academia", href: "#academia" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Logo entrance spin
    anime({
      targets: logoRef.current,
      rotate: ["-90deg", "0deg"],
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutElastic(1, .6)",
    });

    // Nav links stagger
    if (linksRef.current) {
      anime({
        targets: linksRef.current.querySelectorAll("a"),
        opacity: [0, 1],
        translateY: [-10, 0],
        duration: 500,
        delay: anime.stagger(60, { start: 400 }),
        easing: "easeOutExpo",
      });
    }

    // Subtle scroll-based nav background opacity
    const handleScroll = () => {
      if (navRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.min(scrollY / 200, 0.95);
        navRef.current.style.backgroundColor = `hsl(0 0% 4% / ${opacity})`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logo hover — continuous spin
  const handleLogoHover = () => {
    anime({
      targets: logoRef.current,
      rotate: "+=360",
      duration: 1200,
      easing: "easeInOutSine",
    });
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md border-b border-gold-subtle"
        style={{ backgroundColor: "hsl(0 0% 4% / 0)" }}
      >
        <a href="#" className="flex items-center gap-3" onMouseEnter={handleLogoHover}>
          <img
            ref={logoRef}
            src={logoGold}
            alt="Sec(t) Infinity SolutionZ"
            className="h-10 w-10 object-contain"
            style={{ opacity: 0 }}
          />
          <span className="text-display text-lg text-gold-gradient hidden sm:inline">
            SEC(T) ∞
          </span>
        </a>

        <div ref={linksRef} className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-mono text-xs uppercase tracking-widest text-ash hover:text-gold transition-colors duration-300"
              style={{ opacity: 0 }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="btn-ember text-xs hidden sm:inline-flex">
            Join the Network
            <span className="text-base leading-none">+</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-mono text-xs uppercase tracking-widest text-foreground hover:text-gold transition-colors"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-display text-4xl text-gold-gradient hover:text-foreground transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="btn-ember mt-8"
            >
              Join the Network +
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

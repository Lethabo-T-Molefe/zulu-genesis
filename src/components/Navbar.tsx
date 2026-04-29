import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { animate, stagger } from "animejs";
import { brandLogos } from "@/lib/brand-assets";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fields", href: "/fields" },
  { label: "Philosophies", href: "/philosophies" },
  { label: "Solution Lab", href: "/solution-lab" },
  { label: "Academia", href: "/academia" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animate(logoRef.current, {
      rotate: ["-90deg", "0deg"],
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 1000,
      ease: "outElastic(1, .6)",
    });

    if (linksRef.current) {
      animate(linksRef.current.querySelectorAll("a"), {
        opacity: [0, 1],
        translateY: [-10, 0],
        duration: 500,
        delay: stagger(60, { start: 400 }),
        ease: "outExpo",
      });
    }

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

  const handleLogoHover = () => {
    animate(logoRef.current, {
      rotate: "+=360",
      duration: 1200,
      ease: "inOutSine",
    });
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-5 backdrop-blur-md border-b border-gold-subtle"
        style={{ backgroundColor: "hsl(0 0% 4% / 0)" }}
      >
        <Link to="/" className="flex items-center gap-3" onMouseEnter={handleLogoHover}>
          <img
            ref={logoRef}
            src={brandLogos.sect}
            alt="Sec(t) Infinity SolutionZ"
            className="h-12 sm:h-14 w-auto max-w-[220px] object-contain object-left"
            style={{ opacity: 0 }}
          />
          
        </Link>

        <div ref={linksRef} className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                cn(
                  "text-mono text-xs uppercase tracking-widest transition-colors duration-300 border-b-2 pb-0.5",
                  isActive
                    ? "text-gold border-gold"
                    : "border-transparent text-ash hover:text-gold",
                )
              }
              style={{ opacity: 0 }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <NavLink
            to="/join"
            className={({ isActive }) =>
              cn(
                "btn-ember text-xs hidden sm:inline-flex",
                isActive && "ring-2 ring-gold/50 ring-offset-2 ring-offset-background",
              )
            }
          >
            Join the Network
            <span className="text-base leading-none">+</span>
          </NavLink>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-mono text-xs uppercase tracking-widest text-foreground hover:text-gold transition-colors"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

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
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-display text-2xl sm:text-4xl transition-colors",
                      isActive ? "text-gold" : "text-gold-gradient hover:text-foreground",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <NavLink
                to="/join"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  cn("btn-ember mt-8", isActive && "ring-2 ring-gold/50 ring-offset-2 ring-offset-background")
                }
              >
                Join the Network +
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

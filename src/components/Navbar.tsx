import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-gold-subtle">
        <a href="#" className="flex items-center gap-3">
          <img src={logoGold} alt="Sec(t) Infinity SolutionZ" className="h-10 w-10 object-contain" />
          <span className="text-display text-lg text-gold-gradient hidden sm:inline">
            SEC(T) ∞
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-mono text-xs uppercase tracking-widest text-ash hover:text-gold transition-colors duration-300"
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

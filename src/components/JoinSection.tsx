import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";
import { Microscope, Cog, Lightbulb, Palette, BookOpen, Globe } from "lucide-react";

const roles = [
  {
    icon: Microscope,
    title: "Researchers & Scientists",
    desc: "Pushing the boundaries of human knowledge through rigorous scientific inquiry.",
  },
  {
    icon: Cog,
    title: "Engineers & Technologists",
    desc: "Designing and building systems that transform ideas into operational reality.",
  },
  {
    icon: Lightbulb,
    title: "Innovators & Inventors",
    desc: "Creating breakthrough methodologies and entirely new solution categories.",
  },
  {
    icon: Palette,
    title: "Artists & Designers",
    desc: "Giving form to ideas through visual communication, narrative, and design thinking.",
  },
  {
    icon: BookOpen,
    title: "Educators & Academics",
    desc: "Cultivating the next generation of multidisciplinary professionals.",
  },
  {
    icon: Globe,
    title: "Entrepreneurs & Leaders",
    desc: "Building enterprises, shaping policy, and driving commercial impact across Africa.",
  },
];

const JoinSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);
          if (headerRef.current) {
            animate(headerRef.current.querySelectorAll(".jn-line"), {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 800,
              delay: stagger(120),
              ease: "outExpo",
            });
          }
          if (gridRef.current) {
            animate(gridRef.current.querySelectorAll(".jn-card"), {
              opacity: [0, 1],
              translateX: [20, 0],
              duration: 600,
              delay: stagger(70, { start: 350 }),
              ease: "outExpo",
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
    <section id="join" ref={sectionRef} className="relative py-10 md:py-16 bg-charcoal">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-7 md:mb-10 items-end"
        >
          <div>
            <div
              className="jn-line text-mono text-xs uppercase tracking-[0.3em] text-gold mb-3"
              style={{ opacity: 0 }}
            >
              Join the Network
            </div>
            <h2 className="text-display text-2xl md:text-3xl lg:text-4xl text-foreground">
              <span className="jn-line inline-block" style={{ opacity: 0 }}>Together We Build</span>
              <br />
              <span className="jn-line inline-block text-gold-gradient" style={{ opacity: 0 }}>
                Infinite Solutions
              </span>
            </h2>
          </div>
          <div>
            <p className="jn-line text-sm text-ash leading-relaxed mb-5" style={{ opacity: 0 }}>
              Researchers, innovators, engineers, thinkers, artists, and problem solvers are invited
              to join the Sec(t) Infinity intellectual network and contribute to Africa's emergence
              as a global innovation leader.
            </p>
            <Link to="/join" className="jn-line btn-ember text-xs inline-flex" style={{ opacity: 0 }}>
              Join the Network <span className="text-base leading-none">+</span>
            </Link>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="jn-card flex items-start gap-3 p-4 md:p-5 bg-hut rounded-sm border border-gold/10 group hover:border-gold/30 transition-colors duration-500"
              style={{ opacity: 0 }}
            >
              <role.icon
                className="w-5 h-5 text-gold/60 mt-0.5 shrink-0 group-hover:text-gold transition-colors"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-display text-sm text-foreground mb-0.5">{role.title}</h3>
                <p className="text-xs text-ash leading-relaxed">{role.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
};

export default JoinSection;

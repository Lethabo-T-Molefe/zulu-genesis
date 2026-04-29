import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";
import { Atom, Microscope, GraduationCap, BarChart3, Compass, Users } from "lucide-react";

const services = [
  {
    icon: Atom,
    category: "01",
    title: "Integrated Solution Modelling",
    desc: "36 elite specialists from 12 disciplines converge to design, test, and deploy Integrated Solution Models for complex real-world challenges.",
  },
  {
    icon: Microscope,
    category: "02",
    title: "Applied Research Services",
    desc: "Rigorous scientific inquiry and applied R&D across all 12 specialization fields — from engineering and biotechnology to social sciences.",
  },
  {
    icon: GraduationCap,
    category: "03",
    title: "Education & Training",
    desc: "Hybrid tutoring, coding bootcamps, and multidisciplinary programmes for learners from Grade 8 to postgraduate level.",
  },
  {
    icon: BarChart3,
    category: "04",
    title: "Commercial Consulting",
    desc: "Each of the 12 Infinity Business Departments provides specialized commercial consulting and project delivery in their domain.",
  },
  {
    icon: Compass,
    category: "05",
    title: "Strategy & Innovation",
    desc: "Systems-level strategic design grounded in the Divine Triangle — helping organisations think clearly, plan precisely, and execute boldly.",
  },
  {
    icon: Users,
    category: "06",
    title: "Collaboration & Partnerships",
    desc: "Access a growing network of researchers, engineers, innovators, and entrepreneurs to co-develop lasting, scalable solutions.",
  },
];

const ServicesSection = () => {
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
            animate(headerRef.current.querySelectorAll(".sv-line"), {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 800,
              delay: stagger(120),
              ease: "outExpo",
            });
          }
          if (gridRef.current) {
            animate(gridRef.current.querySelectorAll(".sv-card"), {
              opacity: [0, 1],
              translateY: [36, 0],
              duration: 700,
              delay: stagger(80, { start: 350 }),
              ease: "outExpo",
            });
          }
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <section id="services" ref={sectionRef} className="relative py-10 md:py-16">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div ref={headerRef} className="mb-7 md:mb-10">
          <div className="sv-line text-mono text-xs uppercase tracking-[0.3em] text-gold mb-3" style={{ opacity: 0 }}>
            Services
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-display text-2xl md:text-3xl lg:text-4xl text-foreground">
              <span className="sv-line inline-block" style={{ opacity: 0 }}>What We</span>
              <br />
              <span className="sv-line inline-block text-gold-gradient" style={{ opacity: 0 }}>Deliver</span>
            </h2>
            <Link
              to="/services"
              className="sv-line btn-gold-outline text-xs self-start sm:self-auto shrink-0"
              style={{ opacity: 0 }}
            >
              View All Services
            </Link>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="sv-card group bg-hut rounded-sm p-5 border border-gold/10 hover:border-gold/30 transition-colors duration-500 relative overflow-hidden"
              style={{ opacity: 0 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-ember/40 transition-all duration-700" />
              <div className="flex items-start justify-between mb-3">
                <s.icon
                  className="w-6 h-6 text-gold/60 group-hover:text-gold transition-colors"
                  strokeWidth={1.5}
                />
                <span className="text-mono text-[10px] text-gold/30">{s.category}</span>
              </div>
              <h3 className="text-display text-base text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-xs text-ash leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

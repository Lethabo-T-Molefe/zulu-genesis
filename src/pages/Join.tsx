import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { brandLogos } from "@/lib/brand-assets";
import { Microscope, Cog, Lightbulb, Palette, BookOpen, Globe } from "lucide-react";

const roles = [
  { icon: Microscope, title: "Researchers & Scientists", desc: "Pushing the boundaries of human knowledge through rigorous scientific inquiry." },
  { icon: Cog, title: "Engineers & Technologists", desc: "Designing and building systems that transform ideas into operational reality." },
  { icon: Lightbulb, title: "Innovators & Inventors", desc: "Creating breakthrough methodologies and entirely new solution categories." },
  { icon: Palette, title: "Artists & Designers", desc: "Giving form to ideas through visual communication, narrative, and design thinking." },
  { icon: BookOpen, title: "Educators & Academics", desc: "Cultivating the next generation of multidisciplinary professionals." },
  { icon: Globe, title: "Entrepreneurs & Leaders", desc: "Building enterprises, shaping policy, and driving commercial impact." },
];

const benefits = [
  "Access to a global network of elite multidisciplinary thinkers",
  "Collaboration opportunities across 12 interconnected fields",
  "Participation in real Integrated Solution Model projects",
  "Professional development through the Divine Triangle methodology",
  "Potential appointment to the Central Hall's 36-specialist council",
  "Contribution to Africa's emergence as a global innovation leader",
];

const Join = () => {
  const rolesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState({ roles: false, cta: false });

  useEffect(() => {
    const observe = (el: HTMLElement | null, key: keyof typeof revealed) => {
      if (!el) return;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !revealed[key]) {
          setRevealed((p) => ({ ...p, [key]: true }));
          animate(el.querySelectorAll(".anim-item"), {
            opacity: [0, 1], translateY: [30, 0], duration: 800,
            delay: stagger(100), ease: "outExpo",
          });
        }
      }, { threshold: 0.1 });
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = observe(rolesRef.current, "roles");
    const c2 = observe(ctaRef.current, "cta");
    return () => { c1?.(); c2?.(); };
  }, [revealed]);

  return (
    <PageLayout>
      <SEOHead
        title="Join Sec(t) Infinity Network | Researchers, Engineers, Innovators"
        description="Apply to join Sec(t) Infinity's multidisciplinary innovation network for researchers, engineers, scientists, educators, creators, and entrepreneurs committed to building practical, high-impact solutions for Africa."
        path="/join"
        keywords="join Sec(t) Infinity, innovation network Africa, research community, engineering jobs Africa, entrepreneur network, intellectual community"
      />
      <PageHeader
        label="Join the Network"
        title="Together We Build"
        titleAccent="Infinite Solutions"
        description="Researchers, innovators, engineers, thinkers, artists, and problem solvers are invited to join the Sec(t) Infinity intellectual network."
      />

      <section ref={rolesRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>Who We're Looking For</div>
          <h2 className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-16" style={{ opacity: 0 }}>
            Elite <span className="text-gold-gradient">Minds Welcome</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="anim-item bg-hut rounded-sm p-8 border border-gold/10 group hover:border-gold/30 transition-colors duration-500" style={{ opacity: 0 }}>
                <role.icon className="w-8 h-8 text-gold/60 mb-4 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <h3 className="text-display text-xl text-foreground mb-3">{role.title}</h3>
                <p className="text-base text-ash leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="py-20 md:py-32 bg-charcoal relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>Benefits</div>
              <h2 className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8" style={{ opacity: 0 }}>
                What You <span className="text-gold-gradient">Gain</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b} className="anim-item flex items-start gap-3" style={{ opacity: 0 }}>
                    <span className="text-gold text-xs mt-1 shrink-0">◆</span>
                    <span className="text-base text-foreground leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="anim-item bg-hut glow-gold rounded-sm p-6 md:p-8 lg:p-12 border border-gold/20" style={{ opacity: 0 }}>
              <img
                src={brandLogos.secondary}
                alt=""
                className="h-12 sm:h-14 w-auto max-w-full object-contain mb-6 opacity-95"
              />
              <h3 className="text-display text-2xl text-foreground mb-4">Ready to Contribute?</h3>
              <p className="text-base text-ash leading-relaxed mb-8">
                Whether you're a seasoned researcher, an emerging innovator, or a student with
                a burning drive to build — the village has a hut waiting for you.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:info@sectinfinity.com"
                  className="btn-ember text-xs w-full justify-center"
                >
                  Contact Us <span className="text-base leading-none">+</span>
                </a>
                <Link to="/fields" className="btn-gold-outline text-xs w-full justify-center">
                  Explore the Fields First
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold" />
                <span className="text-mono text-[10px] uppercase tracking-widest text-ember">
                  Accepting Applications
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>
    </PageLayout>
  );
};

export default Join;

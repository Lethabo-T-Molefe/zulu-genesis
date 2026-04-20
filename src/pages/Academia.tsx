import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { GraduationCap, Code, BookOpen, Users, Globe, Lightbulb } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Hybrid Tutoring",
    subtitle: "Grade 8 — Post-Graduate",
    desc: "Physical and online tutoring across all academic levels. Our hybrid model ensures accessibility while maintaining the depth and rigour that sets our graduates apart.",
    details: ["One-on-one & group sessions", "Physical locations + online platform", "Grade 8 through Post-Graduate", "All 12 fields of specialization"],
  },
  {
    icon: Code,
    title: "Holiday Coding Classes",
    subtitle: "AI-Aligned Development",
    desc: "Intensive coding bootcamps during school holidays, designed to produce the next generation of African technologists. Curriculum aligned with cutting-edge AI and software development.",
    details: ["Python, JavaScript, TypeScript", "Machine Learning & AI fundamentals", "Web & mobile development", "Project-based learning approach"],
  },
  {
    icon: BookOpen,
    title: "Multidisciplinary Programs",
    subtitle: "Cross-Field Excellence",
    desc: "Programs designed to cultivate hybrid professionals fluent across multiple disciplines — thinkers who bridge Science and Commerce, Engineering and Law, Technology and Heritage.",
    details: ["Cross-disciplinary elective modules", "Integrated capstone projects", "Mentorship from village specialists", "Industry placement partnerships"],
  },
];

const features = [
  { icon: Users, title: "Expert Mentors", desc: "Learn directly from specialists operating within each of the 12 knowledge huts." },
  { icon: Globe, title: "Global Reach", desc: "Online delivery makes our programs accessible to students across Africa and beyond." },
  { icon: Lightbulb, title: "Innovation-First", desc: "Every curriculum is designed around the Divine Triangle — Deep Work, Kaizen, Goldilocks Rule." },
];

const Academia = () => {
  const progRef = useRef<HTMLDivElement>(null);
  const featRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState({ prog: false, feat: false });

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
    const c1 = observe(progRef.current, "prog");
    const c2 = observe(featRef.current, "feat");
    return () => { c1?.(); c2?.(); };
  }, [revealed]);

  return (
    <PageLayout>
      <SEOHead
        title="Sec(t) Academia | Hybrid Tutoring and Coding Classes"
        description="Sec(t) Academia provides hybrid tutoring, holiday coding classes, and multidisciplinary learning from Grade 8 to postgraduate level, helping learners in South Africa build STEM, AI, and innovation capabilities."
        path="/academia"
        keywords="Sec(t) Academia, hybrid tutoring, coding classes Africa, multidisciplinary education, STEM Africa, Lethabo Molefe, online tutoring South Africa, postgraduate programmes"
      />
      <PageHeader
        label="Sec(t) Academia"
        title="Cultivating"
        titleAccent="Hybrid Professionals"
        description="Our learning institution produces professionals fluent across multiple disciplines — thinkers who bridge Science and Commerce, Engineering and Law, Technology and African Heritage."
      />

      <section ref={progRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>Programs</div>
          <h2 className="anim-item text-display text-2xl md:text-4xl lg:text-5xl text-foreground mb-16" style={{ opacity: 0 }}>
            ∞ Infinity <span className="text-gold-gradient">Tutoring</span>
          </h2>
          <div className="space-y-8">
            {programs.map((prog) => (
              <div key={prog.title} className="anim-item bg-hut rounded-sm p-6 md:p-8 lg:p-10 border border-gold/10" style={{ opacity: 0 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <prog.icon className="w-8 h-8 text-gold/70 mb-4" strokeWidth={1.5} />
                    <h3 className="text-display text-2xl text-foreground mb-1">{prog.title}</h3>
                    <div className="text-mono text-[10px] uppercase tracking-widest text-gold/60 mb-4">{prog.subtitle}</div>
                    <p className="text-ash leading-relaxed">{prog.desc}</p>
                  </div>
                  <div>
                    <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">Includes</div>
                    <div className="space-y-3">
                      {prog.details.map((d) => (
                        <div key={d} className="flex items-start gap-3">
                          <span className="text-gold text-xs mt-1">◆</span>
                          <span className="text-sm text-foreground">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={featRef} className="py-20 md:py-32 bg-charcoal relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>Why Choose Academia</div>
          <h2 className="anim-item text-display text-2xl md:text-4xl lg:text-5xl text-foreground mb-16" style={{ opacity: 0 }}>
            Built for <span className="text-gold-gradient">Excellence</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {features.map((f) => (
              <div key={f.title} className="anim-item bg-hut rounded-sm p-8 border border-gold/10" style={{ opacity: 0 }}>
                <f.icon className="w-8 h-8 text-gold/60 mb-4" strokeWidth={1.5} />
                <h3 className="text-display text-xl text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="anim-item bg-hut glow-gold rounded-sm p-8 md:p-12 text-center border border-gold/20" style={{ opacity: 0 }}>
            <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">Specializations Aligned With</div>
            <div className="text-sm text-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              AI · Science · Engineering · Commerce · Technology · Law · African History · Visual Arts · Creative Arts · Social Sciences · Innovation · Strategic Design
            </div>
            <Link to="/join" className="btn-ember text-xs inline-flex">
              Apply Now <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>
    </PageLayout>
  );
};

export default Academia;

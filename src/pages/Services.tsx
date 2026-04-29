import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import {
  Microscope,
  Atom,
  GraduationCap,
  BarChart3,
  Compass,
  Users,
  Code,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const services = [
  {
    icon: Atom,
    category: "01 · Solution Lab",
    title: "Integrated Solution Modelling",
    desc: "Our flagship service: 36 elite specialists from 12 disciplines converge in the Central Hall to design, test, and deploy Integrated Solution Models for complex real-world challenges.",
    details: [
      "Multidisciplinary problem analysis",
      "Cross-field knowledge synthesis",
      "Solution design, testing & refinement",
      "Scalable, measurable impact delivery",
      "Continuous Kaizen improvement cycles",
    ],
    cta: { label: "Learn about the Lab", href: "/solution-lab" },
  },
  {
    icon: Microscope,
    category: "02 · Research & Development",
    title: "Applied Research Services",
    desc: "Rigorous scientific inquiry and applied R&D across all 12 specialization fields — from chemical engineering and biotechnology to social sciences and strategic design.",
    details: [
      "Primary and secondary research design",
      "Literature review & synthesis",
      "Experimental research & prototyping",
      "Data analysis and insight reporting",
      "Publication-ready research outputs",
    ],
    cta: { label: "Explore the Fields", href: "/fields" },
  },
  {
    icon: GraduationCap,
    category: "03 · Sec(t) Academia",
    title: "Education & Training",
    desc: "Our learning institution cultivates hybrid professionals fluent across multiple disciplines — from Grade 8 learners to postgraduate researchers, online and in-person.",
    details: [
      "Hybrid tutoring: Grade 8 to Post-Graduate",
      "Holiday coding bootcamps (Python, JS, AI)",
      "Multidisciplinary cross-field programs",
      "One-on-one & group session formats",
      "Mentorship from village specialists",
    ],
    cta: { label: "Explore Academia", href: "/academia" },
  },
  {
    icon: BarChart3,
    category: "04 · Business Departments",
    title: "Commercial & Business Consulting",
    desc: "Each of the 12 knowledge huts runs an active Infinity Business Department — providing specialized commercial consulting, project delivery, and professional services in their domain.",
    details: [
      "Sector-specific business consulting",
      "Project management & delivery",
      "Market analysis & feasibility studies",
      "Business model design & review",
      "Commercial strategy across 12 fields",
    ],
    cta: { label: "View All Fields", href: "/fields" },
  },
  {
    icon: Compass,
    category: "05 · Strategic Design",
    title: "Strategy & Innovation Consulting",
    desc: "Systems-level strategic design grounded in the Divine Triangle — Deep Work, Kaizen, and the Goldilocks Rule. We help organisations think clearly, plan precisely, and execute boldly.",
    details: [
      "Organisational strategy development",
      "Innovation roadmap design",
      "Systems thinking & complexity mapping",
      "Workshop facilitation & design sprints",
      "Impact measurement frameworks",
    ],
    cta: { label: "Get In Touch", href: "/contact" },
  },
  {
    icon: Users,
    category: "06 · Network & Partnerships",
    title: "Collaboration & Partnership Programs",
    desc: "Access a growing network of researchers, engineers, innovators, and entrepreneurs across Africa and beyond. Co-develop solutions, share expertise, and build lasting institutional relationships.",
    details: [
      "Research collaboration agreements",
      "Co-development partnerships",
      "Speaking engagements & panel participation",
      "Institutional partnership frameworks",
      "Africa innovation network membership",
    ],
    cta: { label: "Join the Network", href: "/join" },
  },
];

const highlights = [
  { icon: Code, title: "Technology-Led", desc: "AI, software, and digital tools woven into every service we deliver." },
  { icon: Lightbulb, title: "Innovation-First", desc: "Every engagement is shaped by the Goldilocks Rule — optimally challenging, never trivial." },
  { icon: Atom, title: "Multidisciplinary", desc: "No silo thinking. All 12 fields contribute to every major solution." },
];

const servicesStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/services#service-list`,
    name: `${SITE_NAME} services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}${service.cta.href}`,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: {
          "@type": "Place",
          name: "Africa",
        },
      },
    })),
  },
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState({ services: false, highlights: false, cta: false });

  useEffect(() => {
    const observe = (el: HTMLElement | null, key: keyof typeof revealed) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting && !revealed[key]) {
            setRevealed((p) => ({ ...p, [key]: true }));
            animate(el.querySelectorAll(".anim-item"), {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              delay: stagger(100),
              ease: "outExpo",
            });
          }
        },
        { threshold: 0.06 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = observe(servicesRef.current, "services");
    const c2 = observe(highlightsRef.current, "highlights");
    const c3 = observe(ctaRef.current, "cta");
    return () => { c1?.(); c2?.(); c3?.(); };
  }, [revealed]);

  return (
    <PageLayout>
      <SEOHead
        title="Services Offered | Sec(t) Infinity SolutionZ"
        description="Discover the full range of services offered by Sec(t) Infinity SolutionZ — integrated solution modelling, applied research, education and tutoring, business consulting, strategic design, and innovation partnerships across 12 disciplines."
        path="/services"
        keywords="Sec(t) Infinity services, integrated solution modelling, applied research Africa, hybrid tutoring, business consulting Africa, strategic design, innovation consulting, Sec(t) Academia"
        structuredData={servicesStructuredData}
      />
      <PageHeader
        label="Services Offered"
        title="What We"
        titleAccent="Deliver"
        description="From applied research and integrated solution modelling to education, business consulting, and strategic design — Sec(t) Infinity SolutionZ brings twelve fields of specialization to bear on your most complex challenges."
        graphic={
          <svg viewBox="0 0 240 210" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
            {/* Briefcase body */}
            <rect x="18" y="72" width="204" height="128" rx="6" strokeWidth="1.4" opacity="0.82"/>
            {/* Handle arch */}
            <path d="M86 72 L86 52 Q86 42 96 42 L144 42 Q154 42 154 52 L154 72" strokeWidth="1.3" fill="none"/>
            {/* Handle brackets */}
            <rect x="82" y="65" width="12" height="14" rx="2" strokeWidth="1.1" opacity="0.7"/>
            <rect x="146" y="65" width="12" height="14" rx="2" strokeWidth="1.1" opacity="0.7"/>
            {/* Horizontal mid-divider */}
            <line x1="18" y1="136" x2="222" y2="136" strokeWidth="1.1" opacity="0.5"/>
            {/* Centre latch */}
            <rect x="107" y="124" width="26" height="22" rx="4" strokeWidth="1.2" opacity="0.8"/>
            <circle cx="120" cy="135" r="3.5" fill="currentColor" opacity="0.4"/>
            {/* Left panel document lines – upper section */}
            <line x1="44" y1="97" x2="92" y2="97" strokeWidth="0.9" opacity="0.4"/>
            <line x1="44" y1="109" x2="86" y2="109" strokeWidth="0.9" opacity="0.4"/>
            <line x1="44" y1="121" x2="92" y2="121" strokeWidth="0.9" opacity="0.4"/>
            {/* Right panel document lines – upper section */}
            <line x1="148" y1="97" x2="196" y2="97" strokeWidth="0.9" opacity="0.4"/>
            <line x1="148" y1="109" x2="190" y2="109" strokeWidth="0.9" opacity="0.4"/>
            <line x1="148" y1="121" x2="196" y2="121" strokeWidth="0.9" opacity="0.4"/>
            {/* Left panel lines – lower section */}
            <line x1="44" y1="154" x2="92" y2="154" strokeWidth="0.9" opacity="0.4"/>
            <line x1="44" y1="166" x2="80" y2="166" strokeWidth="0.9" opacity="0.4"/>
            <line x1="44" y1="178" x2="92" y2="178" strokeWidth="0.9" opacity="0.4"/>
            {/* Right panel lines – lower section */}
            <line x1="148" y1="154" x2="196" y2="154" strokeWidth="0.9" opacity="0.4"/>
            <line x1="148" y1="166" x2="184" y2="166" strokeWidth="0.9" opacity="0.4"/>
            <line x1="148" y1="178" x2="196" y2="178" strokeWidth="0.9" opacity="0.4"/>
          </svg>
        }
      />

      {/* Services list */}
      <section ref={servicesRef} className="py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="anim-item group bg-hut rounded-sm p-6 md:p-8 lg:p-10 border border-gold/10 hover:border-gold/30 transition-all duration-500 relative overflow-hidden"
                style={{ opacity: 0 }}
              >
                {/* Hover sweep */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                  {/* Left: icon + title + desc */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon
                        className="w-8 h-8 text-gold/70 group-hover:text-gold transition-colors duration-300 shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50">
                          {service.category}
                        </div>
                        <h3 className="text-display text-2xl text-foreground group-hover:text-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-base text-ash leading-relaxed">{service.desc}</p>
                  </div>

                  {/* Middle: details */}
                  <div className="lg:col-span-4">
                    <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-3">
                      What's Included
                    </div>
                    <div className="space-y-2">
                      {service.details.map((d) => (
                        <div key={d} className="flex items-start gap-2">
                          <span className="text-gold text-[8px] mt-1.5 shrink-0">◆</span>
                          <span className="text-base text-foreground">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="lg:col-span-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold" />
                        <span className="text-mono text-[9px] uppercase tracking-widest text-ember">Active</span>
                      </div>
                    </div>
                    <Link
                      to={service.cta.href}
                      className="flex items-center gap-1.5 text-mono text-[9px] uppercase tracking-widest text-gold/40 group-hover:text-gold transition-colors duration-300 mt-4"
                    >
                      <span>{service.cta.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sec(t) */}
      <section ref={highlightsRef} className="py-20 md:py-32 bg-charcoal relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>
            Our Approach
          </div>
          <h2
            className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-16"
            style={{ opacity: 0 }}
          >
            Built on <span className="text-gold-gradient">Deep Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="anim-item bg-hut rounded-sm p-8 border border-gold/10 group hover:border-gold/30 transition-colors duration-500"
                style={{ opacity: 0 }}
              >
                <h.icon className="w-8 h-8 text-gold/60 mb-4 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <h3 className="text-display text-xl text-foreground mb-3">{h.title}</h3>
                <p className="text-base text-ash leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="anim-item bg-hut glow-gold rounded-sm p-8 md:p-12 text-center border border-gold/20"
            style={{ opacity: 0 }}
          >
            <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">
              Disciplines Covered
            </div>
            <div className="text-base text-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Science · Engineering · Commerce · Technology · Law · African History · Visual Arts ·
              Creative Arts · Social Sciences · Innovation · Research & Development · Strategic Design
            </div>
            <Link to="/fields" className="btn-gold-outline text-xs inline-flex">
              Explore All 12 Fields
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* Bottom CTA */}
      <section ref={ctaRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div
            className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4"
            style={{ opacity: 0 }}
          >
            Ready to Begin?
          </div>
          <h2
            className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
            style={{ opacity: 0 }}
          >
            Let's Build Something <span className="text-gold-gradient">Infinite</span>
          </h2>
          <p
            className="anim-item text-base md:text-lg text-ash max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ opacity: 0 }}
          >
            Tell us about your project, challenge, or idea — and we'll show you exactly how the
            Village of Knowledge can help.
          </p>
          <div
            className="anim-item flex flex-wrap gap-4 justify-center"
            style={{ opacity: 0 }}
          >
            <Link to="/contact" className="btn-ember text-xs inline-flex">
              Get In Touch <span className="text-base leading-none">→</span>
            </Link>
            <Link to="/solution-lab" className="btn-gold-outline text-xs inline-flex">
              See the Solution Lab
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { TeamPortraitFrame } from "@/components/TeamPortraitFrame";
import { brandLogos } from "@/lib/brand-assets";
import {
  Cpu, FlaskConical, Building2, Scale, ArrowRight,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { useAuth } from "@/context/AuthContext";

const whatWeDo = [
  { icon: FlaskConical, title: "Invest in Research", desc: "Funding and conducting deep scientific inquiry across all 12 fields of specialization to generate breakthrough knowledge." },
  { icon: Cpu, title: "Design Systems", desc: "Architecting integrated solutions through systems thinking — connecting disciplines into coherent, measurable models." },
  { icon: Building2, title: "Build Enterprises", desc: "Each specialization runs its own Infinity Business Department — self-sustaining commercial engines that fund continuous innovation." },
  { icon: Scale, title: "Champion Financial Intelligence", desc: "Embedding entrepreneurial and commercial thinking into every field, ensuring research translates into real-world economic impact." },
];

const pipeline = [
  { step: "01", label: "Concept", desc: "Ideation, research synthesis, and problem framing across disciplines." },
  { step: "02", label: "Design", desc: "Systems architecture, prototyping, and integrated solution modelling." },
  { step: "03", label: "Execution", desc: "Disciplined implementation through Deep Work and Kaizen principles." },
  { step: "04", label: "Commissioning", desc: "Deployment, measurement, and continuous refinement of delivered solutions." },
];

const founderBio = [
  "Sibusiso Bhekani Nhlonipho Gumede, known as Mnguni or Zafenate Infinity, is a Chemical Engineering Honours graduate from the University of Cape Town and the University of Johannesburg. He is an experienced Process and Project Management Chemical Engineer with a strong track record in designing, optimizing, and managing efficient process systems that deliver high yield, recovery, and sustainable results.",
  "His expertise focuses on ensuring process integrity, maximizing resource efficiency, minimizing waste, and driving economically viable engineering solutions. He has worked with prestigious companies, delivering measurable impact through system optimization and performance improvement.",
  "Mnguni is deeply passionate about the integration of computer science, coding, data science, and artificial intelligence across all disciplines. He advocates for leveraging Fourth and Fifth Industrial Revolution technologies to transform industries, enhance productivity, and solve complex global challenges.",
  "He is a strong proponent of the circular economy, promoting sustainable systems that enable clean environments, efficient resource use, and economically active communities. His vision emphasizes the convergence of engineering, science, and technology to develop practical, scalable solutions.",
  "As a researcher, philosopher, innovator, and problem solver, he is the founder of the Sec(t) Infinity Family Businesses, which brings together multidisciplinary experts to develop integrated, future-focused solutions. His work is guided by key philosophies of Deep Work, Kaizen, and the Goldilocks Rule, forming a blueprint for continuous growth, innovation, and excellence.",
];

const directors = [
  {
    name: "Tebogo Sako",
    image: "/tebogo-sako.jpeg",
    role: "Director · Sec(t) Infinity",
    bio: [
      "Tebogo Sako is a technology professional and aspiring data scientist with a strong focus on artificial intelligence, machine learning, and full-stack development. She is currently advancing her academic journey in computer science, equipping herself with both technical expertise and practical insight into building intelligent, data-driven systems that solve meaningful problems.",
      "She has built a solid reputation as a speaker, panel moderator, and facilitator, contributing to discussions on technology, entrepreneurship, and innovation across South Africa. Tebogo is particularly passionate about digital transformation and the role of technology in empowering individuals and communities — bringing that same conviction to her work within Sec(t) Infinity's innovation ecosystem.",
    ],
  },
  {
    name: "Lethabo Molefe",
    image: "/lethabo-molefe.jpeg",
    role: "Director · Sec(t) Infinity",
    bio: [
      "Lethabo Tshegofatso Molefe is the Director of Sec(t) Academia and Curriculum Developer for Sec(t) Infinity Tutoring, the education arm of Sec(t) Infinity SolutionZ. He designs and leads hybrid learning programmes (physical + online) for students from Grade 8 to postgraduate level, integrating the organisation's 12 fields of specialisation with the Divine Triangle of Success — Deep Work, Kaizen, and the Goldilocks Rule.",
      "With over four years of experience at Tshwane University of Technology, Lethabo has served as an Academic Java Tutor, facilitated first-year orientation bootcamps, and led leadership development camps. As Lead Developer and mentor at the Informatics Community Engagement Project (ICEP), he guided intern teams through real-world projects using Agile methodologies.",
    ],
  },
  {
    name: "Brian Shoko",
    image: "/brian-shoko.jpeg",
    role: "Director · Sec(t) Infinity",
    bio: [
      "Brian Shoko is a registered Chemical Engineer with the Engineering Council of South Africa (ECSA), serving as Group Director of The Mega Science Engineering Group — specialists in road construction and maintenance — and as Director of ANB Transport Logistics, delivering logistics compliance and transport solutions across Southern Africa. His dual leadership reflects a rare ability to bridge technical engineering with large-scale operational complexity.",
      "Currently working as a Business Analyst at one of South Africa's top five banking institutions, Brian applies data-driven thinking at the intersection of finance and technology. He is simultaneously pursuing postgraduate research in artificial intelligence and data protection, positioning himself at the cutting edge of Africa's digital transformation.",
    ],
  },
  {
    name: "Ngwako Brendan Lebea",
    image: "/ngwako-brendan-lebea.jpeg",
    imageStyle: { objectPosition: "center 28%" },
    role: "Director · Sec(t) Infinity",
    bio: [
      "Ngwako Brendan Lebea is a Chemical Engineer by profession and a cloud and data professional currently working as a Cloud & Data Analyst at a leading global professional services firm. He has experience across data engineering, analytics, cloud platforms, data governance, and AI-enabled solutions.",
      "As Director, Brendan contributes to Sec(t) Infinity SolutionZ's multidisciplinary vision by connecting business priorities with engineering-led thinking, reliable technology, and measurable impact. He is focused on practical solutions that support innovation, execution, and Africa's broader digital transformation agenda.",
    ],
  },
];

const aboutStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#about-page`,
    name: `About ${SITE_NAME}`,
    description:
      "Learn about Sec(t) Infinity SolutionZ, its mission, leadership, and multidisciplinary innovation model for Africa.",
    url: `${SITE_URL}/about`,
    about: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sec(t) Infinity directors",
    itemListElement: directors.map((director, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: director.name,
        jobTitle: director.role,
      },
    })),
  },
];

const About = () => {
  const { authenticated } = useAuth();
  const missionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const whatRef = useRef<HTMLDivElement>(null);
  const pipeRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState({ mission: false, team: false, what: false, pipe: false });


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
      }, { threshold: 0.12 });
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = observe(missionRef.current, "mission");
    const c2 = observe(teamRef.current, "team");
    const c3 = observe(whatRef.current, "what");
    const c4 = observe(pipeRef.current, "pipe");
    return () => { c1?.(); c2?.(); c3?.(); c4?.(); };
  }, [revealed]);

  return (
    <PageLayout>
      <SEOHead
        title="About Sec(t) Infinity | Mission, Founder, Directors"
        description="Learn the mission, leadership, and operating model of Sec(t) Infinity SolutionZ in South Africa, including founder Sibusiso Gumede, multidisciplinary directors, and the end-to-end system used to build integrated innovation solutions for Africa."
        path="/about"
        keywords="Sec(t) Infinity about, Sibusiso Gumede, African innovation, multidisciplinary team, innovation ecosystem Africa"
        structuredData={aboutStructuredData}
      />
      <PageHeader
        label="About Us"
        title="A Multidisciplinary"
        titleAccent="Innovation Ecosystem"
        description="A global intellectual ecosystem where leading thinkers collaborate to develop integrated solutions for complex challenges. Inspired by African knowledge traditions and powered by modern innovation."
        graphic={
          <svg viewBox="0 0 240 240" fill="none" stroke="currentColor" strokeLinecap="round" className="w-full h-auto">
            {/* Center-to-outer spokes */}
            <line x1="120" y1="120" x2="120" y2="40" strokeWidth="0.8" opacity="0.4"/>
            <line x1="120" y1="120" x2="189" y2="80" strokeWidth="0.8" opacity="0.4"/>
            <line x1="120" y1="120" x2="189" y2="160" strokeWidth="0.8" opacity="0.4"/>
            <line x1="120" y1="120" x2="120" y2="200" strokeWidth="0.8" opacity="0.4"/>
            <line x1="120" y1="120" x2="51" y2="160" strokeWidth="0.8" opacity="0.4"/>
            <line x1="120" y1="120" x2="51" y2="80" strokeWidth="0.8" opacity="0.4"/>
            {/* Outer hexagon ring */}
            <line x1="120" y1="40" x2="189" y2="80" strokeWidth="0.8" opacity="0.22"/>
            <line x1="189" y1="80" x2="189" y2="160" strokeWidth="0.8" opacity="0.22"/>
            <line x1="189" y1="160" x2="120" y2="200" strokeWidth="0.8" opacity="0.22"/>
            <line x1="120" y1="200" x2="51" y2="160" strokeWidth="0.8" opacity="0.22"/>
            <line x1="51" y1="160" x2="51" y2="80" strokeWidth="0.8" opacity="0.22"/>
            <line x1="51" y1="80" x2="120" y2="40" strokeWidth="0.8" opacity="0.22"/>
            {/* Outer nodes */}
            <circle cx="120" cy="40" r="8" strokeWidth="1.2" opacity="0.65"/>
            <circle cx="189" cy="80" r="8" strokeWidth="1.2" opacity="0.65"/>
            <circle cx="189" cy="160" r="8" strokeWidth="1.2" opacity="0.65"/>
            <circle cx="120" cy="200" r="8" strokeWidth="1.2" opacity="0.65"/>
            <circle cx="51" cy="160" r="8" strokeWidth="1.2" opacity="0.65"/>
            <circle cx="51" cy="80" r="8" strokeWidth="1.2" opacity="0.65"/>
            {/* Center node */}
            <circle cx="120" cy="120" r="22" strokeWidth="1.5" opacity="0.85"/>
            <circle cx="120" cy="120" r="11" fill="currentColor" opacity="0.18"/>
            <path d="M120 109 L131 120 L120 131 L109 120 Z" strokeWidth="1.1" opacity="0.7"/>
          </svg>
        }
      />

      <section ref={missionRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="anim-item mb-6" style={{ opacity: 0 }}>
                <img
                  src={brandLogos.sect}
                  alt=""
                  className="h-14 sm:h-16 w-auto max-w-[min(260px,90vw)] object-contain object-left opacity-95"
                />
              </div>
              <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>Our Mission</div>
              <h2 className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6" style={{ opacity: 0 }}>
                Position Africa as a <span className="text-gold-gradient">Global Producer</span>
              </h2>
              <p className="anim-item text-base md:text-lg text-ash leading-relaxed mb-6" style={{ opacity: 0 }}>
                To position Africa as a global hub of innovation, invention, and production —
                not merely a consumer, but a world-class producer leading in scientific discovery,
                technological invention, industrial production, and entrepreneurial innovation.
              </p>
              <p className="anim-item text-base md:text-lg text-ash leading-relaxed" style={{ opacity: 0 }}>
                Our platform unites specialists across disciplines to design impactful models for
                the future. Through the village metaphor of interconnected knowledge huts, we create
                an ecosystem where every field strengthens and sustains the others.
              </p>
            </div>
            <div className="anim-item bg-hut rounded-sm p-8 md:p-12 border border-gold/10" style={{ opacity: 0 }}>
              <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-6">Target Audience</div>
              <div className="space-y-4">
                {["Researchers & Scientists", "Engineers & Technologists", "Entrepreneurs & Business Leaders", "Policy Makers & Legal Professionals", "Academic Institutions & Innovation Hubs", "Students & Intellectual Communities"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-gold text-xs mt-1">◆</span>
                    <span className="text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={teamRef} className="py-20 md:py-32 bg-charcoal/30 border-y border-gold/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>
            Team
          </div>
          <h2 className="anim-item text-display text-2xl md:text-4xl lg:text-5xl text-foreground mb-2" style={{ opacity: 0 }}>
            Founder & <span className="text-gold-gradient">Executive Director</span>
          </h2>
          <p className="anim-item text-mono text-xs text-gold/60 uppercase tracking-widest mb-12 md:mb-16" style={{ opacity: 0 }}>
            Sibusiso Bhekani Nhlonipho Gumede (Mnguni / Zafenate Infinity)
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 anim-item" style={{ opacity: 0 }}>
              <TeamPortraitFrame
                src="/sibusiso.jpeg"
                alt="Sibusiso Bhekani Nhlonipho Gumede"
                caption="Sec(t) Infinity · United Minds"
              />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="anim-item" style={{ opacity: 0 }}>
                <h3 className="text-display text-xl md:text-2xl text-foreground">
                  Sibusiso Bhekani Nhlonipho Gumede
                </h3>
                <p className="mt-2 text-mono text-xs uppercase tracking-[0.2em] text-gold/70">
                  Mnguni · Zafenate Infinity
                </p>
              </div>
              {founderBio.map((text, i) => (
                <p key={i} className="anim-item text-sm md:text-base text-ash leading-relaxed" style={{ opacity: 0 }}>
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-20 md:mt-28">
            <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>
              Directors
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {directors.map((d) => (
                <div key={d.name} className="anim-item bg-hut rounded-sm border border-gold/10 overflow-hidden flex flex-col" style={{ opacity: 0 }}>
                  <div className="w-full aspect-[4/3] overflow-hidden" style={d.imageContainerStyle}>
                    <img src={d.image} alt={d.name} className="w-full h-full object-cover" style={d.imageStyle ?? { objectPosition: "top" }} />
                  </div>
                  <div className="p-8 flex flex-col gap-4">
                    <div>
                      <h3 className="text-display text-xl text-foreground">{d.name}</h3>
                      <p className="mt-1 text-mono text-xs uppercase tracking-[0.2em] text-gold/60">{d.role}</p>
                    </div>
                    {authenticated && d.bio.map((para, i) => (
                      <p key={i} className="text-base text-ash leading-relaxed text-left mb-3">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {authenticated && (
      <section ref={whatRef} className="py-20 md:py-32 bg-charcoal relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>What We Do</div>
          <h2 className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-16" style={{ opacity: 0 }}>
            Building <span className="text-gold-gradient">Infinite Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDo.map((item) => (
              <div key={item.title} className="anim-item bg-hut rounded-sm p-8 group hover:border-gold/30 border border-transparent transition-colors duration-500" style={{ opacity: 0 }}>
                <item.icon className="w-8 h-8 text-gold/60 mb-4 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <h3 className="text-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-base text-ash leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>
      )}

      {authenticated && (
      <section ref={pipeRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>How We Operate</div>
          <h2 className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-16" style={{ opacity: 0 }}>
            End-to-End <span className="text-gold-gradient">Project Management</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pipeline.map((item, i) => (
              <div key={item.step} className="anim-item relative" style={{ opacity: 0 }}>
                <div className="bg-hut rounded-sm p-8 h-full">
                  <div className="text-display text-4xl text-gold/20 mb-4">{item.step}</div>
                  <h3 className="text-display text-xl text-foreground mb-3">{item.label}</h3>
                  <p className="text-base text-ash leading-relaxed">{item.desc}</p>
                </div>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-gold/30 -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/solution-lab" className="btn-ember text-xs inline-flex">
              See the Solution Lab <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </section>
      )}
    </PageLayout>
  );
};

export default About;

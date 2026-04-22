import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { FieldIllustration } from "@/components/FieldIllustration";
import { fieldsData } from "@/data/fieldsData";
import {
  ArrowLeft, ArrowRight, BookOpen, Briefcase,
  FlaskConical, Globe2, Users, TrendingUp,
} from "lucide-react";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-1">{children}</div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-display text-xl md:text-2xl text-foreground mb-4">{children}</h2>
);

/* ── Metric card ─────────────────────────────────────────────── */
const Metric = ({
  value, label, accent = false,
}: { value: string; label: string; accent?: boolean }) => (
  <div className={`bg-hut rounded-sm p-5 border ${accent ? "border-gold/30" : "border-gold/10"} flex flex-col gap-1`}>
    <span className={`text-display text-3xl md:text-4xl ${accent ? "text-gold" : "text-foreground"}`}>
      {value}
    </span>
    <span className="text-mono text-[9px] uppercase tracking-widest text-gold/40">{label}</span>
  </div>
);

/* ── Ecosystem flow diagram ──────────────────────────────────── */
const EcosystemFlow = ({ fieldName }: { fieldName: string }) => {
  const nodes = [
    { label: "Research Hub", sub: "12 Deep Work Specialists", dot: "bg-gold" },
    { label: fieldName + " House", sub: "Teaching · Research · Commerce", dot: "bg-ember" },
    { label: "Central HALL", sub: "3 of 36 Delegates", dot: "bg-gold" },
    { label: "Solution", sub: "Integrated Impact Model", dot: "bg-ember" },
  ];
  return (
    <div className="bg-hut rounded-sm p-6 md:p-8 border border-gold/10">
      <SectionLabel>Field Ecosystem Flow</SectionLabel>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-0">
        {nodes.map((node, i) => (
          <div key={i} className="flex flex-col md:flex-row items-start md:items-center flex-1 min-w-0">
            {/* node */}
            <div className="flex-1 min-w-0 py-3 md:py-0 md:px-3">
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${node.dot} flex-shrink-0`} />
                <span className="text-sm text-foreground font-medium truncate">{node.label}</span>
              </div>
              <p className="text-mono text-[9px] uppercase tracking-widest text-gold/40 pl-4">
                {node.sub}
              </p>
            </div>
            {/* connector arrow */}
            {i < nodes.length - 1 && (
              <div className="flex md:flex-col items-center self-stretch md:self-auto justify-center px-2 md:px-0 py-0 md:py-2">
                <div className="w-px h-6 md:h-px md:w-6 bg-gold/20" />
                <span className="text-gold/30 text-xs rotate-90 md:rotate-0">›</span>
                <div className="w-px h-6 md:h-px md:w-6 bg-gold/20" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Page ────────────────────────────────────────────────────── */
const FieldDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(false);

  const fieldIndex = fieldsData.findIndex((f) => f.slug === slug);
  const field = fieldsData[fieldIndex];
  const prevField = fieldIndex > 0 ? fieldsData[fieldIndex - 1] : null;
  const nextField = fieldIndex < fieldsData.length - 1 ? fieldsData[fieldIndex + 1] : null;

  /* reset on navigation */
  useEffect(() => {
    setRevealed(false);
    setHeroRevealed(false);
    window.scrollTo({ top: 0 });
  }, [slug]);

  /* hero animation */
  useEffect(() => {
    if (!heroRef.current || heroRevealed) return;
    animate(heroRef.current.querySelectorAll(".hero-line"), {
      opacity: [0, 1], translateY: [20, 0], duration: 700,
      delay: stagger(80), ease: "outExpo",
    });
    animate(heroRef.current.querySelector(".hero-illustration"), {
      opacity: [0, 1], scale: [0.94, 1], duration: 900,
      delay: 200, ease: "outExpo",
    });
    setHeroRevealed(true);
  }, [heroRevealed, slug]);

  /* content animation */
  useEffect(() => {
    if (!contentRef.current || revealed) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRevealed(true);
          animate(contentRef.current!.querySelectorAll(".reveal-block"), {
            opacity: [0, 1], translateY: [30, 0], duration: 700,
            delay: stagger(80), ease: "outExpo",
          });
        }
      },
      { threshold: 0.04 }
    );
    obs.observe(contentRef.current);
    return () => obs.disconnect();
  }, [revealed, slug]);

  if (!field) return <Navigate to="/fields" replace />;
  const FieldIcon = field.icon;
  const shortOverview = field.overview.length > 250 ? `${field.overview.slice(0, 247)}...` : field.overview;
  const fieldPageLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://sectinfinity.com/fields/${field.slug}#article`,
    headline: `${field.prefix} — ${field.name}`,
    description: shortOverview,
    inLanguage: "en-ZA",
    mainEntityOfPage: `https://sectinfinity.com/fields/${field.slug}`,
    about: [
      field.name,
      "Sec(t) Infinity SolutionZ",
      "Village of Knowledge",
      "Africa innovation ecosystem",
      "Research and development",
    ],
    author: {
      "@type": "Organization",
      name: "Sec(t) Infinity SolutionZ",
      url: "https://sectinfinity.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Sec(t) Infinity SolutionZ",
      logo: {
        "@type": "ImageObject",
        url: "https://sectinfinity.com/primary-logo.png",
      },
    },
  };

  return (
    <PageLayout>
      <SEOHead
        title={`${field.name} in South Africa | ${field.prefix} at Sec(t) Infinity`}
        description={shortOverview}
        path={`/fields/${field.slug}`}
        keywords={`${field.prefix}, ${field.name}, Sec(t) Infinity, Village of Knowledge, 12 fields, Africa innovation, South Africa, multidisciplinary innovation`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fieldPageLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-gold/10 overflow-hidden"
      >
        {/* background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* back link */}
          <div className="hero-line" style={{ opacity: 0 }}>
            <Link
              to="/fields"
              className="inline-flex items-center gap-2 text-mono text-[10px] uppercase tracking-widest text-gold/50 hover:text-gold transition-colors mb-10"
            >
              <ArrowLeft className="w-3 h-3" />
              All Fields
            </Link>
          </div>

          {/* two-col layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* left: text */}
            <div>
              <div className="hero-line flex items-start gap-5 mb-8" style={{ opacity: 0 }}>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm bg-hut border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <FieldIcon className="w-8 h-8 md:w-10 md:h-10 text-gold/70" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-2">
                    {field.prefix} · Field {String(fieldIndex + 1).padStart(2, "0")} of 12
                  </div>
                  <h1 className="text-display text-4xl md:text-5xl text-foreground leading-none">
                    i-{field.name}
                  </h1>
                </div>
              </div>

              <p className="hero-line text-ash text-base md:text-lg leading-relaxed mb-8" style={{ opacity: 0 }}>
                {field.overview}
              </p>

              {/* inline quick stats */}
              <div className="hero-line flex flex-wrap gap-6" style={{ opacity: 0 }}>
                {[
                  { v: String(fieldIndex + 1).padStart(2, "0"), l: "Field No." },
                  { v: "12", l: "Research Specialists" },
                  { v: "3", l: "HALL Delegates" },
                ].map(({ v, l }) => (
                  <div key={l} className="flex flex-col">
                    <span className="text-display text-2xl text-gold">{v}</span>
                    <span className="text-mono text-[9px] uppercase tracking-widest text-gold/40">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* right: illustration */}
            <div
              className="hero-illustration w-full aspect-[4/3] bg-hut rounded-sm border border-gold/10 p-6 flex items-center justify-center relative overflow-hidden"
              style={{ opacity: 0 }}
            >
              {/* subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent pointer-events-none rounded-sm" />
              <div className="w-full h-full relative z-10">
                <FieldIllustration slug={field.slug} />
              </div>
              {/* field number watermark */}
              <span className="absolute bottom-4 right-5 text-mono text-[10px] uppercase tracking-widest text-gold/20">
                {field.prefix}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────── */}
      <div ref={contentRef} className="container mx-auto px-6 md:px-12 py-16 md:py-24 space-y-10">

        {/* Plain English callout */}
        <div className="reveal-block" style={{ opacity: 0 }}>
          <div className="relative bg-hut rounded-sm border border-gold/20 p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/[0.05] to-transparent pointer-events-none" />
            <div className="relative z-10 flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center mt-0.5">
                <span className="text-gold text-sm">∞</span>
              </div>
              <div>
                <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-2">In Plain Terms</div>
                <p className="text-foreground text-base md:text-lg leading-relaxed">{field.plainEnglish}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="reveal-block grid grid-cols-2 md:grid-cols-4 gap-4" style={{ opacity: 0 }}>
          <Metric value={String(fieldIndex + 1).padStart(2, "0")} label="Field of 12" accent />
          <Metric value="12" label="Research Specialists" />
          <Metric value="3" label="Central HALL Delegates" />
          <Metric value="∞" label="Business Dept. Active" accent />
        </div>

        {/* Ecosystem flow */}
        <div className="reveal-block" style={{ opacity: 0 }}>
          <EcosystemFlow fieldName={field.name} />
        </div>

        {/* Core Focus */}
        <div className="reveal-block" style={{ opacity: 0 }}>
          <div className="bg-hut rounded-sm p-6 md:p-10 border border-gold/10">
            <div className="flex items-center gap-3 mb-2">
              <Globe2 className="w-5 h-5 text-gold/60" strokeWidth={1.5} />
              <SectionLabel>Core Focus</SectionLabel>
            </div>
            <SectionTitle>What does {field.name} actually focus on?</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {field.coreFocusPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="text-gold text-[8px] mt-2 flex-shrink-0">◆</span>
                  <p className="text-base text-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="reveal-block" style={{ opacity: 0 }}>
          <SectionLabel>Key Focus Areas</SectionLabel>
          <SectionTitle>What disciplines does it draw from?</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {field.focus.map((area) => (
              <div
                key={area}
                className="bg-hut border border-gold/10 rounded-sm p-4 hover:border-gold/30 transition-colors duration-300"
              >
                <span className="text-gold text-[8px]">◆</span>
                <p className="text-base text-foreground mt-2 leading-snug">{area}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="reveal-block" style={{ opacity: 0 }}>
          <div className="bg-hut rounded-sm border border-gold/10 overflow-hidden">
            <div className="px-6 md:px-10 pt-6 md:pt-8 pb-5 border-b border-gold/10">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-gold/60" strokeWidth={1.5} />
                <SectionLabel>Sec(t) Academia Curriculum</SectionLabel>
              </div>
              <SectionTitle>What do learners actually study — and do?</SectionTitle>
            </div>
            <div className="divide-y divide-gold/10">
              {field.curriculum.map((phase, i) => (
                <div key={i} className="px-6 md:px-10 py-6 grid grid-cols-1 md:grid-cols-12 gap-4 group hover:bg-gold/[0.02] transition-colors">
                  <div className="md:col-span-3">
                    <div className="text-mono text-[9px] uppercase tracking-widest text-gold/40 mb-1">
                      Phase {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="text-sm font-medium text-gold">{phase.phase}</div>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-base text-ash leading-relaxed">{phase.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related pages for stronger internal linking */}
        <div className="reveal-block" style={{ opacity: 0 }}>
          <div className="bg-hut rounded-sm border border-gold/10 p-6 md:p-8">
            <SectionLabel>Related Resources</SectionLabel>
            <SectionTitle>Explore connected pages</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/solution-lab" className="bg-background/40 border border-gold/10 rounded-sm p-4 hover:border-gold/30 transition-colors">
                <p className="text-sm text-foreground">Solution Lab</p>
                <p className="text-xs text-ash mt-1">See how this field contributes to integrated models.</p>
              </Link>
              <Link to="/academia" className="bg-background/40 border border-gold/10 rounded-sm p-4 hover:border-gold/30 transition-colors">
                <p className="text-sm text-foreground">Sec(t) Academia</p>
                <p className="text-xs text-ash mt-1">View the learning pathway for this specialization.</p>
              </Link>
              <Link to="/join" className="bg-background/40 border border-gold/10 rounded-sm p-4 hover:border-gold/30 transition-colors">
                <p className="text-sm text-foreground">Join the Network</p>
                <p className="text-xs text-ash mt-1">Apply to collaborate with field specialists.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Research Hub + Central Hall – two col with mini visual */}
        <div className="reveal-block grid grid-cols-1 md:grid-cols-2 gap-6" style={{ opacity: 0 }}>
          <div className="bg-hut rounded-sm border border-gold/10 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gold/10">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-gold/60" strokeWidth={1.5} />
                <SectionLabel>Research Hub</SectionLabel>
              </div>
              <SectionTitle>Who drives the research?</SectionTitle>
            </div>
            {/* 12-dot visual */}
            <div className="px-6 md:px-8 pt-4 flex gap-2 flex-wrap">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-sm bg-hut border border-gold/20 flex items-center justify-center"
                  title={`Specialist ${i + 1}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                </div>
              ))}
            </div>
            <p className="text-base text-ash leading-relaxed p-6 md:p-8 pt-4">{field.researchHub}</p>
            <div className="flex items-center gap-2 px-6 md:px-8 pb-6 border-t border-gold/10 pt-4">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold flex-shrink-0" />
              <span className="text-mono text-[9px] uppercase tracking-widest text-gold/50">
                12 Deep Work Specialists · Active
              </span>
            </div>
          </div>

          <div className="bg-hut rounded-sm border border-gold/10 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gold/10">
              <div className="flex items-center gap-3 mb-2">
                <FlaskConical className="w-5 h-5 text-gold/60" strokeWidth={1.5} />
                <SectionLabel>Contribution to the Central HALL</SectionLabel>
              </div>
              <SectionTitle>How does it connect to the bigger picture?</SectionTitle>
            </div>
            {/* 3-of-36 visual */}
            <div className="px-6 md:px-8 pt-4 flex gap-2 flex-wrap">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-sm ${i < 3 ? "bg-ember/60 border border-ember/50" : "bg-hut border border-gold/10"}`}
                />
              ))}
            </div>
            <p className="text-base text-ash leading-relaxed p-6 md:p-8 pt-4">{field.centralHall}</p>
            <div className="flex items-center gap-2 px-6 md:px-8 pb-6 border-t border-gold/10 pt-4">
              <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold flex-shrink-0" />
              <span className="text-mono text-[9px] uppercase tracking-widest text-ember">
                3 of 36 Specialists · Central HALL
              </span>
            </div>
          </div>
        </div>

        {/* Business Department */}
        <div className="reveal-block" style={{ opacity: 0 }}>
          <div className="bg-hut rounded-sm border border-gold/20 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/[0.04] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="p-6 md:p-10 pb-5 border-b border-gold/10">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-gold/60" strokeWidth={1.5} />
                  <SectionLabel>∞ Infinity Business Department</SectionLabel>
                </div>
                <SectionTitle>How does the field sustain itself financially?</SectionTitle>
              </div>
              {/* revenue flow visual */}
              <div className="px-6 md:px-10 pt-5 flex items-center gap-3 flex-wrap">
                {["Revenue", "→", "Research", "→", "Education", "→", "Impact"].map((item, i) => (
                  <span key={i}
                    className={`text-mono text-[9px] uppercase tracking-widest ${
                      item === "→" ? "text-gold/20" : "text-gold/50 bg-hut border border-gold/10 px-2 py-1 rounded-sm"
                    }`}>
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-base text-ash leading-relaxed p-6 md:p-10 pt-4">
                {field.businessDept}
              </p>
              <div className="flex items-center gap-2 px-6 md:px-10 pb-6 border-t border-gold/10 pt-4">
                <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold" />
                <span className="text-mono text-[9px] uppercase tracking-widest text-ember">
                  Self-Sustaining · Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* South African Relevance */}
        <div className="reveal-block" style={{ opacity: 0 }}>
          <div className="bg-hut rounded-sm border border-gold/10 overflow-hidden">
            <div className="p-6 md:p-10 pb-5 border-b border-gold/10">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-gold/60" strokeWidth={1.5} />
                <SectionLabel>South African Relevance</SectionLabel>
              </div>
              <SectionTitle>Why does South Africa specifically need this?</SectionTitle>
            </div>
            <p className="text-base text-foreground leading-relaxed p-6 md:p-10 pt-5">
              {field.southAfricanRelevance}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="reveal-block pt-4" style={{ opacity: 0 }}>
          <div className="flex items-center justify-between gap-4 border-t border-gold/10 pt-10">
            {prevField ? (
              <Link
                to={`/fields/${prevField.slug}`}
                className="group flex items-center gap-3 bg-hut border border-gold/10 hover:border-gold/30 rounded-sm p-4 md:p-6 transition-colors duration-300 flex-1 max-w-xs"
              >
                <ArrowLeft className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors flex-shrink-0" />
                <div>
                  <div className="text-mono text-[9px] uppercase tracking-widest text-gold/40 mb-1">Previous</div>
                  <div className="text-sm text-foreground group-hover:text-gold transition-colors">
                    {prevField.prefix}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/fields"
              className="text-mono text-[10px] uppercase tracking-widest text-gold/40 hover:text-gold transition-colors hidden md:block"
            >
              All 12 Fields
            </Link>

            {nextField ? (
              <Link
                to={`/fields/${nextField.slug}`}
                className="group flex items-center justify-end gap-3 bg-hut border border-gold/10 hover:border-gold/30 rounded-sm p-4 md:p-6 transition-colors duration-300 flex-1 max-w-xs text-right"
              >
                <div>
                  <div className="text-mono text-[9px] uppercase tracking-widest text-gold/40 mb-1">Next</div>
                  <div className="text-sm text-foreground group-hover:text-gold transition-colors">
                    {nextField.prefix}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors flex-shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="text-center mt-10">
            <Link to="/solution-lab" className="btn-ember text-xs inline-flex">
              See How All Fields Converge <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FieldDetail;

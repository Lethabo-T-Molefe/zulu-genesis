import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Mail, Globe, Clock, Phone, ArrowRight } from "lucide-react";
import { brandLogos } from "@/lib/brand-assets";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const CONTACT_EMAIL = ["info", "sectinfinity.com"].join("@");
const CONTACT_PHONE = "+27 73 386 3841";
const CONTACT_TEL = "tel:+27733863841";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_PHONE,
    href: CONTACT_TEL,
  },
  {
    icon: Globe,
    label: "Reach",
    value: "Working Globally",
    href: null,
  },
  {
    icon: Clock,
    label: "Status",
    value: "Accepting Projects & Enquiries",
    href: null,
  },
];

const reasons = [
  "Research collaboration or joint project enquiry",
  "Partnership with Sec(t) Infinity SolutionZ",
  "Enrollment in Sec(t) Academia programmes",
  "Joining the 36-specialist innovation network",
  "Media, speaking, or panel requests",
  "General information about the Village of Knowledge",
];

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contact-page`,
  name: `Contact ${SITE_NAME}`,
  description:
    "Contact Sec(t) Infinity SolutionZ for research collaboration, services, training, and innovation partnerships.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        availableLanguage: ["en"],
        areaServed: "ZA",
      },
    ],
  },
};

const Contact = () => {
  const detailsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState({ details: false, cta: false });

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
        { threshold: 0.08 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = observe(detailsRef.current, "details");
    const c2 = observe(ctaRef.current, "cta");
    return () => {
      c1?.();
      c2?.();
    };
  }, [revealed]);

  return (
    <PageLayout>
      <SEOHead
        title="Contact Sec(t) Infinity | Get In Touch"
        description="Contact Sec(t) Infinity SolutionZ for research collaboration, project enquiries, partnership opportunities, or to join our multidisciplinary innovation network across South Africa and beyond."
        path="/contact"
        keywords="contact Sec(t) Infinity, innovation network enquiry, research collaboration, sectinfinity email, Sec(t) Infinity contact email"
        structuredData={contactStructuredData}
      />
      <PageHeader
        label="Contact"
        title="Get In Touch"
        titleAccent="With Our Team"
        description="Whether you're looking to collaborate on a project, partner with us, join the network, or simply learn more — we'd love to hear from you."
        graphic={
          <svg viewBox="0 0 240 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
            {/* Envelope body */}
            <rect x="14" y="44" width="212" height="142" rx="4" strokeWidth="1.4" opacity="0.82"/>
            {/* Top flap — V fold from top corners down to centre */}
            <path d="M14 44 L120 132 L226 44" strokeWidth="1.3" opacity="0.75"/>
            {/* Bottom corner fold lines */}
            <line x1="14" y1="186" x2="94" y2="124" strokeWidth="1" opacity="0.4"/>
            <line x1="226" y1="186" x2="146" y2="124" strokeWidth="1" opacity="0.4"/>
            {/* Wax seal circle at fold point */}
            <circle cx="120" cy="132" r="13" strokeWidth="1.2" opacity="0.68"/>
            <path d="M120 123 L125 132 L120 141 L115 132 Z" fill="currentColor" opacity="0.38"/>
            {/* Postage stamp — top right */}
            <rect x="184" y="57" width="26" height="30" rx="2" strokeWidth="1" opacity="0.42"/>
            <line x1="190" y1="65" x2="204" y2="65" strokeWidth="0.7" opacity="0.35"/>
            <line x1="190" y1="72" x2="204" y2="72" strokeWidth="0.7" opacity="0.35"/>
            <line x1="190" y1="79" x2="200" y2="79" strokeWidth="0.7" opacity="0.35"/>
          </svg>
        }
      />

      {/* Contact details + reach out card */}
      <section ref={detailsRef} className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: contact info */}
            <div>
              <div
                className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4"
                style={{ opacity: 0 }}
              >
                Reach Us
              </div>
              <h2
                className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8"
                style={{ opacity: 0 }}
              >
                Direct <span className="text-gold-gradient">Contact</span>
              </h2>

              <div className="space-y-4 mb-10">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="anim-item flex items-start gap-4 p-5 bg-hut rounded-sm border border-gold/10 group hover:border-gold/30 transition-colors duration-500"
                    style={{ opacity: 0 }}
                  >
                    <detail.icon
                      className="w-5 h-5 text-gold/60 mt-0.5 group-hover:text-gold transition-colors shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-1">
                        {detail.label}
                      </div>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          aria-label={`${detail.label}: ${detail.value}`}
                          className="text-base md:text-lg text-foreground hover:text-gold transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <div className="text-base md:text-lg text-foreground">
                          {detail.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Reasons to reach out */}
              <div
                className="anim-item bg-hut rounded-sm p-6 border border-gold/10"
                style={{ opacity: 0 }}
              >
                <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-4">
                  Common Reasons to Reach Out
                </div>
                <div className="space-y-3">
                  {reasons.map((r) => (
                    <div key={r} className="flex items-start gap-2">
                      <span className="text-gold text-[8px] mt-1.5 shrink-0">◆</span>
                      <span className="text-base text-ash leading-relaxed">{r}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-5 pt-4 border-t border-gold/10">
                  <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold" />
                  <span className="text-mono text-[10px] uppercase tracking-widest text-ember">
                    Accepting Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Right: reach out card */}
            <div
              className="anim-item bg-hut glow-gold rounded-sm p-6 md:p-8 lg:p-10 border border-gold/20 lg:mt-[7.5rem]"
              style={{ opacity: 0 }}
            >
              <img
                src={brandLogos.secondary}
                alt=""
                className="h-12 sm:h-14 w-auto max-w-full object-contain mb-6 opacity-90"
              />

              <div className="text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
                Send a Message
              </div>
              <h3 className="text-display text-2xl text-foreground mb-4">
                We'd Love to Hear From You
              </h3>
              <p className="text-base text-ash leading-relaxed mb-8">
                The fastest way to reach us is directly by email or phone. We
                respond to all enquiries within one business day.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  aria-label="Send us an email"
                  className="btn-ember text-xs w-full justify-center"
                >
                  Email Us <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={CONTACT_TEL}
                  aria-label="Call us"
                  className="btn-gold-outline text-xs w-full justify-center"
                >
                  Call Us
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gold/10 space-y-2">
                <div className="flex items-center gap-2 text-ash text-sm">
                  <Mail className="w-4 h-4 text-gold/50 shrink-0" strokeWidth={1.5} />
                  <span>{CONTACT_EMAIL}</span>
                </div>
                <div className="flex items-center gap-2 text-ash text-sm">
                  <Phone className="w-4 h-4 text-gold/50 shrink-0" strokeWidth={1.5} />
                  <span>{CONTACT_PHONE}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-6">
                <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold" />
                <span className="text-mono text-[10px] uppercase tracking-widest text-ember">
                  Accepting Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        ref={ctaRef}
        className="py-20 md:py-32 bg-charcoal relative"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div
            className="anim-item text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4"
            style={{ opacity: 0 }}
          >
            Not Sure Where to Start?
          </div>
          <h2
            className="anim-item text-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
            style={{ opacity: 0 }}
          >
            Explore the{" "}
            <span className="text-gold-gradient">Village First</span>
          </h2>
          <p
            className="anim-item text-base md:text-lg text-ash max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ opacity: 0 }}
          >
            Browse our 12 fields of specialization, discover our research
            model, or read about how the Solution Lab works — then come back
            and tell us where you fit.
          </p>
          <div
            className="anim-item flex flex-wrap gap-4 justify-center"
            style={{ opacity: 0 }}
          >
            <Link to="/fields" className="btn-ember text-xs inline-flex">
              Explore the Fields{" "}
              <span className="text-base leading-none">→</span>
            </Link>
            <Link to="/join" className="btn-gold-outline text-xs inline-flex">
              Join the Network
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>
    </PageLayout>
  );
};

export default Contact;

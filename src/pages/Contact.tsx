import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Mail, Globe, Clock, Phone, ArrowRight } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@sectinfinity.com",
    href: "mailto:info@sectinfinity.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 73 386 3841",
    href: "tel:+27733863841",
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

const Contact = () => {
  const detailsRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState({ details: false, cta: false });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unable to send message right now.");
      }

      setSubmitState({
        type: "success",
        message: "Message sent successfully. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send message right now.";
      setSubmitState({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-background/50 border border-gold/20 rounded-sm px-4 py-3 text-base text-foreground placeholder-ash/40 focus:outline-none focus:border-gold/50 transition-colors duration-300";

  return (
    <PageLayout>
      <SEOHead
        title="Contact Sec(t) Infinity | Get In Touch"
        description="Contact Sec(t) Infinity SolutionZ for research collaboration, project enquiries, partnership opportunities, or to join our multidisciplinary innovation network across South Africa and beyond."
        path="/contact"
        keywords="contact Sec(t) Infinity, innovation network enquiry, research collaboration, sectinfinity email, info@sectinfinity.com"
      />
      <PageHeader
        label="Contact"
        title="Get In Touch"
        titleAccent="With Our Team"
        description="Whether you're looking to collaborate on a project, partner with us, join the network, or simply learn more — we'd love to hear from you."
      />

      {/* Contact details + form */}
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

            {/* Right: contact form */}
            <div ref={formContainerRef}>
              <form
                onSubmit={handleSubmit}
                className="anim-item bg-hut rounded-sm p-6 md:p-8 lg:p-10 border border-gold/20 glow-gold space-y-5"
                style={{ opacity: 0 }}
              >
                <div>
                  <div className="text-mono text-xs uppercase tracking-[0.3em] text-gold mb-6">
                    Send a Message
                  </div>
                  <p className="text-base text-ash leading-relaxed mb-6">
                    Fill in the form below to send your enquiry directly to
                    info@sectinfinity.com.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, name: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, subject: e.target.value }))
                    }
                    className={inputClass}
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project, idea, or enquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-ember text-xs w-full justify-center"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <ArrowRight className="w-4 h-4" />
                </button>

                {submitState.type && (
                  <p
                    className={`text-[11px] text-center leading-relaxed ${
                      submitState.type === "success" ? "text-emerald-300" : "text-rose-300"
                    }`}
                  >
                    {submitState.message}
                  </p>
                )}
              </form>
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

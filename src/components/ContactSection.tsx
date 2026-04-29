import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";
import { Mail, Phone, ArrowRight } from "lucide-react";

const CONTACT_EMAIL = ["info", "sectinfinity.com"].join("@");
const CONTACT_PHONE = "+27 73 386 3841";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);
          if (innerRef.current) {
            animate(innerRef.current.querySelectorAll(".ct-line"), {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              delay: stagger(120),
              ease: "outExpo",
            });
          }
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <section id="contact" ref={sectionRef} className="relative py-10 md:py-16">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div
          ref={innerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center"
        >
          {/* Left — heading + CTAs */}
          <div>
            <div
              className="ct-line text-mono text-xs uppercase tracking-[0.3em] text-gold mb-3"
              style={{ opacity: 0 }}
            >
              Contact
            </div>
            <h2 className="text-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
              <span className="ct-line inline-block" style={{ opacity: 0 }}>Let's Build Something</span>
              <br />
              <span className="ct-line inline-block text-gold-gradient" style={{ opacity: 0 }}>Together</span>
            </h2>
            <p className="ct-line text-sm text-ash leading-relaxed mb-6" style={{ opacity: 0 }}>
              Whether you're looking to collaborate on a project, partner with us, join the network,
              or simply learn more — we'd love to hear from you.
            </p>
            <div className="ct-line flex flex-wrap gap-3" style={{ opacity: 0 }}>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-ember text-xs">
                Email Us <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/contact" className="btn-gold-outline text-xs">
                View Contact Page
              </Link>
            </div>
          </div>

          {/* Right — contact detail cards */}
          <div className="ct-line space-y-3" style={{ opacity: 0 }}>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-4 p-4 bg-hut rounded-sm border border-gold/10 group hover:border-gold/30 transition-colors duration-500"
            >
              <Mail
                className="w-5 h-5 text-gold/60 shrink-0 group-hover:text-gold transition-colors"
                strokeWidth={1.5}
              />
              <div>
                <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-0.5">Email</div>
                <span className="text-sm text-foreground group-hover:text-gold transition-colors">
                  {CONTACT_EMAIL}
                </span>
              </div>
            </a>
            <a
              href="tel:+27733863841"
              className="flex items-center gap-4 p-4 bg-hut rounded-sm border border-gold/10 group hover:border-gold/30 transition-colors duration-500"
            >
              <Phone
                className="w-5 h-5 text-gold/60 shrink-0 group-hover:text-gold transition-colors"
                strokeWidth={1.5}
              />
              <div>
                <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-0.5">Phone</div>
                <span className="text-sm text-foreground group-hover:text-gold transition-colors">
                  {CONTACT_PHONE}
                </span>
              </div>
            </a>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold" />
              <span className="text-mono text-[10px] uppercase tracking-widest text-ember">
                Accepting Projects &amp; Enquiries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !revealed) {
          setRevealed(true);

          // Left column — slide in from left with text line stagger
          if (leftRef.current) {
            animate(leftRef.current.querySelectorAll(".about-line"), {
              opacity: [0, 1],
              translateX: [-30, 0],
              duration: 800,
              delay: stagger(100),
              easing: "outExpo",
            });
          }

          // Right column — capability rows stagger from right
          if (rightRef.current) {
            animate(rightRef.current.querySelectorAll(".capability-row"), {
              opacity: [0, 1],
              translateX: [40, 0],
              duration: 600,
              delay: stagger(80, { start: 400 }),
              easing: "outExpo",
            });

            // Animate the capability number counters
            animate(rightRef.current.querySelectorAll(".cap-number"), {
              opacity: [0, 1],
              scale: [0.5, 1],
              duration: 400,
              delay: stagger(80, { start: 500 }),
              easing: "outBack",
            });

            // Draw underlines on each row
            animate(rightRef.current.querySelectorAll(".cap-underline"), {
              scaleX: [0, 1],
              duration: 600,
              delay: stagger(80, { start: 600 }),
              easing: "outQuart",
            });
          }
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [revealed]);

  // Hover effect on capability rows
  const handleRowHover = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      paddingLeft: [16, 24],
      duration: 300,
      easing: "outQuart",
    });
  };

  const handleRowLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      paddingLeft: [24, 16],
      duration: 300,
      easing: "outQuart",
    });
  };

  const capabilities = [
    "Engineering & Scientific Innovation",
    "Commercial Intelligence & Financial Strategy",
    "Technology Development & System Design",
    "Governance Alignment Under Law",
    "Concept → Design → Execution → Commissioning",
    "Multidisciplinary Project Consulting",
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-32 lg:py-48">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div ref={leftRef}>
            <div className="about-line text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>
              Our Mission
            </div>
            <h2 className="text-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-8">
              <span className="about-line inline-block" style={{ opacity: 0 }}>Africa as a</span>
              <br />
              <span className="about-line inline-block text-gold-gradient" style={{ opacity: 0 }}>Global Producer</span>
            </h2>
            <div className="space-y-6 text-ash leading-relaxed">
              <p className="about-line" style={{ opacity: 0 }}>
                To position Africa as a global hub of innovation, invention, and production —
                not merely a consumer, but a world-class producer leading in scientific discovery,
                technological invention, industrial production, and entrepreneurial innovation.
              </p>
              <p className="about-line" style={{ opacity: 0 }}>
                We invest in research, design systems, build enterprises, engineer solutions,
                and champion entrepreneurial and financial intelligence across every discipline
                in our ecosystem.
              </p>
            </div>
            <Link to="/about" className="about-line btn-gold-outline text-xs mt-8 inline-flex" style={{ opacity: 0 }}>
              Learn More About Us
            </Link>
          </div>

          {/* Right */}
          <div ref={rightRef} className="space-y-0">
            {capabilities.map((item, i) => (
              <div
                key={item}
                className="capability-row flex items-center gap-4 p-4 relative group cursor-default"
                style={{ opacity: 0 }}
                onMouseEnter={handleRowHover}
                onMouseLeave={handleRowLeave}
              >
                <span className="cap-number text-mono text-[10px] text-gold/50 shrink-0" style={{ opacity: 0 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground group-hover:text-gold transition-colors duration-300">
                  {item}
                </span>
                <div
                  className="cap-underline absolute bottom-0 left-0 right-0 h-px bg-gold/15"
                  style={{ transformOrigin: "left", transform: "scaleX(0)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

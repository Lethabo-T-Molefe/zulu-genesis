import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

interface PageHeaderProps {
  label: string;
  title: string;
  titleAccent: string;
  description: string;
}

const PageHeader = ({ label, title, titleAccent, description }: PageHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    animate(ref.current.querySelectorAll(".ph-line"), {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      delay: stagger(120),
      ease: "outExpo",
    });
  }, []);

  return (
    <section className="relative pt-24 md:pt-36 lg:pt-44 pb-16 md:pb-20 lg:pb-28">
      <div className="container mx-auto px-6 md:px-12">
        <div ref={ref} className="max-w-4xl">
          <div className="ph-line text-mono text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ opacity: 0 }}>
            {label}
          </div>
          <h1 className="text-display text-3xl md:text-5xl lg:text-7xl text-foreground mb-6">
            <span className="ph-line inline-block" style={{ opacity: 0 }}>{title}</span>
            <br />
            <span className="ph-line inline-block text-gold-gradient" style={{ opacity: 0 }}>{titleAccent}</span>
          </h1>
          <p className="ph-line text-base md:text-lg lg:text-xl text-ash max-w-2xl leading-relaxed" style={{ opacity: 0 }}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

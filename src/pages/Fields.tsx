import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { fieldsData } from "@/data/fieldsData";
import { ArrowRight } from "lucide-react";

const Fields = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!gridRef.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !revealed) {
        setRevealed(true);
        animate(gridRef.current!.querySelectorAll(".field-card"), {
          opacity: [0, 1], translateY: [40, 0], duration: 700,
          delay: stagger(60), ease: "outExpo",
        });
      }
    }, { threshold: 0.05 });
    obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, [revealed]);

  return (
    <PageLayout>
      <SEOHead
        title="12 Fields of Specialization in Africa | Sec(t) Infinity"
        description="Explore the 12 interconnected Sec(t) Infinity fields of specialization in science, engineering, commerce, technology, law, arts, social sciences, innovation, R&D, and strategic design—each with an active Infinity Business Department."
        path="/fields"
        keywords="Sec(t) Infinity fields, 12 fields of specialization, Village of Knowledge, chemical engineering, artificial intelligence, entrepreneurship Africa, research disciplines"
      />
      <PageHeader
        label="Fields of Specialization"
        title="12 Fields."
        titleAccent="Infinite Possibilities."
        description="Twelve interconnected disciplines form the Village of Knowledge — each a powerhouse of specialized expertise, each running its own Infinity Business Department."
        graphic={
          <svg viewBox="0 0 200 148" fill="none" stroke="currentColor" className="w-full h-auto">
            {/* Honeycomb — 3 rows × 4 cols = 12 hexagons (pointy-top, r=18) */}
            {/* Row 0 y=35: cx = 35, 66, 97, 128 */}
            <polygon points="35,17 50.6,26 50.6,44 35,53 19.4,44 19.4,26" strokeWidth="1.2" opacity="0.7"/>
            <polygon points="66,17 81.6,26 81.6,44 66,53 50.4,44 50.4,26" strokeWidth="1.2" opacity="0.7"/>
            <polygon points="97,17 112.6,26 112.6,44 97,53 81.4,44 81.4,26" strokeWidth="1.2" opacity="0.7"/>
            <polygon points="128,17 143.6,26 143.6,44 128,53 112.4,44 112.4,26" strokeWidth="1.2" opacity="0.7"/>
            {/* Row 1 y=62: cx = 50.6, 81.6, 112.6, 143.6 (offset) */}
            <polygon points="50.6,44 66.2,53 66.2,71 50.6,80 35,71 35,53" strokeWidth="1.2" opacity="0.7"/>
            <polygon points="81.6,44 97.2,53 97.2,71 81.6,80 66,71 66,53" strokeWidth="1.2" opacity="0.7"/>
            <polygon points="112.6,44 128.2,53 128.2,71 112.6,80 97,71 97,53" strokeWidth="1.2" opacity="0.7"/>
            <polygon points="143.6,44 159.2,53 159.2,71 143.6,80 128,71 128,53" strokeWidth="1.2" opacity="0.7"/>
            {/* Row 2 y=89: cx = 35, 66, 97, 128 */}
            <polygon points="35,71 50.6,80 50.6,98 35,107 19.4,98 19.4,80" strokeWidth="1.2" opacity="0.7"/>
            <polygon points="66,71 81.6,80 81.6,98 66,107 50.4,98 50.4,80" strokeWidth="1.2" opacity="0.7"/>
            <polygon points="97,71 112.6,80 112.6,98 97,107 81.4,98 81.4,80" strokeWidth="1.2" opacity="0.7"/>
            <polygon points="128,71 143.6,80 143.6,98 128,107 112.4,98 112.4,80" strokeWidth="1.2" opacity="0.7"/>
            {/* Small fill dots in alternating hexes for depth */}
            <circle cx="35" cy="35" r="3" fill="currentColor" opacity="0.25"/>
            <circle cx="97" cy="35" r="3" fill="currentColor" opacity="0.25"/>
            <circle cx="81.6" cy="62" r="3" fill="currentColor" opacity="0.25"/>
            <circle cx="143.6" cy="62" r="3" fill="currentColor" opacity="0.25"/>
            <circle cx="35" cy="89" r="3" fill="currentColor" opacity="0.25"/>
            <circle cx="97" cy="89" r="3" fill="currentColor" opacity="0.25"/>
          </svg>
        }
      />

      <section ref={gridRef} className="py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-6">
            {fieldsData.map((field, i) => (
              <Link
                key={field.slug}
                to={`/fields/${field.slug}`}
                className="field-card group block bg-hut rounded-sm p-6 md:p-8 lg:p-10 border border-gold/10 hover:border-gold/30 transition-all duration-500 relative overflow-hidden"
                style={{ opacity: 0 }}
              >
                {/* Hover sweep line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                  {/* Left: icon + name + desc */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4 mb-4">
                      <field.icon className="w-8 h-8 text-gold/70 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                      <div>
                        <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50">
                          {String(i + 1).padStart(2, "0")} · {field.prefix}
                        </div>
                        <h3 className="text-display text-2xl text-foreground group-hover:text-gold transition-colors duration-300">
                          {field.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-base text-ash leading-relaxed">{field.desc}</p>
                  </div>

                  {/* Middle: focus areas */}
                  <div className="lg:col-span-4">
                    <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-3">Key Focus Areas</div>
                    <div className="space-y-2">
                      {field.focus.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <span className="text-gold text-[8px] mt-1.5">◆</span>
                          <span className="text-base text-foreground">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: business dept + explore CTA */}
                  <div className="lg:col-span-3">
                    <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-3">∞ Business Department</div>
                    <p className="text-base text-ash leading-relaxed">{field.business}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold" />
                      <span className="text-mono text-[9px] uppercase tracking-widest text-ember">Active</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-5 text-mono text-[9px] uppercase tracking-widest text-gold/40 group-hover:text-gold transition-colors duration-300">
                      <span>Explore Field</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/solution-lab" className="btn-ember text-xs inline-flex">
              See How Fields Converge <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Fields;

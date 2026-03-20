import { Link } from "react-router-dom";
import { useEffect, useRef, useState, type ElementType } from "react";
import { animate, stagger } from "animejs";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import {
  Microscope, Cog, BarChart3, Monitor, Scale, Scroll,
  Palette, Sparkles, Globe, Lightbulb, FlaskConical, Target,
} from "lucide-react";

const fields: {
  name: string; prefix: string; icon: ElementType;
  desc: string; focus: string[]; business: string;
}[] = [
  {
    name: "Science", prefix: "i-Science", icon: Microscope,
    desc: "Fundamental research and scientific discovery driving knowledge at the frontier of human understanding.",
    focus: ["Physics & Applied Mathematics", "Biological Sciences", "Environmental Systems", "Data Science & Statistical Modelling"],
    business: "Scientific consulting, research partnerships, laboratory services",
  },
  {
    name: "Engineering", prefix: "i-Engineering", icon: Cog,
    desc: "Design, build, and innovate systems that transform theoretical knowledge into tangible infrastructure.",
    focus: ["Mechanical & Civil Engineering", "Electrical & Electronic Systems", "Process & Industrial Engineering", "Sustainable Energy Solutions"],
    business: "Engineering consulting, project management, prototype development",
  },
  {
    name: "Commerce", prefix: "i-Commerce", icon: BarChart3,
    desc: "Financial strategy and commercial intelligence powering sustainable enterprise across the ecosystem.",
    focus: ["Entrepreneurial Strategy", "Financial Analysis & Investment", "Market Intelligence", "Business Model Innovation"],
    business: "Business consulting, financial advisory, market research",
  },
  {
    name: "Technology", prefix: "i-Technology", icon: Monitor,
    desc: "Digital systems and AI-aligned development building the infrastructure of tomorrow.",
    focus: ["Software Engineering & AI", "Cybersecurity & Networks", "Cloud Architecture", "Human-Computer Interaction"],
    business: "Software development, AI solutions, digital transformation",
  },
  {
    name: "Law", prefix: "i-Law", icon: Scale,
    desc: "Governance, policy, and legal frameworks ensuring alignment, compliance, and intellectual protection.",
    focus: ["Intellectual Property & Patent Law", "Corporate Governance", "Regulatory Compliance", "Policy Design & Analysis"],
    business: "Legal consulting, IP management, compliance auditing",
  },
  {
    name: "African History", prefix: "i-History", icon: Scroll,
    desc: "Heritage preservation and cultural wisdom informing innovation rooted in identity and deep knowledge.",
    focus: ["Pre-Colonial Knowledge Systems", "Cultural Heritage Documentation", "Indigenous Innovation Methods", "Oral Tradition & Archival Research"],
    business: "Cultural consulting, heritage documentation, educational publishing",
  },
  {
    name: "Visual Arts", prefix: "i-Visual Arts", icon: Palette,
    desc: "Visual communication and design thinking that gives form to complex ideas and solutions.",
    focus: ["Graphic & Brand Design", "UI/UX & Digital Experience", "Architectural Visualization", "Motion & Multimedia Design"],
    business: "Design agency, branding services, visual production",
  },
  {
    name: "Creative Arts", prefix: "i-Creative Arts", icon: Sparkles,
    desc: "Expression, narrative, and cultural production that amplifies the voice of African innovation.",
    focus: ["Film & Documentary Production", "Creative Writing & Storytelling", "Music & Sonic Design", "Performance & Cultural Events"],
    business: "Content production, creative agency, event management",
  },
  {
    name: "Social Sciences", prefix: "i-Social", icon: Globe,
    desc: "Understanding societies and human behavior to design solutions that truly serve communities.",
    focus: ["Sociology & Community Development", "Psychology & Behavioral Science", "Political Economy", "Urban & Rural Planning"],
    business: "Social research, community consulting, impact assessment",
  },
  {
    name: "Innovation", prefix: "i-Innovation", icon: Lightbulb,
    desc: "Invention and breakthrough methodologies driving the creation of entirely new solution categories.",
    focus: ["Design Thinking & Ideation", "Rapid Prototyping", "Technology Transfer", "Innovation Lab Facilitation"],
    business: "Innovation consulting, ideation workshops, incubation services",
  },
  {
    name: "Research & Dev", prefix: "i-R&D", icon: FlaskConical,
    desc: "Applied research and product development translating discoveries into deployable solutions.",
    focus: ["Applied Research Programs", "Product Development Pipelines", "Testing & Quality Assurance", "Scalability Engineering"],
    business: "R&D partnerships, product development, testing services",
  },
  {
    name: "Strategic Design", prefix: "i-Strategy", icon: Target,
    desc: "Systems architecture and strategic planning orchestrating multidisciplinary collaboration.",
    focus: ["Systems Architecture", "Strategic Foresight & Planning", "Organizational Design", "Knowledge Management"],
    business: "Strategy consulting, systems design, organizational development",
  },
];

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
      <PageHeader
        label="Fields of Specialization"
        title="12 Fields."
        titleAccent="Infinite Possibilities."
        description="Twelve interconnected disciplines form the Village of Knowledge — each a powerhouse of specialized expertise, each running its own Infinity Business Department."
      />

      <section ref={gridRef} className="py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-6">
            {fields.map((field) => (
              <div key={field.name} className="field-card bg-hut rounded-sm p-6 md:p-8 lg:p-10 border border-gold/10 hover:border-gold/30 transition-colors duration-500" style={{ opacity: 0 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4 mb-4">
                      <field.icon className="w-8 h-8 text-gold/70" strokeWidth={1.5} />
                      <div>
                        <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50">{field.prefix}</div>
                        <h3 className="text-display text-2xl text-foreground">{field.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-ash leading-relaxed">{field.desc}</p>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-3">Key Focus Areas</div>
                    <div className="space-y-2">
                      {field.focus.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <span className="text-gold text-[8px] mt-1.5">◆</span>
                          <span className="text-sm text-foreground">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="text-mono text-[10px] uppercase tracking-widest text-gold/50 mb-3">∞ Business Department</div>
                    <p className="text-sm text-ash leading-relaxed">{field.business}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="w-2 h-2 rounded-full bg-ember animate-pulse-gold" />
                      <span className="text-mono text-[9px] uppercase tracking-widest text-ember">Active</span>
                    </div>
                  </div>
                </div>
              </div>
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

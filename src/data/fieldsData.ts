import { type ElementType } from "react";
import {
  Microscope, Cog, BarChart3, Monitor, Scale, Scroll,
  Palette, Sparkles, Globe, Lightbulb, FlaskConical, Target,
} from "lucide-react";

export interface CurriculumPhase {
  phase: string;
  content: string;
}

export interface FieldData {
  slug: string;
  name: string;
  prefix: string;
  icon: ElementType;
  desc: string;
  focus: string[];
  business: string;
  plainEnglish: string;
  overview: string;
  coreFocusPoints: string[];
  curriculum: CurriculumPhase[];
  researchHub: string;
  businessDept: string;
  centralHall: string;
  southAfricanRelevance: string;
}

export const fieldsData: FieldData[] = [
  /* ────────────────────────────────── 01 · i-Science ─── */
  {
    slug: "science",
    name: "Science",
    prefix: "i-Science",
    icon: Microscope,
    desc: "Fundamental research and scientific discovery driving knowledge at the frontier of human understanding.",
    focus: ["Physics & Applied Mathematics", "Biological Sciences", "Environmental Systems", "Data Science & Statistical Modelling"],
    business: "Scientific consulting, research partnerships, laboratory services",

    plainEnglish:
      "i-Science is where we ask the big questions — how does the world work, why do things happen, and what can we prove? Learners and researchers here use experiments, data, and technology to discover answers that nobody has found yet. Everything from climate change to disease diagnosis to energy use is tackled through real science.",

    overview:
      "i-Science is the infinity-powered evolution of traditional Science. The 'i-' prefix — taken from the first letter of 'infinity' — signals that this is not just school science. It is the domain of rigorous empirical discovery, deep research, and scientific modelling, now amplified with AI-assisted simulation, computational tools, and high-performance data processing. Where ordinary science classrooms teach you what others have already found, i-Science puts learners and researchers at the frontier of what is still unknown. Every hypothesis tested here is aimed at producing new knowledge that can be applied to real South African and continental challenges.",

    coreFocusPoints: [
      "Scientific discovery and frontier knowledge creation — asking questions no one has answered yet and following evidence wherever it leads, using both traditional experimental methods and modern AI-powered analysis",
      "Data-driven modelling and systems thinking — understanding that everything in the world is connected, and using data to map those connections so we can predict and improve outcomes in health, energy, and environment",
      "AI-assisted simulation and computational modelling — running thousands of virtual experiments on a computer before touching a lab, saving time, money, and resources while producing more accurate results",
      "Real-world experimental design — every research project in i-Science is designed to solve a problem that actually exists in South Africa, not just to pass an exam or fill a journal",
    ],

    curriculum: [
      {
        phase: "Grade 8–9 — Building the Scientific Mind",
        content:
          "At this stage, learners are introduced to science as a tool for solving real problems — not just a subject for the classroom. A Grade 8 learner might build a simple air-quality sensor using affordable electronic components and use it to measure pollution levels in their own neighbourhood during load-shedding. They learn to record data, spot patterns, and draw conclusions. The goal is to make the scientific method feel natural and exciting, so learners see themselves as scientists from day one.",
      },
      {
        phase: "Grade 10–12 — Doing Real Science",
        content:
          "By Grade 10, learners move into Python-based data analysis — writing code to process and visualise real datasets from South African sources (weather, health, water quality). They design and run AI-driven experiments, form testable hypotheses, and produce written research reports that could genuinely inform local decision-making. A Grade 12 project might analyse five years of load-shedding data to model its health impact on a specific province.",
      },
      {
        phase: "Tertiary & Postgraduate — Producing Original Research",
        content:
          "University-level students work directly within the i-Science Infinity Business Department, contributing to contracted research projects. A postgraduate student might co-develop a patented diagnostic tool for detecting early-stage TB in low-resource clinics, or build a predictive climate model for smallholder farmers in Limpopo. All outputs — papers, tools, datasets — are owned by the ecosystem and either published or commercialised to fund more research.",
      },
    ],

    researchHub:
      "The i-Science Research Hub is a team of 12 deeply specialised scientists who do nothing but research — they don't teach, they don't consult, they just think, investigate, and discover. These are people with what we call 'mercurial and aristocratic cognitive abilities' — meaning they thrive in deep, uninterrupted focus on difficult problems. They follow the Deep Work philosophy, blocking out days or weeks to pursue a single research question to its conclusion. A typical project might involve building an AI model that can predict drought patterns two seasons ahead using satellite data, or formulating a new compound that makes solar panels 30% more efficient using locally sourced materials. Their findings feed directly into the Infinity Business Department and the Central HALL.",

    businessDept:
      "The i-Science Business Department is how the House funds itself and stays independent. It offers scientific consulting to government departments, mining companies, agricultural businesses, and hospitals — solving real problems for paying clients. For example, a water board might hire i-Science to model contamination spread in a river system, or a pharmaceutical company might contract them to validate a new diagnostic method. The department also develops and sells data analytics software packages, laboratory-as-a-service offerings (where clients send samples and receive analysis), and intellectual property licences for patented scientific tools. All of this revenue flows back into paying researchers, subsidising learners' materials, and funding the next round of discovery.",

    centralHall:
      "When Sec(t) Infinity's 36-member Central HALL team sits down to solve a big national problem — say, designing a community health system for a rural municipality — three i-Science specialists are always in the room. Their job is to make sure everything the team proposes is grounded in evidence. If i-Engineering wants to build a water filtration system, i-Science validates that the chemistry will actually work. If i-Technology wants to deploy an AI health diagnostic tool, i-Science verifies the accuracy of the underlying medical data model. Without i-Science, the solutions produced by the Central HALL would be creative but unverified. With it, every Integrated Solution Model is built on a foundation of proven, replicable science.",

    southAfricanRelevance:
      "South Africa faces some of the most pressing scientific challenges on the planet: a healthcare system under severe strain, climate change threatening water and food security, air pollution in townships reaching dangerous levels, and an energy grid that cannot keep up with demand. Most research that addresses these challenges is done overseas or by international institutions that don't fully understand local conditions. i-Science changes that by producing home-grown scientists who understand South African realities firsthand — who know what load-shedding does to a clinic's cold chain, what drought means for a Karoo farmer, and what a crumbling school building does to a child's health. Every research output from i-Science is designed to be actionable in Africa, for Africa.",
  },

  /* ───────────────────────────────── 02 · i-Engineering ─── */
  {
    slug: "engineering",
    name: "Engineering",
    prefix: "i-Engineering",
    icon: Cog,
    desc: "Design, build, and innovate systems that transform theoretical knowledge into tangible infrastructure.",
    focus: ["Mechanical & Civil Engineering", "Electrical & Electronic Systems", "Process & Industrial Engineering", "Sustainable Energy Solutions"],
    business: "Engineering consulting, project management, prototype development",

    plainEnglish:
      "i-Engineering is where ideas become real things. If i-Science figures out that something is possible, i-Engineering figures out how to actually build it — the bridges, the solar panels, the water systems, the robots. Learners here get their hands dirty building and testing physical systems from Grade 8 all the way to professional contracts.",

    overview:
      "i-Engineering is the infinity-powered version of Engineering, covering the full lifecycle of any physical system: Concept → Design → Execution → Commissioning. Where i-Science asks 'what is true?', i-Engineering asks 'how do we build it so it works, lasts, and serves people?'. It blends traditional engineering disciplines (civil, mechanical, electrical, chemical) with cutting-edge tools like IoT sensor networks, drone technology, 3D printing, and sustainable energy systems. Every project has a beginning, a middle, and a commissioning phase — meaning it isn't done until it's handed over to a community or client that can actually use it.",

    coreFocusPoints: [
      "Full-lifecycle engineering from concept to commissioning — learners and professionals don't just design on paper. They prototype, test, fix, and hand over working systems. A project isn't complete until it's running in the real world.",
      "Sustainable energy systems — solar, wind, biogas, and hybrid energy solutions designed specifically for South African conditions, including load-shedding resilience. i-Engineering doesn't just study renewable energy; it builds it.",
      "IoT and smart systems — connecting physical infrastructure (water pumps, solar panels, grain silos) to the internet so they can be monitored and controlled remotely, reducing maintenance costs and improving reliability for communities far from cities.",
      "Governance and legal alignment — every engineering project must comply with South African law, environmental regulations, and community governance protocols. i-Law and i-Engineering work hand-in-hand to ensure nothing is built that harms or exploits.",
    ],

    curriculum: [
      {
        phase: "Grade 8–9 — Hands On From Day One",
        content:
          "A Grade 8 learner in i-Engineering doesn't read about how a solar panel works — they wire one up. Early projects include building simple solar-powered devices that continue working when the power goes out (a direct response to load-shedding), constructing small water filtration models from locally available materials, and assembling basic electronic circuits. These aren't toys — they're functional prototypes that teach the engineering principle of 'does it actually work?' before anything else.",
      },
      {
        phase: "Grade 10–12 — Engineering Real Systems",
        content:
          "By Grade 10, learners are working on IoT sensor networks — building devices that measure temperature, moisture, or energy consumption and send that data to a phone or computer. Grade 12 projects often include designing a small sustainable infrastructure solution for a real community partner, such as a rainwater harvesting system for a school or a solar-powered charging station for a clinic. Every project must pass a commissioning phase: it's installed, tested under real conditions, and only signed off when it performs as designed.",
      },
      {
        phase: "Tertiary & Postgraduate — Professional Contracts",
        content:
          "Tertiary students work on live contracts through the Infinity Business Department — real engineering jobs with real clients. A student team might design and install an IoT monitoring system for a farm in the Free State, or develop a prototype industrial water treatment unit for a municipality. Postgraduate engineers lead these projects, managing timelines, budgets, subcontractors, and client relationships — gaining the full experience of professional engineering practice while still studying.",
      },
    ],

    researchHub:
      "The i-Engineering Research Hub is a 12-person team of specialist engineers who focus entirely on solving South Africa's most stubborn infrastructure problems through research. Their work isn't theoretical — it's about finding better ways to build things that work in African conditions. One team might spend six months researching optimal materials for road construction in regions with extreme temperature variation between summer and winter. Another might investigate why certain solar installations in rural KwaZulu-Natal fail within three years, then develop a maintenance protocol to fix it. Their findings feed directly into the Infinity Business Department's product and service offerings, and they are also consulted whenever the Central HALL develops a solution that requires physical infrastructure.",

    businessDept:
      "i-Engineering is one of the most commercially active Houses in the entire ecosystem. The Business Department runs real engineering consulting services — taking on project contracts from municipalities, agricultural businesses, mining operations, and social enterprises. It designs and sells physical products like solar IoT monitoring systems (devices that track energy usage, battery health, and fault alerts for off-grid solar installations at farms or clinics). It also provides end-to-end project management: a client approaches with a problem, i-Engineering scopes it, designs the solution, builds the prototype, installs it, commissions it, and trains local operators to maintain it. Revenue from these contracts pays the salaries of researchers and educators, covers the cost of learner hardware (Raspberry Pi kits, soldering equipment, 3D printers), and funds the next cycle of innovation.",

    centralHall:
      "Whenever the Central HALL's 36 specialists design an Integrated Solution Model — a holistic answer to a big South African challenge — three i-Engineering specialists ensure that the solution can actually be built. Think of it this way: if the HALL decides to design a community resilience system for a township that experiences frequent power outages and water shortages, i-Science provides the data models, i-Technology builds the digital monitoring systems, and i-Engineering figures out the physical infrastructure — the solar panels, water tanks, battery storage, and grid connections. They also assess buildability (can local contractors install this?), cost-effectiveness (can the community afford to maintain it?), and safety (does it meet all engineering and legal codes?).",

    southAfricanRelevance:
      "South Africa has a massive infrastructure backlog — over 800 municipalities have water infrastructure in critical condition, more than 3,000 schools have no electricity, and load-shedding costs the economy an estimated R1 billion per stage per day. Standard engineering education produces graduates who are qualified on paper but have never solved a real problem under real African constraints. i-Engineering closes that gap by training engineers who have already built things that work in South African conditions before they graduate, and by running a Business Department that employs them on real projects from day one. The result is infrastructure that is designed for Africa, built by Africans, and maintained by communities who were involved in the design.",
  },

  /* ─────────────────────────────────── 03 · i-Commerce ─── */
  {
    slug: "commerce",
    name: "Commerce",
    prefix: "i-Commerce",
    icon: BarChart3,
    desc: "Financial strategy and commercial intelligence powering sustainable enterprise across the ecosystem.",
    focus: ["Entrepreneurial Strategy", "Financial Analysis & Investment", "Market Intelligence", "Business Model Innovation"],
    business: "Business consulting, financial advisory, market research",

    plainEnglish:
      "i-Commerce teaches people how to build businesses, manage money, and create economic value — but with a 21st-century African twist. It's not just accounting and business studies. Learners learn how to spot opportunities, build enterprises from scratch, use technology to compete globally, and make sure every innovation this ecosystem produces can actually survive in the real marketplace.",

    overview:
      "i-Commerce is the infinity-powered evolution of Commerce — the field that ensures no brilliant idea in the ecosystem dies because no one knew how to make money from it. It covers commercial intelligence, financial strategy, entrepreneurial innovation, and economic development, integrated with modern tools like fintech, blockchain, AI-driven market analysis, and supply-chain management. i-Commerce is the commercial backbone of the entire 12-House village: every other field produces knowledge, technology, or solutions, but i-Commerce is what turns those outputs into sustainable businesses that generate income, create employment, and fund further innovation.",

    coreFocusPoints: [
      "Entrepreneurial strategy rooted in African contexts — building businesses that understand African markets, African supply chains, African consumer behaviour, and African regulatory environments. Not importing Western business models but designing African ones.",
      "Financial intelligence and investment analysis — understanding how money flows, how to read a balance sheet, how to value a startup, how to access funding, and how to build financial systems that are transparent and accountable.",
      "Fintech and commercial technology — using mobile money, blockchain, AI-driven market analysis, and e-commerce platforms to build businesses that can compete regionally and globally without requiring massive physical infrastructure.",
      "Commercial viability assessment — every solution produced by the Central HALL must pass an i-Commerce viability test. If it can't generate enough revenue to sustain itself, it needs to be redesigned. i-Commerce ensures that idealism and commercial reality work together.",
    ],

    curriculum: [
      {
        phase: "Grade 8–9 — Learning to Think Like an Entrepreneur",
        content:
          "Before learners can build a business, they need to understand value — what it is, how it's created, and how it's exchanged. Grade 8 learners run real micro-transaction simulations: they design a small product or service, price it, market it to their peers, and track income and expenses. They also build simple e-commerce prototypes — basic websites or WhatsApp business profiles — and learn about profit margins, break-even points, and what it means for a business to survive its first year.",
      },
      {
        phase: "Grade 10–12 — Building and Pitching Real Business Plans",
        content:
          "By Grade 10, learners develop full business plans for real ventures — not hypothetical case studies but actual business ideas they want to pursue. They pitch these plans to internal panels of i-Commerce specialists and business mentors, who give genuine commercial feedback. Learners also explore fintech: how do mobile payment systems like M-Pesa work? How can blockchain reduce fraud in supply chains? How can AI predict which products will sell in a township during winter? By Grade 12, every learner has a viable micro-enterprise model they have tested with real customers.",
      },
      {
        phase: "Tertiary & Postgraduate — Running Real Businesses",
        content:
          "Tertiary students don't just study business — they run it. Through the Infinity Business Department, they manage real ventures with real P&L responsibility: hiring, firing, managing cash flow, negotiating with suppliers, and reporting to stakeholders. A team might run a financial literacy training programme for SMMEs in a township, or manage an e-commerce platform selling products from other Houses in the ecosystem. Postgraduate students lead these ventures and develop the commercial models that other Houses adopt.",
      },
    ],

    researchHub:
      "The i-Commerce Research Hub consists of 12 specialists in commercial intelligence, financial modelling, and entrepreneurial systems. Their research isn't academic — it's directly actionable. They study African market dynamics: which industries are underserved in South Africa? Where are the gaps between what communities need and what businesses currently offer? How do township SMMEs fail, and what structural changes would prevent it? They also develop financial models for new business categories that don't yet exist in the African market, and their findings are immediately used by the Infinity Business Department and shared with the Central HALL whenever a new Integrated Solution Model requires a commercial sustainability plan.",

    businessDept:
      "The i-Commerce Business Department is the financial engine of the ecosystem. It runs micro-incubators that help early-stage businesses grow from idea to revenue-generating enterprise, providing seed funding, mentorship, and market access. It offers financial intelligence consulting — helping businesses, NGOs, and government departments understand their financial health, optimise cash flow, and plan for growth. It develops fintech tools — custom mobile payment systems, budget management apps, and financial literacy platforms — that are sold to clients across the continent. It also manages e-commerce and supply-chain solutions for other Houses: if i-Engineering creates a product, i-Commerce ensures it reaches customers efficiently and profitably. The revenue from all of this flows back into the ecosystem, funding education and research.",

    centralHall:
      "No Integrated Solution Model leaves the Central HALL without passing through the commercial lens of the three i-Commerce specialists. Their role is to ask: 'Is this financially sustainable? Who will pay for it? How does it generate enough revenue to keep running after the initial funding runs out? What is the go-to-market strategy?' For example, when i-Technology designs a blockchain-based micro-loan system for small-scale farmers, i-Commerce specialists design the fee structure, the investor pitch, the risk model, and the scaling pathway from 100 farmers to 100,000. Without this commercial discipline, brilliant technology would remain a pilot project that never reaches the people who need it.",

    southAfricanRelevance:
      "South Africa has a youth unemployment rate above 60% for those aged 15–24 — one of the highest in the world. The traditional response is to train more people for jobs that don't exist. i-Commerce proposes something different: train people to create jobs. By teaching entrepreneurship as a core competency from Grade 8, by running real businesses through the Infinity Business Department, and by ensuring every innovation the ecosystem produces is commercially viable, i-Commerce is building a generation of African entrepreneurs who create economic value rather than waiting for it. The target is not just individual wealth but systemic economic transformation — more SMMEs, more employment, more tax revenue, and a South Africa that produces and exports rather than imports and consumes.",
  },

  /* ──────────────────────────────── 04 · i-Technology ─── */
  {
    slug: "technology",
    name: "Technology",
    prefix: "i-Technology",
    icon: Monitor,
    desc: "Digital systems and AI-aligned development building the infrastructure of tomorrow.",
    focus: ["Software Engineering & AI", "Cybersecurity & Networks", "Cloud Architecture", "Human-Computer Interaction"],
    business: "Software development, AI solutions, digital transformation",

    plainEnglish:
      "i-Technology is the digital spine that runs through all 12 fields. It's where coding, AI, cybersecurity, robotics, and app development live — but it's not just about building tech. It's about building technology that actually works for African communities, works offline when the power is out, and solves South African problems first.",

    overview:
      "i-Technology is the dedicated infinity-powered technology domain and the mandatory technological backbone of the entire Village of Knowledge. Every other House uses technology tools provided or validated by i-Technology. The 'i-' prefix isn't decorative — it means technology here is infinite in its application: from a Grade 8 learner building their first robot to a postgraduate engineer designing an AI system for predicting hospital demand during disease outbreaks. All technology developed in this House is built with two non-negotiable principles: it must be ethically sound, and it must work in South African conditions — offline-first, load-shedding resilient, and accessible on low-cost devices.",

    coreFocusPoints: [
      "Coding, robotics, IoT, AI/ML, cybersecurity, AR/VR, and blockchain — learners don't just learn what these technologies are; they build with them at every stage, starting with visual block-based coding and progressing to professional-level software engineering.",
      "Ethical AI and responsible technology deployment — every AI system built in this House must be tested for bias, explained in plain language to the communities it serves, and designed with privacy and fairness as core requirements, not afterthoughts.",
      "Offline-first and load-shedding-resilient design — South African technology must work when the internet is slow, when the power is off, and when devices are shared among multiple users. This constraint drives more creative and robust engineering.",
      "4IR/5IR skills for African learners — aligning with South Africa's national Coding & Robotics curriculum rollout, but going far beyond it. Every graduate of i-Technology leaves with skills that are immediately valuable in the job market or as the foundation for their own tech venture.",
    ],

    curriculum: [
      {
        phase: "Grade 8–9 — Making Technology Tangible",
        content:
          "Learners start with block-based coding using tools like Scratch, then quickly move to physical computing with micro:bit and Arduino boards. A Grade 8 project might involve building a simple device that turns on a light when a room gets too dark — basic, but it teaches the entire loop of sensing, processing, and responding that underpins all modern technology. By Grade 9, learners are building their first robots and writing simple programmes that make them navigate a maze. Every project is designed to work without internet access, because reliable connectivity cannot be assumed.",
      },
      {
        phase: "Grade 10–12 — Building Tools That Matter",
        content:
          "Python programming becomes the primary language from Grade 10. Learners build their first web applications, introductory AI classifiers (teaching a machine to identify images or predict outcomes), IoT sensor networks, and basic cybersecurity projects (understanding how attacks work so they can build defences). By Grade 12, a learner might build a fully functional low-data mobile app that helps a community submit service delivery complaints and track their resolution — a real tool for a real community partner.",
      },
      {
        phase: "Tertiary & Postgraduate — Professional Technology Development",
        content:
          "Tertiary students work on advanced AI systems, full-stack web and mobile development, blockchain applications, and enterprise cybersecurity architecture. They contribute to the Infinity Business Department from day one — building real products for paying clients. A postgraduate student might lead the development of a custom AI-powered logistics system for a distribution company, or architect the cloud infrastructure for another House's commercial platform. All work is peer-reviewed, tested, and deployed to production, not just presented as a thesis.",
      },
    ],

    researchHub:
      "The i-Technology Research Hub is a 12-person team of specialist technologists focused on frontier discovery: what will the next generation of African technology look like, and how do we build it before someone else does? They research emerging tools — testing large language models for African language support, exploring low-power AI chips that can run machine learning without electricity, investigating blockchain applications for land registry systems. Every technology they validate gets integrated into the tools used by other Houses, and every technology they reject gets rejected for a documented reason. They are the quality gatekeepers for all technology adopted across the ecosystem, preventing the adoption of tools that are expensive, fragile, or poorly suited to African conditions.",

    businessDept:
      "The i-Technology Business Department is one of the most commercially active in the ecosystem. It runs hybrid coding bootcamps — intensive, practical coding education for learners from Grade 8 through to corporate professionals who need to upskill. It develops custom software and IoT solutions for businesses and government: a municipality that needs a fault-reporting app, a farm that needs an automated irrigation monitoring system, a clinic that needs a patient-tracking tool. It also provides corporate digital transformation consulting — helping established organisations understand what technology they need, how to implement it without disrupting operations, and how to train their staff to use it. Revenue funds the House and subsidises technology access for learners who cannot afford devices or data.",

    centralHall:
      "Three i-Technology specialists in the Central HALL are the builders — they take every idea the 36-person team produces and determine what the technological architecture needs to be. When i-Science provides a data model, i-Technology builds the processing pipeline. When i-Law designs a governance framework, i-Technology builds the digital compliance system. When i-Social Sciences identifies a community need, i-Technology builds the platform that addresses it. Without i-Technology, the Central HALL would produce excellent plans that no one could implement. With it, every Integrated Solution Model is backed by a working technical blueprint, with code repositories, deployment guides, and maintenance documentation.",

    southAfricanRelevance:
      "South Africa's Department of Basic Education has committed to rolling out Coding & Robotics to all schools — but without enough qualified teachers, curriculum resources, or devices to make it work at scale. i-Technology directly addresses this gap: it trains educators, develops curriculum materials, and provides affordable hardware kits for schools. Beyond education, South Africa loses billions of rands every year to cybercrime, poor digital infrastructure, and technology that was designed for wealthy Northern Hemisphere markets and doesn't function reliably under local conditions. i-Technology builds tools that are designed for South Africa first — not adapted after the fact. The result is technology that works for the 60% of South Africans who don't have reliable internet access, not just the 10% who do.",
  },

  /* ───────────────────────────────────── 05 · i-Law ─── */
  {
    slug: "law",
    name: "Law",
    prefix: "i-Law",
    icon: Scale,
    desc: "Governance, policy, and legal frameworks ensuring alignment, compliance, and intellectual protection.",
    focus: ["Intellectual Property & Patent Law", "Corporate Governance", "Regulatory Compliance", "Policy Design & Analysis"],
    business: "Legal consulting, IP management, compliance auditing",

    plainEnglish:
      "i-Law makes sure everything this ecosystem builds is legal, ethical, and protected. It's the field that asks: 'Are we allowed to do this? Does it protect people's rights? Who owns the ideas we create?' Without i-Law, brilliant innovations could be stolen, misused, or built on shaky legal ground. With it, every solution the ecosystem produces is not just clever — it's legitimate.",

    overview:
      "i-Law is the infinity-powered version of Law, covering governance alignment, legal frameworks, policy design, and the integration of legal-tech solutions. It is one of the most critical support fields in the ecosystem because every other House operates within legal and regulatory boundaries — and those boundaries change constantly as technology evolves. i-Law doesn't just study law; it helps shape it. It works with government on policy design for emerging technologies, it protects the intellectual property produced across all 12 Houses, it ensures that AI systems and digital platforms comply with South African and international standards, and it builds legal-tech tools that make justice more accessible to communities that have historically been excluded from the legal system.",

    coreFocusPoints: [
      "Intellectual property and patent protection — every innovation produced across the 12 Houses, from a new engineering prototype to an AI algorithm, needs to be legally protected so that it benefits the ecosystem and the inventor, not someone who copies it without permission.",
      "Legal-tech integration — using AI to analyse contracts, predict legal outcomes, automate regulatory compliance, and detect bias in algorithmic decision-making. Legal work that once took weeks can be done in hours, making legal services affordable for ordinary people.",
      "Customary and constitutional law in a digital context — South Africa has a rich body of customary law that is often invisible in tech systems. i-Law works to digitise, protect, and integrate Indigenous legal systems into modern platforms, ensuring that traditional communities have legal standing in the digital economy.",
      "Ethical governance of technology — as AI, blockchain, and data systems become more powerful, they create new legal questions. Who is responsible when an AI makes a wrong medical diagnosis? Who owns the data a community generates? i-Law researches and answers these questions before they become crises.",
    ],

    curriculum: [
      {
        phase: "Senior Phase — Law as a Living System",
        content:
          "At this stage, learners discover that law is not a static set of rules — it is a living system that responds to the society it governs. They study real South African constitutional cases involving technology and privacy, and they build AI-assisted legal-aid chatbots — simple tools that can answer common legal questions in plain language. One project might involve creating an app that helps domestic workers understand their legal rights under the Basic Conditions of Employment Act, in isiZulu or Sesotho.",
      },
      {
        phase: "Grade 10–12 — Contracts, IP, and Tech Law",
        content:
          "Learners dive into intellectual property law: what can be patented? How do you protect a software algorithm? What happens when a business copies your design? They also study regulatory compliance using real South African legislation — POPIA (the data privacy law), the Companies Act, the Consumer Protection Act. Every project involves co-developing a legal framework with i-Technology, so learners understand how legal requirements get embedded into software from the beginning, not bolted on at the end.",
      },
      {
        phase: "Tertiary & Postgraduate — Practising Legal-Tech",
        content:
          "Tertiary students work on advanced applications: blockchain-based land rights systems (using distributed ledger technology to create tamper-proof property records for communal land), smart contracts (self-executing legal agreements written in code), digital evidence handling, and AI ethics regulation. Graduates enter the Infinity Business Department as practising consultants, advising other Houses and external clients on legal risk, IP strategy, and technology governance.",
      },
    ],

    researchHub:
      "The i-Law Research Hub consists of 12 legal specialists who focus on the most complex intersection of law and emerging technology. They don't just read legal journals — they publish in them, they contribute to parliamentary hearings, and they develop new legal frameworks for situations that no existing law covers. One team might spend a year researching the legal status of AI-generated work: if an AI writes a song or designs a product, who holds the copyright? Another might develop a legal protocol for community consent in AI-powered health data collection. Their research becomes the foundation for policy recommendations that i-Law submits to government, ensuring that South Africa's laws keep pace with technological change rather than scrambling to catch up.",

    businessDept:
      "The i-Law Business Department generates revenue in several ways. It provides legal consulting services to businesses, NGOs, startups, and government departments — advising on compliance, contracts, IP protection, and technology governance. It sells legal-tech tools: contract automation software that reduces legal drafting time by 80%, compliance monitoring dashboards that track regulatory changes in real time, and IP management platforms that help innovators protect and monetise their work. It also runs compliance training workshops for businesses navigating new regulations like POPIA and the Cybercrimes Act. All revenue funds the House's research and education activities, and provides the legal infrastructure that protects every piece of intellectual property produced across the entire ecosystem — including patents, trademarks, and copyrights for all 12 Houses.",

    centralHall:
      "Three i-Law specialists sit in the Central HALL as the governance guardians of every Integrated Solution Model. Before any solution is approved for deployment, i-Law verifies that it is legally compliant, that all intellectual property is properly protected, and that the rights of the communities it serves are respected. For example, when i-Technology builds an AI system to be used in public schools, i-Law checks that it complies with POPIA's rules on processing children's data, that the algorithm doesn't discriminate against learners from specific backgrounds, and that the schools using it have legally valid data processing agreements in place. These checks prevent the ecosystem from deploying solutions that, however technically brilliant, could expose communities to harm or expose the organisation to legal liability.",

    southAfricanRelevance:
      "In South Africa, access to legal services is one of the starkest inequalities in society. A large corporation can afford a team of lawyers to protect its interests; a township entrepreneur or a rural community cannot. When a mining company wants to use communal land, when a tech startup's idea is stolen by a well-funded competitor, when a domestic worker is unfairly dismissed — without affordable legal help, justice is out of reach. i-Law changes this by building AI-powered legal tools that can provide accurate, plain-language legal guidance at minimal cost, by training a new generation of legal-tech professionals who understand both code and constitution, and by developing legal frameworks that specifically protect innovation originating from African communities.",
  },

  /* ─────────────────────────────── 06 · i-African History ─── */
  {
    slug: "african-history",
    name: "African History",
    prefix: "i-History",
    icon: Scroll,
    desc: "Heritage preservation and cultural wisdom informing innovation rooted in identity and deep knowledge.",
    focus: ["Pre-Colonial Knowledge Systems", "Cultural Heritage Documentation", "Indigenous Innovation Methods", "Oral Tradition & Archival Research"],
    business: "Cultural consulting, heritage documentation, educational publishing",

    plainEnglish:
      "i-African History makes sure that as we build the future, we don't forget where we come from. It uses technology — virtual reality, AI, digital archives — to preserve African stories, traditions, and knowledge systems that risk being lost. And it brings that heritage directly into every innovation this ecosystem creates, so our solutions are rooted in who we are.",

    overview:
      "i-African History is one of the 12 core fields because the founders of Sec(t) Infinity understood something fundamental: you cannot build a genuinely African future if you don't know your African past. This field preserves, digitises, and reinterprets African historical knowledge — from pre-colonial engineering principles and agricultural systems to oral traditions, customary governance, and Indigenous medicinal knowledge. It integrates these knowledge systems with modern technology, creating new cultural products that honour the past while engaging the present. And it ensures that every solution the ecosystem produces reflects African values, identity, and ways of knowing — not a copy of a Western model with African names attached.",

    coreFocusPoints: [
      "Preservation and digitisation of African knowledge — thousands of oral stories, traditional practices, and historical records are disappearing as elders pass on. i-History uses AI transcription, digital archiving, and VR reconstruction to capture this knowledge before it is gone forever.",
      "Integration of Indigenous Knowledge Systems (IKS) with modern technology — traditional African knowledge about agriculture, medicine, water management, and governance often contains centuries of tested wisdom. i-History validates and digitises this knowledge so it can inform modern solutions alongside formal scientific research.",
      "VR/AR heritage reconstruction — imagine being able to walk through the original Great Zimbabwe, or hear a re-creation of the court of Shaka kaSenzangakhona as it might have sounded. i-History builds these experiences to make African history vivid, accessible, and educationally powerful.",
      "Decolonised research methodology — most historical research about Africa was done by foreign researchers using Western frameworks that often misrepresented or ignored African perspectives. i-History develops research methodologies that centre African voices, African sources, and African interpretive frameworks.",
    ],

    curriculum: [
      {
        phase: "Grade 8–9 — Reclaiming Our Stories",
        content:
          "Learners begin by interviewing elders in their own communities and recording stories in their home languages — Zulu, Setswana, Xhosa, Sesotho, Venda, or any of South Africa's 11 official languages. These recordings are transcribed using AI speech-to-text tools and turned into interactive digital archives that can be browsed on a phone. A Grade 9 project might create a multimedia presentation about the history of a specific neighbourhood — not from a textbook, but from the living memory of community members.",
      },
      {
        phase: "Grade 10–12 — Technology in Service of Heritage",
        content:
          "By Grade 10, learners use VR tools to reconstruct historical sites and events — building three-dimensional models of pre-colonial African settlements using archaeological evidence and oral testimony. They also use AI-assisted textual analysis to identify patterns in oral traditions across different ethnic groups, finding connections that reveal shared knowledge systems. A Grade 12 project might involve building a bilingual digital archive of a specific cultural practice — for example, the oral legal tradition of a Zulu community — that can be submitted to a national heritage database.",
      },
      {
        phase: "Tertiary & Postgraduate — Publishing and Commercialising Heritage",
        content:
          "Tertiary students work on full research projects that produce publishable outputs — journal articles, digital heritage platforms, educational curriculum materials, and VR experiences. They also work in the Infinity Business Department developing commercial heritage products: educational game platforms that teach South African history through immersive experience, cultural tourism apps that guide visitors through historically significant sites with AR overlays, and consulting services for government and cultural institutions undertaking heritage preservation projects.",
      },
    ],

    researchHub:
      "The i-African History Research Hub is a 12-person team of historians, anthropologists, linguists, and digital heritage specialists. They are the most diverse research unit in the ecosystem in terms of cultural background — deliberately recruited from across Southern Africa's language and cultural groups. They produce peer-reviewed historical research that challenges colonial narratives, recovers suppressed histories, and establishes African intellectual traditions as serious academic disciplines. Their work includes building the largest open-access digital archive of pre-colonial African engineering and agricultural systems — a resource that feeds directly into i-Engineering and i-Science research, because African knowledge of water management, crop rotation, and materials science was sophisticated long before colonial contact.",

    businessDept:
      "The i-African History Business Department generates revenue from heritage-tech products and services. It builds and sells educational VR experiences — fully immersive historical journeys through significant African events and places, licensed to schools, universities, and museums. It develops AI-powered storytelling platforms that generate culturally authentic narratives for brand campaigns, educational content, and entertainment. It provides cultural consulting services to businesses and governments — helping them understand how to engage respectfully with local communities, incorporate African design principles into products, or develop culturally accurate training materials. It also publishes educational books, audiobooks, and digital curricula — all in multiple South African languages — generating licensing revenue that funds the House's research and learner programmes.",

    centralHall:
      "Three i-African History specialists in the Central HALL serve as the cultural conscience of every Integrated Solution Model. Their role is to ask: 'Does this solution respect and reflect African identity? Does it use or build on traditional knowledge appropriately? Does it risk erasing or misrepresenting cultural practices?' When i-Engineering designs a new community infrastructure system, i-History specialists check whether the design process involved meaningful community participation, whether the system respects local land governance customs, and whether it can be maintained using locally available knowledge. This isn't just about cultural sensitivity — it's about making solutions that communities actually trust and adopt, because they see themselves in the design.",

    southAfricanRelevance:
      "The effects of colonialism and apartheid on African identity in South Africa are deep and ongoing. Education systems that taught learners to see African history as backward or irrelevant, heritage sites that were destroyed or left to decay, oral traditions that were dismissed as superstition rather than knowledge — these wounds are still felt today. i-African History is a deliberate act of repair. By placing African heritage at the centre of a cutting-edge innovation ecosystem, it signals to every young South African that their history is not a burden to overcome but a foundation to build on. By commercialising that heritage through technology, it demonstrates that African knowledge is not just culturally valuable — it is economically valuable. And by integrating it into every solution the ecosystem produces, it ensures that the future we build is unmistakably, unapologetically African.",
  },

  /* ─────────────────────────────────── 07 · i-Visual Arts ─── */
  {
    slug: "visual-arts",
    name: "Visual Arts",
    prefix: "i-Visual Arts",
    icon: Palette,
    desc: "Visual communication and design thinking that gives form to complex ideas and solutions.",
    focus: ["Graphic & Brand Design", "UI/UX & Digital Experience", "Architectural Visualization", "Motion & Multimedia Design"],
    business: "Design agency, branding services, visual production",

    plainEnglish:
      "i-Visual Arts is where complex ideas get a face. It's the field that makes everything this ecosystem builds look right, feel right, and communicate clearly to the people it serves. Without visual arts, even the best solutions would be confusing, unwelcoming, or invisible. With it, every product, platform, and publication produced here tells a clear, beautiful, culturally grounded visual story.",

    overview:
      "i-Visual Arts is the infinity-powered evolution of Visual Arts — the field that understands that people engage with what they can see, and that the visual layer of any solution is often what determines whether it gets used or ignored. It blends traditional visual disciplines (graphic design, fine art, architecture) with cutting-edge tools like generative AI, AR/VR installations, digital fabrication, and interactive media. African visual heritage — the geometric precision of Ndebele murals, the symbolic complexity of Adinkra symbols, the colour philosophy of Zulu beadwork — is treated not as decoration but as a sophisticated design system that informs every visual output this field produces.",

    coreFocusPoints: [
      "Visual communication design — designing logos, interfaces, infographics, wayfinding systems, and all the visual elements that help people understand and trust a product or service. Clarity and cultural resonance are the two non-negotiable standards.",
      "UI/UX and digital experience design — ensuring that every digital product built by i-Technology is easy to use, accessible to people with limited digital literacy, and beautiful in a way that reflects African aesthetics rather than copying Silicon Valley conventions.",
      "Generative AI and digital fabrication — using AI tools to generate visual concepts at speed, and 3D printing or CNC cutting to produce physical objects. This combination allows learners to move from idea to prototype in hours rather than weeks.",
      "African visual heritage as a design system — systematically studying and applying the visual principles embedded in African art forms to create a distinctly African design language for the 21st century — not nostalgia, but living innovation.",
    ],

    curriculum: [
      {
        phase: "Grade 8–9 — Learning to See",
        content:
          "Visual arts education often starts with 'draw this object' — i-Visual Arts starts with 'what do you want to communicate, and what is the most effective way to show it?' Grade 8 learners work on visual storytelling projects using digital tools — creating illustrated guides to their community, designing logos for fictional businesses, and building simple animations. They also study African visual traditions in depth: why does Ndebele geometric art use those specific proportions? What does the symbolism of Adinkra communicate, and how can those principles apply to modern design?",
      },
      {
        phase: "Grade 10–12 — Designing for Real Purposes",
        content:
          "By Grade 10, learners take on real design briefs — creating the visual identity for a real community project, designing the user interface for an app built by the i-Technology cohort, or producing a motion graphics sequence for a social campaign. They learn UI/UX principles by actually testing their designs with real users from the target community, iterating based on feedback. Grade 12 learners work on advanced projects involving AI-assisted design tools, AR installations, and digital fabrication — building objects and experiences that couldn't exist without technology.",
      },
      {
        phase: "Tertiary & Postgraduate — Professional Design Practice",
        content:
          "Tertiary students run real design projects through the Infinity Business Department — corporate identity for clients, product packaging, digital campaigns, and architectural visualisations. Postgraduate students lead the visual design of all Central HALL integrated solutions: every system, platform, and product the ecosystem produces needs a visual identity, a user interface, and communication materials. Postgraduate researchers also develop new AI-powered African design tools — systems that can generate design outputs in an African visual language rather than defaulting to Western aesthetics.",
      },
    ],

    researchHub:
      "The i-Visual Arts Research Hub is a 12-person team of designers, visual artists, and design researchers focused on one central question: what does a distinctly African visual language for the 21st century look like, and how do we build the tools to create it? They study African visual traditions across the continent — not just South Africa — and produce research that maps the underlying principles: geometry, symbolism, colour theory, proportion, and narrative structure. They also research the intersection of AI and visual creativity: how can generative AI be trained on African visual traditions to produce outputs that feel authentically African? Their findings feed directly into the design systems used by every other House and the products sold by the Business Department.",

    businessDept:
      "The i-Visual Arts Business Department operates as a full-service design agency. It provides corporate branding and identity design to businesses, government departments, and NGOs. It builds digital design systems — the comprehensive visual frameworks that ensure a brand looks consistent across every touchpoint from a business card to a mobile app. It produces AI-generated African art prints sold through global online platforms. It also develops NFT collections and digital creative economy products, licensing African-inspired visual assets to international brands looking for authentic design. Revenue from these services funds the House, subsidises learner access to design software and equipment, and supports the development of open-source African design tools.",

    centralHall:
      "Three i-Visual Arts specialists in the Central HALL are responsible for the design layer of every Integrated Solution Model. They ensure that when a complex technical solution is handed to a community, it comes with interfaces, materials, and experiences that the community can immediately understand and trust. When i-Science produces a health intervention system, i-Visual Arts designs the patient-facing interface in a way that is intuitive for people who have never used a smartphone. When i-Engineering installs a new water system, i-Visual Arts creates the maintenance manuals, signage, and training materials using visual communication techniques that transcend language barriers. The HALL's solutions don't just work — they communicate.",

    southAfricanRelevance:
      "South Africa's design industry is dominated by a small number of established agencies that largely serve large corporate clients with Western-influenced aesthetics. Township and rural communities are poorly served: their spaces are not designed, their products are not branded, their public information is not communicated clearly. i-Visual Arts addresses this on two levels: it trains a generation of African designers who understand African communities from the inside, and it develops African design tools that produce outputs rooted in local culture rather than importing foreign visual conventions. The result is a design industry that serves all South Africans, creates opportunities for designers from every background, and positions African visual culture as a globally valuable creative export.",
  },

  /* ───────────────────────────────── 08 · i-Creative Arts ─── */
  {
    slug: "creative-arts",
    name: "Creative Arts",
    prefix: "i-Creative Arts",
    icon: Sparkles,
    desc: "Expression, narrative, and cultural production that amplifies the voice of African innovation.",
    focus: ["Film & Documentary Production", "Creative Writing & Storytelling", "Music & Sonic Design", "Performance & Cultural Events"],
    business: "Content production, creative agency, event management",

    plainEnglish:
      "i-Creative Arts gives everything this ecosystem produces a voice, a story, and an emotional connection. Where i-Visual Arts makes things look right, i-Creative Arts makes people feel something — through music, film, storytelling, and performance. It's also a serious commercial field, producing content, events, and creative experiences that generate real revenue while carrying African culture into the global market.",

    overview:
      "i-Creative Arts is listed separately from i-Visual Arts because it covers a fundamentally different domain: the performing, narrative, and experiential arts. Where i-Visual Arts communicates through what you see, i-Creative Arts communicates through what you hear, what you feel, and what story you inhabit. It encompasses film and documentary production, creative writing and storytelling, music and sonic design, performance art, and the design of immersive experiences. All of this is amplified by technology — AI-assisted music composition, interactive narrative platforms, live performance with real-time digital effects — while remaining rooted in the deep richness of African creative tradition.",

    coreFocusPoints: [
      "African storytelling as a strategic asset — oral tradition, narrative structure, and the power of story to communicate complex ideas are refined arts in African culture. i-Creative Arts formalises these traditions and applies them to modern communication: educational content, brand storytelling, social campaigns, and documentary film.",
      "Technology-enhanced creative production — AI-assisted music composition, generative poetry, interactive theatre with real-time digital environments, and podcast production with professional audio engineering. Technology doesn't replace the artist — it removes the technical barriers that prevent talented creators from realising their vision.",
      "The creative economy as an industry — South Africa's creative sector contributes billions to GDP and employs hundreds of thousands of people. i-Creative Arts teaches learners to operate professionally in this industry: to pitch, to negotiate contracts, to build audiences, and to turn their creative work into sustainable income.",
      "Cross-field creative collaboration — every solution the ecosystem produces needs a narrative layer. i-Creative Arts collaborates with i-Social Sciences to create community engagement campaigns, with i-Education to develop compelling learning content, and with i-History to bring African heritage alive for modern audiences.",
    ],

    curriculum: [
      {
        phase: "Grade 8–9 — Finding Your Voice",
        content:
          "Learners start with what they know: the stories they have heard from family, the music they grew up with, the performances they have seen at cultural events. They use simple technology — voice recorders, free video editing apps, open-source music software — to produce their first creative outputs: a short documentary about their neighbourhood, a poem turned into a music video, an original song. The emphasis is not on technical perfection but on authentic expression and on understanding that what you have to say is worth saying.",
      },
      {
        phase: "Grade 10–12 — Producing for Real Audiences",
        content:
          "By Grade 10, learners work with professional tools and real audiences. They produce short films submitted to youth film festivals, compose original music that is released on streaming platforms, write creative non-fiction published in community newsletters, and design and perform original theatrical productions. They also begin studying the business side of creativity: how do you get a music publishing deal? How do you pitch a documentary idea to a broadcaster? How do you protect your creative work legally (in collaboration with i-Law)?",
      },
      {
        phase: "Tertiary & Postgraduate — Professional Creative Practice",
        content:
          "Tertiary students work through the Business Department on real commissions: producing branded content for corporate clients, creating educational multimedia for i-Academia, writing and directing documentary films about South African communities, composing soundscapes for immersive VR experiences developed by i-Visual Arts. Postgraduate students lead these commissions as creative directors and producers, developing the operational systems that allow i-Creative Arts to deliver professional-quality creative work consistently and commercially.",
      },
    ],

    researchHub:
      "The i-Creative Arts Research Hub focuses on the intersection of African creative tradition, technology, and the creative economy. One team might spend a year studying the structural principles of African oral narrative — how do master storytellers from different cultures build tension, establish moral frameworks, and transmit knowledge? How can these principles be applied to the design of educational games or documentary films? Another team might research the market for African-language music globally — which platforms, which distribution models, and which partnership structures work best for emerging African artists. Their research feeds directly into the Business Department and into the creative frameworks used across the ecosystem.",

    businessDept:
      "The i-Creative Arts Business Department is a full-service creative agency and production house. It produces branded content for corporate and government clients — corporate films, social media campaigns, explainer videos, and event experiences. It manages creative workshops and training programmes for schools, community organisations, and businesses looking to develop their creative communication capacity. It produces and distributes original creative work — films, music albums, literary anthologies — that generates royalty income and builds the ecosystem's creative reputation globally. It also designs and manages large-scale cultural events — exhibitions, performances, and festivals — that generate ticket and sponsorship revenue while creating platforms for African creative work to reach new audiences.",

    centralHall:
      "Three i-Creative Arts specialists in the Central HALL ensure that every Integrated Solution Model communicates in a way that moves people. Technical solutions that are not communicated effectively are ignored, misunderstood, or feared. When the HALL designs a community health intervention, i-Creative Arts specialists develop the community engagement story: the public campaign, the testimonial film, the participatory performance that brings the community into the solution rather than having it imposed on them. This is not marketing — it is the difference between a solution that gets adopted and one that sits on a shelf.",

    southAfricanRelevance:
      "South Africa has extraordinary creative talent — its music, film, literature, and performance arts have achieved global recognition. But the infrastructure that supports creative careers in South Africa remains fragile and inaccessible to most talented people, particularly those from township and rural backgrounds. i-Creative Arts builds that infrastructure: training, production facilities, business skills, distribution networks, and legal protection — everything a South African creative needs to build a sustainable career. At the same time, it uses the power of African storytelling to support the broader work of the ecosystem: communicating complex solutions in ways that communities understand, creating cultural products that celebrate African identity, and building the soft power that positions Africa as a source of creative excellence for the world.",
  },

  /* ─────────────────────────────── 09 · i-Social Sciences ─── */
  {
    slug: "social-sciences",
    name: "Social Sciences",
    prefix: "i-Social",
    icon: Globe,
    desc: "Understanding societies and human behavior to design solutions that truly serve communities.",
    focus: ["Sociology & Community Development", "Psychology & Behavioral Science", "Political Economy", "Urban & Rural Planning"],
    business: "Social research, community consulting, impact assessment",

    plainEnglish:
      "i-Social Sciences makes sure everything we build actually helps people — real people, in real communities, with real needs. It studies how societies work, why people behave the way they do, and what changes genuinely improve lives. Without it, technology and innovation can easily make things better for some while making things worse for others. i-Social Sciences makes sure that doesn't happen here.",

    overview:
      "i-Social Sciences is the infinity-powered evolution of Social Sciences — sociology, psychology, political science, anthropology, economics, and urban planning — infused with data science, predictive analytics, and AI for social good. It is the field that asks the most human questions: who is this solution for? Does it actually improve their lives? Who gets left out? What are the unintended consequences? These questions are not soft or optional — they are as rigorous and as essential as any engineering calculation. Every solution produced by the ecosystem must pass through the social sciences lens before it reaches deployment.",

    coreFocusPoints: [
      "Community needs assessment and human-centred design — before any solution is designed, i-Social Sciences investigates who it is for, what their actual needs are (not just what we assume), what barriers might prevent them from using it, and how their lives will change if it works.",
      "Social impact measurement — defining what 'success' means in human terms and measuring it with the same rigour as financial returns. Did the intervention reduce hunger? Did it improve school attendance? Did it reduce gender-based violence? i-Social Sciences builds the evidence base.",
      "Predictive social analytics — using data science to anticipate social trends before they become crises: where will youth unemployment spike in two years? Which communities are most vulnerable to climate-induced food insecurity? This foresight allows the ecosystem to act proactively rather than reactively.",
      "Ethical AI and algorithmic accountability — AI systems make decisions that affect people's lives (loan approvals, medical diagnoses, hiring recommendations). i-Social Sciences researches and documents how these systems can perpetuate or amplify social inequalities, and develops frameworks for making them fair.",
    ],

    curriculum: [
      {
        phase: "Grade 8–9 — Understanding the Community You Live In",
        content:
          "Learners begin by studying their own community as a social system: who has power, who is excluded, how resources are distributed, what the dominant narratives are. They conduct simple surveys and interviews, and use basic data visualisation tools to present their findings. A typical project might map service delivery gaps in a township — which streets have no street lights, which households have no clean water — and present the findings to a local stakeholder. This teaches learners that social research is not just academic; it is a tool for advocacy and change.",
      },
      {
        phase: "Grade 10–12 — Applied Social Research",
        content:
          "By Grade 10, learners work with more sophisticated research tools: structured interviews, focus groups, quantitative surveys with statistical analysis, and predictive modelling. They work with real community partners on real social challenges: co-designing a mental health support programme for adolescents, building a data model that predicts dropout rates in under-resourced schools, or evaluating the social impact of an existing NGO intervention. Every project produces a formal impact report that the community partner can actually use.",
      },
      {
        phase: "Tertiary & Postgraduate — Professional Social Research Practice",
        content:
          "Tertiary students manage full research projects: ethics applications, data collection, analysis, and reporting to real clients. They also develop social impact measurement frameworks — the systems by which the entire ecosystem evaluates whether its solutions are working. Postgraduate students specialise in areas like urban planning with data science, political economy and policy design, or computational social science — using machine learning to analyse social patterns at scale. Their work directly informs the Central HALL's development and evaluation of Integrated Solution Models.",
      },
    ],

    researchHub:
      "The i-Social Sciences Research Hub is a 12-person team of social researchers who are the ecosystem's conscience. They monitor the social impacts of every major initiative, study the communities the ecosystem serves, and produce research that challenges the organisation to do better. They might spend a year conducting longitudinal research on the social effects of Sec(t) Academia on learner wellbeing and family dynamics — not just test scores, but genuine changes in confidence, aspiration, and community connection. They also research the big structural questions: what policies would most effectively reduce inequality in South Africa? What social conditions enable innovation to flourish in township economies? Their findings feed into policy advocacy and the design of every solution the HALL produces.",

    businessDept:
      "The i-Social Sciences Business Department provides research and consulting services to clients who need to understand and engage with communities effectively. It conducts social impact assessments for government infrastructure projects — required by law before major developments can proceed. It provides community engagement consulting for corporations, NGOs, and development organisations navigating complex social dynamics. It develops and sells social analytics tools: platforms that help organisations monitor community sentiment, track the social impact of their programmes, and identify early warning signs of social friction before it becomes conflict. Revenue from these services funds the House and contributes to the ecosystem's broader social accountability systems.",

    centralHall:
      "Three i-Social Sciences specialists sit at the centre of every Central HALL collaboration as the human-impact validators. They ask the hardest questions at every stage: who benefits from this solution? Who is excluded? What happens to the people who currently make a living from the problem we are solving? When i-Engineering designs a new agricultural technology, i-Social Sciences conducts the community impact assessment: will it displace farm workers? Will it genuinely improve farmer incomes? Are the farmers being consulted in the design process, or being designed for? These questions sometimes slow the process down — but they prevent the ecosystem from deploying solutions that cause more harm than good.",

    southAfricanRelevance:
      "South Africa has the highest Gini coefficient — a measure of inequality — of any major economy in the world. Its cities are among the most spatially segregated on earth, a legacy of apartheid urban planning. Its social fabric is strained by high rates of gender-based violence, substance abuse, mental health crises, and intergenerational trauma. These are not problems that technology alone can solve. They require deep understanding of human behaviour, social systems, and community dynamics — precisely what i-Social Sciences provides. By integrating social science into every solution the ecosystem builds, Sec(t) Infinity ensures that it is building a better South Africa for all South Africans, not just a more technologically advanced one for those who are already doing well.",
  },

  /* ─────────────────────────────────── 10 · i-Innovation ─── */
  {
    slug: "innovation",
    name: "Innovation",
    prefix: "i-Innovation",
    icon: Lightbulb,
    desc: "Invention and breakthrough methodologies driving the creation of entirely new solution categories.",
    focus: ["Design Thinking & Ideation", "Rapid Prototyping", "Technology Transfer", "Innovation Lab Facilitation"],
    business: "Innovation consulting, ideation workshops, incubation services",

    plainEnglish:
      "i-Innovation is where completely new ideas are born. While other fields refine what already exists, this field asks: what has never been tried before? Learners and researchers here are trained to push past obvious answers, combine ideas from completely different fields, and invent things that don't yet exist — then figure out how to make them real and bring them to market.",

    overview:
      "i-Innovation & Invention is the primary engine of novelty in the entire 12-House ecosystem. Every other field deepens and applies existing knowledge — i-Innovation creates knowledge that is genuinely new. It is the field of breakthrough thinking, radical invention, and structured creativity. It uses design thinking, rapid prototyping, patent development, and technology transfer methodologies to turn raw ideas into tangible, patentable, commercially viable inventions. The Goldilocks Rule is central here: innovation challenges are designed to be optimally difficult — hard enough to stretch creativity to its limit, but not so impossible that learners give up. This precise calibration of challenge is what produces genuine breakthrough thinking rather than incremental improvement.",

    coreFocusPoints: [
      "Structured creativity and invention methodology — invention is not random inspiration; it is a disciplined process of identifying problems, generating unusual combinations of existing knowledge, testing ideas rapidly, and iterating until something works. i-Innovation teaches this process systematically.",
      "Cross-field invention — the most powerful innovations come from combining knowledge from fields that don't normally talk to each other. A solution that combines engineering, social sciences, and African history might produce something that no single field could have conceived alone. i-Innovation is specifically designed to create these collisions.",
      "Rapid prototyping and validation — ideas that remain ideas are worthless. i-Innovation insists that every concept be turned into a physical or digital prototype within days, tested with real users, and either validated or discarded based on evidence. Speed of learning matters more than polish.",
      "Technology transfer and commercialisation — an invention that isn't used doesn't change the world. i-Innovation includes the process of taking a working prototype and turning it into a product or service that reaches the people who need it: patent filing, licensing negotiations, partnership development, and go-to-market strategy.",
    ],

    curriculum: [
      {
        phase: "Grade 10–12 — Learning to Invent",
        content:
          "Innovation can be taught, and the earlier it starts, the better. Learners from Grade 10 are given structured 'invention challenges' — problems that require combining knowledge from at least three different fields to solve. An example challenge: 'Design a low-cost system that allows a rural clinic to store vaccines reliably during an eight-hour power outage, using only materials available within 50km of the clinic.' The constraint is deliberate — it forces creative thinking. Learners document their invention process, build and test physical prototypes, and present their solutions to expert panels who give genuine, rigorous feedback.",
      },
      {
        phase: "Senior Innovation Projects",
        content:
          "Senior learners take on self-directed invention projects: they identify a problem they care about, define the invention challenge, research existing solutions, develop a novel approach, prototype it, and submit a patent application if the invention is sufficiently original. The Kaizen philosophy applies here: the first prototype is never the final answer. Learners iterate, often 10 or 15 times, learning from each failure. By the end of this phase, every learner has a physical or digital prototype of something that didn't exist when they started.",
      },
      {
        phase: "Tertiary & Postgraduate — Professional Innovation Practice",
        content:
          "Tertiary students work as innovation facilitators — running design thinking workshops for businesses, government departments, and community organisations that are stuck on a problem. Postgraduate students lead the innovation lab within the Infinity Business Department, managing a portfolio of early-stage inventions from initial concept through to commercial deployment. They also mentor the next cohort of inventors, transferring the craft of structured creativity to the next generation.",
      },
    ],

    researchHub:
      "The i-Innovation Research Hub is a 12-person team of professional inventors — people who spend their entire working lives generating and testing radical new ideas. Their research isn't about studying other people's inventions; it's about producing their own. They operate with unusually long time horizons — a single research project might run for three years before producing a validated invention — because genuinely new ideas cannot be rushed. They maintain a portfolio of between 30 and 50 active invention projects at any time, at various stages of development. When a project fails (and many do), they document why and add that knowledge to the ecosystem's learning base. When a project succeeds, they immediately work to protect it legally (with i-Law) and commercialise it (with i-Commerce).",

    businessDept:
      "The i-Innovation Business Department runs a full-scale innovation incubator — supporting early-stage startups with space, mentorship, legal support, market access, and seed funding. It licenses patented inventions to businesses under commercial agreements, generating royalty income. It provides innovation consulting services: working with established organisations to identify breakthrough opportunities, run structured invention processes, and develop intellectual property strategies. It also runs innovation workshops for schools, corporates, and government — providing the tools and facilitation to unlock creative thinking in any team. Revenue from all of these services funds the House and subsidises the long-term invention projects that require years to develop but have the potential to transform entire industries.",

    centralHall:
      "Three i-Innovation specialists in the Central HALL have a specific mandate: they challenge every Integrated Solution Model to be more original. When the 36 specialists converge on a solution, there is a natural tendency to reach for familiar approaches — to build on what is known. i-Innovation specialists push back, asking: 'What if we designed this completely differently? What would an inventor from i-African History suggest? What would a child suggest? What would the most unconventional answer be?' This productive disruption prevents the HALL from producing solutions that are competent but forgettable, and pushes it toward solutions that are genuinely surprising, patentable, and capable of changing how the world works.",

    southAfricanRelevance:
      "South Africa is not yet known as a hub of world-class invention — but it should be. The country has extraordinary human potential, urgent unsolved problems, and a cultural tradition of improvisation and creative problem-solving (what is called 'ukushaya umkhonto' in Zulu — striking with a spear of the mind). i-Innovation is the field that turns this latent capacity into structured, commercially viable, globally competitive invention. Its goal is to produce South African inventions that are patented, exported, and recognised as contributions to global knowledge — not because South Africa needs to prove itself, but because the world genuinely needs the solutions that an African perspective on invention uniquely produces.",
  },

  /* ───────────────────────────── 11 · i-Research & Development ─── */
  {
    slug: "research-development",
    name: "Research & Dev",
    prefix: "i-R&D",
    icon: FlaskConical,
    desc: "Applied research and product development translating discoveries into deployable solutions.",
    focus: ["Applied Research Programs", "Product Development Pipelines", "Testing & Quality Assurance", "Scalability Engineering"],
    business: "R&D partnerships, product development, testing services",

    plainEnglish:
      "i-R&D is the field that takes a brilliant idea and puts it through a rigorous process to make sure it actually works before it reaches the people it's meant to help. It's the bridge between 'we think this will work' and 'we have tested this extensively and it works reliably under real conditions'. Every solution this ecosystem produces passes through i-R&D's validation process.",

    overview:
      "i-Research & Development is the infinity-powered field dedicated to the systematic validation, development, and scaling of new knowledge and technologies. While i-Innovation creates ideas and i-Science discovers new truths, i-R&D takes those outputs and builds the disciplined process that turns them into things that work reliably at scale in the real world. It operates across all 12 Houses — coordinating and quality-controlling the research activities of every field — while also running its own specialised applied research projects that bridge multiple domains. Without i-R&D, the ecosystem would produce brilliant ideas that fail in the field because they were never properly tested. With it, every deployment is backed by a documented evidence base and a validated development pipeline.",

    coreFocusPoints: [
      "Research design and methodology — developing the scientific rigour behind every investigation. Before a single piece of data is collected, i-R&D establishes what question is being answered, how it will be answered, what evidence would prove or disprove the hypothesis, and how to ensure the results are replicable.",
      "Systematic product development pipelines — taking a validated idea through a structured sequence: proof of concept → working prototype → pilot deployment → iterative improvement → scale-ready version. Each stage has specific criteria that must be met before proceeding, preventing resources being wasted on ideas that won't work.",
      "Testing, quality assurance, and stress testing — every product or system produced by the ecosystem is tested to failure before deployment. i-R&D designs the tests that reveal failure modes, documents them, and works with the relevant field to fix them. A solution that hasn't failed in testing hasn't been tested properly.",
      "Scalability engineering — a solution that works for 100 people might not work for 100,000. i-R&D investigates and resolves the scaling challenges before they become crises: the database that can't handle the load, the supply chain that can't deliver at volume, the training programme that doesn't translate from facilitator-led to self-directed.",
    ],

    curriculum: [
      {
        phase: "Grade 10–12 — Learning the Research Process",
        content:
          "Learners are introduced to the full research cycle: literature review (what do we already know?), hypothesis formulation (what do we think is true?), research design (how will we test it?), data collection, analysis, and conclusion. Every project must produce a methodology document that another person could follow to replicate the research — this standard of replicability is introduced early and maintained throughout. A Grade 12 research project might investigate whether a specific teaching method improves mathematical performance among learners with inconsistent school attendance, using a controlled comparison group.",
      },
      {
        phase: "Tertiary — Applied Research in Real Contexts",
        content:
          "Tertiary students manage complete applied research projects tied to real House challenges. They conduct feasibility studies for new Business Department products, validate engineering prototypes under field conditions, and evaluate the effectiveness of curriculum innovations in i-Academia. The emphasis shifts from learning how to research to actually producing research that matters: findings that change decisions, improve products, and contribute to the body of knowledge that the ecosystem uses to guide its work.",
      },
      {
        phase: "Postgraduate — Leading the Research Ecosystem",
        content:
          "Postgraduate students join the 12-person R&D Research Hub and take on the most complex, multi-year research projects in the ecosystem. They also serve as research quality controllers — reviewing and validating research conducted by other Houses to ensure it meets the ecosystem's standards. A postgraduate project might involve developing a new methodology for assessing the long-term social impact of technology deployment in low-resource communities — a piece of research that, once published, becomes a reference standard for the entire development sector.",
      },
    ],

    researchHub:
      "The i-R&D Research Hub is the most collaborative research unit in the ecosystem, because its mandate is explicitly cross-field. These 12 specialists don't confine themselves to a single discipline — they are skilled in research methodology across science, engineering, social sciences, commerce, and technology. They sit alongside every other House's research hub as quality advisors, reviewing research designs, challenging assumptions, and ensuring that every research output meets publishable standards. They also run their own cross-field projects: for example, a multi-year study on the social, economic, and environmental impacts of deploying solar micro-grids in three different South African community types would involve i-Science, i-Engineering, i-Commerce, and i-Social Sciences — with i-R&D designing and managing the overall research framework.",

    businessDept:
      "The i-R&D Business Department provides contract research and development services to external clients: feasibility studies for new products and technologies, product validation testing, technology scouting (identifying and evaluating emerging technologies relevant to a client's business), and full R&D project management. It also provides research quality certification — a formal validation service where external organisations can have their research methodology and findings reviewed against the ecosystem's rigorous standards, receiving a certification that their work is credible and replicable. This is particularly valuable for NGOs and social enterprises that need to demonstrate research credibility to funders. Revenue funds the 144 researchers across all 12 Houses and subsidises the learner research programmes.",

    centralHall:
      "Three i-R&D specialists hold the most important quality assurance role in the Central HALL: nothing is approved for deployment without passing through their validation process. When the 36 specialists produce an Integrated Solution Model, i-R&D designs and runs the pilot study that tests whether it works under real conditions, documents what fails and why, and specifies the changes needed before the solution reaches full deployment. They also establish the evidence standard that the solution's impact will be measured against after deployment — ensuring that the ecosystem can honestly say whether its solutions are making a measurable difference, and learn from both successes and failures.",

    southAfricanRelevance:
      "South Africa spends significant public money on social programmes and development initiatives, many of which have limited impact because they were never properly researched or evaluated. International donor funding supports projects that work in other countries but are deployed in South Africa without adequate contextualisation or testing. i-R&D addresses this by establishing a South African standard for solution validation — one that is rigorous enough to satisfy international research standards but grounded in African contexts and community realities. Every solution the ecosystem deploys is accompanied by a publicly accessible research report documenting what was tested, how, and with what results — building public trust and contributing to the growing body of evidence about what genuinely improves lives in South Africa.",
  },

  /* ─────────────────────────────── 12 · i-Strategic Design ─── */
  {
    slug: "strategic-design",
    name: "Strategic Design",
    prefix: "i-Strategy",
    icon: Target,
    desc: "Systems architecture and strategic planning orchestrating multidisciplinary collaboration.",
    focus: ["Systems Architecture", "Strategic Foresight & Planning", "Organizational Design", "Knowledge Management"],
    business: "Strategy consulting, systems design, organizational development",

    plainEnglish:
      "i-Strategic Systems Design is the field that holds everything together. It looks at the big picture — how all 12 Houses connect, how the entire ecosystem functions as one coherent system, and how every solution fits into a long-term strategy for transforming Africa. Think of it as the architect of the architecture itself: it doesn't just design buildings; it designs the city those buildings exist in.",

    overview:
      "i-Strategic Systems Design is the capstone field of the 12-House village — the 12th field that brings all the others into coherent alignment. It covers high-level systems architecture, strategic planning, organisational design, and knowledge management. Where every other field produces deep specialist expertise, i-Strategic Systems Design produces the frameworks that allow those specialists to work together without losing their individual depth. It is the field that answers the question: 'We have 12 extraordinary Houses, 144 researchers, thousands of learners, and a Central HALL that can synthesise all of it — how do we ensure that the whole is genuinely greater than the sum of its parts?' The Divine Triangle of Success — Deep Work, Kaizen, and the Goldilocks Rule — is the philosophical foundation that i-Strategic Systems Design operationalises across the entire ecosystem.",

    coreFocusPoints: [
      "Systems thinking and architecture — the ability to see not just individual components but the relationships between them. A change in i-Commerce affects i-Technology which affects i-Engineering which affects the Central HALL. i-Strategic Systems Design maps these dependencies and manages them consciously.",
      "Strategic foresight and long-term planning — thinking 5, 10, and 20 years ahead. What will South Africa's most pressing challenges be in 2035? What capabilities does the ecosystem need to develop now in order to address them then? i-Strategy ensures the ecosystem is always working toward a destination, not just reacting to today's problems.",
      "Organisational design and governance — designing the systems and structures that allow 12 independent Houses, thousands of learners, hundreds of business clients, and a Central HALL to function together without collapsing into chaos. Clear roles, clear accountability, clear communication pathways, and clear decision-making authority.",
      "Knowledge management — ensuring that everything the ecosystem learns is captured, organised, accessible, and applied to future work. When a solution fails, why it failed is documented. When a solution succeeds, why it succeeded is studied and replicated. Knowledge doesn't walk out the door when a person leaves — it lives in the system.",
    ],

    curriculum: [
      {
        phase: "Senior Phase — Understanding Systems",
        content:
          "Before you can design systems, you have to see them. Senior learners study real-world examples of complex systems — how a city's water supply works, how a hospital manages patient flow, how a national electricity grid balances supply and demand. They learn to draw system maps: visual representations of all the components in a system and how they interact. Then they apply systems thinking to design challenges: 'Design a school that functions well even when teachers are absent, electricity is unreliable, and some learners haven't eaten today.' The constraint isn't pessimism — it's realism, and it produces more robust, more human-centred designs.",
      },
      {
        phase: "Tertiary — Designing Frameworks for Collaboration",
        content:
          "Tertiary students work on the design challenges that the ecosystem itself faces: how do you create a governance structure for 12 Houses that keeps each one autonomous but prevents them from working at cross-purposes? How do you design a knowledge management system that captures research findings in a way that is searchable and useful to practitioners in very different fields? These are not hypothetical exercises — students are working on real organisational challenges of the Sec(t) Infinity ecosystem, and their solutions are evaluated and sometimes adopted.",
      },
      {
        phase: "Postgraduate — Strategic Leadership at Scale",
        content:
          "Postgraduate students in i-Strategic Systems Design are the architects of the ecosystem's future. They develop the 10-year strategic plans, design the frameworks that guide the expansion of the model to new cities and countries, and lead the evaluation of the ecosystem's overall effectiveness. They work directly with the founders and directors, applying the most advanced systems thinking methodologies — systems dynamics, scenario planning, complexity theory — to the most consequential questions the organisation faces. Their work doesn't stay internal: it becomes the blueprint for how a genuinely African model of multidisciplinary innovation can be scaled.",
      },
    ],

    researchHub:
      "The i-Strategic Systems Design Research Hub is the most unusual research unit in the ecosystem: its subject of study is the ecosystem itself. These 12 specialists are organisational scientists — researchers who study how complex, multidisciplinary organisations function, fail, and thrive. They monitor the ecosystem's performance across every dimension: research output quality, business revenue, learner outcomes, community impact, staff wellbeing, and cultural health. They identify emerging problems before they become crises, study what is working exceptionally well and why, and continuously refine the frameworks, processes, and structures that hold the whole system together. They also conduct external research on comparable organisations globally, bringing back lessons from the world's most effective multidisciplinary innovation ecosystems — from MIT Media Lab to African-based social enterprises — and adapting what is relevant to the South African context.",

    businessDept:
      "The i-Strategic Systems Design Business Department offers high-level strategic consulting and organisational design services to external clients: government departments trying to redesign service delivery systems, corporates undergoing major transformation, universities restructuring their research frameworks, and large NGOs trying to coordinate across multiple programme areas. It provides systems architecture consulting — helping organisations understand the systemic causes of the problems they are experiencing, rather than treating symptoms. It also develops and licenses the strategic frameworks the ecosystem has developed — knowledge management systems, governance structures, cross-functional collaboration protocols — as commercial products that other organisations can adopt. This generates significant revenue while spreading the ecosystem's approach to systemic thinking more broadly.",

    centralHall:
      "Three i-Strategic Systems Design specialists play the final and most critical role in the Central HALL. When the 36 specialists have worked for weeks or months to develop an Integrated Solution Model — bringing together science, engineering, commerce, technology, law, history, arts, and social sciences into a unified response to a complex challenge — it is the i-Strategic Systems Design specialists who are responsible for the final synthesis. They take all the contributions, resolve the tensions between different approaches, ensure the solution is internally coherent and strategically aligned, and produce the final Integrated Solution Model document: the blueprint that goes to implementation. Without this final synthesis, the HALL would produce a collection of perspectives rather than a unified solution.",

    southAfricanRelevance:
      "South Africa's most urgent challenges — inequality, unemployment, energy insecurity, spatial segregation, educational dysfunction — are not single-domain problems. They are systemic problems that require systemic solutions. Yet the country's policy and institutional architecture typically addresses them in silos: a department of education that doesn't talk to a department of labour, an energy regulator that doesn't consult urban planners, a technology agency that doesn't engage with social scientists. i-Strategic Systems Design exists to challenge and change this fragmentation. By training a generation of systems thinkers who understand how complex South African challenges are connected, and by demonstrating through the ecosystem's own work that integrated, cross-disciplinary solutions produce better outcomes than siloed interventions, i-Strategic Systems Design is making the case — through evidence, not just argument — that systems thinking is not a luxury but a necessity for a country trying to build a better future.",
  },
];

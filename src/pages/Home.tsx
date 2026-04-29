
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroScene from "@/components/HeroScene";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Code,
  Cpu,
  PaintBucket,
  ChevronRight,
  MonitorSmartphone,
  Database,
  BrainCircuit,
  Terminal,
  ShieldCheck,
  Gauge,
  Rocket,
  Sparkles,
  Wallet,
  Puzzle,
  Workflow,
  ClipboardList,
  Users,
  Wrench,
  CheckCircle2,
  HelpCircle,
  Calendar,
  Calculator
} from "lucide-react";

const SITE_URL = "https://devgenx.vercel.app";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DevGenX",
  "alternateName": "DevGenX - AI & Software Development Agency NYC",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "image": `${SITE_URL}/og-image.png`,
  "description": "Enterprise AI automation, SaaS platform development, and custom software solutions for New York businesses. React.js, Node.js, Python — building intelligent systems that scale to millions of users.",
  "telephone": "+923434364680",
  "email": "devgenxai@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "New York" },
    { "@type": "City", "name": "Manhattan" },
    { "@type": "City", "name": "Brooklyn" },
    { "@type": "City", "name": "Queens" }
  ],
  "priceRange": "$$$",
  "openingHours": "Mo-Fr 09:00-18:00",
  "sameAs": [
    "https://www.linkedin.com/in/-alijawad/",
    "https://github.com/Jawa090"
  ],
  "serviceType": [
    "AI Automation",
    "SaaS Development",
    "Enterprise Software Development",
    "Data Engineering",
    "API Development",
    "UI/UX Design"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Who owns the code?", "acceptedAnswer": { "@type": "Answer", "text": "You do. We hand off repos, infra configs, and designs on completion." } },
    { "@type": "Question", "name": "How do we communicate?", "acceptedAnswer": { "@type": "Answer", "text": "Weekly demos + Slack/Email. Shared board for backlog and progress." } },
    { "@type": "Question", "name": "What about revisions?", "acceptedAnswer": { "@type": "Answer", "text": "Built into sprints; changes outside scope are estimated transparently." } },
    { "@type": "Question", "name": "Can you work with our stack?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We adapt to your tooling and conventions while keeping quality bars." } },
    { "@type": "Question", "name": "Do you handle hosting?", "acceptedAnswer": { "@type": "Answer", "text": "We can set up cloud infra or hand off ready-to-deploy artifacts." } },
    { "@type": "Question", "name": "How fast can we start?", "acceptedAnswer": { "@type": "Answer", "text": "Usually within a week after scope confirmation." } }
  ]
};

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      icon: <BrainCircuit size={40} />,
      title: "AI Automation & Integration",
      description:
        "Custom AI solutions including ChatGPT integrations, intelligent document processing, workflow automation, and ML-powered analytics. Reduce operational costs by 40% with intelligent automation.",
    },
    {
      icon: <Code size={40} />,
      title: "Large-Scale SaaS Platforms",
      description:
        "Enterprise SaaS applications built to handle millions of users. Multi-tenant architecture, subscription management, analytics dashboards, and API integrations - everything you need to scale.",
    },
    {
      icon: <Cpu size={40} />,
      title: "Custom Enterprise Software",
      description:
        "Tailored business applications including CRM systems, ERP solutions, inventory management, and internal tools. Built with modern tech stacks (React, Node.js, Python) for maximum flexibility.",
    },
    {
      icon: <Database size={40} />,
      title: "Data Engineering & Analytics",
      description:
        "Business intelligence platforms, real-time analytics dashboards, ETL pipelines, and data warehousing. Turn your data into competitive advantage with actionable insights.",
    },
    {
      icon: <Terminal size={40} />,
      title: "API Development & Microservices",
      description:
        "High-performance RESTful APIs and microservices architecture. Built with Node.js, Python (Django/FastAPI), and GraphQL. Designed for scalability, security, and sub-200ms response times.",
    },
    {
      icon: <PaintBucket size={40} />,
      title: "UI/UX Design & Branding",
      description:
        "Conversion-optimized interfaces backed by user research. Complete design systems, brand identity, and marketing assets that drive engagement and increase conversion rates by 35%+.",
    },
  ];

  const differentiators = [
    {
      icon: <ShieldCheck className="text-white" size={28} />,
      title: "Security First",
      description: "OWASP compliance, dependency scanning, and proper auth. Your app won't get hacked on our watch."
    },
    {
      icon: <Gauge className="text-neon-blue" size={28} />,
      title: "Actually Fast",
      description: "Sub-200ms API responses and 90+ Lighthouse scores. We measure performance, not just promise it."
    },
    {
      icon: <Rocket className="text-neon-blue" size={28} />,
      title: "AI That Works",
      description: "Custom ChatGPT integrations, vector search, and ML models that actually solve business problems."
    },
    {
      icon: <Puzzle className="text-white" size={28} />,
      title: "Clean Code",
      description: "TypeScript, proper testing, and documentation. Your next developer won't hate us."
    },
    {
      icon: <Wallet className="text-white" size={28} />,
      title: "No Surprises",
      description: "Fixed quotes, weekly demos, and transparent pricing. You know exactly what you're paying for."
    },
    {
      icon: <Sparkles className="text-neon-blue" size={28} />,
      title: "Converts Better",
      description: "UI/UX based on real user data, not design trends. Higher conversion rates guaranteed."
    }
  ];

  const processSteps = [
    {
      icon: <Workflow className="text-neon-blue" size={22} />, 
      title: "Discovery",
      desc: "Clarify goals, constraints, metrics. Define success and risks early."
    },
    {
      icon: <ClipboardList className="text-white" size={22} />, 
      title: "Solution Design",
      desc: "Architecture, data models, wireframes, and acceptance criteria."
    },
    {
      icon: <Users className="text-neon-blue" size={22} />, 
      title: "Iterative Build",
      desc: "Weekly demos, code reviews, and tight feedback loops."
    },
    {
      icon: <Wrench className="text-white" size={22} />, 
      title: "QA & Hardening",
      desc: "Perf budgets, security checks, and reliability tests."
    },
    {
      icon: <CheckCircle2 className="text-neon-blue" size={22} />, 
      title: "Launch",
      desc: "Rollout plan, monitoring, and handover documentation."
    }
  ];

  const portfolioItems = [
    {
      title: "ContractorHub",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
      description: "Directory + lead-gen platform for contractors with marketing tools.",
      liveUrl: "https://contractorhub.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "EstimatingHub",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      description: "Construction estimating portal with streamlined quote workflows.",
      liveUrl: "http://estimatinghub.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "Paradise Estimating",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
      description: "Estimating services site with conversion-focused UI and forms.",
      liveUrl: "http://paradiseestimating.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "DecExperts",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
      description: "Specialist services platform with booking and content modules.",
      liveUrl: "https://decexperts.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "ContractorList",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
      description: "Curated contractor directory with search and contact flows.",
      liveUrl: "http://contractorlist.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "3R eMotors",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1200&auto=format&fit=crop",
      description: "Automotive brand site with product catalog and inquiries.",
      liveUrl: "https://3remotors.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "BitWords",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
      description: "Digital services company website with multi‑service offerings.",
      liveUrl: "https://bitwords.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "FusionCortex",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
      description: "Tech solutions site highlighting engineering and AI capabilities.",
      liveUrl: "https://fusioncortex.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "Skimming AI",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      description: "AI tooling landing with value props and conversion flows.",
      liveUrl: "https://www.skimming.ai/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "FreeTool AI",
      category: "MERN Stack",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop",
      description: "Directory of AI tools with categories and outbound links.",
      liveUrl: "https://freetoolai.com/",
      githubUrl: "https://github.com/Jawa090",
    },
  ];

  return (
    <>
      <SEO
        title="AI Automation & SaaS Development NYC | Enterprise Software Solutions | DevGenX"
        description="New York's trusted AI automation and enterprise software development agency. Custom SaaS platforms, AI integrations, CRM systems & data analytics. React.js, Node.js, Python. 50+ NYC businesses served. Book a free consultation."
        keywords="AI automation NYC, SaaS development New York, enterprise software development NYC, custom software company Manhattan, web development agency Brooklyn, React.js development NYC, Node.js development New York, AI integration services, custom CRM development NYC, software agency New York City"
        schema={[localBusinessSchema, faqSchema]}
      />
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={targetRef}
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        <HeroScene />
        
        <motion.div 
          className="container mx-auto relative z-10 text-center pt-20"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="inline-block mb-4 text-sm md:text-base px-4 py-2 rounded-full neo-blur border border-white/10 text-neon-blue">
              Trusted by 50+ New York Businesses • Manhattan • Brooklyn • Queens
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold leading-tight md:leading-tight max-w-4xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Build Better Apps with <span className="text-gradient">Enterprise SaaS</span> Experts
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            React.js & Node.js development for New York startups and enterprises. AI automation, large-scale SaaS platforms, and custom enterprise solutions that drive business growth.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 rounded-lg px-8 py-6 transition-all duration-300 font-bold text-base">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free 30-Min Consultation
              </Button>
            </a>
            <Link to="/portfolio">
              <Button variant="outline" className="rounded-lg border-white/20 text-white px-6 py-6 hover:bg-white/5">
                View Our Work <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeader
          title="Enterprise-Grade Development"
          subtitle="We build AI-powered automation systems, large-scale SaaS platforms, and custom enterprise software that drives business transformation."
        />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-sora font-bold mb-4">
                <span className="text-neon-blue">AI Automation & SaaS Expertise</span>
              </h3>
              <p className="text-white/70 mb-6">
                We specialize in building intelligent automation systems and large-scale SaaS platforms. From AI-powered document processing to multi-tenant enterprise applications - we deliver solutions that scale to millions of users while reducing operational costs.
              </p>
              <div className="flex gap-4">
                <div className="glass-card p-3 rounded-lg">
                  <MonitorSmartphone className="text-neon-blue h-6 w-6 mb-2" />
                  <p className="text-sm text-white">99.9% Uptime SLA</p>
                </div>
                <div className="glass-card p-3 rounded-lg">
                  <BrainCircuit className="text-white h-6 w-6 mb-2" />
                  <p className="text-sm text-white">AI/ML Integration</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-sora font-bold mb-4">
                <span className="text-white">Enterprise-Grade Solutions</span>
              </h3>
              <p className="text-white/70 mb-6">
                From custom CRM systems to real-time analytics platforms - we build enterprise software that handles complex business logic, processes millions of transactions, and integrates seamlessly with your existing infrastructure.
              </p>
              <div className="flex gap-4">
                <div className="glass-card p-3 rounded-lg">
                  <PaintBucket className="text-neon-blue h-6 w-6 mb-2" />
                  <p className="text-sm text-white">User-Centric Design</p>
                </div>
                <div className="glass-card p-3 rounded-lg">
                  <Database className="text-white h-6 w-6 mb-2" />
                  <p className="text-sm text-white">Data Architecture</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-6 border border-neon-blue/20 hover:border-neon-blue/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-neon-blue/10">
                  <BrainCircuit className="text-neon-blue h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">AI Automation & Integration</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Custom ChatGPT integrations, intelligent document processing, and ML-powered workflows that reduce operational costs by up to 40%.
                  </p>
                  <Link to="/services/ai-automation/" className="text-neon-blue text-sm font-medium flex items-center hover:underline">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-white/10 hover:border-white/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5">
                  <Code className="text-white h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Large-Scale SaaS Platforms</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Multi-tenant enterprise SaaS applications built to handle millions of users — with subscription management, analytics dashboards, and seamless API integrations.
                  </p>
                  <Link to="/services/saas-development/" className="text-neon-blue text-sm font-medium flex items-center hover:underline">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Services"
            subtitle="Comprehensive development solutions for startups and enterprises - from MVP to production-scale applications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services">
              <Button variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/5">
                Explore All Services <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Calculator CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-neon-blue/30"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Much Will Your Project Cost?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Get an instant estimate in less than 2 minutes. No commitment required.
            </p>
            <Link to="/calculator">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 px-8 py-6 text-lg">
                Calculate Project Cost →
              </Button>
            </Link>
            <p className="text-white/50 text-sm mt-4">
              ✓ Instant results  ✓ No credit card  ✓ Free consultation included
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals / Metrics */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="glass-card rounded-xl p-6">
              <p className="text-3xl font-bold text-white">40+ </p>
              <p className="text-white/70 text-sm">projects delivered</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <p className="text-3xl font-bold text-white">90+ </p>
              <p className="text-white/70 text-sm">Lighthouse scores</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <p className="text-3xl font-bold text-white"><span className="align-top text-xl">≤</span>200ms</p>
              <p className="text-white/70 text-sm">API p95 latency</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <p className="text-3xl font-bold text-white">100% </p>
              <p className="text-white/70 text-sm">on‑time demos</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeader 
            title="Why Choose Us"
            subtitle="What makes our services different—and why clients trust us with critical work."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-xl p-6 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/5">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <SectionHeader 
            title="How We Actually Work"
            subtitle="Our proven process that gets NYC businesses from idea to launch without the usual agency BS."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-xl p-5 h-full"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-white/5">{step.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{index + 1}. {step.title}</h4>
                    <p className="text-white/70 text-sm">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeader 
            title="Real Results, Real Clients"
            subtitle="Actual projects we've built for NYC businesses. No fake testimonials, no stock photos."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[{
              title: "Analytics SaaS Migration",
              kpi: "-57% page load, +2x sign‑ups",
              stack: "MongoDB, React, Node, Vite, AWS",
              summary: "Re‑platformed legacy app to MERN with optimized queries and asset pipeline."
            },{
              title: "AI Support Copilot",
              kpi: "~30h/mo ops saved, CSAT +12%",
              stack: "Python, FastAPI, OpenAI, Pinecone",
              summary: "Integrated retrieval‑augmented chatbot to automate tier‑1 responses reliably."
            }].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">{c.title}</h3>
                <p className="text-neon-blue text-sm mb-2">Results: {c.kpi}</p>
                <p className="text-white/70 text-sm mb-3">Stack: {c.stack}</p>
                <p className="text-white/80">{c.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees & SLAs */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <SectionHeader 
            title="Guarantees & SLAs"
            subtitle="What we commit to on every engagement."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[{
              title: "Performance Budget",
              desc: "Target ≤200ms p95 API latency and Lighthouse 90+; tracked in CI."
            },{
              title: "Security Hygiene",
              desc: "OWASP checks, secret scanning, least‑privilege access, dependency audits."
            },{
              title: "Transparency",
              desc: "Weekly demos, shared backlog, and clear scope/pricing from day one."
            }].map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card rounded-xl p-6"
              >
                <h4 className="text-white font-semibold mb-2">{g.title}</h4>
                <p className="text-white/70 text-sm">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeader 
            title="FAQs"
            subtitle="Answers to common questions about scope, ownership, and delivery."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[{
              q: "Who owns the code?",
              a: "You do. We hand off repos, infra configs, and designs on completion."
            },{
              q: "How do we communicate?",
              a: "Weekly demos + Slack/Email. Shared board for backlog and progress."
            },{
              q: "What about revisions?",
              a: "Built into sprints; changes outside scope are estimated transparently."
            },{
              q: "Can you work with our stack?",
              a: "Yes. We adapt to your tooling and conventions while keeping quality bars."
            },{
              q: "Do you handle hosting?",
              a: "We can set up cloud infra or hand off ready-to-deploy artifacts."
            },{
              q: "How fast can we start?",
              a: "Usually within a week after scope confirmation."
            }].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-neon-blue mt-0.5" size={18} />
                  <div>
                    <h4 className="text-white font-semibold mb-1">{f.q}</h4>
                    <p className="text-white/70 text-sm">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <SectionHeader 
            title="What Clients Actually Say"
            subtitle="Real feedback from real people. No made-up quotes or stock photo testimonials."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[{
              quote: "The new MERN platform cut our page load time by 57% and doubled trial sign‑ups.",
              name: "Product Lead",
              role: "Bitwords Inc"
            },{
              quote: "Their AI integration reduced manual ops by ~30 hours/month with reliable outputs.",
              name: "Operations Manager",
              role: "Rush Corporation"
            },{
              quote: "Clean code, clear process, and on‑time demos—exactly what we needed to scale.",
              name: "CTO",
              role: "E Khata ERP"
            }].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card rounded-xl p-6"
              >
                <p className="text-white/90 mb-4">“{t.quote}”</p>
                <div className="text-white/70 text-sm">{t.name} · {t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <SectionHeader 
            title="Featured Projects"
            subtitle="Take a look at some of our recent work showcasing our expertise and creativity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item.title}
                category={item.category}
                image={item.image}
                description={item.description}
                liveUrl={item.liveUrl}
                githubUrl={item.githubUrl}
                index={index}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/portfolio">
              <Button variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/5">
                View All Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-black/40 to-black/60">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to build something <span className="text-gradient">that actually works</span>?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Let's skip the sales pitch and talk about your project. 30-minute call, no commitment required.
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg px-8 py-6 hover:opacity-90 transition-all">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;

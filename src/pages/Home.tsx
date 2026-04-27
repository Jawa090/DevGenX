
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroScene from "@/components/HeroScene";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
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
  HelpCircle
} from "lucide-react";

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
      icon: <Code size={40} />,
      title: "MERN Stack Development",
      description:
        "Full-stack web solutions with MongoDB, Express.js, React, and Node.js. We build scalable, modern applications tailored to your business needs.",
    },
    {
      icon: <Cpu size={40} />,
      title: "AI Solutions",
      description:
        "Leverage the power of artificial intelligence for your business. From chatbots to data analysis, we implement cutting-edge AI technologies.",
    },
    {
      icon: <PaintBucket size={40} />,
      title: "Graphic Design",
      description:
        "Eye-catching visual designs that communicate your brand message effectively. Logos, marketing materials, UI designs, and more.",
    },
    {
      icon: <Terminal size={40} />,
      title: "Python Development",
      description:
        "Custom Python solutions for backend services, data processing, and automation. We create efficient and maintainable Python applications.",
    },
    {
      icon: <Database size={40} />,
      title: "Data Analysis",
      description:
        "Transform raw data into actionable insights. We provide comprehensive data analysis services to help you make informed business decisions.",
    },
    {
      icon: <BrainCircuit size={40} />,
      title: "Machine Learning",
      description:
        "Advanced ML solutions that help your business automate processes and gain valuable insights from your data using state-of-the-art algorithms.",
    },
  ];

  const differentiators = [
    {
      icon: <ShieldCheck className="text-white" size={28} />,
      title: "Security‑first Delivery",
      description: "OWASP-aligned practices, secrets hygiene, role-based access, and dependency scanning in every project."
    },
    {
      icon: <Gauge className="text-neon-blue" size={28} />,
      title: "Performance SLAs",
      description: "We target sub‑200ms API latency and Lighthouse 90+ scores with budgets and profiling baked in."
    },
    {
      icon: <Rocket className="text-neon-blue" size={28} />,
      title: "AI Accelerators",
      description: "Reusable prompts, vector search starters, and eval harnesses to ship AI features faster."
    },
    {
      icon: <Puzzle className="text-white" size={28} />,
      title: "Clean Architecture",
      description: "Modular, typed code with testing pyramids so features scale without rewrites."
    },
    {
      icon: <Wallet className="text-white" size={28} />,
      title: "Transparent Pricing",
      description: "Fixed scopes where possible, weekly demos, and artifact access from day one."
    },
    {
      icon: <Sparkles className="text-neon-blue" size={28} />,
      title: "Design That Converts",
      description: "UX patterns validated on real products—less bounce, more activation and retention."
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
              MERN Stack Development, AI Solutions, and Graphic Design
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold leading-tight md:leading-tight max-w-4xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Bringing Your <span className="text-gradient">Digital Vision</span> to Life
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Expert MERN Stack Development, Python Solutions, AI Integration, Data Analysis, Machine Learning, and Graphic Design Services
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link to="/portfolio">
              <Button className="bg-gradient-to-r from-neon-blue to-white text-black hover:to-neon-blue hover:text-white rounded-lg px-6 py-6 transition-all duration-300 font-bold">
                View Our Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-lg border-white/20 text-white px-6 py-6 hover:bg-white/5">
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
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
            title="Who We Are"
            subtitle="We are a team of experts dedicated to creating exceptional digital experiences through code, data, and design."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-sora font-bold mb-4">
                <span className="text-neon-blue">Tech Expertise</span>
              </h3>
              <p className="text-white/70 mb-6">
                Our team consists of skilled developers specialized in MERN stack, Python, Machine Learning, and DevOps. We bring technical precision and innovation to every project, ensuring robust and scalable solutions.
              </p>
              <div className="flex gap-4">
                <div className="glass-card p-3 rounded-lg">
                  <MonitorSmartphone className="text-neon-blue h-6 w-6 mb-2" />
                  <p className="text-sm text-white">Full-Stack Development</p>
                </div>
                <div className="glass-card p-3 rounded-lg">
                  <BrainCircuit className="text-white h-6 w-6 mb-2" />
                  <p className="text-sm text-white">AI & ML Integration</p>
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
                <span className="text-white">Creative & Data Insights</span>
              </h3>
              <p className="text-white/70 mb-6">
                Our design and data teams transform concepts into visually appealing designs and actionable insights that captivate audiences, strengthen brand identities, and drive data-informed decisions.
              </p>
              <div className="flex gap-4">
                <div className="glass-card p-3 rounded-lg">
                  <PaintBucket className="text-neon-blue h-6 w-6 mb-2" />
                  <p className="text-sm text-white">Visual Design</p>
                </div>
                <div className="glass-card p-3 rounded-lg">
                  <Database className="text-white h-6 w-6 mb-2" />
                  <p className="text-sm text-white">Data Analysis</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/about">
              <Button variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/5">
                Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Services"
            subtitle="We offer a comprehensive range of digital services to help your business thrive in the digital landscape."
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
            title="Our Process"
            subtitle="A clear, reliable path from idea to impact—measured and transparent."
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
            title="Case Studies"
            subtitle="Real problems, practical solutions, measurable results."
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
            title="Client Results"
            subtitle="Outcomes we delivered—performance, clarity, and tangible business impact."
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
              Ready to bring your <span className="text-gradient">ideas to life</span>?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Let's collaborate to create something amazing together. We're excited to hear about your project!
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
  );
};

export default Home;

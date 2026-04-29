import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  Cloud,
  Shield,
  BarChart3,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const SITE_URL = "https://devgenx.vercel.app";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SaaS Development Services NYC",
  "description": "Enterprise SaaS platform development for New York businesses. Multi-tenant architecture, subscription management, analytics dashboards, and API integrations built to scale to millions of users.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "DevGenX",
    "url": SITE_URL,
    "areaServed": { "@type": "City", "name": "New York" }
  },
  "serviceType": "SaaS Development",
  "areaServed": ["New York", "Manhattan", "Brooklyn", "Queens"],
  "url": `${SITE_URL}/services/saas-development/`
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does SaaS development cost in New York?",
      "acceptedAnswer": { "@type": "Answer", "text": "SaaS MVP development starts at $50K-$100K (12-16 weeks). Full multi-tenant platforms cost $100K-$200K (16-24 weeks). Enterprise SaaS ranges from $200K-$500K (24-40 weeks)." }
    },
    {
      "@type": "Question",
      "name": "What tech stack do you use for SaaS platforms?",
      "acceptedAnswer": { "@type": "Answer", "text": "We build with React.js, Node.js, TypeScript, PostgreSQL, Redis, and AWS/GCP. For authentication we use Auth0 or custom JWT. Payment processing with Stripe or Paddle." }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a SaaS MVP?",
      "acceptedAnswer": { "@type": "Answer", "text": "A production-ready SaaS MVP typically takes 12-16 weeks. This includes core authentication, tenant management, main features, subscription billing, and deployment." }
    }
  ]
};

const features = [
  {
    icon: <Users size={28} />,
    title: "Multi-Tenant Architecture",
    description: "Secure multi-tenant applications that isolate customer data while sharing infrastructure. Designed to scale from 100 to 1,000,000+ users with optimized database strategies.",
    image: "/5.jpeg",
  },
  {
    icon: <Code size={28} />,
    title: "React & Node.js Development",
    description: "Modern SaaS frontends built with React.js and TypeScript, backed by high-performance Node.js APIs. Sub-200ms response times and 90+ Lighthouse scores guaranteed.",
    image: "/6.jpeg",
  },
  {
    icon: <Database size={28} />,
    title: "Subscription & Billing",
    description: "Complete subscription management with Stripe or Paddle integration. Multiple pricing tiers, usage-based billing, automated invoicing, and dunning management.",
    image: "/7.jpeg",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Analytics Dashboards",
    description: "Real-time analytics dashboards that give your customers actionable insights. Custom visualizations, report generation, and data export built into your SaaS platform.",
    image: "/8.jpeg",
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud Infrastructure",
    description: "AWS or GCP deployments with auto-scaling, load balancing, and 99.9% uptime SLA. CI/CD pipelines, monitoring, and disaster recovery built from day one.",
    image: "/9.jpeg",
  },
  {
    icon: <Shield size={28} />,
    title: "Enterprise Security",
    description: "SOC 2 compliant architecture with role-based access control, data encryption, audit logging, and SSO integration. Your customers' data stays safe.",
    image: "/10.jpeg",
  },
];

const SaaSPlatforms = () => {
  return (
    <>
      <SEO
        title="SaaS Development Company NYC | Build Scalable SaaS Platforms | DevGenX"
        description="Expert SaaS development services in New York City. Build multi-tenant platforms, subscription billing, analytics dashboards & API integrations. React.js & Node.js. Scale to millions of users. Trusted by NYC startups & enterprises."
        keywords="SaaS development NYC, SaaS platform development New York, multi-tenant SaaS, SaaS MVP development, subscription billing platform, SaaS development company Manhattan, React SaaS development, Node.js SaaS, cloud SaaS platform, SaaS startup development NYC"
        schema={[serviceSchema, faqSchema]}
      />

      <div className="pt-20 pb-20 px-6">
        <div className="container mx-auto">
          <section className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 text-sm px-4 py-2 rounded-full neo-blur border border-white/10 text-neon-blue"
            >
              From MVP to Enterprise Scale
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold leading-tight max-w-4xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              SaaS Development for{" "}
              <span className="text-gradient">New York Startups & Enterprises</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Build scalable SaaS platforms that handle millions of users. Multi-tenant architecture,
              subscription management, and enterprise-grade security — delivered by NYC&apos;s trusted
              SaaS development team.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 rounded-lg px-8 py-6 font-bold text-base">
                  <Calendar className="mr-2 h-5 w-5" />
                  Discuss Your SaaS Idea
                </Button>
              </a>
              <Link to="/calculator/">
                <Button variant="outline" className="rounded-lg border-white/20 text-white px-6 py-6 hover:bg-white/5">
                  Estimate Project Cost <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </section>

          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "1M+", label: "Users Supported" },
                { stat: "99.9%", label: "Uptime SLA" },
                { stat: "<200ms", label: "API Response Time" },
                { stat: "12-16 wk", label: "MVP to Launch" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                  <p className="text-3xl font-bold text-white">{item.stat}</p>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeader title="Full-Stack SaaS Development Services" subtitle="Everything you need to build, launch, and scale a SaaS platform in New York." />
            <div className="space-y-12 mt-12">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue">{feature.icon}</div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed mb-6">{feature.description}</p>
                    <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
                        Discuss This Feature <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <img src={feature.image} alt={feature.title} className="rounded-xl w-full h-64 object-cover" loading="lazy" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeader title="SaaS Pricing Tiers" subtitle="Transparent pricing for every stage of your SaaS journey." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { tier: "SaaS MVP", price: "$50K - $100K", timeline: "12-16 weeks", features: ["Core authentication & onboarding", "Multi-tenant data isolation", "3-5 main features", "Stripe subscription billing", "Admin dashboard", "AWS deployment"] },
                { tier: "Full Platform", price: "$100K - $200K", timeline: "16-24 weeks", features: ["Everything in MVP", "Advanced analytics dashboard", "API marketplace & integrations", "Role-based access control", "Custom reporting engine", "Auto-scaling infrastructure"] },
                { tier: "Enterprise SaaS", price: "$200K - $500K", timeline: "24-40 weeks", features: ["Everything in Full Platform", "SSO & SAML integration", "SOC 2 compliance", "Multi-region deployment", "White-label capabilities", "Dedicated support portal"] },
              ].map((plan, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`glass-card rounded-xl p-8 ${i === 1 ? "border border-neon-blue/50" : ""}`}>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.tier}</h3>
                  <p className="text-2xl font-bold text-neon-blue mb-1">{plan.price}</p>
                  <p className="text-white/50 text-sm mb-6">{plan.timeline}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-white/80 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-neon-blue mt-0.5 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeader title="Frequently Asked Questions" subtitle="Common questions about SaaS development in New York." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { q: "How much does SaaS development cost in New York?", a: "SaaS MVPs start at $50K-$100K (12-16 weeks). Full multi-tenant platforms cost $100K-$200K. Enterprise SaaS ranges from $200K-$500K." },
                { q: "What tech stack do you use?", a: "React.js, TypeScript, Node.js, PostgreSQL, Redis, and AWS/GCP. Authentication with Auth0 or custom JWT. Payments with Stripe or Paddle." },
                { q: "How long does it take to build a SaaS MVP?", a: "12-16 weeks for a production-ready MVP with authentication, core features, subscription billing, and cloud deployment." },
                { q: "Can you scale our existing SaaS platform?", a: "Yes. We help NYC SaaS companies scale from hundreds to millions of users with architecture optimization, database sharding, and cloud migration." },
              ].map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-white/70 text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-neon-blue/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your SaaS Platform?</h2>
              <p className="text-white/70 text-lg mb-8">Let us turn your SaaS idea into a scalable, revenue-generating platform. Free 30-minute consultation — no commitment required.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 px-8 py-6 text-lg">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Button>
                </a>
                <Link to="/contact/">
                  <Button variant="outline" className="border-white/20 text-white px-8 py-6 text-lg hover:bg-white/5">Contact Us</Button>
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SaaSPlatforms;

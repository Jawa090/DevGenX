import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Terminal, Database, Shield, Cloud, Workflow, BarChart3, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const SITE_URL = "https://devgenx.vercel.app";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "API Development & Microservices NYC",
  "description": "High-performance API development and microservices architecture for New York businesses. RESTful APIs, GraphQL, Node.js, Python, and cloud-native solutions with sub-200ms response times.",
  "provider": { "@type": "LocalBusiness", "name": "DevGenX", "url": SITE_URL, "areaServed": { "@type": "City", "name": "New York" } },
  "serviceType": "API Development",
  "areaServed": ["New York", "Manhattan", "Brooklyn", "Queens"],
  "url": `${SITE_URL}/services/api-development/`
};

const features = [
  { icon: <Terminal size={28} />, title: "RESTful API Development", description: "High-performance REST APIs built with Node.js (Express/NestJS) and Python (Django/FastAPI). Sub-200ms response times, comprehensive documentation, and rate limiting for NYC enterprise applications.", image: "/22.jpeg" },
  { icon: <Database size={28} />, title: "GraphQL APIs", description: "Flexible GraphQL APIs that reduce over-fetching and under-fetching. Custom resolvers, real-time subscriptions, and schema-first design for modern New York web and mobile applications.", image: "/23.jpeg" },
  { icon: <Workflow size={28} />, title: "Microservices Architecture", description: "Decompose monolithic applications into scalable microservices. Event-driven architecture, message queues (RabbitMQ, Kafka), and service mesh implementation for NYC enterprise systems.", image: "/24.jpeg" },
  { icon: <Cloud size={28} />, title: "Third-Party API Integrations", description: "Connect your applications with payment gateways (Stripe, PayPal), CRMs (Salesforce, HubSpot), email services, and custom APIs. Reliable integrations that keep your NYC business connected.", image: "/25.jpeg" },
  { icon: <Shield size={28} />, title: "API Security & Authentication", description: "OAuth 2.0, JWT authentication, API key management, rate limiting, and input validation. OWASP-compliant API security that protects your NYC business data.", image: "/26.jpeg" },
  { icon: <BarChart3 size={28} />, title: "API Monitoring & Optimization", description: "Real-time API monitoring, performance profiling, and automatic scaling. Track response times, error rates, and throughput with custom alerting for New York enterprise SLAs.", image: "/27.jpeg" },
];

const APIDevelopment = () => {
  return (
    <>
      <SEO
        title="API Development & Microservices NYC | RESTful APIs & GraphQL | DevGenX"
        description="Expert API development and microservices architecture in New York City. RESTful APIs, GraphQL, Node.js, Python, third-party integrations. Sub-200ms response times. Serving Manhattan, Brooklyn & Queens businesses."
        keywords="API development NYC, microservices architecture New York, RESTful API development Manhattan, GraphQL development, Node.js API NYC, Python API development, third-party API integration, API consulting New York, backend development Brooklyn, microservices NYC"
        schema={[serviceSchema]}
      />

      <div className="pt-20 pb-20 px-6">
        <div className="container mx-auto">
          <section className="text-center mb-16">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-4 text-sm px-4 py-2 rounded-full neo-blur border border-white/10 text-neon-blue">
              High-Performance Backend Engineering
            </motion.span>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold leading-tight max-w-4xl mx-auto mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              API Development & Microservices for <span className="text-gradient">New York Businesses</span>
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Build high-performance APIs and microservices that power your applications. Node.js, Python,
              GraphQL — designed for scalability, security, and sub-200ms response times.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 rounded-lg px-8 py-6 font-bold text-base"><Calendar className="mr-2 h-5 w-5" /> Discuss Your API Project</Button>
              </a>
              <Link to="/portfolio/">
                <Button variant="outline" className="rounded-lg border-white/20 text-white px-6 py-6 hover:bg-white/5">View Our Work <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </motion.div>
          </section>

          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[{ stat: "<200ms", label: "P95 API Latency" }, { stat: "99.9%", label: "Uptime SLA" }, { stat: "100K+", label: "Requests/Second" }, { stat: "OWASP", label: "Security Compliance" }].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                  <p className="text-3xl font-bold text-white">{item.stat}</p>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeader title="API & Backend Development Services" subtitle="Everything you need to build, deploy, and scale APIs for your New York business." />
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
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">Discuss This Service <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </a>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <img src={feature.image} alt={feature.title} className="rounded-xl w-full h-64 object-cover" loading="lazy" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-neon-blue/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Scalable API or Backend?</h2>
              <p className="text-white/70 text-lg mb-8">From RESTful APIs to full microservices architecture — we build backends that perform under pressure. Free 30-minute technical consultation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 px-8 py-6 text-lg"><Calendar className="mr-2 h-5 w-5" /> Book Free Consultation</Button>
                </a>
                <Link to="/contact/"><Button variant="outline" className="border-white/20 text-white px-8 py-6 text-lg hover:bg-white/5">Contact Us</Button></Link>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default APIDevelopment;

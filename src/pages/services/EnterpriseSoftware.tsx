import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Cpu, Database, Shield, Workflow, Users, BarChart3, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const SITE_URL = "https://devgenx.vercel.app";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Enterprise Software Development NYC",
  "description": "Custom enterprise software development for New York businesses. CRM systems, ERP solutions, inventory management, and internal tools built with React, Node.js, and Python.",
  "provider": { "@type": "LocalBusiness", "name": "DevGenX", "url": SITE_URL, "areaServed": { "@type": "City", "name": "New York" } },
  "serviceType": "Enterprise Software Development",
  "areaServed": ["New York", "Manhattan", "Brooklyn", "Queens"],
  "url": `${SITE_URL}/services/enterprise-software/`
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does custom enterprise software cost in NYC?", "acceptedAnswer": { "@type": "Answer", "text": "Custom CRM systems cost $75K-$150K, ERP solutions $150K-$300K, and inventory management systems $50K-$100K. Timelines range from 12-36 weeks depending on complexity." } },
    { "@type": "Question", "name": "Do you integrate with existing enterprise systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We integrate with Salesforce, SAP, Oracle, QuickBooks, and custom legacy systems. Our API-first approach ensures seamless data flow between your existing infrastructure and new applications." } },
  ]
};

const features = [
  { icon: <Users size={28} />, title: "Custom CRM Development", description: "Tailored CRM systems that match your exact sales process. Lead tracking, pipeline management, customer communication, and reporting — built specifically for how your NYC business operates.", image: "/11.jpeg" },
  { icon: <Workflow size={28} />, title: "ERP Solutions", description: "End-to-end ERP systems that unify finance, HR, inventory, and operations. Real-time visibility across your entire New York enterprise with custom workflows and approval chains.", image: "/12.jpeg" },
  { icon: <Database size={28} />, title: "Inventory Management", description: "Real-time inventory tracking with automated reorder points, barcode scanning, multi-warehouse support, and predictive stock optimization for NYC retail and distribution businesses.", image: "/13.jpeg" },
  { icon: <BarChart3 size={28} />, title: "Business Intelligence Platforms", description: "Custom analytics dashboards that turn your data into competitive advantage. Real-time KPIs, automated reporting, and data-driven insights for New York decision-makers.", image: "/14.jpeg" },
  { icon: <Cpu size={28} />, title: "Internal Tools & Automation", description: "Custom internal tools that eliminate manual processes. Admin panels, data management interfaces, and workflow automation that save your NYC team 20+ hours per week.", image: "/15.jpeg" },
  { icon: <Shield size={28} />, title: "Legacy System Modernization", description: "Migrate aging enterprise systems to modern architectures without disrupting operations. Microservices migration, database modernization, and cloud adoption for NYC enterprises.", image: "/16.jpeg" },
];

const EnterpriseSoftware = () => {
  return (
    <>
      <SEO
        title="Custom Enterprise Software Development NYC | CRM, ERP & Business Solutions | DevGenX"
        description="Custom enterprise software development in New York City. Build CRM systems, ERP solutions, inventory management & business intelligence platforms. React, Node.js & Python. Trusted by 50+ NYC businesses."
        keywords="enterprise software development NYC, custom CRM development New York, ERP development Manhattan, business software NYC, custom software solutions Brooklyn, enterprise application development, internal tools development NYC, legacy system modernization New York"
        schema={[serviceSchema, faqSchema]}
      />

      <div className="pt-20 pb-20 px-6">
        <div className="container mx-auto">
          <section className="text-center mb-16">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-4 text-sm px-4 py-2 rounded-full neo-blur border border-white/10 text-neon-blue">
              Custom Software for Complex Business Problems
            </motion.span>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold leading-tight max-w-4xl mx-auto mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Enterprise Software Development for <span className="text-gradient">New York Businesses</span>
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Custom CRM systems, ERP solutions, and business applications tailored to your exact workflow.
              Built with modern tech stacks and designed to handle millions of transactions for NYC enterprises.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 rounded-lg px-8 py-6 font-bold text-base">
                  <Calendar className="mr-2 h-5 w-5" /> Get a Free Technical Consultation
                </Button>
              </a>
              <Link to="/calculator/">
                <Button variant="outline" className="rounded-lg border-white/20 text-white px-6 py-6 hover:bg-white/5">Estimate Project Cost <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </motion.div>
          </section>

          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[{ stat: "50+", label: "Enterprise Apps Delivered" }, { stat: "99.9%", label: "Uptime Guarantee" }, { stat: "Millions", label: "Transactions Processed" }, { stat: "30 days", label: "Free Post-Launch Support" }].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                  <p className="text-3xl font-bold text-white">{item.stat}</p>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeader title="Enterprise Solutions That Scale" subtitle="Custom business software for Manhattan, Brooklyn, Queens, and all of New York City." />
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
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">Discuss This Solution <ArrowRight className="ml-2 h-4 w-4" /></Button>
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
            <SectionHeader title="Frequently Asked Questions" subtitle="Common questions about enterprise software development in NYC." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { q: "How much does custom enterprise software cost in NYC?", a: "CRM systems cost $75K-$150K, ERP solutions $150K-$300K, inventory management $50K-$100K, and BI dashboards $40K-$80K. Timelines range from 12-36 weeks." },
                { q: "Do you integrate with existing enterprise systems?", a: "Yes. We integrate with Salesforce, SAP, Oracle, QuickBooks, and custom legacy systems via API-first architecture." },
                { q: "What technologies do you use?", a: "React.js, Node.js, Python (Django/FastAPI), PostgreSQL, MongoDB, Redis, and AWS/GCP. We select the best stack for your requirements." },
                { q: "Do you provide ongoing support?", a: "Every project includes 30 days of free post-launch support. We also offer monthly retainers for ongoing maintenance and feature development." },
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Custom Enterprise Software?</h2>
              <p className="text-white/70 text-lg mb-8">Tell us about your business challenges. We will design a custom solution that fits your workflow and scales with your growth.</p>
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

export default EnterpriseSoftware;

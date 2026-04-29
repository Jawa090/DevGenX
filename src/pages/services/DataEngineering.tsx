import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Database, BarChart3, LineChart, Workflow, Cloud, Shield, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const SITE_URL = "https://devgenx.vercel.app";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data Engineering & Analytics Services NYC",
  "description": "Data engineering and business analytics services for New York businesses. ETL pipelines, data warehousing, real-time analytics dashboards, and BI platforms that turn data into competitive advantage.",
  "provider": { "@type": "LocalBusiness", "name": "DevGenX", "url": SITE_URL, "areaServed": { "@type": "City", "name": "New York" } },
  "serviceType": "Data Engineering",
  "areaServed": ["New York", "Manhattan", "Brooklyn", "Queens"],
  "url": `${SITE_URL}/services/data-engineering/`
};

const features = [
  { icon: <Database size={28} />, title: "Data Warehouse Architecture", description: "Design and build scalable data warehouses on AWS Redshift, Google BigQuery, or Snowflake. Centralize data from multiple sources for comprehensive analytics across your New York business.", image: "/17.jpeg" },
  { icon: <Workflow size={28} />, title: "ETL Pipeline Development", description: "Automated data extraction, transformation, and loading pipelines that process millions of records daily. Real-time and batch processing with Apache Airflow, dbt, and custom solutions.", image: "/18.jpeg" },
  { icon: <BarChart3 size={28} />, title: "Analytics Dashboards", description: "Interactive business intelligence dashboards with real-time KPIs, trend analysis, and automated reporting. Built with Tableau, Metabase, or custom React dashboards for NYC decision-makers.", image: "/19.jpeg" },
  { icon: <LineChart size={28} />, title: "Predictive Analytics", description: "Machine learning models that forecast sales, predict customer behavior, and identify market opportunities. Python-based analytics that give NYC businesses a data-driven competitive edge.", image: "/20.jpeg" },
  { icon: <Cloud size={28} />, title: "Cloud Data Migration", description: "Migrate on-premise databases to cloud infrastructure with zero downtime. AWS, GCP, and Azure data migration services designed for New York enterprises with complex data requirements.", image: "/21.jpeg" },
  { icon: <Shield size={28} />, title: "Data Governance & Security", description: "Implement data governance frameworks, access controls, encryption, and compliance standards (HIPAA, SOC 2, GDPR) for your NYC enterprise data infrastructure.", image: "/17.jpeg" },
];

const DataEngineering = () => {
  return (
    <>
      <SEO
        title="Data Engineering & Analytics Services NYC | Business Intelligence Platforms | DevGenX"
        description="Data engineering and analytics services in New York City. ETL pipelines, data warehousing, real-time dashboards & predictive analytics. Turn your data into competitive advantage. Python, AWS, BigQuery."
        keywords="data engineering NYC, business analytics New York, data warehouse development Manhattan, ETL pipeline development, business intelligence NYC, analytics dashboard development, predictive analytics New York, data migration services NYC, data science consulting Brooklyn"
        schema={[serviceSchema]}
      />

      <div className="pt-20 pb-20 px-6">
        <div className="container mx-auto">
          <section className="text-center mb-16">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-4 text-sm px-4 py-2 rounded-full neo-blur border border-white/10 text-neon-blue">
              Turn Data Into Competitive Advantage
            </motion.span>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold leading-tight max-w-4xl mx-auto mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Data Engineering & Analytics for <span className="text-gradient">New York Businesses</span>
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Build data pipelines, analytics platforms, and business intelligence dashboards that turn raw data
              into actionable insights. Serving Manhattan, Brooklyn, Queens, and all of NYC.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 rounded-lg px-8 py-6 font-bold text-base"><Calendar className="mr-2 h-5 w-5" /> Get Free Data Assessment</Button>
              </a>
              <Link to="/portfolio/">
                <Button variant="outline" className="rounded-lg border-white/20 text-white px-6 py-6 hover:bg-white/5">View Data Projects <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </motion.div>
          </section>

          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[{ stat: "10M+", label: "Records Processed Daily" }, { stat: "92%", label: "Forecast Accuracy" }, { stat: "15-20%", label: "Margin Improvement" }, { stat: "Real-time", label: "Dashboard Updates" }].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6">
                  <p className="text-3xl font-bold text-white">{item.stat}</p>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeader title="Data Engineering & Analytics Services" subtitle="End-to-end data solutions for New York businesses of all sizes." />
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

          <section className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-neon-blue/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Unlock Your Data&apos;s Potential?</h2>
              <p className="text-white/70 text-lg mb-8">Get a free data assessment. We will identify opportunities to turn your data into actionable insights and competitive advantage.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 px-8 py-6 text-lg"><Calendar className="mr-2 h-5 w-5" /> Book Free Assessment</Button>
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

export default DataEngineering;

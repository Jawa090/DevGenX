import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  BrainCircuit,
  Bot,
  FileText,
  LineChart,
  MessageSquareText,
  Cpu,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const SITE_URL = "https://devgenx.vercel.app";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation & Integration Services NYC",
  "description": "Custom AI automation solutions for New York businesses. ChatGPT integrations, intelligent document processing, workflow automation, and ML-powered analytics that reduce operational costs by 40%.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "DevGenX",
    "url": SITE_URL,
    "areaServed": {
      "@type": "City",
      "name": "New York"
    }
  },
  "serviceType": "AI Automation",
  "areaServed": ["New York", "Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
  "url": `${SITE_URL}/services/ai-automation/`
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does AI automation cost for NYC businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI automation projects typically range from $25,000 to $100,000 depending on complexity. Document processing systems start at $25K, chatbot implementations at $30K, and full predictive analytics platforms at $50K-$100K. Most NYC businesses see ROI within 6-9 months."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to implement AI automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most AI automation projects take 6-12 weeks from discovery to deployment. Simple chatbot integrations can be completed in 4-6 weeks, while complex ML-powered analytics platforms may take 12-16 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What AI technologies does DevGenX use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with OpenAI GPT-4, custom fine-tuned models, Pinecone vector databases, LangChain, Python, FastAPI, TensorFlow, and PyTorch. We select the right technology based on your specific business requirements."
      }
    }
  ]
};

const features = [
  {
    icon: <Cpu size={28} />,
    title: "Custom ChatGPT Integrations",
    description: "Enterprise-grade ChatGPT API integrations tailored to your business data. Retrieval-augmented generation (RAG), custom fine-tuning, and secure deployment for New York enterprises.",
    image: "/1.jpeg",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "Intelligent Document Processing",
    description: "Automate data extraction from invoices, contracts, and forms with 95%+ accuracy. OCR and AI-powered text analysis processing 1,000+ documents per hour for NYC businesses.",
    image: "/2.jpeg",
  },
  {
    icon: <Bot size={28} />,
    title: "AI-Powered Customer Support",
    description: "Deploy intelligent chatbots that handle 80% of tier-1 support tickets. Trained on your business data with context-aware responses, reducing response time from hours to seconds.",
    image: "/3.jpeg",
  },
  {
    icon: <FileText size={28} />,
    title: "Workflow Automation",
    description: "Eliminate 20+ hours of weekly manual work with intelligent workflow automation. Automate data entry, email responses, report generation, and approval processes.",
    image: "/4.jpeg",
  },
  {
    icon: <LineChart size={28} />,
    title: "Predictive Analytics",
    description: "Forecast sales, predict customer churn, and identify market trends with custom ML models. Data-driven insights that improve margins by 15-20% for New York businesses.",
    image: "/1.jpeg",
  },
  {
    icon: <MessageSquareText size={28} />,
    title: "Sentiment Analysis & NLP",
    description: "Analyze customer feedback, reviews, and social media mentions at scale. Real-time sentiment tracking and competitive intelligence for data-driven decision making.",
    image: "/2.jpeg",
  },
];

const AIAutomation = () => {
  return (
    <>
      <SEO
        title="AI Automation Services NYC | Custom AI Solutions for New York Businesses | DevGenX"
        description="Expert AI automation services in New York City. Custom ChatGPT integrations, intelligent document processing, workflow automation & predictive analytics. Reduce operational costs by 40%. Trusted by 50+ NYC businesses."
        keywords="AI automation NYC, artificial intelligence New York, ChatGPT integration NYC, AI solutions Manhattan, machine learning New York, workflow automation Brooklyn, document processing AI, predictive analytics NYC, AI development company New York, business automation services NYC"
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
              Trusted by 50+ New York Businesses
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold leading-tight max-w-4xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              AI Automation Services for{" "}
              <span className="text-gradient">New York Businesses</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Custom AI solutions that reduce operational costs by 40% and eliminate manual work.
              From ChatGPT integrations to predictive analytics — we build intelligent systems
              that transform how NYC businesses operate.
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
                  Get Free AI Assessment
                </Button>
              </a>
              <Link to="/portfolio/">
                <Button variant="outline" className="rounded-lg border-white/20 text-white px-6 py-6 hover:bg-white/5">
                  View AI Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </section>

          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "40%", label: "Average Cost Reduction" },
                { stat: "95%+", label: "Document Processing Accuracy" },
                { stat: "80%", label: "Support Tickets Automated" },
                { stat: "6-9 mo", label: "Average ROI Timeline" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-6"
                >
                  <p className="text-3xl font-bold text-white">{item.stat}</p>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeader
              title="AI Solutions That Drive Results"
              subtitle="Battle-tested AI automation services for Manhattan, Brooklyn, Queens, and all of New York City."
            />
            <div className="space-y-12 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue">{feature.icon}</div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed mb-6">{feature.description}</p>
                    <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
                        Discuss This Solution <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-xl w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeader
              title="NYC AI Automation Case Study"
              subtitle="Real results from real New York businesses using our AI solutions."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-2">Brooklyn E-commerce AI Chatbot</h3>
                <p className="text-neon-blue text-sm mb-4">Results: 80% support automation, $3,600/mo saved</p>
                <ul className="space-y-2">
                  {["30 hours/week of manual support eliminated", "Customer satisfaction increased 12%", "ROI achieved in 4 months", "Tech: Python, FastAPI, OpenAI GPT-4, Pinecone"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-neon-blue mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-2">Manhattan FinTech Document Processing</h3>
                <p className="text-neon-blue text-sm mb-4">Results: 1,000+ docs/hour, 95% accuracy</p>
                <ul className="space-y-2">
                  {["Invoice processing time reduced by 85%", "Error rate dropped from 5% to 0.3%", "Annual savings of $120,000+", "Tech: Python, TensorFlow, OCR, AWS Lambda"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-neon-blue mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          <section className="mb-20">
            <SectionHeader title="Frequently Asked Questions" subtitle="Common questions about AI automation for NYC businesses." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { q: "How much does AI automation cost for NYC businesses?", a: "Projects range from $25K-$100K. Document processing starts at $25K, chatbots at $30K, and predictive analytics at $50K-$100K. Most businesses see ROI within 6-9 months." },
                { q: "How long does it take to implement AI automation?", a: "Most projects take 6-12 weeks. Simple chatbot integrations complete in 4-6 weeks, while complex ML platforms may take 12-16 weeks." },
                { q: "What AI technologies does DevGenX use?", a: "We use OpenAI GPT-4, Pinecone, LangChain, Python, FastAPI, TensorFlow, and PyTorch — selected based on your specific needs." },
                { q: "Do you work with NYC businesses specifically?", a: "Yes. We specialize in serving Manhattan, Brooklyn, Queens, and all NYC boroughs. We understand the unique needs of New York businesses." },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-xl p-6"
                >
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-white/70 text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-neon-blue/30"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Automate Your NYC Business?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Get a free AI automation assessment. We will identify the highest-impact opportunities
                and provide ROI projections specific to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/devgenx" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 px-8 py-6 text-lg">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free AI Assessment
                  </Button>
                </a>
                <Link to="/contact/">
                  <Button variant="outline" className="border-white/20 text-white px-8 py-6 text-lg hover:bg-white/5">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AIAutomation;

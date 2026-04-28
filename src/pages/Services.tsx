import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/utils";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Shield, 
  BarChart3,
  Cpu, 
  BrainCircuit, 
  Bot, 
  MessageSquareText, 
  FileText, 
  LineChart,
  PaintBucket, 
  Palette, 
  Layers, 
  Image, 
  Film, 
  Layout
} from "lucide-react";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceItem = ({ icon, title, description, index }: ServiceItemProps) => {
  // Replace any "&" in the title with "and"
  const cleanTitle = title.replace(/&/g, "and");
  
  return (
    <motion.div
      className="glass-card p-6 rounded-xl transition-all duration-300 hover:neon-border"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start">
        <div className="mr-4 mt-1 text-neon-blue">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold mb-2 text-white">
            {cleanTitle}
          </h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const mernServices = [
  {
    icon: <Code size={24} />,
    title: "Custom Web Apps",
    description: "Full-stack applications built with React, Node.js, and MongoDB. Fast, secure, and built to scale with your business.",
  },
  {
    icon: <Database size={24} />,
    title: "Database Architecture",
    description: "MongoDB setups that actually perform well. Proper indexing, query optimization, and data modeling that makes sense.",
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Deployment",
    description: "AWS, Vercel, or DigitalOcean deployments with CI/CD pipelines. Your app goes live without the headaches.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile-First Design",
    description: "Responsive designs that work perfectly on phones, tablets, and desktops. No more pinch-to-zoom nonsense.",
  },
  {
    icon: <Shield size={24} />,
    title: "Security That Works",
    description: "JWT authentication, input validation, and OWASP compliance. Your app won't get hacked on our watch.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "API Development",
    description: "RESTful APIs that respond fast and handle errors gracefully. Plus integrations with payment, email, and other services.",
  },
];

const aiServices = [
  {
    icon: <Cpu size={24} />,
    title: "Custom AI Integrations",
    description: "ChatGPT API integrations, document analysis, and custom ML models. Built for your specific use case, not generic solutions.",
  },
  {
    icon: <BrainCircuit size={24} />,
    title: "Document Processing",
    description: "Extract data from PDFs, invoices, and forms automatically. OCR and AI-powered text analysis that actually works.",
  },
  {
    icon: <Bot size={24} />,
    title: "Smart Chatbots",
    description: "Customer support bots that understand context and give helpful answers. Trained on your data, not generic responses.",
  },
  {
    icon: <MessageSquareText size={24} />,
    title: "Content Analysis",
    description: "Analyze customer feedback, reviews, and social media mentions. Get insights that help you make better business decisions.",
  },
  {
    icon: <FileText size={24} />,
    title: "Workflow Automation",
    description: "Automate repetitive tasks like data entry, email responses, and report generation. Save 20+ hours per week.",
  },
  {
    icon: <LineChart size={24} />,
    title: "Predictive Analytics",
    description: "Forecast sales, predict customer churn, and identify trends. Data-driven insights that actually impact your bottom line.",
  },
];

const designServices = [
  {
    icon: <PaintBucket size={24} />,
    title: "Brand Identity",
    description: "Logos and brand guidelines that don't look like every other startup. Memorable designs that work across all platforms.",
  },
  {
    icon: <Palette size={24} />,
    title: "UI/UX Design",
    description: "Interfaces that users actually understand. No confusing navigation, no hidden buttons - just clean, intuitive design.",
  },
  {
    icon: <Layers size={24} />,
    title: "Landing Pages",
    description: "High-converting landing pages optimized for signups and sales. A/B tested designs that actually move the needle.",
  },
  {
    icon: <Image size={24} />,
    title: "Social Media Assets",
    description: "Eye-catching graphics for Instagram, LinkedIn, and Twitter. Sized correctly and optimized for each platform.",
  },
  {
    icon: <Film size={24} />,
    title: "Motion Graphics",
    description: "Animated logos, explainer videos, and product demos. Professional animations that don't look cheesy.",
  },
  {
    icon: <Layout size={24} />,
    title: "Marketing Materials",
    description: "Pitch decks, brochures, and sales materials that close deals. Professional designs that make you look legit.",
  },
];

const Services = () => {

  return (
    <div className="pt-20 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeader 
          title="What We Actually Build"
          subtitle="Real services for real problems. No corporate buzzwords, just stuff that works."
        />

        <div className="space-y-24">
          {/* MERN Stack Services */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <span className="text-neon-blue">MERN Stack Apps That Don't Suck</span>
              </h2>
              <p className="text-white/70 max-w-4xl">
                React.js frontends that load fast, Node.js APIs that respond in under 200ms, and MongoDB databases that scale. 
                We build web apps that your users will actually enjoy using.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mernServices.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* AI Services */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <span className="text-neon-purple">AI Solutions That Actually Work</span>
              </h2>
              <p className="text-white/70 max-w-4xl">
                Custom ChatGPT integrations, document processing, and automation tools that save you time and money. 
                No AI hype, just practical solutions that solve real business problems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Design Services */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                <span className="text-gradient">Design That Converts</span>
              </h2>
              <p className="text-white/70 max-w-4xl">
                UI/UX designs based on real user behavior, not design trends. Logos and branding that people actually remember. 
                We focus on what makes users click, not what wins design awards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designServices.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Process Section */}
        <section className="mt-24">
          <SectionHeader 
            title="How We Work"
            subtitle="Our straightforward process - no corporate BS, just clear steps from idea to launch."
          />

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0 relative">
              {/* Step 1 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-blue z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">1. Discovery Call (30 mins)</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    Quick call to understand your business, goals, and budget. No sales pitch - just real talk about what you need and if we're a good fit.
                  </p>
                </div>
                <div className="glass-card rounded-xl p-6 md:ml-12">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>What problem are you solving?</li>
                    <li>Who are your users?</li>
                    <li>What's your timeline and budget?</li>
                    <li>Any technical constraints?</li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="glass-card rounded-xl p-6 md:mr-12 md:order-1">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Wireframes showing exact layout</li>
                    <li>Database schema and API endpoints</li>
                    <li>Tech stack breakdown</li>
                    <li>Fixed price quote (no surprises)</li>
                  </ul>
                </div>
                <div className="md:pl-12 relative md:order-2">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-purple z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">2. Technical Spec (2-3 days)</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    Detailed plan showing exactly what we're building. You see wireframes, database design, and API docs before we write any code.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-blue z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">3. Weekly Builds (6-12 weeks)</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    Live demos every Friday. You see real progress, give feedback, and we adjust. No waiting months to see if we're on track.
                  </p>
                </div>
                <div className="glass-card rounded-xl p-6 md:ml-12">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Working features every week</li>
                    <li>Live demo sessions on Fridays</li>
                    <li>Slack/email for quick questions</li>
                    <li>Course corrections as needed</li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="glass-card rounded-xl p-6 md:mr-12 md:order-1">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Performance testing (sub-200ms APIs)</li>
                    <li>Security audits (OWASP compliance)</li>
                    <li>Cross-browser testing</li>
                    <li>Bug fixes and polish</li>
                  </ul>
                </div>
                <div className="md:pl-12 relative md:order-2">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-purple z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">4. Testing & Polish (1-2 weeks)</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    We test everything - performance, security, edge cases. No broken features, no slow pages. It works before it ships.
                  </p>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="md:text-right md:pr-12 relative">
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-blue z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">5. Launch Day</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    We handle deployment, DNS setup, and monitoring. Your app goes live smoothly, and we're watching to make sure it stays that way.
                  </p>
                </div>
                <div className="glass-card rounded-xl p-6 md:ml-12">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Production deployment</li>
                    <li>SSL certificates and DNS</li>
                    <li>Performance monitoring setup</li>
                    <li>Launch checklist completion</li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 6 */}
              <motion.div 
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="glass-card rounded-xl p-6 md:mr-12 md:order-1">
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>30 days free support included</li>
                    <li>Bug fixes and tweaks</li>
                    <li>Performance monitoring</li>
                    <li>Optional monthly retainer available</li>
                  </ul>
                </div>
                <div className="md:pl-12 relative md:order-2">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neon-purple z-10 border-4 border-background"></div>
                  <h3 className="text-xl font-display font-bold mb-2 text-white">6. Post-Launch Support</h3>
                  <p className="text-white/70 mb-6 md:mb-0">
                    30 days of free support after launch. After that, you own everything - code, servers, domains. Optional ongoing support available.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

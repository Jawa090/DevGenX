
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import PortfolioCard from "@/components/PortfolioCard";
import { cn } from "@/lib/utils";

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Portfolio - DevGenX Software Development Projects NYC",
  "description": "View our portfolio of 40+ projects delivered for New York businesses. MERN stack web apps, AI solutions, Python development, data analytics, and graphic design.",
  "url": "https://devgenx.vercel.app/portfolio/",
  "provider": { "@type": "LocalBusiness", "name": "DevGenX", "url": "https://devgenx.vercel.app" }
};

type Category = "all" | "web" | "saas" | "ai";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const portfolioItems = [
    {
      title: "ContractorHub",
      category: "web",
      categoryLabel: "Web Development",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
      description: "Directory + lead-gen platform for contractors with marketing tools.",
      liveUrl: "https://contractorhub.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "EstimatingHub",
      category: "web",
      categoryLabel: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      description: "Construction estimating portal with streamlined quote workflows.",
      liveUrl: "http://estimatinghub.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "Paradise Estimating",
      category: "web",
      categoryLabel: "Web Development",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
      description: "Estimating services site with conversion-focused UI and forms.",
      liveUrl: "http://paradiseestimating.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "DecExperts",
      category: "web",
      categoryLabel: "Web Development",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
      description: "Specialist services platform with booking and content modules.",
      liveUrl: "https://decexperts.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "ContractorList",
      category: "web",
      categoryLabel: "Web Development",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
      description: "Curated contractor directory with search and contact flows.",
      liveUrl: "http://contractorlist.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "3R eMotors",
      category: "web",
      categoryLabel: "Web Development",
      image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1200&auto=format&fit=crop",
      description: "Automotive brand site with product catalog and inquiries.",
      liveUrl: "https://3remotors.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "FusionCortex",
      category: "web",
      categoryLabel: "Web Development",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
      description: "Tech solutions site highlighting engineering and AI capabilities.",
      liveUrl: "https://fusioncortex.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "BitWords Inc Platform",
      category: "saas",
      categoryLabel: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
      description: "Scalable SaaS platform built with React & Node.js. Achieved 40% performance improvement through optimization and modern multi-tenant architecture.",
      liveUrl: "https://bitwords.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "Skimming AI",
      category: "saas",
      categoryLabel: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      description: "AI-powered SaaS platform with subscription management, user dashboards, and conversion-optimized onboarding flows.",
      liveUrl: "https://www.skimming.ai/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "FreeTool AI",
      category: "saas",
      categoryLabel: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop",
      description: "Multi-tenant SaaS directory platform with categories, search, and outbound link management at scale.",
      liveUrl: "https://freetoolai.com/",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "Ekhata ERP System",
      category: "saas",
      categoryLabel: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      description: "Enterprise Resource Planning SaaS with AI integration, LLM models, and comprehensive backend automation for business operations.",
      liveUrl: "#",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "Connect Solutions ML Platform",
      category: "ai",
      categoryLabel: "AI Automation",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
      description: "Machine learning platform with 3 deployed ML models for predictive analytics and process automation.",
      liveUrl: "#",
      githubUrl: "https://github.com/Jawa090",
    },
    {
      title: "AI Content Generator",
      category: "ai",
      categoryLabel: "AI Automation",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      description: "GPT-powered content generation tool for marketing copy, blog posts, and social media. Reduces content production time by 70%.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sentiment Analysis Dashboard",
      category: "ai",
      categoryLabel: "AI Automation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      description: "Real-time sentiment analysis tool for customer feedback and social media mentions with interactive trend visualizations.",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Smart Inventory Predictor",
      category: "ai",
      categoryLabel: "AI Automation",
      image: "https://images.unsplash.com/photo-1566137147977-7d51d6c1c778?q=80&w=1000&auto=format&fit=crop",
      description: "ML-powered inventory management that predicts stock requirements from historical data and seasonal trends, cutting overstock costs by 30%.",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "saas", label: "SaaS Platform" },
    { id: "ai", label: "AI Automation" },
  ];

  return (
    <>
    <SEO
      title="Portfolio | 40+ Projects Delivered for NYC Businesses | DevGenX"
      description="Explore our portfolio of 40+ software projects delivered for New York businesses. MERN stack web apps, AI solutions, Python development, data analytics & graphic design. Real results for real clients."
      keywords="software development portfolio NYC, web development projects New York, AI project examples, MERN stack portfolio, React development projects, custom software examples Manhattan, DevGenX portfolio, NYC development agency work"
      schema={[portfolioSchema]}
    />
    <div className="pt-20 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeader
          title="Stuff We've Built"
          subtitle="Real projects for real clients. Click any card to see details, live demos, and what we actually delivered."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                  : "glass-card text-white/70 hover:text-white"
              )}
              onClick={() => setActiveCategory(category.id as Category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <PortfolioCard
                key={item.title}
                title={item.title}
                category={item.categoryLabel}
                image={item.image}
                description={item.description}
                liveUrl={item.liveUrl}
                githubUrl={item.githubUrl}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <p className="text-white/70 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
    </>
  );
};

export default Portfolio;

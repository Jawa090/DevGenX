
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import BlogPost from "@/components/BlogPost";
import { Button } from "@/components/ui/button";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "DevGenX Blog - Enterprise Software Insights for NYC Businesses",
  "description": "Expert insights on AI automation, SaaS development, and enterprise software trends for New York businesses.",
  "url": "https://devgenx.vercel.app/blog/",
  "publisher": { "@type": "Organization", "name": "DevGenX", "url": "https://devgenx.vercel.app" }
};

const Blog = () => {
  const blogPosts = [
    {
      title: "How AI Automation Reduces Operational Costs by 40% for NYC Businesses",
      excerpt: "Discover how Manhattan and Brooklyn companies are using intelligent automation to eliminate manual work, reduce errors, and cut operational expenses. Real case studies with ROI analysis.",
      date: "2024-05-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      category: "AI Automation",
    },
    {
      title: "Building Multi-Tenant SaaS Platforms: Architecture Guide for Startups",
      excerpt: "Complete technical guide to building scalable SaaS applications. Database design, tenant isolation, subscription management, and scaling strategies for handling millions of users.",
      date: "2024-05-10",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1677442135017-cccf91b68ecd?q=80&w=2070&auto=format&fit=crop",
      category: "SaaS Development",
    },
    {
      title: "Enterprise Software Development Cost in New York: 2024 Pricing Guide",
      excerpt: "What NYC businesses actually pay for custom software development. Breakdown of costs for AI automation, SaaS platforms, CRM systems, and enterprise applications with real project examples.",
      date: "2024-05-05",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1969&auto=format&fit=crop",
      category: "Business Intelligence",
    }
  ];

  return (
    <>
    <SEO
      title="Blog | AI Automation & SaaS Development Insights for NYC Businesses | DevGenX"
      description="Expert insights on AI automation, SaaS development, enterprise software costs, and technology trends for New York businesses. Practical guides with real NYC case studies and ROI analysis."
      keywords="AI automation blog, SaaS development guide, enterprise software NYC blog, software development costs New York, AI integration insights, technology blog NYC, DevGenX blog, business automation articles"
      schema={[blogSchema]}
    />
    <section className="container mx-auto py-16 px-6 md:px-12">
      <div className="flex flex-col items-center mb-12">
        <SectionHeader
          title="Enterprise Software Insights"
          subtitle="Expert insights on AI automation, SaaS development, and enterprise software trends for New York businesses."
        />
        
        {/* Admin access button removed as per user request */}
      </div>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} index={index} />
        ))}
      </motion.div>
      
      <div className="mt-16 text-center">
        <Link to="/contact">
          <motion.button 
            className="bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg px-6 py-3 hover:opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team For More
          </motion.button>
        </Link>
      </div>
    </section>
    </>
  );
};

export default Blog;

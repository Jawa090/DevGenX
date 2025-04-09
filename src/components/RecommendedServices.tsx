
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Cpu, PaintBucket, Terminal, Database, BrainCircuit, ChevronRight } from "lucide-react";
import { useGeoLocation } from "@/contexts/GeoLocationContext";
import SectionHeader from "./SectionHeader";

interface Service {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  regions: string[];
  tags: string[];
}

const services: Service[] = [
  {
    id: "mern",
    icon: <Code size={40} />,
    title: "MERN Stack Development",
    description: "Full-stack web solutions with MongoDB, Express.js, React, and Node.js.",
    link: "/services#mern",
    regions: ["North America", "Europe"],
    tags: ["web", "development", "frontend", "backend"]
  },
  {
    id: "ai",
    icon: <Cpu size={40} />,
    title: "AI Solutions",
    description: "Leverage the power of artificial intelligence for your business with custom AI applications.",
    link: "/services#ai",
    regions: ["North America", "Europe", "Asia"],
    tags: ["ai", "machine learning", "automation", "data"]
  },
  {
    id: "design",
    icon: <PaintBucket size={40} />,
    title: "Graphic Design",
    description: "Eye-catching visual designs that communicate your brand message effectively.",
    link: "/services#design",
    regions: ["Global"],
    tags: ["design", "branding", "visual", "creative"]
  },
  {
    id: "python",
    icon: <Terminal size={40} />,
    title: "Python Development",
    description: "Custom Python solutions for data processing, automation, and backend services.",
    link: "/services#python",
    regions: ["Europe", "Asia", "North America"],
    tags: ["python", "development", "automation", "backend"]
  },
  {
    id: "data",
    icon: <Database size={40} />,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights for informed business decisions.",
    link: "/services#data",
    regions: ["North America", "Europe", "Asia"],
    tags: ["data", "analysis", "insights", "business intelligence"]
  },
  {
    id: "ml",
    icon: <BrainCircuit size={40} />,
    title: "Machine Learning",
    description: "Advanced ML solutions that help your business automate processes and gain insights.",
    link: "/services#ml",
    regions: ["North America", "Europe", "Asia"],
    tags: ["ai", "machine learning", "deep learning", "algorithms"]
  }
];

// Map continent codes to regions
const continentToRegion: Record<string, string> = {
  "NA": "North America",
  "SA": "South America",
  "EU": "Europe",
  "AS": "Asia",
  "AF": "Africa",
  "OC": "Oceania"
};

const RecommendedServices = () => {
  const { location } = useGeoLocation();
  const [recommended, setRecommended] = useState<Service[]>([]);
  
  useEffect(() => {
    if (location.loading) return;
    
    // Simple recommendation algorithm based on location and browser behavior
    const userRegion = continentToRegion[location.continent] || "Global";
    
    // Filter services relevant to the user's region
    let relevantServices = services.filter(service => 
      service.regions.includes(userRegion) || service.regions.includes("Global")
    );
    
    // If no region-specific services found, show all
    if (relevantServices.length === 0) {
      relevantServices = services;
    }
    
    // Further personalize based on browser history/behavior
    // This is a simplified version for demo purposes
    // In a real app, you'd use more sophisticated algorithms
    
    // Get user interests from browser history (simulated)
    const simulatedUserInterests = getSimulatedUserInterests();
    
    // Score services based on tags matching interests
    const scoredServices = relevantServices.map(service => {
      const interestScore = service.tags.reduce((score, tag) => {
        return score + (simulatedUserInterests.includes(tag) ? 1 : 0);
      }, 0);
      
      return { service, score: interestScore };
    });
    
    // Sort by score and take top 3
    const topRecommendations = scoredServices
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.service);
    
    setRecommended(topRecommendations);
  }, [location]);
  
  // Simulated function to get user interests
  // In a real app, this would be based on actual user behavior
  const getSimulatedUserInterests = () => {
    // For demo purposes, return random interests
    const allInterests = ["web", "development", "design", "ai", "data", "python", "machine learning"];
    const numInterests = Math.floor(Math.random() * 3) + 2; // 2-4 interests
    const interests = [];
    
    for (let i = 0; i < numInterests; i++) {
      const randomIndex = Math.floor(Math.random() * allInterests.length);
      interests.push(allInterests[randomIndex]);
      allInterests.splice(randomIndex, 1);
    }
    
    return interests;
  };
  
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <SectionHeader 
          title="Recommended for You"
          subtitle={`Personalized service recommendations based on your location${!location.loading ? ` (${location.city}, ${location.country})` : ''}`}
        />
        
        {location.loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {recommended.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-neon-blue mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/5">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendedServices;

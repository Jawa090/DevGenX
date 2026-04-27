
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lock, Filter } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

// Sample video data - in a real app this would come from an API
const sampleVideos = [
  {
    id: "1",
    title: "React 19 New Features Demo",
    description: "Exploring the latest features in React 19 with practical examples on how they can improve your development workflow.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-06-15",
    duration: "12:45",
    category: "React"
  },
  {
    id: "2",
    title: "Building AI-Powered Web Apps",
    description: "Learn how to integrate OpenAI's GPT-4 into your web applications to create intelligent user experiences.",
    thumbnail: "https://images.unsplash.com/photo-1677442135096-ba12cc1b3ff6?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-05-22",
    duration: "18:30",
    category: "AI"
  },
  {
    id: "3",
    title: "Next.js 14 Server Components",
    description: "A deep dive into Next.js 14 server components and how they can improve performance in your applications.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-04-10",
    duration: "15:20",
    category: "Next.js"
  },
  {
    id: "4",
    title: "TensorFlow.js for Web Developers",
    description: "Introducing machine learning in the browser with TensorFlow.js - no Python required!",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-03-28",
    duration: "22:15",
    category: "ML"
  },
  {
    id: "5",
    title: "Modern CSS Techniques",
    description: "Exploring the latest CSS features like container queries, cascade layers, and subgrid with practical examples.",
    thumbnail: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-02-15",
    duration: "14:50",
    category: "CSS"
  },
  {
    id: "6",
    title: "WebAssembly for JavaScript Developers",
    description: "Learn how to use WebAssembly to supercharge your web applications with near-native performance.",
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2023-01-20",
    duration: "19:30",
    category: "WebAssembly"
  }
];

type Category = "all" | "react" | "ai" | "nextjs" | "ml" | "css" | "webassembly";

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const navigate = useNavigate();

  const categories = [
    { id: "all", label: "All Videos" },
    { id: "react", label: "React" },
    { id: "ai", label: "AI" },
    { id: "nextjs", label: "Next.js" },
    { id: "ml", label: "Machine Learning" },
    { id: "css", label: "CSS" },
    { id: "webassembly", label: "WebAssembly" },
  ];



  const filteredVideos = activeCategory === "all"
    ? sampleVideos
    : sampleVideos.filter(video => video.category.toLowerCase() === activeCategory);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <SectionHeader 
          title="Tech Demo Videos"
          subtitle="Watch our latest tech demos and tutorials featuring cutting-edge technologies and development techniques."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={
                activeCategory === category.id
                  ? "px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                  : "px-6 py-3 rounded-full text-sm font-medium glass-card text-white/70 hover:text-white"
              }
              onClick={() => setActiveCategory(category.id as Category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </motion.div>

        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <p className="text-white/70 text-lg">No videos found in this category.</p>
          </motion.div>
        )}


      </div>
    </div>
  );
};

export default Videos;

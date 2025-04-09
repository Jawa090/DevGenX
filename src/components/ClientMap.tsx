
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface ClientLocation {
  id: number;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  projectType: string;
}

const clientLocations: ClientLocation[] = [
  { id: 1, city: "New York", country: "USA", latitude: 40.7128, longitude: -74.0060, projectType: "MERN Stack" },
  { id: 2, city: "London", country: "UK", latitude: 51.5074, longitude: -0.1278, projectType: "Graphic Design" },
  { id: 3, city: "Tokyo", country: "Japan", latitude: 35.6762, longitude: 139.6503, projectType: "AI Solution" },
  { id: 4, city: "Sydney", country: "Australia", latitude: -33.8688, longitude: 151.2093, projectType: "Data Analysis" },
  { id: 5, city: "Berlin", country: "Germany", latitude: 52.5200, longitude: 13.4050, projectType: "Machine Learning" },
  { id: 6, city: "Toronto", country: "Canada", latitude: 43.6532, longitude: -79.3832, projectType: "Python Development" },
  { id: 7, city: "Paris", country: "France", latitude: 48.8566, longitude: 2.3522, projectType: "MERN Stack" },
  { id: 8, city: "Singapore", country: "Singapore", latitude: 1.3521, longitude: 103.8198, projectType: "AI Solution" },
  { id: 9, city: "Mumbai", country: "India", latitude: 19.0760, longitude: 72.8777, projectType: "Graphic Design" },
  { id: 10, city: "São Paulo", country: "Brazil", latitude: -23.5505, longitude: -46.6333, projectType: "Data Analysis" },
];

const ClientMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mapRef.current) return;
    
    const map = mapRef.current;
    const tooltip = tooltipRef.current;
    
    // Simple function to convert lat/long to x/y coordinates on our div
    const convertToXY = (lat: number, long: number, element: HTMLElement) => {
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      
      // Convert longitude from -180...180 to 0...width
      const x = (long + 180) * (width / 360);
      
      // Convert latitude from -90...90 to height...0
      const y = (90 - lat) * (height / 180);
      
      return { x, y };
    };
    
    // Create dots for each client location
    clientLocations.forEach(location => {
      const { x, y } = convertToXY(location.latitude, location.longitude, map);
      
      const dot = document.createElement('div');
      dot.className = 'absolute w-2 h-2 bg-neon-blue rounded-full cursor-pointer';
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      
      // Pulse animation
      const pulse = document.createElement('div');
      pulse.className = 'absolute w-4 h-4 -translate-x-1/4 -translate-y-1/4 bg-neon-blue/30 rounded-full animate-pulse-slow';
      dot.appendChild(pulse);
      
      // Show tooltip on hover
      dot.addEventListener('mouseenter', () => {
        if (!tooltip) return;
        
        tooltip.innerHTML = `
          <div class="font-bold">${location.city}, ${location.country}</div>
          <div class="text-sm text-white/70">${location.projectType} Project</div>
        `;
        
        tooltip.style.left = `${x + 15}px`;
        tooltip.style.top = `${y}px`;
        tooltip.classList.remove('opacity-0');
        tooltip.classList.add('opacity-100');
      });
      
      dot.addEventListener('mouseleave', () => {
        if (!tooltip) return;
        tooltip.classList.remove('opacity-100');
        tooltip.classList.add('opacity-0');
      });
      
      map.appendChild(dot);
    });
    
  }, []);
  
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-black/40 to-black/60">
      <div className="container mx-auto">
        <SectionHeader 
          title="Our Global Impact"
          subtitle="We've helped clients from around the world transform their digital presence"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 relative"
        >
          <div 
            ref={mapRef} 
            className="relative w-full h-[400px] sm:h-[500px] bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center rounded-lg overflow-hidden neo-blur"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>
          
          <div 
            ref={tooltipRef}
            className="absolute z-10 p-2 bg-black/80 backdrop-blur-md rounded text-white text-sm transition-opacity duration-200 opacity-0 pointer-events-none"
          ></div>
          
          <div className="mt-6 text-center">
            <p className="text-white/70">Our clients span across 10+ countries and 4 continents</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientMap;

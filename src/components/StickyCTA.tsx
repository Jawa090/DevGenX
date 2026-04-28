import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.pageYOffset <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleClick = () => {
    // Open Calendly or contact page
    window.open("https://calendly.com/devgenx", "_blank"); // Replace with your Calendly link
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:bottom-6 md:left-auto md:right-24"
        >
          <div className="md:max-w-sm mx-auto md:mx-0">
            <div className="glass-card border border-white/20 rounded-t-2xl md:rounded-2xl p-4 shadow-2xl relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDismiss}
                className="absolute top-2 right-2 text-white/70 hover:text-white hover:bg-white/10 h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    Free 30-Min Consultation
                  </h3>
                  <p className="text-white/70 text-xs">
                    Discuss your project with our experts
                  </p>
                </div>
                <Button
                  onClick={handleClick}
                  className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 text-sm px-4"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;

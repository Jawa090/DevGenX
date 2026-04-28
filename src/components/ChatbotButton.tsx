
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Chatbot from "@/components/Chatbot";
import { cn } from "@/lib/utils";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "w-80 sm:w-96 h-[500px] neo-blur rounded-lg shadow-lg overflow-hidden",
              "flex flex-col border border-white/10"
            )}
            style={{ position: "relative" }} // Add position relative to fix framer-motion warning
          >
            <div className="p-3 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-neon-blue/30 to-neon-purple/30">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Bot className="text-neon-blue h-6 w-6" />
                </div>
                <h3 className="font-bold text-white">devGenX Assistant</h3>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleClose}
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-hidden relative">
              <Chatbot />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 shadow-2xl border border-white/20"
            >
              <motion.div
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [0, -2, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <Bot className="h-8 w-8 text-white" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotButton;

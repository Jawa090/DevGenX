
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="flex flex-col items-center justify-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Loader Animation Container */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Core Icon */}
          <motion.div 
            className="z-10 bg-gradient-to-r from-neon-blue to-neon-purple p-6 rounded-lg shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Cpu className="w-16 h-16 text-white" />
          </motion.div>
        </div>

        {/* Brand Text */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h1 className="text-3xl font-futuristic">
            <span className="text-neon-blue">Dev</span>
            <span className="text-neon-green">Gen</span>
            <span className="text-neon-purple">X</span>
          </h1>
          <p className="text-sm text-white/60 mt-2 tracking-widest uppercase">Initializing</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;

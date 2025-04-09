
import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [accentColor, setAccentColor] = useState<"blue" | "purple" | "green" | "pink">("blue");
  
  const colors = [
    { name: "blue", value: "#00FFFF", class: "bg-neon-blue" },
    { name: "purple", value: "#A020F0", class: "bg-neon-purple" },
    { name: "green", value: "#39FF14", class: "bg-green-400" },
    { name: "pink", value: "#FF10F0", class: "bg-neon-pink" },
  ];
  
  const handleAccentChange = (color: "blue" | "purple" | "green" | "pink") => {
    setAccentColor(color);
    document.documentElement.dataset.accent = color;
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
        >
          {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="neo-blur border border-white/10 w-48 text-white">
        <div className="px-2 py-1.5 text-xs font-medium text-white/50">
          Choose Theme
        </div>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center cursor-pointer"
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark Mode</span>
          {theme === "dark" && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto h-2 w-2 rounded-full bg-neon-blue"
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center cursor-pointer"
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light Mode</span>
          {theme === "light" && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto h-2 w-2 rounded-full bg-neon-blue"
            />
          )}
        </DropdownMenuItem>
        
        <div className="px-2 py-1.5 text-xs font-medium text-white/50 mt-2">
          Accent Color
        </div>
        <div className="px-2 py-2 flex justify-between">
          {colors.map((color) => (
            <motion.button
              key={color.name}
              whileHover={{ scale: 1.2 }}
              onClick={() => handleAccentChange(color.name as "blue" | "purple" | "green" | "pink")}
              className={`h-6 w-6 rounded-full ${color.class} flex items-center justify-center`}
            >
              {accentColor === color.name && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-2 w-2 rounded-full bg-white"
                />
              )}
            </motion.button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;

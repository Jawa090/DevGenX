
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  Menu,
  X,
  Hexagon,
  CircuitBoard,
  ArrowUp,
  Microchip
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "./ThemeSwitcher";

const routes = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 neo-blur" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="relative">
              <Hexagon className="h-8 w-8 text-neon-blue animate-pulse-slow" strokeWidth={1.5} />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <CircuitBoard className="h-4 w-4 text-neon-green" strokeWidth={1.5} />
              </motion.div>
            </div>
            <motion.span 
              className="font-futuristic text-2xl font-bold text-white ml-2 flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-gradient">Dev</span>
              <span className="text-neon-blue animate-pulse-slow">Gen</span>
              <span className="relative text-neon-green">
                X
                <motion.span 
                  className="absolute -inset-1 bg-neon-green/20 blur-sm rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </motion.span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-white/70"
                )
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden container mx-auto px-6 overflow-hidden"
          >
            <nav className="flex flex-col py-4 space-y-4">
              {routes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium transition-colors py-2 hover:text-white",
                      isActive ? "text-white" : "text-white/70"
                    )
                  }
                >
                  {route.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;

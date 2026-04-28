import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") return null;

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    ...pathnames.map((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ");
      return { name: displayName, path };
    }),
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 pt-24 pb-4"
    >
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-white/40 mx-2" />
            )}
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-white font-medium flex items-center">
                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                {item.name}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-white/70 hover:text-neon-blue transition-colors flex items-center"
              >
                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  );
};

export default Breadcrumb;
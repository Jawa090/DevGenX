
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";

// Context Providers
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import CostCalculator from "./pages/CostCalculator";

// Service Pages
import AIAutomation from "./pages/services/AIAutomation";
import SaaSPlatforms from "./pages/services/SaaSPlatforms";
import EnterpriseSoftware from "./pages/services/EnterpriseSoftware";
import DataEngineering from "./pages/services/DataEngineering";
import APIDevelopment from "./pages/services/APIDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";

// Components
import Layout from "./components/Layout";
import TrailingSlashRedirect from "./components/TrailingSlashRedirect";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <TrailingSlashRedirect />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="services/" element={<Services />} />
                  <Route path="services/ai-automation/" element={<AIAutomation />} />
                  <Route path="services/saas-development/" element={<SaaSPlatforms />} />
                  <Route path="services/enterprise-software/" element={<EnterpriseSoftware />} />
                  <Route path="services/data-engineering/" element={<DataEngineering />} />
                  <Route path="services/api-development/" element={<APIDevelopment />} />
                  <Route path="services/ui-ux-design/" element={<UIUXDesign />} />
                  <Route path="portfolio/" element={<Portfolio />} />
                  <Route path="blog/" element={<Blog />} />
                  <Route path="blog/:blogId/" element={<BlogDetails />} />
                  <Route path="about/" element={<About />} />
                  <Route path="contact/" element={<Contact />} />
                  <Route path="calculator/" element={<CostCalculator />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

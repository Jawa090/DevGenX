
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ChatbotButton from "./ChatbotButton";
import BackToTop from "./BackToTop";
import Breadcrumb from "./Breadcrumb";
import ExitIntentPopup from "./ExitIntentPopup";
import StickyCTA from "./StickyCTA";
import { motion, AnimatePresence } from "framer-motion";


const Layout = () => {
  const location = useLocation();
  // Reset scroll position when changing routes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <Breadcrumb />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ChatbotButton />
      <BackToTop />
      <StickyCTA />
      <ExitIntentPopup />
    </div>
  );
};

export default Layout;

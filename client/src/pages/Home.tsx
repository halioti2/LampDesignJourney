import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BeginningSection from "@/components/BeginningSection";
import ExplorationSection from "@/components/ExplorationSection";
import CollaborationSection from "@/components/CollaborationSection";
import CurrentWorkSection from "@/components/CurrentWorkSection";
import FutureSection from "@/components/FutureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    // Set page title
    document.title = "Luminous Journey | Artisan Lamp Designer";
    
    // Add custom font
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap";
    document.head.appendChild(fontLink);
    
    // Set initial scroll position
    window.scrollTo(0, 0);
    
    return () => {
      // Clean up
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="font-sans antialiased"
    >
      <Navbar />
      <HeroSection />
      <BeginningSection />
      <ExplorationSection />
      <CollaborationSection />
      <CurrentWorkSection />
      <FutureSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Home;

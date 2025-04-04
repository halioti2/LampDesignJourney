import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/constants";
import img8281 from "@assets/IMG_8281.jpeg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={img8281}
          alt="Artistic lamp design casting soft light"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
          Illuminating Design
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8">
          A journey through light, material, and form
        </p>
        <motion.a
          href={`#${SECTIONS.BEGINNING}`}
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById(SECTIONS.BEGINNING);
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 100,
                behavior: "smooth",
              });
            }
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-block bg-[#D4B98C] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all transform hover:-translate-y-1 font-medium"
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
        >
          Explore My Journey
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;

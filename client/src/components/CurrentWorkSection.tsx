import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/constants";
import img8281 from "@assets/IMG_8281.jpeg";
import img2215 from "@assets/IMG_2215.jpeg";
import img8277 from "@assets/IMG_8277.jpeg";
import img8151 from "@assets/IMG_8151.jpeg";

const CurrentWorkSection = () => {
  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const currentWorks = [
    {
      src: img2215,
      alt: "Table lamp with layered acrylic shade",
      title: "Orbital Table Lamp"
    },
    {
      src: img8277,
      alt: "Minimal standing floor lamp",
      title: "Prism Floor Light"
    },
    {
      src: img8151,
      alt: "Pendant lamp with complex light pattern",
      title: "Halo Pendant Light"
    }
  ];

  return (
    <section id={SECTIONS.CURRENT} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            variants={itemVariant}
          >
            Current Work
          </motion.h2>
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-[#D4B98C] to-transparent max-w-xs mx-auto mb-16"
            variants={itemVariant}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="mb-16 relative overflow-hidden rounded-lg shadow-lg"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariant}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src={img8281}
              alt="Current lamp design studio shot"
              className="w-full h-[70vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-serif mb-2">Translucent Series</h3>
              <p className="max-w-2xl">
                My current work explores the intersection of frosted acrylics, minimal forms and ambient lighting 
                while drawing inspiration from textures from seashells. Each piece balances functional illumination 
                with sculptural presence.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {currentWorks.map((work, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              variants={itemVariant}
            >
              <img
                src={work.src}
                alt={work.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-75 p-4 text-white opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-mono text-sm">{work.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.a
            variants={itemVariant}
            whileHover={{ y: -5 }}
            whileTap={{ y: 0 }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 100,
                  behavior: "smooth",
                });
              }
            }}
            className="inline-block bg-[#D4B98C] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all transform hover:-translate-y-1 font-medium"
          >
            Inquire About Commissions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentWorkSection;

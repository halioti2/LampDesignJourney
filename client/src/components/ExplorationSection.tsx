import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/constants";
import img7978 from "@assets/IMG_7978.jpeg";
import img7961 from "@assets/IMG_7961.jpeg";
import img8BC8698A from "@assets/8BC8698A-76C1-4A14-9564-FA8D0A463D21.jpeg";

const ExplorationSection = () => {
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

  const images = [
    {
      src: img7978,
      alt: "Frosted acrylic coaster design",
      caption: "Early acrylic experiments",
    },
    {
      src: img7978, // Using the same image as requested
      alt: "Laser cutting process for acrylic designs",
      caption: "Laser cutting process",
    },
    {
      src: img7961,
      alt: "First acrylic lamp prototype",
      caption: "First acrylic lamp prototype",
    },
    {
      src: img8BC8698A,
      alt: "Wooden and acrylic coaster design",
      caption: "Wood and acrylic combinations",
    },
  ];

  return (
    <section id={SECTIONS.EXPLORATION} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariant}>
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
              variants={itemVariant}
            >
              Material Exploration
            </motion.h2>
            <motion.div 
              className="h-px bg-gradient-to-r from-transparent via-[#D4B98C] to-transparent mb-10"
              variants={itemVariant}
            ></motion.div>
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              variants={itemVariant}
            >
              My fascination with light led me to join the maker space as a teacher, 
              which opened up opportunities to experiment with new materials. I became 
              particularly drawn to frosted acrylics and their translucent properties—how 
              they diffuse light in ways that create soft, ethereal glows.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed mb-8"
              variants={itemVariant}
            >
              This exploration began with creating laser-etched coasters for friends, 
              allowing me to understand the interplay between material, texture, and light. 
              These small projects gradually evolved into lamp designs where I could apply 
              my growing knowledge of acrylic's unique characteristics.
            </motion.p>
            <motion.div 
              className="flex items-center space-x-3"
              variants={itemVariant}
            >
              <div className="w-10 h-10 rounded-full bg-[#D4B98C]"></div>
              <div className="w-10 h-10 rounded-full bg-[#9A8C78]"></div>
              <div className="w-10 h-10 rounded-full bg-primary opacity-30"></div>
              <p className="font-mono text-sm ml-2">Material color studies</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={itemVariant}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                variants={itemVariant}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-75 p-3 text-white opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-mono text-xs">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplorationSection;

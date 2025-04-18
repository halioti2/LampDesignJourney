import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/constants";
import img6902 from "@assets/IMG_6902.jpeg";
import img8645 from "@assets/IMG_8645.jpeg";
import img8644 from "@assets/IMG_8644.jpeg";
import img8643 from "@assets/IMG_8643.jpeg";
import img8642 from "@assets/IMG_8642.jpeg";
import img8641 from "@assets/IMG_8641.jpeg";
import img8640 from "@assets/IMG_8640.jpeg";
import img8639 from "@assets/IMG_8639.jpeg";
import img8637 from "@assets/IMG_8637.jpeg";
import { useState } from "react";
import ImageLightbox, { ImageType } from "./ImageLightbox";

const CollaborationSection = () => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  
  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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

  const experimentalImages = [
    {
      src: img8645,
      alt: "Paper layering experiment",
      caption: "Paper layering experiment"
    },
    {
      src: img8644,
      alt: "Paper layering experiment",
      caption: "Paper layering experiment"
    },
    {
      src: img8643,
      alt: "Light refraction study",
      caption: "Light refraction study"
    },
    {
      src: img8642,
      alt: "Material texture exploration",
      caption: "Material texture exploration"
    },
    {
      src: img8641,
      alt: "Shadow casting prototype",
      caption: "Shadow casting prototype"
    },
    {
      src: img8640,
      alt: "Light diffusion test",
      caption: "Light diffusion test"
    },
    {
      src: img8639,
      alt: "Mixed material prototype",
      caption: "Mixed material prototype"
    },
    {
      src: img8637,
      alt: "Sketches of lamp details",
      caption: "Sketches of lamp details"
    }
  ];

  return (
    <section id={SECTIONS.COLLABORATION} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            variants={itemVariant}
          >
            Collaboration & Experimentation
          </motion.h2>
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-[#D4B98C] to-transparent mb-10"
            variants={itemVariant}
          ></motion.div>
          <motion.p 
            className="text-lg leading-relaxed mb-8"
            variants={itemVariant}
          >
            A pivotal moment in my journey came when I met a fellow designer, Alec Riney, who shared my 
            passion for lighting design and 3D printing. Our collaborative sessions sparked new ideas 
            as we began sketching lamp concepts and testing unexpected light effects.
          </motion.p>
          <motion.p 
            className="text-lg leading-relaxed"
            variants={itemVariant}
          >
            We explored lighting and materials—from observing how light plays on water rippling over 
            mirrors to layering different paper textures around light sources. These experiments pushed 
            my understanding of how materials interact with light and opened up new design possibilities.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="md:col-span-3 group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            variants={itemVariant}
            onClick={() => setSelectedImage({
              src: img6902,
              alt: "Paper layering experiments",
              caption: "Paper layering experiments"
            })}
          >
            <img
              src={img6902}
              alt="Paper layering experiments"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-75 p-4 text-white opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-mono text-sm">Paper layering experiments</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experimentalImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              variants={itemVariant}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Image Lightbox */}
        <ImageLightbox 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      </div>
    </section>
  );
};

export default CollaborationSection;

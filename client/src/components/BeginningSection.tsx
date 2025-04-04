import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/constants";
import img8131 from "@assets/IMG_8131.jpeg";
import img8132 from "@assets/IMG_8132.jpeg";
import img8134 from "@assets/IMG_8134.jpeg";

const ImageCard = ({ image, alt, caption }: { image: string; alt: string; caption: string }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg shadow-md"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-75 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-mono text-sm">{caption}</p>
      </div>
    </motion.div>
  );
};

const BeginningSection = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
      src: img8131,
      alt: "Early lamp prototype in living room corner",
      caption: "First prototype placement experiments",
    },
    {
      src: img8132,
      alt: "Testing lamp placement in bedroom setting",
      caption: "Late night light effect studies",
    },
    {
      src: img8134,
      alt: "Repurposed floor lamp for design study",
      caption: "Repurposed vintage lamp exploration",
    },
  ];

  return (
    <section id={SECTIONS.BEGINNING} className="py-20 md:py-28">
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
            The Beginning
          </motion.h2>
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-[#D4B98C] to-transparent mb-10"
            variants={itemVariant}
          ></motion.div>
          <motion.p 
            className="text-lg leading-relaxed mb-8"
            variants={itemVariant}
          >
            My journey into lamp design began unexpectedly at a local maker space design class. 
            What started as a casual exploration quickly turned into a passion that kept me awake into 
            the early hours of the morning. I found myself constantly repositioning my prototype lamp 
            throughout my apartment, even bringing in an old floor lamp to experiment with different 
            light effects and spatial arrangements.
          </motion.p>
          <motion.p 
            className="text-lg leading-relaxed"
            variants={itemVariant}
          >
            These initial explorations sparked a fascination with how light interacts with different 
            materials and spaces, and how a well-designed lamp can transform the atmosphere of a room.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((image, index) => (
            <motion.div key={index} variants={itemVariant}>
              <ImageCard
                image={image.src}
                alt={image.alt}
                caption={image.caption}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BeginningSection;

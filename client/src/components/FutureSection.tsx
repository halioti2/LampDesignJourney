import { motion } from "framer-motion";
import { SECTIONS, INSPIRATIONAL_ACCOUNTS, NEXT_STEPS } from "@/lib/constants";

const FutureSection = () => {
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

  return (
    <section id={SECTIONS.FUTURE} className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            variants={itemVariant}
          >
            Future Directions
          </motion.h2>
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-[#D4B98C] to-transparent mb-10"
            variants={itemVariant}
          ></motion.div>
          <motion.p 
            className="text-lg leading-relaxed mb-8"
            variants={itemVariant}
          >
            Looking ahead, I'm deeply inspired by designers who are pushing the boundaries of materials 
            and fabrication techniques. I'm particularly drawn to Instagram accounts like {' '}
            {INSPIRATIONAL_ACCOUNTS.map((account, index) => (
              <span key={index}>
                <a href={account.url} target="_blank" rel="noopener noreferrer" className="text-[#D4B98C] hover:underline">
                  {account.name}
                </a>
                {index < INSPIRATIONAL_ACCOUNTS.length - 1 && (
                  index === INSPIRATIONAL_ACCOUNTS.length - 2 ? ' and ' : ', '
                )}
              </span>
            ))} who are innovatively applying 3D printing to fields like architecture, pottery, fashion, and textiles.
          </motion.p>
          <motion.p 
            className="text-lg leading-relaxed mb-12"
            variants={itemVariant}
          >
            These explorations are guiding my next phase of lamp design, where I aim to incorporate 
            3D printing techniques to create more complex, organic forms with precisely engineered 
            light diffusion properties. I'm excited about merging traditional craft sensibilities 
            with emerging fabrication technologies.
          </motion.p>
          
          <motion.h3 
            className="text-xl font-serif font-medium mb-6"
            variants={itemVariant}
          >
            Inspirations
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {INSPIRATIONAL_ACCOUNTS.map((account, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-4 rounded-lg"
                variants={itemVariant}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href={account.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block"
                >
                  <div className="overflow-hidden rounded-lg mb-3">
                    <img
                      src={account.image}
                      alt={`${account.field} inspiration`}
                      className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h4 className="font-medium">{account.field}</h4>
                  <p className="text-sm text-neutral-600">{account.name}</p>
                </a>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="bg-primary bg-opacity-5 p-8 rounded-lg border border-[#D4B98C] border-opacity-20"
            variants={itemVariant}
          >
            <h3 className="text-xl font-serif font-medium mb-4 text-primary">Next Steps</h3>
            <ul className="space-y-3 text-primary">
              {NEXT_STEPS.map((step, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start text-white"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#D4B98C] mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-primary">{step}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;

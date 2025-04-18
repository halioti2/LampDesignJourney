import { useState } from "react";
import { motion } from "framer-motion";
import { SECTIONS, CONTACT_METHODS } from "@/lib/constants";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    
    // Clear error for this field when user types
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formState.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Email is invalid";
    }
    if (!formState.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formState.message.trim()) {
      errors.message = "Message is required";
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Form is valid, you can submit it
    setIsSubmitted(true);
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
    <section id={SECTIONS.CONTACT} className="py-20 md:py-28 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
            variants={itemVariant}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-[#D4B98C] to-transparent max-w-xs mx-auto mb-10"
            variants={itemVariant}
          ></motion.div>
          <motion.p 
            className="text-lg mb-12 opacity-90"
            variants={itemVariant}
          >
            Interested in commissioning a custom lamp or collaborating on a project? 
            I'd love to hear from you. Let's create something illuminating together.
          </motion.p>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {CONTACT_METHODS.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg h-full flex flex-col"
                variants={itemVariant}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#D4B98C] mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {method.icon === 'envelope' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  )}
                  {method.icon === 'map-marker-alt' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  )}
                  {method.icon === 'hashtag' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  )}
                </svg>
                <h3 className="font-medium mb-2">{method.title}</h3>
                {method.social ? (
                  <div className="flex justify-center space-x-4 mt-2">
                    {method.platforms?.map((platform, i) => (
                      <a 
                        key={i} 
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-white hover:text-[#D4B98C] transition-colors"
                        aria-label={platform.icon}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {platform.icon === 'instagram' && (
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          )}
                        </svg>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="opacity-80 whitespace-pre-line mt-auto">{method.detail}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="bg-white bg-opacity-5 p-8 rounded-lg max-w-2xl mx-auto"
            variants={itemVariant}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-[#D4B98C] mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                <p>Your message has been received. I'll be in touch soon.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-[#D4B98C] hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-left mb-2 opacity-90">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-md bg-white bg-opacity-10 border ${
                        formErrors.name 
                          ? "border-red-500" 
                          : "border-white border-opacity-20 focus:border-[#D4B98C]"
                      } focus:outline-none transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-sm mt-1 text-left">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-left mb-2 opacity-90">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-md bg-white bg-opacity-10 border ${
                        formErrors.email 
                          ? "border-red-500" 
                          : "border-white border-opacity-20 focus:border-[#D4B98C]"
                      } focus:outline-none transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-sm mt-1 text-left">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-left mb-2 opacity-90">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-md bg-white bg-opacity-10 border ${
                      formErrors.subject 
                        ? "border-red-500" 
                        : "border-white border-opacity-20 focus:border-[#D4B98C]"
                    } focus:outline-none transition-colors`}
                  />
                  {formErrors.subject && (
                    <p className="text-red-400 text-sm mt-1 text-left">{formErrors.subject}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-left mb-2 opacity-90">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-md bg-white bg-opacity-10 border ${
                      formErrors.message 
                        ? "border-red-500" 
                        : "border-white border-opacity-20 focus:border-[#D4B98C]"
                    } focus:outline-none transition-colors`}
                  />
                  {formErrors.message && (
                    <p className="text-red-400 text-sm mt-1 text-left">{formErrors.message}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ y: -5 }}
                  whileTap={{ y: 0 }}
                  className="bg-[#D4B98C] text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all transform hover:-translate-y-1 font-medium"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

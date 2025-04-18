import { useState, useEffect } from "react";
import { Link } from "wouter";
import { SECTIONS } from "@/lib/constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: `#${SECTIONS.FIRST_LAMP}`, label: "My First Lamp" },
    { href: `#${SECTIONS.EXPLORATION}`, label: "Acrylic Laser Cutting Exploration" },
    { href: `#${SECTIONS.COLLABORATION}`, label: "Collaboration" },
    { href: `#${SECTIONS.CURRENT}`, label: "Current Work" },
    { href: `#${SECTIONS.FUTURE}`, label: "Future" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white bg-opacity-95 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className={`text-2xl font-serif font-bold transition-colors duration-300 ${
            scrolled ? "text-primary" : "text-white"
          }`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          Ethan Davey
        </a>
        <nav className="flex items-center">
          <ul className="hidden md:flex space-x-6 text-sm font-medium mr-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`hover:text-accent transition-colors ${
                    scrolled ? "text-primary" : "text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href.substring(1));
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href={`#${SECTIONS.CONTACT}`}
            className={`hidden md:block px-4 py-2 rounded-md bg-[#D4B98C] hover:bg-opacity-90 text-white text-sm font-medium transition-all`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(SECTIONS.CONTACT);
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 100,
                  behavior: 'smooth',
                });
              }
            }}
          >
            Get in Touch
          </a>
          <button
            className={`md:hidden focus:outline-none transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-md"
        >
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    const element = document.getElementById(link.href.substring(1));
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`#${SECTIONS.CONTACT}`}
                className="block py-2 px-4 mt-2 rounded-md bg-[#D4B98C] text-white font-medium transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  const element = document.getElementById(SECTIONS.CONTACT);
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 100,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;

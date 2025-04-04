import { SECTIONS } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: `#${SECTIONS.BEGINNING}`, label: "The Beginning" },
    { href: `#${SECTIONS.EXPLORATION}`, label: "Material Exploration" },
    { href: `#${SECTIONS.COLLABORATION}`, label: "Collaboration" },
    { href: `#${SECTIONS.CURRENT}`, label: "Current Work" },
    { href: `#${SECTIONS.FUTURE}`, label: "Future" },
  ];

  return (
    <footer className="py-8 bg-primary bg-opacity-90 text-white text-center">
      <div className="container mx-auto px-6">
        <p className="mb-4">
          &copy; {currentYear} Luminous Journey. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center space-x-3 md:space-x-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white opacity-70 hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  window.scrollTo({
                    top: element.getBoundingClientRect().top + window.scrollY - 100,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

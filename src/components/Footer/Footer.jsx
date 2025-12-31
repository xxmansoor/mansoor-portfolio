import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram,FaWhatsapp } from "react-icons/fa";
 
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

 const message = encodeURIComponent(
    "Hello, I visited your portfolio and would like to connect"
  );

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">Muhammad Mansoor</h2>

        <nav className="flex flex-wrap justify-center mt-4 gap-4 sm:gap-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-sm sm:text-base hover:text-purple-500 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            { icon: <FaWhatsapp />, link: `https://wa.me/923348525661?text=${message}` },
            { icon: <FaGithub />, link: "https://github.com/xxmansoor" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/muhammad-mansoor-521a082b6/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/muhammad_mansoor96/" },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Dynamic Year */}
        <p className="text-xs sm:text-sm text-gray-400 mt-6">
          © {currentYear} Muhammad Mansoor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

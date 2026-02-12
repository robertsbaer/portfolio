import { Github, Linkedin, Twitter, Heart, Facebook } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" || location.pathname === "";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    if (href === "/blog") {
      navigate(href);
      return;
    }

    if (isHomePage) {
      // If on homepage, just scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to homepage then to the section
      navigate("/");
      // Small timeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/robertsbaer",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/robert-baer-3849163b0/",
      label: "LinkedIn",
    },
    // {
    //   icon: <Facebook className="w-5 h-5" />,
    //   href: "https://facebook.com/dcmademedia",
    //   label: "Facebook",
    // }
  ];

  return (
    <footer className="py-10 bg-gray-950 border-t border-gray-800 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-2xl font-bold gradient-text hover-element"
              onClick={(e) => handleNavClick(e, "#home")}
            >
              Robert<span className="text-white">.</span>
            </a>
            <p className="text-gray-400 mt-2">
              Building exceptional digital experiences.
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors duration-300 hover-element"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile-friendly navigation links */}
        <div className="flex flex-wrap justify-center mt-6 gap-4 md:gap-8">
          <a
            href="#about"
            className="text-gray-400 hover:text-primary-500 transition-colors duration-300 px-3 py-2"
            onClick={(e) => handleNavClick(e, "#about")}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-primary-500 transition-colors duration-300 px-3 py-2"
            onClick={(e) => handleNavClick(e, "#projects")}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-gray-400 hover:text-primary-500 transition-colors duration-300 px-3 py-2"
            onClick={(e) => handleNavClick(e, "#experience")}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-primary-500 transition-colors duration-300 px-3 py-2"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Contact
          </a>
          <a
            href="/blog"
            className="text-gray-400 hover:text-primary-500 transition-colors duration-300 px-3 py-2"
            onClick={(e) => handleNavClick(e, "/blog")}
            aria-label="Read our web development blog"
          >
            Blog
          </a>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Robert Baer. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using
            React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

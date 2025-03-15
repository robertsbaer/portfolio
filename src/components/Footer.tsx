import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/robertsbaer",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/robert-baer",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/robertsbaer",
      label: "Twitter",
    },
  ];

  return (
    <footer className="py-10 bg-gray-950 border-t border-gray-800 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-2xl font-bold gradient-text hover-element"
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

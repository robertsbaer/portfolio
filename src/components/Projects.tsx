import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import crushItLogo from "../assets/crushitlogo.webp";
import poll24 from "../assets/poll24.webp";
import hotones from "../assets/hotones.webp";
import obamabarack from "../assets/obamabarack.webp";
import communityPantry from "../assets/communityPantry.png";
import letersets from "../assets/letrsets.webp";
import orangemantariff from "../assets/orangemantariff.png";
import gulfofmexico from "../assets/gulfofmexico.png";
import clipboard from "../assets/clipboard.png";
import maywdaw from "../assets/maywdaw.png";
import playstoretest from "../assets/playstoretest.png";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Obama Campaign Site",
      description:
        "A modern React-based campaign website prototype showcasing responsive design and political campaign best practices. Built with Vite for optimal performance.",
      image: obamabarack,
      tags: ["React", "Vite", "Political Campaign", "Responsive Design"],
      liveUrl: "https://robertsbaer.github.io/political-campaign/",
      githubUrl: "https://github.com/robertsbaer/political-campaign",
      type: "website",
    },
    {
      title: "Hot Ones Data Viz",
      description:
        "A web app that visualizes data from the popular YouTube series 'Hot Ones', using React and Vite for a fast and interactive user experience.",
      image: hotones,
      tags: ["React", "Vite", "Data Visualization"],
      liveUrl: "https://hotones-data.com",
      githubUrl: "https://github.com/robertsbaer/hot-ones-data",
      type: "website",
    },
    {
      title: "Play Store Test",
      description: "A web app that allows android developer to finder testers",
      image: playstoretest,
      tags: ["React", "Vite", "Development"],
      liveUrl: "https://playstoretest.com/",
      githubUrl: "https://github.com/robertsbaer/",
      type: "website",
    },
    {
      title: "May w Daw",
      description:
        "A web app that allows residents of Beirut to share the status of water and electricity in their sector.",
      image: maywdaw,
      tags: ["React", "Vite", "Social"],
      liveUrl: "https://apps.apple.com/us/app/may-w-daw/id6748283609",
      githubUrl: "https://github.com/robertsbaer/may-w-daw",
      type: "app",
    },
    {
      title: "Crush'd",
      description:
        "A React Native Expo app that challenges users with fun food challenges and lets them share their experiences.",
      image: crushItLogo,
      tags: ["React Native", "Expo", "Food Challenge"],
      liveUrl: "",
      githubUrl: "https://github.com/robertsbaer",
      type: "app",
    },
    {
      title: "Polling App",
      description:
        "A React Native polling app that allows users to create and participate in real-time polls with an interactive UI.",
      image: poll24,
      tags: ["React Native", "Polling", "UI/UX"],
      liveUrl: "",
      githubUrl: "https://github.com/robertsbaer",
      type: "app",
    },
    {
      title: "Community Pantry",
      description:
        "Community Pantry is a sustainable food-sharing platform that connects neighbors with excess food to those in need.",
      image: communityPantry,
      tags: ["React Native", "Food", "Social"],
      liveUrl: "https://apps.apple.com/us/app/community-pantry/id6744461115",
      githubUrl: "https://github.com/robertsbaer",
      type: "app",
    },
    // Add more projects here
    {
      title: "Letrsets",
      description:
        "Letrsets is a web game where users find words using sets of letters. Available in French, Spanish, English, portuguese, and Turkish.",
      image: letersets,
      tags: ["React", "Game", "UI/UX"],
      liveUrl: "https://letrsets.com/",
      githubUrl: "https://github.com/robertsbaer/letrsets",
      type: "website",
    },
    {
      title: "Orange Man Tariff",
      description:
        "Orange Man Tariff displays the cost of goods with the tariff on Amazon",
      image: orangemantariff,
      tags: ["Chrome extension", "Amazon"],
      liveUrl:
        "https://chromewebstore.google.com/detail/orange-man-tariff/oolaebalghjpahklfggliaoafgejhlbm",
      githubUrl: "https://github.com/robertsbaer/OrangeManTariff",
      type: "Chrome extension",
    },
    {
      title: "Gulf Of Mexico",
      description:
        "Chrome extension for Google Maps that corrects altered names for the 'Gulf of Mexico' back to its historically recognized name in real-time.",
      image: gulfofmexico,
      tags: ["Chrome extension", "Google Maps", "Historical Accuracy"],
      liveUrl:
        "https://chromewebstore.google.com/detail/gulf-of-mexico/iimjcfobpghafhjkbjflpnlfmfiggegg",
      githubUrl: "https://github.com/robertsbaer/Gulf-Of-Mexico",
      type: "Chrome extension",
    },
    {
      title: "Mini Clipboard Manager",
      description:
        "Chrome extension that allows users to easily copy and paste text, images, and URLs from the web to their clipboard.",
      image: clipboard,
      tags: ["Chrome extension", "Clipboard", "UI/UX"],
      liveUrl:
        "https://chromewebstore.google.com/detail/mini-clipboard-manager/bjnhcllpmobjnpcmmhmjnmmfgfphbchj",
      githubUrl: "https://github.com/robertsbaer/mini-clipboard-manager",
      type: "Chrome extension",
    },
  ];

  const [selectedType, setSelectedType] = useState<string>("All"); // State for selected type

  // Get unique project types, including "All"
  const projectTypes = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.type))),
  ];

  // Filter projects based on selected type
  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-background z-0"></div>

      {/* Animated background element */}
      <motion.div
        className="absolute -left-40 bottom-20 w-96 h-96 rounded-full bg-secondary-500/10 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-primary-400 font-medium mb-4 flex items-center justify-center">
              <span className="inline-block w-10 h-[2px] bg-primary-500 mr-3"></span>
              My Work
              <span className="inline-block w-10 h-[2px] bg-primary-500 ml-3"></span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured Projects<span className="text-primary-500">.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              expertise in React and React Native development.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover-element
                  ${
                    selectedType === type
                      ? "bg-primary-500 text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                {type}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-900"
                whileHover={{ y: -10 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  width="800" // Add explicit width attribute
                  height="600" // Add explicit height attribute
                />
                {/* Project title always visible at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>

                {/* Full details on hover */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-bold mb-3 text-white drop-shadow-lg">
                    {project.title} Details
                  </h4>
                  <p className="text-gray-200 text-sm mb-4 text-center drop-shadow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary-500/30 text-primary-200 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-primary-500 hover:bg-primary-600 p-2 rounded-full transition-colors duration-300"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors duration-300"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/robertsbaer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary inline-flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

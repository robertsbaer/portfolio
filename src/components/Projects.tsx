import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import crushItLogo from "../assests/crushitlogo.png";
import poll24 from "../assests/poll24.png";
import hotones from "../assests/hotones.jpg";
import obamabarack from "../assests/obamabarack.png"; // Add this import

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
    },
    {
      title: "Hot Ones Data Viz",
      description:
        "A web app that visualizes data from the popular YouTube series 'Hot Ones', using React and Vite for a fast and interactive user experience.",
      image: hotones,
      tags: ["React", "Vite", "Data Visualization"],
      liveUrl: "https://robertsbaer.github.io/hot-ones-data/",
      githubUrl: "https://github.com/robertsbaer/hot-ones-data",
    },
    {
      title: "Crush'd",
      description:
        "A React Native Expo app that challenges users with fun food challenges and lets them share their experiences.",
      image: crushItLogo,
      tags: ["React Native", "Expo", "Food Challenge"],
      liveUrl: "",
      githubUrl: "https://github.com/robertsbaer",
    },
    {
      title: "Polling App",
      description:
        "A React Native polling app that allows users to create and participate in real-time polls with an interactive UI.",
      image: poll24,
      tags: ["React Native", "Polling", "UI/UX"],
      liveUrl: "",
      githubUrl: "https://github.com/robertsbaer",
    },
  ];

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
                  loading="lazy" // Add lazy loading attribute
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

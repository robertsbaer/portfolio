import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Smartphone, Globe, Zap, Database, Server } from "lucide-react";
import image from "../assests/headshot.jpeg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skills = [
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "React Native", icon: <Smartphone className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Globe className="w-6 h-6" /> },
    { name: "TypeScript", icon: <Zap className="w-6 h-6" /> },
    { name: "Redux", icon: <Database className="w-6 h-6" /> },
    { name: "Node.js", icon: <Server className="w-6 h-6" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background z-0"></div>

      {/* Animated background elements */}
      <motion.div
        className="absolute -right-20 top-20 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-primary-400 font-medium mb-4 flex items-center justify-center">
              <span className="inline-block w-10 h-[2px] bg-primary-500 mr-3"></span>
              About Me
              <span className="inline-block w-10 h-[2px] bg-primary-500 ml-3"></span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get to know me<span className="text-primary-500">.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt="Robert Baer" 
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                    width="600"  // Add explicit width attribute
                    height="800"  // Add explicit height attribute
                    loading="lazy"  // Also add lazy loading for performance
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-4 border-primary-500 rounded-lg -z-10"></div>
                <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-4 border-secondary-500 rounded-lg -z-10"></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">
                I'm a{" "}
                <span className="gradient-text">passionate developer</span>{" "}
                creating amazing digital experiences
              </h3>
              <p className="text-gray-300 mb-6">
                With over 10 years of experience in web and mobile development, I
                specialize in building high-performance applications using React
                and React Native. I'm passionate about creating intuitive user
                interfaces and solving complex problems with elegant solutions.
              </p>
              <p className="text-gray-300 mb-8">
                My approach combines technical expertise with a strong focus on
                user experience. I believe that great software should not only
                work flawlessly but also delight users with its design and
                functionality.
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">My Skills</h4>
                <div className="grid grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-icon"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill.icon}
                      <span className="sr-only">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="btn btn-primary inline-block hover-element"
              >
                Let's Work Together
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

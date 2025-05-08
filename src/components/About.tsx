import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Smartphone, Globe, Zap, Database, Server } from "lucide-react";
import image from "../assets/headshot.webp";

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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image Column */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt="Robert Baer"
                    className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                    width="600"
                    height="800"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-4 border-primary-500 rounded-lg -z-10"></div>
                <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-4 border-secondary-500 rounded-lg -z-10"></div>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                Washington DC Web Developer | React &amp; React Native Expert
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold">
              I'm a <span className="gradient-text">passionate developer</span> creating amazing digital experiences
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Hi, I’m Robert Baer, founder of <span className="font-semibold text-primary-400">DCMadeMedia</span>. Based in Washington DC, I specialize in building high-performance web and mobile applications with React and React Native for political campaigns, NGOs, and associations.
              </p>
              <h4 className="text-xl md:text-2xl font-semibold">
                My Expertise
              </h4>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                With over 10 years of experience, I deliver custom solutions that blend technical excellence with intuitive user experiences. My expertise covers front-end and full-stack development, responsive design, and scalable architecture.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                I’m passionate about solving complex problems and helping organizations achieve their digital goals. Let’s collaborate to bring your next project to life!
              </p>
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">My Skills</h4>
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
                className="btn btn-primary inline-block py-3 px-6 hover-element"
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

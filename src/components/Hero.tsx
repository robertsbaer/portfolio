import { motion } from 'framer-motion';
import { Code, Smartphone, ArrowDown } from 'lucide-react';
import { useEffect } from 'react';

// Add near the top of your Hero component
const Hero = () => {
  // Add this useEffect for image preloading
  useEffect(() => {
    // Preload hero background images if you have any
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };
    // Use relative paths instead of absolute paths starting with /src
    preloadImage('./assets/crushitlogo.webp');
    preloadImage('./assets/headshot.webp');
    preloadImage('./assets/hotones.webp');
    preloadImage('./assets/obamabarack.webp');
    preloadImage('./assets/poll24.webp');
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-background z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500/20 blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-secondary-500/20 blur-3xl"
          animate={{ 
            x: [0, -70, 0], 
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary-400 font-medium mb-4 flex items-center">
                <span className="inline-block w-10 h-[2px] bg-primary-500 mr-3"></span>
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Robert Baer
                <span className="text-primary-500">.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                <span className="gradient-text font-semibold">React</span> & <span className="gradient-text font-semibold">React Native</span> Developer
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                I build exceptional digital experiences that are fast, accessible, and visually appealing. Specializing in both web and mobile development.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn btn-primary hover-element flex items-center">
                  View My Work
                  <ArrowDown className="ml-2 w-4 h-4" />
                </a>
                <a href="#contact" className="btn btn-secondary hover-element">
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 floating">
                <div className="relative bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl">
                  <div className="absolute -top-6 -left-6">
                    <div className="bg-primary-500 rounded-full p-4 shadow-lg shadow-primary-500/20">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6">
                    <div className="bg-secondary-500 rounded-full p-4 shadow-lg shadow-secondary-500/20">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-500">App.tsx</div>
                  </div>
                  
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="language-jsx">
                      <div><span className="text-pink-400">import</span> <span className="text-blue-400">React</span> <span className="text-pink-400">from</span> <span className="text-green-400">'react'</span>;</div>
                      <div className="mt-2"><span className="text-pink-400">const</span> <span className="text-yellow-400">App</span> = () =&gt; {'{'}</div>
                      <div className="ml-4"><span className="text-pink-400">return</span> (</div>
                      <div className="ml-8">&lt;<span className="text-blue-400">div</span> <span className="text-purple-400">className</span>=<span className="text-green-400">"app"</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-blue-400">h1</span>&gt;Hello World!&lt;/<span className="text-blue-400">h1</span>&gt;</div>
                      <div className="ml-8">&lt;/<span className="text-blue-400">div</span>&gt;</div>
                      <div className="ml-4">);</div>
                      <div>{'}'}</div>
                      <div className="mt-2"><span className="text-pink-400">export</span> <span className="text-pink-400">default</span> <span className="text-yellow-400">App</span>;</div>
                    </code>
                  </pre>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-primary-500/30 animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-2 border-dashed border-secondary-500/20 animate-spin-slow"></div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors duration-300 hover-element">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

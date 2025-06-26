import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Zap, Rocket, Star, ArrowRight, Code, Smartphone, Globe, ArrowLeft } from 'lucide-react';

const MVPServices = () => {

  // Add to the top of your MVPServices component
useEffect(() => {
  document.title = 'MVP Development Services | DCMadeMedia';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Professional MVP development services to bring your startup idea to life quickly and efficiently.');
  }
}, []);

  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate('/consultation');
  };

  const handlePortfolioClick = () => {
    navigate('/#projects');
  };

  const scrollToContact = () => {
    navigate('/#contact');
  };

  const packages = [
    {
      name: "Starter MVP",
      price: "$2,999",
      duration: "2-3 weeks",
      description: "Perfect for validating your core idea with essential features",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Core feature development",
        "Responsive web application",
        "Basic user authentication",
        "Simple dashboard",
        "Mobile-friendly design",
        "Basic analytics setup",
        "2 rounds of revisions",
        "1 month post-launch support"
      ],
      popular: false,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Professional MVP",
      price: "$4,999",
      duration: "3-4 weeks",
      description: "Comprehensive solution with advanced features and integrations",
      icon: <Rocket className="w-8 h-8" />,
      features: [
        "Advanced feature set",
        "Custom API development",
        "Third-party integrations",
        "Advanced user management",
        "Payment processing setup",
        "Advanced analytics & reporting",
        "Admin panel",
        "3 rounds of revisions",
        "2 months post-launch support",
        "Performance optimization"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Enterprise MVP",
      price: "$7,999",
      duration: "4-6 weeks",
      description: "Full-scale MVP with enterprise-grade features and scalability",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Complete feature ecosystem",
        "Microservices architecture",
        "Advanced security implementation",
        "Multi-platform deployment",
        "Real-time features",
        "Advanced integrations",
        "Custom admin dashboard",
        "Comprehensive testing suite",
        "Unlimited revisions",
        "3 months post-launch support",
        "Scalability planning",
        "Technical documentation"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const technologies = [
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "Node.js", icon: <Globe className="w-6 h-6" /> },
    { name: "React Native", icon: <Smartphone className="w-6 h-6" /> },
    { name: "TypeScript", icon: <Code className="w-6 h-6" /> },
    { name: "MongoDB", icon: <Globe className="w-6 h-6" /> },
    { name: "AWS", icon: <Globe className="w-6 h-6" /> },
    { name: "Firebase", icon: <Globe className="w-6 h-6" /> },
    { name: "Supabase", icon: <Globe className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Back Button */}
      <div className="fixed top-20 left-2 md:top-24 md:left-4 z-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 md:gap-2 px-2 py-1.5 md:px-4 md:py-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg text-white hover:bg-gray-700/80 transition-all duration-300 group text-sm md:text-base"
        >
          <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="hidden sm:inline">Back</span>
        </button>
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              MVP <span className="gradient-text">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your innovative ideas into market-ready applications. 
              I specialize in building Minimum Viable Products that validate 
              your concept and accelerate your time to market.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConsultationClick}
              className="bg-gradient-to-r from-primary-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Start Your MVP Journey
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* What is MVP Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                What is an <span className="gradient-text">MVP?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                A Minimum Viable Product (MVP) is a development technique where a new product 
                is developed with sufficient features to satisfy early adopters. The final, 
                complete set of features is only designed and developed after considering 
                feedback from the product's initial users.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Validate your business idea quickly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Minimize development costs and risks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Get to market faster than competitors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Gather real user feedback early</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500/20 to-purple-600/20 p-8 rounded-2xl backdrop-blur-sm border border-primary-500/30"
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Rocket className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Launch Faster</h3>
                <p className="text-gray-300">
                  Get your product to market in weeks, not months. 
                  Start generating revenue and user feedback immediately.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">MVP Package</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect package that fits your needs and budget. 
              Each package is designed to deliver maximum value and rapid results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  pkg.popular 
                    ? 'border-primary-500 shadow-lg shadow-primary-500/20' 
                    : 'border-gray-700'
                } hover:border-primary-500/50 transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${pkg.gradient} rounded-full flex items-center justify-center`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold gradient-text mb-2">{pkg.price}</div>
                  <p className="text-gray-400">{pkg.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleConsultationClick}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white hover:shadow-lg'
                      : 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Built with <span className="gradient-text">Modern Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              I use cutting-edge technologies to ensure your MVP is scalable, 
              performant, and ready for future growth.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="text-primary-500 mb-3">{tech.icon}</div>
                  <h3 className="font-semibold">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/20 to-purple-600/20 p-12 rounded-2xl backdrop-blur-sm border border-primary-500/30"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Your <span className="gradient-text">MVP?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your idea and create a roadmap to bring your vision to life. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConsultationClick}
                className="bg-gradient-to-r from-primary-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePortfolioClick}
                className="border border-primary-500 text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MVPServices;

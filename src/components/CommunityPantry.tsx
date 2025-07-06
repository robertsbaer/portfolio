import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Users, MapPin, Shield, FileText, Globe } from "lucide-react";

interface SubSection {
  subtitle: string;
  items: string[];
}

interface Section {
  icon: React.ReactNode;
  title: string;
  content: string | string[] | SubSection[];
}

const CommunityPantry = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    document.title = "Community Pantry - Food Sharing App | DCMadeMedia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Community Pantry app by DCMadeMedia. Connect with your community to share food resources and reduce waste. Learn about our privacy policy and beta program."
      );
    }
  }, []);

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

  const sections: Section[] = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "About Community Pantry",
      content: `Welcome to the Community Pantry project - a special initiative designed to connect those with extra food resources to those in need within our local community. Our app allows users to list excess food items, browse available items in their neighborhood, arrange safe pickup or delivery, and track community impact through donation metrics.`
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "How It Works",
      content: [
        "List excess food items they're willing to donate",
        "Browse available items in their neighborhood", 
        "Arrange safe pickup or delivery of items",
        "Track community impact through donation metrics"
      ]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Project Status & Future Plans",
      content: [
        {
          subtitle: "Current Status",
          items: [
            "Project is completed and fully functional",
            "Looking for beta testers in the DC area",
            "Early access program available"
          ]
        },
        {
          subtitle: "Next Phase Development",
          items: [
            "Eco-friendly marketplace for sustainable products",
            "Carbon footprint tracking for food donations",
            "Community sustainability challenges and rewards",
            "Partnerships with local environmental organizations"
          ]
        }
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy & Data Protection",
      content: [
        {
          subtitle: "Information We Collect",
          items: [
            "Name and email address for account creation",
            "Data collected solely for authentication and account access",
            "No marketing, analytics, or secondary data usage"
          ]
        },
        {
          subtitle: "Your Rights (GDPR Compliant)",
          items: [
            "Access the personal data we hold about you",
            "Request correction of incorrect or incomplete data",
            "Request deletion of your data (right to be forgotten)",
            "Object to or restrict certain types of data processing"
          ]
        }
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Data Storage & Security",
      content: `Your data is securely stored using Supabase, our third-party backend service provider. We implement standard security measures to protect your information, including secure login protocols. We do not share your personal data with third parties.`
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Contact Information",
      content: `For questions about our privacy policy or to exercise your data protection rights, please contact us at robertsbaer@yahoo.com. Community Pantry is not intended for children under the age of 16.`
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Community Pantry
              <span className="text-primary-500">.</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
              Food Sharing Community App
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Status:</span>
                <span>Beta Testing Phase</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Location:</span>
                <span>Washington DC Area</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl mx-auto space-y-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {index + 1}. {section.title}
                  </h2>
                </div>
                
                {typeof section.content === 'string' ? (
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                ) : Array.isArray(section.content) && typeof section.content[0] === 'string' ? (
                  <ul className="space-y-3">
                    {(section.content as string[]).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-gray-300">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-6">
                    {(section.content as SubSection[]).map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-xl font-semibold mb-3 text-primary-400">
                          {subsection.subtitle}
                        </h3>
                        <ul className="space-y-2">
                          {subsection.items.map((item: string, itemIndex: number) => (
                            <li key={itemIndex} className="flex items-start gap-3 text-gray-300">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Beta Signup Call to Action */}
            <motion.div 
              variants={itemVariants} 
              className="text-center bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg p-8 border border-primary-500/30"
            >
              <h3 className="text-2xl font-bold mb-4">Join Our Beta Program</h3>
              <p className="text-gray-300 mb-6">
                We're looking for beta testers in the DC area. Be part of our initial launch and help build a stronger community.
              </p>
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded bg-dark-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded bg-dark-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-300 mb-1">ZIP Code</label>
                    <input 
                      type="text" 
                      id="zip" 
                      className="w-full px-4 py-2 rounded bg-dark-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">I'm interested in:</label>
                    <select 
                      id="interest" 
                      className="w-full px-4 py-2 rounded bg-dark-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="donating">Donating Food</option>
                      <option value="receiving">Receiving Food</option>
                      <option value="both">Both</option>
                      <option value="volunteering">Volunteering</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full btn btn-primary py-3 px-6 hover-element"
                  >
                    Join the Waitlist
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPantry;
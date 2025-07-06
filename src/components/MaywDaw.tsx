import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Lock, Eye, FileText, Users, Globe } from "lucide-react";

interface SubSection {
  subtitle: string;
  items: string[];
}

interface Section {
  icon: React.ReactNode;
  title: string;
  content: string | string[] | SubSection[];
}

const MaywDaw = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    document.title = "May w Daw - Privacy Policy | DCMadeMedia";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "May w Daw app privacy policy by DCMadeMedia. Learn how we collect, use, and protect your personal data in our mobile application."
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
      icon: <FileText className="w-6 h-6" />,
      title: "Introduction",
      content: `DCMadeMedia ("we," "our," or "us") operates the May w Daw mobile application (the "Service"). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.`,
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Account information (email address, username)",
            "Profile information you provide",
            "Communication data (messages in chat features)",
            "Usage analytics and app performance data",
          ],
        },
        {
          subtitle: "Automatically Collected Information",
          items: ["Crash reports and performance metrics"],
        },
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: ["To provide and maintain our Service"],
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Storage and Security",
      content: [
        {
          subtitle: "Data Storage",
          items: [
            "Your data is stored securely using industry-standard encryption",
            "We use Supabase as our backend service provider",
            "Data is stored in secure, access-controlled environments",
          ],
        },
        {
          subtitle: "Security Measures",
          items: [
            "We implement appropriate technical and organizational measures",
            "Regular security assessments and updates",
            "Access controls and authentication mechanisms",
            "Data encryption in transit and at rest",
          ],
        },
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Control",
          items: [
            "Access your personal data",
            "Correct inaccurate information",
            "Delete your account and associated data",
          ],
        },
        {
          subtitle: "Communication Preferences",
          items: ["You can manage notification settings within the app"],
        },
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Contact Information",
      content: `If you have any questions about this Privacy Policy or our data practices, please contact us at DCMadeMedia through our website or email.`,
    },
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
              May w Daw
              <span className="text-primary-500">.</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
              Privacy Policy
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Effective Date:</span>
                <span>January 1, 2024</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Last Updated:</span>
                <span>January 1, 2024</span>
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

                {typeof section.content === "string" ? (
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                ) : Array.isArray(section.content) &&
                  typeof section.content[0] === "string" ? (
                  <ul className="space-y-3">
                    {(section.content as string[]).map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-6">
                    {(section.content as SubSection[]).map(
                      (subsection, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="text-xl font-semibold mb-3 text-primary-400">
                            {subsection.subtitle}
                          </h3>
                          <ul className="space-y-2">
                            {subsection.items.map(
                              (item: string, itemIndex: number) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start gap-3 text-gray-300"
                                >
                                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{item}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Additional Sections */}
            <motion.div
              variants={itemVariants}
              className="bg-dark-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                7. Data Retention
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    We retain your personal information only as long as
                    necessary for the purposes outlined in this policy
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Account data is retained until you delete your account
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Analytics data may be retained in aggregated, anonymized
                    form
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>You can request deletion of your data at any time</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-dark-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                8. Children's Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our Service is not intended for children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-dark-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Posting the new Privacy Policy on this page</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Updating the "Last Updated" date</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Sending you a notification through the app or email
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="text-center bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg p-8 border border-primary-500/30"
            >
              <h3 className="text-2xl font-bold mb-4">
                Questions About This Policy?
              </h3>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data
                practices, we're here to help.
              </p>
              <a
                href="#contact"
                className="btn btn-primary inline-block py-3 px-6 hover-element"
              >
                Contact DCMadeMedia
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MaywDaw;

import React, { useState, useRef, lazy, Suspense, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  ArrowLeft,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Lazy load motion components
const motion = {
  div: lazy(() =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.div,
    }))
  ),
  button: lazy(() =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.button,
    }))
  ),
};

const Consultation = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    preferredTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Add to the top of your Consultation component
useEffect(() => {
  document.title = 'Free Consultation | DCMadeMedia';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Schedule a free consultation to discuss your web development project and get expert advice.');
  }
}, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const serviceId = "service_aepgqsj";
    const templateId = "template_clnlt9f"; // Use the same working template as contact form
    const publicKey = "0ay0JaUpW_SnUCGGR";

    // Format the consultation details into a message format that works with the existing template
    const consultationMessage = `
CONSULTATION REQUEST

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || "Not provided"}
- Company: ${formData.company || "Not provided"}

Project Details:
- Project Type: ${formData.projectType}
- Budget Range: ${formData.budget || "Not specified"}
- Timeline: ${formData.timeline || "Not specified"}
- Preferred Consultation Time: ${formData.preferredTime || "Flexible"}

Project Description:
${formData.description}

---
This is a consultation request from the MVP Services page.`;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: `MVP Consultation Request - ${
        formData.projectType || "New Project"
      }`,
      message: consultationMessage,
      to_email: "robert@dcmademedia.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
          preferredTime: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setSubmitError(
          "Failed to send consultation request. Please try again."
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const consultationBenefits = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Free 30-Minute Session",
      description:
        "No cost, no commitment - just valuable insights for your project",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Project Feasibility Analysis",
      description: "Technical assessment and realistic timeline estimation",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Response",
      description: "I'll get back to you within 24 hours to schedule our call",
    },
  ];

  const projectTypes = [
    "Web Application",
    "Mobile App (React Native)",
    "E-commerce Platform",
    "SaaS Product",
    "API Development",
    "Other",
  ];

  const budgetRanges = [
    "$2,999 - $4,999",
    "$4,999 - $7,999",
    "$7,999 - $9,999",
    "$10,000+",
    "Not sure yet",
  ];

  const timelineOptions = [
    "2-3 weeks",
    "3-5 weeks",
    "5-6 weeks",
    "6+ weeks",
    "Flexible",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
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
          <Suspense fallback={<div>Loading...</div>}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Free <span className="gradient-text">Consultation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and explore how I can help bring your
                vision to life. No sales pitch - just honest advice and
                technical insights.
              </p>
            </motion.div>
          </Suspense>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What You'll <span className="gradient-text">Get</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {consultationBenefits.map((benefit, index) => (
              <Suspense key={index} fallback={<div>Loading...</div>}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 text-center"
                >
                  <div className="text-primary-500 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              </Suspense>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 px-4" ref={ref}>
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-800/50 p-8 md:p-12 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-center mb-8">
              Schedule Your{" "}
              <span className="gradient-text">Free Consultation</span>
            </h2>

            {submitSuccess ? (
              <Suspense fallback={<div>Loading...</div>}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Consultation Request Sent!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for your interest! I'll review your information
                    and get back to you within 24 hours to schedule our call.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-gradient-to-r from-primary-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Schedule Another Consultation
                  </motion.button>
                </motion.div>
              </Suspense>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium mb-2"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium mb-2"
                  >
                    Preferred Consultation Time
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., Weekday mornings, Tuesday afternoons, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium mb-2"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell me about your project idea, goals, and any specific requirements..."
                  />
                </div>

                {submitError && (
                  <div className="text-red-400 text-center">{submitError}</div>
                )}

                <Suspense fallback={<div>Loading...</div>}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending Request..."
                    ) : (
                      <>
                        Schedule Free Consultation
                        <ArrowRight className="inline-block ml-2 w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </Suspense>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Prefer to <span className="gradient-text">Contact Directly?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:robert@dcmademedia.com"
              className="flex items-center space-x-3 text-primary-500 hover:text-primary-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>robert@dcmademedia.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-3 text-primary-500 hover:text-primary-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(202) 642-9753</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;

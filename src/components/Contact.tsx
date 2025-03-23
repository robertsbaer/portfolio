import { useState, useRef, lazy, Suspense } from 'react';
// Import only the hooks from framer-motion, not the entire library
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Lazy load the motion components
const motion = {
  div: lazy(() => import('framer-motion').then(mod => ({ 
    default: mod.motion.div 
  }))),
  a: lazy(() => import('framer-motion').then(mod => ({ 
    default: mod.motion.a 
  })))
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_aepgqsj';
    const templateId = 'template_clnlt9f';
    const publicKey = '0ay0JaUpW_SnUCGGR';
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'robert@dcmademedia.com'
    };
    
    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setIsSubmitting(false);
        setSubmitError('Failed to send message. Please try again later.');
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'robert@dcmademedia.com',
      link: 'mailto:robert@dcmademedia.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (202) 642-9753',
      link: 'tel:+12026429753',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Washington, D.C.',
      link: 'https://maps.google.com/?q=Washington+DC',
    },
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
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden" role="region" aria-label="contact">
      <div className="absolute inset-0 grid-background z-0"></div>
      
      {/* Wrap motion components in Suspense */}
      <Suspense fallback={<div className="w-80 h-80 rounded-full bg-primary-500/10 blur-3xl"></div>}>
        <motion.div 
          className="absolute left-1/4 bottom-0 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </Suspense>
      
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
              Get In Touch
              <span className="inline-block w-10 h-[2px] bg-primary-500 ml-3"></span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Me<span className="text-primary-500">.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.title === 'Location' ? '_blank' : undefined}
                rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="card hover:border-primary-500/50 transition-all duration-300 text-center hover-element"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(14, 165, 233, 0.1)' }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div variants={itemVariants} className="card">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {submitSuccess ? (
              <div className="bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg p-4 mb-6">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            ) : null}
            
            {submitError ? (
              <div className="bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg p-4 mb-6">
                {submitError}
              </div>
            ) : null}
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center hover-element"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
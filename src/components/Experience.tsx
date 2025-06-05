import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';
import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import profileImage from '../assets/headshot.webp'; // Import your headshot image

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const resumeRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Founder & Lead Developer',
      company: 'DC Made Media',
      period: '2019 - Present',
      description: 'Founded a solo development agency specializing in custom websites and mobile applications. Managed the entire development lifecycle from client consultation to deployment and maintenance. Delivered responsive React-based solutions for small businesses, association, N.G.O, and individuals.',
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2015 - 2019',
      description: 'Developed custom web development solutions and web applications for clients across various industries, including NGOs, associations, and political campaign organizations. Specialized in creating responsive, user-friendly interfaces using modern JavaScript frameworks. Collaborated directly with clients to translate business requirements into technical solutions.',
    },
    {
      title: 'Web Development Projects',
      company: 'Personal & Academic',
      period: '2011 - 2015',
      description: 'Built several personal and academic projects to strengthen development skills. Focused on PHP, JavaScript, and modern frontend technologies. Participated in coding challenges and hackathons to solve real-world problems through code.',
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const generateResume = async () => {
    // Create a new PDF document
    const pdf = new jsPDF();
    
    // Personal information
    const name = "Robert Baer";
    const title = "Full Stack Developer";
    const email = "robert@dcmademedia.com";
    const phone = "+1 (202) 642-9753";
    const location = "Washington, DC";
    const website = "dcmademedia.com";
    const github = "github.com/robertsbaer";
    
    // Add headshot image
    // First, create an image element to load the profile image
    const img = new Image();
    img.src = profileImage;
    
    // Wait for the image to load
    await new Promise((resolve) => {
      img.onload = resolve;
    });
    
    // Convert the image to a data URL
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(img, 0, 0);
    const imageData = canvas.toDataURL('image/jpeg');
    
    // Add the image to the PDF (right side)
    pdf.addImage(imageData, 'JPEG', 150, 15, 40, 40);
    
    // Add personal information to PDF
    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    pdf.text(name, 20, 20);
    
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "normal");
    pdf.text(title, 20, 30);
    
    pdf.setFontSize(10);
    pdf.text(`Email: ${email}`, 20, 40);
    pdf.text(`Phone: ${phone}`, 20, 45);
    pdf.text(`Location: ${location}`, 20, 50);
    pdf.text(`Website: ${website}`, 20, 55);
    pdf.text(`GitHub: ${github}`, 20, 60);
    
    // Add a line separator - moved lower to accommodate GitHub line
    pdf.setDrawColor(66, 133, 244);
    pdf.setLineWidth(0.5);
    pdf.line(20, 65, 190, 65);
    
    // Add experience section - adjusted starting position
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.text("Professional Experience", 20, 75);
    
    let yPosition = 85;
    
    // Add each experience entry
    experiences.forEach((exp) => {
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text(exp.title, 20, yPosition);
      
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "italic");
      pdf.text(`${exp.company} | ${exp.period}`, 20, yPosition + 5);
      
      pdf.setFont("helvetica", "normal");
      
      // Handle multi-line description
      const splitDescription = pdf.splitTextToSize(exp.description, 170);
      pdf.text(splitDescription, 20, yPosition + 12);
      
      yPosition += 12 + (splitDescription.length * 5) + 10; // Add spacing between entries
    });
    
    // Add skills section (you can customize this with your actual skills)
    yPosition += 5;
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.text("Skills", 20, yPosition);
    
    yPosition += 10;
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    
    const skills = [
      "React", "React Native", "JavaScript", "TypeScript", "HTML/CSS", 
      "Node.js", "Express", "MongoDB", "Git", "Responsive Design"
    ];
    
    const skillsText = skills.join(" • ");
    const splitSkills = pdf.splitTextToSize(skillsText, 170);
    pdf.text(splitSkills, 20, yPosition);
    
    // Save the PDF
    pdf.save('Robert_Baer_Resume.pdf');
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background z-0"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute right-0 top-1/3 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl"
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          repeatType: "reverse" 
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
              My Journey
              <span className="inline-block w-10 h-[2px] bg-primary-500 ml-3"></span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Experience<span className="text-primary-500">.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My entrepreneurial journey and development experience building solutions for real clients.
            </p>
          </motion.div>

          <div ref={resumeRef} className="relative pl-0 md:pl-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="card hover:border-primary-500/50 transition-all duration-300 md:ml-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <div className="flex items-center text-primary-400 mt-1">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-16">
            <button 
              onClick={generateResume}
              className="btn btn-primary inline-block hover-element"
            >
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Medium RSS feed URL with your username
const MEDIUM_RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@robert-baer';

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Add this useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
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

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(MEDIUM_RSS_URL);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Medium posts');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok') {
          setPosts(data.items);
        } else {
          throw new Error('Invalid response from Medium API');
        }
      } catch (err) {
        console.error('Error fetching Medium posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  // Format date to match your current style
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Extract excerpt from HTML content
  const getExcerpt = (html: string) => {
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Get text content and limit to ~150 characters
    const text = tempDiv.textContent || '';
    return text.substring(0, 150) + (text.length > 150 ? '...' : '');
  };

  return (
    <div className="relative">
      <div className="noise-overlay"></div>
      <Cursor />
      <Navbar />
      <main>
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
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <p className="text-primary-400 font-medium mb-4 flex items-center justify-center">
                  <span className="inline-block w-10 h-[2px] bg-primary-500 mr-3"></span>
                  DCMadeMedia Blog
                  <span className="inline-block w-10 h-[2px] bg-primary-500 ml-3"></span>
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Web Development Insights<span className="text-primary-500">.</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Thoughts on React, React Native, and modern web development for political campaigns and NGOs in Washington DC.
                </p>
              </motion.div>
              
              {loading && (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
                </div>
              )}
              
              {error && (
                <motion.div variants={itemVariants} className="bg-red-900/30 border border-red-500 text-red-200 rounded-lg p-4 mb-8">
                  {error}
                </motion.div>
              )}
              
              {!loading && !error && (
                <motion.div variants={containerVariants} className="grid gap-8 md:grid-cols-2">
                  {posts.map(post => (
                    <motion.article 
                      key={post.guid} 
                      variants={itemVariants}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-primary-500/20 hover:scale-[1.02]"
                    >
                      {post.thumbnail && (
                        <div className="overflow-hidden">
                          <img 
                            src={post.thumbnail} 
                            alt={post.title} 
                            className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
                        <p className="text-primary-400 text-sm mb-4">Published: {formatDate(post.pubDate)}</p>
                        <p className="text-gray-400 mb-4">{getExcerpt(post.description)}</p>
                        <a 
                          href={post.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          Read on Medium 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              )}
              
              {/* Further Reading Resources */}
              <motion.div variants={itemVariants} className="mt-16 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Further Reading</h3>
                <p className="text-gray-400 mb-6">Explore these resources to deepen your knowledge of web development and political tech.</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <a 
                    href="https://reactjs.org/docs/getting-started.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-700/50 rounded hover:bg-gray-700/70 transition-colors flex items-center"
                  >
                    <div className="bg-primary-500/20 p-3 rounded mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">React Documentation</h4>
                      <p className="text-sm text-gray-400">Official guides and API reference</p>
                    </div>
                  </a>
                  <a 
                    href="https://www.smashingmagazine.com/category/react" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-700/50 rounded hover:bg-gray-700/70 transition-colors flex items-center"
                  >
                    <div className="bg-primary-500/20 p-3 rounded mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Smashing Magazine</h4>
                      <p className="text-sm text-gray-400">In-depth React articles and tutorials</p>
                    </div>
                  </a>
                  <a 
                    href="https://css-tricks.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-700/50 rounded hover:bg-gray-700/70 transition-colors flex items-center"
                  >
                    <div className="bg-primary-500/20 p-3 rounded mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">CSS-Tricks</h4>
                      <p className="text-sm text-gray-400">Modern CSS and web design techniques</p>
                    </div>
                  </a>
                  <a 
                    href="https://github.com/enaqx/awesome-react" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-700/50 rounded hover:bg-gray-700/70 transition-colors flex items-center"
                  >
                    <div className="bg-primary-500/20 p-3 rounded mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Awesome React</h4>
                      <p className="text-sm text-gray-400">Curated list of React resources</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import { motion } from "framer-motion";

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

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<MediumPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(MEDIUM_RSS_URL);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Medium posts');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok') {
          // Extract the post ID from the slug instead of matching the entire URL
          // The slug is the last part of the URL after the last slash
          const postId = slug?.split('/').pop();
          
          // Find the post that contains this ID in its guid
          const foundPost = data.items.find((item: MediumPost) => 
            postId && item.guid.includes(postId)
          );
          
          if (foundPost) {
            setPost(foundPost);
          } else {
            setError('Post not found');
          }
        } else {
          throw new Error('Invalid response from Medium API');
        }
      } catch (err) {
        console.error('Error fetching Medium post:', err);
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // Format date to match your current style
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

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

  if (loading) {
    return (
      <div className="relative">
        <div className="noise-overlay"></div>
        <Cursor />
        <Navbar />
        <main className="container mx-auto px-4 py-16 max-w-4xl flex justify-center min-h-[60vh] items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="relative">
        <div className="noise-overlay"></div>
        <Cursor />
        <Navbar />
        <main className="container mx-auto px-4 py-16 max-w-4xl min-h-[60vh] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8 text-white">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="text-primary-400 hover:text-primary-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

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
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <Link to="/blog" className="text-primary-400 hover:text-primary-300 flex items-center w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Blog
                </Link>
              </motion.div>
              
              <motion.article variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-xl">
                {post.thumbnail && (
                  <img 
                    src={post.thumbnail} 
                    alt={post.title} 
                    className="w-full h-auto rounded-lg mb-8 shadow-lg"
                  />
                )}
                
                <header className="mb-10 pb-8 border-b border-gray-700/50">
                  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">{post.title}</h1>
                  <div className="flex items-center text-gray-400">
                    <span className="text-sm md:text-base">Published: {formatDate(post.pubDate)}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm md:text-base">By {post.author}</span>
                  </div>
                </header>
                
                <div 
                  className="blog-content prose prose-lg prose-invert max-w-none prose-headings:text-primary-400 prose-a:text-primary-400 prose-a:no-underline hover:prose-a:text-primary-300 prose-img:rounded-lg prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {post.categories && post.categories.length > 0 && (
                  <div className="mt-12 pt-6 border-t border-gray-700/50">
                    <h3 className="text-xl font-bold mb-4 text-white">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-gray-600/50 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.article>
              
              <motion.div variants={itemVariants} className="mt-16 bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-white">Subscribe to Our Web Development Newsletter</h2>
                <p className="text-gray-400 mb-6">Get the latest insights on React, political tech, and nonprofit digital strategies delivered to your inbox.</p>
                <form className="flex flex-col md:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-3 rounded bg-gray-700/70 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-primary-500"
                    aria-label="Email address"
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-primary-500 text-white rounded hover:bg-primary-400 transition-colors font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
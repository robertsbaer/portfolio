import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import blogData from '../data/blogPosts.json';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogData.posts.find(post => post.id === slug);
  
  if (!post) {
    return (
      <div className="relative">
        <div className="noise-overlay"></div>
        <Cursor />
        <Navbar />
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-white">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">← Back to Blog</Link>
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
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <Link to="/blog" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">← Back to Blog</Link>
        
        <article className="bg-gray-900 rounded-xl p-6 md:p-10 shadow-xl">
          <header className="mb-10 pb-8 border-b border-gray-800">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">{post.title}</h1>
            <div className="flex items-center text-gray-400">
              <span className="text-sm md:text-base">Published: {post.date}</span>
              <span className="mx-2">•</span>
              <span className="text-sm md:text-base">By {post.author}</span>
            </div>
          </header>
          
          <div 
            className="blog-content prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {post.tags && (
            <div className="mt-12 pt-6 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
        
        <div className="mt-16 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Subscribe to Our Web Development Newsletter</h2>
          <p className="text-gray-400 mb-6">Get the latest insights on React, political tech, and nonprofit digital strategies delivered to your inbox.</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded bg-gray-700 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Email address"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import blogData from '../data/blogPosts.json';

const Blog = () => {
  return (
    <div className="relative">
      <div className="noise-overlay"></div>
      <Cursor />
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">DC Web Development Blog</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {blogData.posts.map(post => (
            <article key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-white">{post.title}</h2>
                <p className="text-gray-300 mb-4">Published: {post.date}</p>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-blue-400 hover:text-blue-300">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter signup for SEO */}
        <div className="mt-16 bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Subscribe to Our Web Development Newsletter</h2>
          <p className="text-gray-400 mb-6">Get the latest insights on React, political tech, and nonprofit digital strategies delivered to your inbox.</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded bg-gray-700 text-white flex-grow"
              aria-label="Email address"
            />
            <button 
              type="submit" 
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
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

export default Blog;
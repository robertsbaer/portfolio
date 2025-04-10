import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import { motion } from "framer-motion";

const CommunityPantry = () => {
  const [activeTab, setActiveTab] = useState('about');
  
  return (
    <div className="relative">
      <div className="noise-overlay"></div>
      <Cursor />
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-xl p-8 shadow-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Community Pantry</h1>
          
          {/* Tab navigation */}
          <div className="flex border-b border-gray-700 mb-8">
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'about' ? 'text-primary-500 border-b-2 border-primary-500' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button 
              className={`px-4 py-2 font-medium ${activeTab === 'privacy' ? 'text-primary-500 border-b-2 border-primary-500' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('privacy')}
            >
              Privacy Policy
            </button>
          </div>
          
          {activeTab === 'about' && (
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Welcome to the Community Pantry project - a special initiative designed to connect 
                those with extra food resources to those in need within our local community.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">How It Works</h2>
              <p className="text-gray-300 mb-6">
                Our app allows users to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-8">
                <li className="mb-2">List excess food items they're willing to donate</li>
                <li className="mb-2">Browse available items in their neighborhood</li>
                <li className="mb-2">Arrange safe pickup or delivery of items</li>
                <li className="mb-2">Track community impact through donation metrics</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Project Status</h2>
              <p className="text-gray-300 mb-6">
                This project is currently in development. We're working on:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-8">
                <li className="mb-2">User authentication and profiles</li>
                <li className="mb-2">Geolocation services for neighborhood matching</li>
                <li className="mb-2">Messaging system for arranging exchanges</li>
                <li className="mb-2">Mobile app version for iOS and Android</li>
              </ul>
              
              <div className="bg-gray-800 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">Interested in Early Access?</h3>
                <p className="text-gray-300 mb-4">
                  We're looking for beta testers in the DC area. If you'd like to be part of our 
                  initial launch, please fill out the form below.
                </p>
                <form className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-300 mb-1">ZIP Code</label>
                    <input 
                      type="text" 
                      id="zip" 
                      className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">I'm interested in:</label>
                    <select 
                      id="interest" 
                      className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="donating">Donating Food</option>
                      <option value="receiving">Receiving Food</option>
                      <option value="both">Both</option>
                      <option value="volunteering">Volunteering</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors font-medium"
                  >
                    Join the Waitlist
                  </button>
                </form>
              </div>
            </div>
          )}
          
          {activeTab === 'privacy' && (
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-white">Privacy Policy for Community Pantry</h2>
              <p className="text-gray-400 italic mb-6">Last updated: April 10, 2025</p>
              
              <p className="text-gray-300 mb-6">
                Community Pantry ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and protect your personal data 
                when you use our iOS application.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">1. Information We Collect</h3>
              <p className="text-gray-300 mb-4">
                We collect the following personal data during the sign-in process:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li className="mb-2"><strong>Name</strong></li>
                <li className="mb-2"><strong>Email address</strong></li>
              </ul>
              <p className="text-gray-300 mb-6">
                This information is collected solely for the purpose of creating and managing your 
                user account within the Community Pantry app.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">2. How We Use Your Information</h3>
              <p className="text-gray-300 mb-4">
                We use your personal information exclusively for:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li className="mb-2"><strong>Authentication and account access</strong></li>
              </ul>
              <p className="text-gray-300 mb-6">
                We do not use your data for marketing, analytics, or any other secondary purposes.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">3. Legal Basis for Processing</h3>
              <p className="text-gray-300 mb-4">
                Under the General Data Protection Regulation (GDPR), we process your data based on:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li className="mb-2">
                  <strong>Contractual necessity</strong>: We need your name and email to provide 
                  access to the Community Pantry app and its features.
                </li>
              </ul>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">4. Data Storage and Security</h3>
              <p className="text-gray-300 mb-6">
                Your data is securely stored using <strong>Supabase</strong>, our third-party 
                backend service provider. We implement standard security measures to protect your 
                information, including secure login protocols.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">5. Sharing of Information</h3>
              <p className="text-gray-300 mb-6">
                We do <strong>not</strong> share your personal data with third parties.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">6. Your Data Protection Rights</h3>
              <p className="text-gray-300 mb-4">
                Under GDPR, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li className="mb-2">Access the personal data we hold about you</li>
                <li className="mb-2">Request correction of incorrect or incomplete data</li>
                <li className="mb-2">Request deletion of your data ("right to be forgotten")</li>
                <li className="mb-2">Object to or restrict certain types of data processing</li>
              </ul>
              <p className="text-gray-300 mb-6">
                To exercise any of these rights, please contact us at:
              </p>
              <p className="text-gray-300 mb-6">
                📧 <strong>robertsbaer@yahoo.com</strong>
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">7. Children's Privacy</h3>
              <p className="text-gray-300 mb-6">
                Community Pantry is not intended for children under the age of 16, and we do not 
                knowingly collect personal data from children.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">8. Changes to This Policy</h3>
              <p className="text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. If we make significant changes, 
                we recommend checking the app or the App Store listing for the latest version of this policy.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-white">9. Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions or concerns about this Privacy Policy or your data, please contact:
              </p>
              <p className="text-gray-300 mb-6">
                <strong>Robert Baer</strong><br />
                📧 <strong>robertsbaer@yahoo.com</strong>
              </p>
            </div>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPantry;
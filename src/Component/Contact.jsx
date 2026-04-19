import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
          >
            Get In Touch
          </motion.h2>
          <p className="mt-4 text-xl text-gray-600">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Left Side: Contact Information */}
          <div className="bg-slate-900 p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-10">
              Fill out the form and I will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaPhoneAlt />
                </div>
                <span>+880 1404-260731</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaEnvelope />
                </div>
                <span>saifur.devweb@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaMapMarkerAlt />
                </div>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-6">
              <a href="#" className="hover:text-blue-500 transition-colors text-2xl"><FaGithub /></a>
              <a href="#" className="hover:text-blue-500 transition-colors text-2xl"><FaLinkedin /></a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500 outline-none" 
                    placeholder="Saifur Rahman"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500 outline-none" 
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input 
                  type="text" 
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500 outline-none" 
                  placeholder="Project Proposal"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  rows="4" 
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500 outline-none" 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
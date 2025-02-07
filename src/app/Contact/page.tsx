'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen py-12 flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 sm:px-12 lg:px-24">
        
        {/* Left: Contact Form */}
        <motion.div
          className="bg-gray-800 rounded-xl shadow-2xl p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <input
                className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <input
                className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <textarea
                className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400"
                rows={5}
                placeholder="Your Message"
              />
            </div>
            <motion.button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-full py-3 text-xl font-medium text-green-500 border-2 border-green-500 rounded-lg bg-transparent group hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <span
                className={`
                  transition-all duration-500 ${hovered ? 'translate-x-2' : 'translate-x-0'}
                `}
              >
                Send Message
              </span>
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Contact Information */}
        <motion.div
          className="bg-gray-800 rounded-xl shadow-2xl p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 text-center">Contact Information</h2>
          <div className="space-y-6">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="p-4 bg-blue-600 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl text-white">Our Location</h4>
                <p className="text-sm text-white">Karachi, Pakistan</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="p-4 bg-green-600 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 6c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4H6c-2.21 0-4 1.79-4 4v2zm18-2c.55 0 1 .45 1 1v4H5V5c0-.55.45-1 1-1h12zm1 6v10H5V11h14zm-4 8v2H7v-2h8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl text-white">Email Us</h4>
                <p className="text-sm text-white">uniqueluck68@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="p-4 bg-yellow-600 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.29 5.71a1 1 0 011.42 0l7.29 7.29 2.88-2.88A4.992 4.992 0 0012 4C8.69 4 6 6.69 6 10s2.69 6 6 6a4.992 4.992 0 004.29-2.12l2.88 2.88-7.29 7.29a1 1 0 01-1.42-1.42l7.29-7.29-2.88-2.88a4.992 4.992 0 00-4.29 2.12c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.61 0 3.02.8 3.88 2.12l2.88-2.88a1 1 0 011.42 1.42l-7.29 7.29L2.29 5.71z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl text-white">Call Us</h4>
                <p className="text-sm text-white">+92 332 3487941</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

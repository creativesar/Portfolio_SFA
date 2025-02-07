'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-[400px] bg-gray-900 py-10">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-12 lg:px-24">
        {/* Left: Inquiry Form */}
        <motion.div
          className="inquiry-form px-6 py-8 bg-gray-800 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <input
                className="w-full px-4 py-2 border rounded-md text-sm sm:text-base text-gray-800 placeholder-gray-500"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <input
                className="w-full px-4 py-2 border rounded-md text-sm sm:text-base text-gray-800 placeholder-gray-500"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                className="w-full px-4 py-2 border rounded-md text-sm sm:text-base text-gray-800 placeholder-gray-500"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <textarea
                className="w-full px-4 py-2 border rounded-md text-sm sm:text-base text-gray-800 placeholder-gray-500"
                rows={5}
                placeholder="Message"
              />
            </div>

            {/* Custom Hover Button */}
            <motion.button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="
                group
                p-5
                cursor-pointer
                relative
                text-xl
                font-normal
                border-0
                flex
                items-center
                justify-center
                bg-transparent
                text-green-500
                h-auto
                w-[220px] /* Increased Width */
                overflow-hidden
                transition-all
                duration-100
              "
            >
              <span
                className={`
                  absolute left-0 h-full w-5 border-y border-l border-green-500
                  transition-all duration-500 ${hovered ? 'w-full' : ''}
                `}
              ></span>

              <p
                className={`
                  absolute transition-all duration-200
                  ${hovered ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'}
                `}
              >
                Send Message
              </p>

              <span
                className={`
                  absolute transition-all duration-200
                  ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                `}
              >
                Press Now
              </span>

              <span
                className={`
                  absolute right-0 h-full w-5 border-y border-r border-green-500
                  transition-all duration-500 ${hovered ? 'w-full' : ''}
                `}
              ></span>
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          className="contact-info px-6 py-8 bg-gray-800 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6">Contact Information</h2>
          <div className="space-y-8">
            {/* Office Address */}
            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                {/* Office Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a7 7 0 10.001 14.001A7 7 0 0010 3zm0 12a5 5 0 110-10 5 5 0 010 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white">Visit Us</h4>
                <p className="text-sm sm:text-base text-white">Karachi</p>
                <p className="text-sm sm:text-base text-white">Pakistan</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                {/* Email Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 1v10h12V5H4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white">Email Us</h4>
                <p className="text-sm sm:text-base text-white">uniqueluck68.com</p>
              </div>
            </motion.div>

            {/* Phone Number */}
            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full">
                {/* Phone Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.75 1.25a.75.75 0 011.25-.5l3.104 1.553a8.067 8.067 0 003.777 1.215c2.758 0 5.219 2.171 5.494 4.885.271 2.53-1.304 4.724-3.346 5.644-.745.38-1.549.647-2.357.842-.216.054-.426-.074-.527-.26l-1.401-2.26a.75.75 0 00-.926-.29c-2.105.928-3.355-.487-4.388-2.278-1.173-1.849-2.897-3.557-4.373-5.191-1.543-1.608-3.137-2.896-4.704-4.343a.75.75 0 00-.47-.208c-1.92-.234-3.93-.508-5.535.247-.522.276-.746.856-.564 1.348l1.587 4.326c.107.29-.051.601-.3.724-1.388.855-2.144 2.569-1.864 4.276.144.736-.55 1.418-1.288 1.306-.327-.05-.639-.304-.736-.636a9.307 9.307 0 01-.158-6.09z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white">Call Us</h4>
                <p className="text-sm sm:text-base text-white">+92 332 3487941</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;

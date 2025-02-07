'use client';

import React, { useEffect, useRef } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import gsap from 'gsap';
import Link from 'next/link';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // GSAP animation to fade and slide the footer in
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Footer Logo / Title (Optional) */}
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <Link href={'/'}>
          <h2 className="text-3xl sm:text-4xl font-extrabold">SFA</h2>
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="mb-4 sm:mb-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 items-center sm:items-start">
          <Link href="/" className="text-lg hover:text-blue-400">Home</Link>
          <Link href="/About" className="text-lg hover:text-blue-400">About</Link>
          <Link href="/Service" className="text-lg hover:text-blue-400">Services</Link>
          <Link href="/Portfolio" className="text-lg hover:text-blue-400">Portfolio</Link>
          <Link href="/Contact" className="text-lg hover:text-blue-400">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="mb-4 sm:mb-0 flex space-x-6 justify-center sm:justify-start">
          <Link href="https://www.linkedin.com/in/sarfraz-ahmad-595428286/" className="text-2xl hover:text-blue-700" aria-label="LinkedIn">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/creativesar" className="text-2xl hover:text-gray-400" aria-label="GitHub">
            <FaGithub />
          </Link>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="mt-4 text-center text-sm sm:text-base text-gray-400">
        <p>&copy; {new Date().getFullYear()} SFA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

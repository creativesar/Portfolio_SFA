'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const NavBar: React.FC = () => {
    const [hovered, setHovered] = useState(false);
    const navRef = useRef(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Initial animation for nav bar
        const navElements = navRef.current;
        if (navElements) {
            (navElements as HTMLElement).classList.add('transition-all', 'duration-700', 'ease-out');
        }
    }, []);

    return (
        <nav ref={navRef} className="w-full h-16 flex justify-between items-center p-4 bg-gray-800 fixed top-0 left-0 right-0 z-50 shadow-lg">
            {/* SFA logo */}
            <div className="mb-4 sm:mb-0 text-center sm:text-left">
    <Link href="/">
        <div className="text-3xl font-extrabold text-white flex items-center">
            SFA
        </div>
    </Link>
</div>

            <ul className="flex space-x-6 py-5">
                <li className="text-lg font-semibold text-white relative group transition duration-300 transform hover:scale-105 hover:text-green-500">
                    <Link href="/">Home</Link>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </li>
                <li className="text-lg font-semibold text-white relative group transition duration-300 transform hover:scale-105 hover:text-green-500">
                    <Link href="/About">About</Link>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </li>
                <li className="text-lg font-semibold text-white relative group transition duration-300 transform hover:scale-105 hover:text-green-500">
                    <Link href="/Service">Services</Link>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </li>
                <li className="text-lg font-semibold text-white relative group transition duration-300 transform hover:scale-105 hover:text-green-500">
                    <Link href="/Portfolio">Portfolio</Link>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </li>
                <li className="text-lg font-semibold text-white relative group transition duration-300 transform hover:scale-105 hover:text-green-500">
                    <Link href="/Contact">Contact</Link>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </li>
            </ul>

            {/* Animated Button without Glow */}
            <button
  ref={buttonRef}
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
    w-[140px] /* Width reduced */
    overflow-hidden
    transition-all
    duration-100
  "
>
  {/* Wrapping the button with Link */}
    <  Link href="/Contact" className="flex items-center justify-center w-full h-full"> {/* Link wrapper */}
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
        Hire Me
      </p>

      <span
        className={`
          absolute transition-all duration-200
          ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
        `}
      >
        Let&apos;s Go
      </span>

      <span
        className={`
          absolute right-0 h-full w-5 border-y border-r border-green-500
          transition-all duration-500 ${hovered ? 'w-full' : ''}
        `}
      ></span>
   
  </Link>
</button>
        </nav>
    );
};

export default NavBar;

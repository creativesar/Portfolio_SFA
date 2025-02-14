'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        anime({
            targets: navRef.current,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo'
        });
    }, []);

    return (
        <motion.nav
            ref={navRef}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full h-16 flex justify-between items-center px-6 bg-gray-900 fixed top-0 left-0 right-0 z-50 shadow-lg"
        >
            <div className="text-3xl font-extrabold text-white">
                <Link href="/">SFA</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                    <motion.div animate={{ rotate: menuOpen ? 90 : 0 }}>
                        ☰
                    </motion.div>
                </button>
            </div>

            {/* Nav Links */}
            <ul className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ${menuOpen ? 'flex flex-col items-center py-4' : 'hidden md:flex'}`}>
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                    <motion.li 
                        key={item} 
                        className="text-lg font-semibold text-white relative group p-4 md:p-0"
                        whileHover={{ scale: 1.1, color: '#10B981' }}
                        onClick={() => setMenuOpen(false)}
                    >
                        <Link href={`/${item === 'Home' ? '' : item}`}>{item}</Link>
                        <motion.span 
                            className="absolute left-0 bottom-0 w-full h-0.5 bg-green-500"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.li>
                ))}
            </ul>

            {/* Hire Me Button */}
            <button
                ref={buttonRef}
                className="hidden md:flex group p-4 text-xl font-medium border-0 items-center justify-center bg-transparent text-green-500 w-[140px] overflow-hidden relative"
            >
                <Link href="/Contact" className="flex items-center justify-center w-full h-full">
                    <motion.span 
                        className="absolute left-0 h-full w-5 border-y border-l border-green-500"
                        animate={{ width: menuOpen ? '100%' : '5px' }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.p
                        className="absolute"
                        initial={{ opacity: 1, x: 0 }}
                        animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? -30 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        Hire Me
                    </motion.p>
                    <motion.span
                        className="absolute"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : 30 }}
                        transition={{ duration: 0.2 }}
                    >
                        Let&apos;s Go
                    </motion.span>
                    <motion.span 
                        className="absolute right-0 h-full w-5 border-y border-r border-green-500"
                        animate={{ width: menuOpen ? '100%' : '5px' }}
                        transition={{ duration: 0.5 }}
                    />
                </Link>
            </button>
        </motion.nav>
    );
};

export default NavBar;

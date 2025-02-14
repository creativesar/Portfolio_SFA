'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

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

            {/* Hamburger Menu Button */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                    <motion.div animate={{ rotate: menuOpen ? 45 : 0 }} className="w-6 h-6 flex flex-col justify-between">
                        <motion.span className="block h-0.5 w-full bg-white" animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} />
                        <motion.span className={`block h-0.5 w-full bg-white ${menuOpen ? 'hidden' : 'block'}`} />
                        <motion.span className="block h-0.5 w-full bg-white" animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} />
                    </motion.div>
                </button>
            </div>

            {/* Nav Links */}
            <motion.ul 
                initial={{ x: '100%' }} 
                animate={{ x: menuOpen ? 0 : '100%' }}
                transition={{ duration: 0.3 }}
                className={`md:flex md:space-x-6 absolute md:static top-16 right-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ${menuOpen ? 'flex flex-col items-center py-4' : 'hidden md:flex'}`}
            >
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
            </motion.ul>
        </motion.nav>
    );
};

export default NavBar;

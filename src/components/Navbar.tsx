'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavBar = () => {
    const [hovered, setHovered] = useState(false);
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
            {/* Logo */}
            <div className="text-3xl font-extrabold text-white">
                <Link href="/">SFA</Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-4">
                <Sheet>
                    <SheetTrigger>
                        <motion.div className="text-white cursor-pointer">
                            ☰
                        </motion.div>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-gray-900 p-6 flex flex-col gap-6">
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <motion.li 
                                    key={item} 
                                    className="text-lg font-semibold text-white"
                                    whileHover={{ scale: 1.1, color: '#10B981' }}
                                >
                                    <Link href={`/${item === 'Home' ? '' : item}`}>{item}</Link>
                                </motion.li>
                            ))}
                        </ul>

                        {/* "Hire Me" Button inside Mobile Menu */}
                        <button
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="flex p-3 cursor-pointer relative text-lg font-normal border-0 items-center justify-center bg-transparent text-green-500 w-full overflow-hidden transition-all duration-100"
                        >
                            <span className={`absolute left-0 h-full w-5 border-y border-l border-green-500 transition-all duration-500 ${hovered ? 'w-full' : ''}`}></span>

                            <p className={`absolute transition-all duration-200 ${hovered ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'}`}>
                                Hire Me
                            </p>

                            <span className={`absolute transition-all duration-200 ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                                Let&apos;s Go
                            </span>

                            <span className={`absolute right-0 h-full w-5 border-y border-r border-green-500 transition-all duration-500 ${hovered ? 'w-full' : ''}`}></span>
                        </button>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex md:space-x-6">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                    <motion.li 
                        key={item} 
                        className="text-lg font-semibold text-white relative group p-4"
                        whileHover={{ scale: 1.1, color: '#10B981' }}
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

            {/* "Hire Me" Button for Desktop */}
            <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="hidden md:flex p-4 cursor-pointer relative text-lg font-normal border-0 items-center justify-center bg-transparent text-green-500 h-auto w-[120px] overflow-hidden transition-all duration-100"
            >
                <span className={`absolute left-0 h-full w-5 border-y border-l border-green-500 transition-all duration-500 ${hovered ? 'w-full' : ''}`}></span>

                <p className={`absolute transition-all duration-200 ${hovered ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'}`}>
                    Hire Me
                </p>

                <span className={`absolute transition-all duration-200 ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    Let&apos;s Go
                </span>

                <span className={`absolute right-0 h-full w-5 border-y border-r border-green-500 transition-all duration-500 ${hovered ? 'w-full' : ''}`}></span>
            </button>
        </motion.nav>
    );
};

export default NavBar;

'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
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

            {/* Right Section (Hire Me + Mobile Menu) */}
            <div className="flex items-center gap-4">
                {/* Hire Me Button - Visible on Mobile & Desktop */}
                <button
                    ref={buttonRef}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="flex p-3 sm:p-4 cursor-pointer relative text-lg sm:text-xl font-normal border-0 items-center justify-center bg-transparent text-green-500 h-auto w-[100px] sm:w-[140px] overflow-hidden transition-all duration-100"
                >
                    <span
                        className={`absolute left-0 h-full w-5 border-y border-l border-green-500 transition-all duration-500 ${hovered ? 'w-full' : ''}`}
                    ></span>

                    <p
                        className={`absolute transition-all duration-200 ${hovered ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'}`}
                    >
                        Hire Me
                    </p>

                    <span
                        className={`absolute transition-all duration-200 ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                    >
                        Let&apos;s Go
                    </span>

                    <span
                        className={`absolute right-0 h-full w-5 border-y border-r border-green-500 transition-all duration-500 ${hovered ? 'w-full' : ''}`}
                    ></span>
                </button>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <motion.div animate={{ rotate: menuOpen ? 90 : 0 }} className="text-white cursor-pointer">
                                ☰
                            </motion.div>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-gray-900 p-6">
                            <ul className="space-y-4">
                                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                    <motion.li 
                                        key={item} 
                                        className="text-lg font-semibold text-white"
                                        whileHover={{ scale: 1.1, color: '#10B981' }}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <Link href={`/${item === 'Home' ? '' : item}`}>{item}</Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Desktop Nav Links */}
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
        </motion.nav>
    );
};

export default NavBar;

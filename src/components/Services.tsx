'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showAll, setShowAll] = useState(false); // State to manage visibility of extra services

    const services = [
        {
            title: 'Web Development',
            description: 'We build fast, responsive, and secure websites with a focus on user experience.',
        },
        {
            title: 'UI/UX Design',
            description: 'Creating intuitive interfaces with modern design principles for seamless user experiences.',
        },
        {
            title: 'Graphic Design',
            description: 'Designing visually compelling and brand-aligned graphics for digital platforms.',
        },
        {
            title: 'SEO Optimization',
            description: 'Improving search engine rankings to increase traffic and visibility for your website.',
        },
        {
            title: 'Mobile App Development',
            description: 'Building intuitive and feature-rich mobile applications for iOS and Android.',
        },
    ];

    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        setMousePosition({
            x: clientX / window.innerWidth - 0.5,
            y: clientY / window.innerHeight - 0.5,
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-[600px] bg-gray-900 text-white flex flex-col justify-center items-center py-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500 mb-8">My Services</h2>

            <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, showAll ? services.length : 3).map((service, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gray-800 p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 group"
                        style={{
                            transform: `perspective(1000px) rotateY(${mousePosition.x * 20}deg) rotateX(${mousePosition.y * 20}deg)`,
                            transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out',
                            boxShadow: `0px 10px 30px rgba(0, 255, 0, ${Math.abs(mousePosition.x)})`, // Dynamic glow based on mouse position
                        }}
                    >
                        {/* Service Title */}
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{service.title}</h3>
                        
                        {/* Service Icon (text used as placeholder) */}
                        <div className="text-center text-4xl sm:text-5xl text-green-500 mb-4">
                    
                        </div>

                        {/* Service Description */}
                        <p className="text-gray-300 mb-4">{service.description}</p>

                        {/* Hover effect underline */}
                        <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>

                        {/* Card Border Effect */}
                        <div className="absolute inset-0 border-4 border-transparent rounded-lg group-hover:border-green-500 transition-all duration-300"></div>
                    </motion.div>
                ))}
            </section>

            {/* View More Button with hover effect */}
            <button
    className="mt-8 px-6 py-3 border-4 border-blue-500 text-blue-500 text-lg font-semibold rounded-full hover:scale-110 hover:border-green-500 hover:text-white transition-all duration-300"
    onClick={() => setShowAll((prev) => !prev)}
>
    {showAll ? 'View Less' : (
        <Link href="/Service" className="inline-block">
            View More
        </Link>
    )}
</button>
        </div>
    );
}

'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showAll, setShowAll] = useState(false); // State to manage visibility of extra services

    const services = [
        {
            title: 'Web Development',
            description: 'We build fast, responsive, and secure websites with a focus on user experience. We specialize in creating custom websites using the latest web technologies like React, Next.js, and Tailwind CSS.',
        },
        {
            title: 'UI/UX Design',
            description: 'Creating intuitive interfaces with modern design principles for seamless user experiences. We design beautiful and user-friendly interfaces for web and mobile applications.',
        },
        {
            title: 'Graphic Design',
            description: 'Designing visually compelling and brand-aligned graphics for digital platforms. Our graphic design services include custom logos, brochures, and social media graphics.',
        },
        {
            title: 'SEO Optimization',
            description: 'Improving search engine rankings to increase traffic and visibility for your website. We implement on-page and off-page SEO strategies to help your business grow online.',
        },
        {
            title: 'Mobile App Development',
            description: 'Building intuitive and feature-rich mobile applications for iOS and Android. From concept to deployment, we create mobile apps that provide a seamless experience for your users.',
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
        <div className="min-h-[600px] bg-gray-900 text-white flex flex-col justify-center items-center py-16 px-6 sm:px-12 lg:px-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 mb-8 text-center">My Services</h2>

            <section className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
                {services.slice(0, showAll ? services.length : 3).map((service, index) => (
                    <motion.div
                        key={index}
                        className="relative p-8 bg-gray-800 rounded-lg shadow-xl group transition-all duration-300 hover:bg-gray-700"
                        style={{
                            transform: `perspective(1000px) rotateY(${mousePosition.x * 20}deg) rotateX(${mousePosition.y * 20}deg)`,
                            transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out',
                            boxShadow: `0px 10px 30px rgba(0, 255, 0, ${Math.abs(mousePosition.x)})`, // Dynamic glow based on mouse position
                        }}
                    >
                        {/* Service Title */}
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{service.title}</h3>
                        
                        {/* Service Description */}
                        <p className="text-gray-300 mb-4 text-sm sm:text-base lg:text-lg">{service.description}</p>

                        {/* Hover effect underline */}
                        <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>

                        {/* Card Border Effect */}
                        <div className="absolute inset-0 border-4 border-transparent rounded-lg group-hover:border-green-500 transition-all duration-300"></div>
                    </motion.div>
                ))}
            </section>

        </div>
    );
}

'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioSection() {
    const portfolioRef = useRef(null);
    const cardRefs = useRef<any[]>([]);
    const [showAll, setShowAll] = useState(false); // State to manage visibility of extra projects

    const projects = [
        {
            title: 'SBlog',
            description: 'A modern, fast, and customizable blogging platform built with Next.js and Tailwind CSS.',
            imageUrl: '/sblog.png',
            link: 'https://vercel.com/creativesars-projects/sblog',
        },
        {
            title: 'Shopco Store',
            description: 'An e-commerce platform with dynamic product listings, integrated payment methods, and secure checkout.',
            imageUrl: '/shop.png',
            link: 'https://shopcostore.vercel.app/',
        },
        {
            title: 'Marlows Diamonds',
            description: 'A luxury jewelry store website offering stunning designs, showcasing diamonds and other precious stones.',
            imageUrl: '/jewellery.png',
            link: 'https://marlows-diamonds.co.uk/',
        },
        // Additional projects to show when "View More" is clicked
        {
            title: 'Project X',
            description: 'A next-gen web app with AI integrations and advanced features.',
            imageUrl: '/projectx.png',
            link: 'https://projectx.com',
        },
        {
            title: 'Project Y',
            description: 'An innovative SaaS platform for streamlining business operations.',
            imageUrl: '/projecty.png',
            link: 'https://projecty.com',
        },
    ];

    useEffect(() => {
        // GSAP animation for My Portfolio text
        gsap.fromTo(
            portfolioRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
        );
    }, []);

    const handleMouseMove = (event: any, index: number) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (event.clientX - left - width / 2) / width;
        const y = (event.clientY - top - height / 2) / height;

        gsap.to(card, {
            rotationY: x * 15,
            rotationX: -y * 15,
            transformPerspective: 1500,
            scale: 1.05,
            ease: 'power1.out',
            duration: 0.3,
            borderRadius: `${15 + y * 10}% ${15 + y * 10}% 0 0`, // Curving the top of the card
        });
    };

    const handleMouseLeave = (index: number) => {
        const card = cardRefs.current[index];
        if (!card) return;

        gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            ease: 'power2.out',
            duration: 0.3,
            borderRadius: '15%', // Reset border-radius to subtle curve
            boxShadow: 'none', // Remove glowing border on leave
        });
    };

    const handleMouseEnter = (index: number) => {
        const card = cardRefs.current[index];
        if (!card) return;

        // Adding glowing border on hover
        gsap.to(card, {
            boxShadow: '0 0 15px 5px rgba(0, 255, 0, 0.7)', // Green glow effect
            duration: 0.3,
        });
    };

    return (
        <div className="min-h-[600px] bg-gray-900 text-white flex flex-col justify-center items-center py-16 px-6 sm:px-12 lg:px-24">
            <h2
                ref={portfolioRef}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 mb-8 text-center"
            >
                My Portfolio
            </h2>

            <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => {
                            cardRefs.current[index] = el;
                        }}
                        className="relative bg-gray-800 p-8 rounded-lg shadow-xl transition-all duration-300 transform group overflow-hidden"
                        onMouseMove={(event) => handleMouseMove(event, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        onMouseEnter={() => handleMouseEnter(index)} // Trigger glow effect on hover
                    >
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">{project.title}</h3>

                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-110"
                            width={300}
                            height={300}
                            onError={(e) => {
                                e.currentTarget.src = '/fallback-image.png';
                            }}
                        />

                        <p className="text-gray-300 mb-4 text-center text-sm sm:text-base">{project.description}</p>

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-green-500"
                            >
                                Visit Website
                            </a>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* View More Button with hover effect */}
            <button
    className="mt-8 px-6 py-3 border-4 border-blue-500 text-blue-500 text-lg font-semibold rounded-full hover:scale-110 hover:border-green-500 hover:text-white transition-all duration-300"
    onClick={() => setShowAll((prev) => !prev)}
>
    {showAll ? 'View Less' : (
        <Link href="/Portfolio" className="inline-block">
            View More
        </Link>
    )}
</button>
        </div>
    );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link'; // Import Link from Next.js

const HireMeButton = () => {
    const [hovered, setHovered] = useState(false);
    const buttonRef = useRef(null);

    return (
        <Link href="/Contact">
            <button
                ref={buttonRef}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="group p-4 sm:p-5 cursor-pointer relative text-lg sm:text-xl font-normal border-0 flex items-center justify-center bg-transparent text-green-500 h-auto w-[120px] sm:w-[140px] overflow-hidden transition-all duration-100"
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
            </button>
        </Link>
    );
};

const ExploreMoreButton = () => {
    const [hovered, setHovered] = useState(false);
    const buttonRef = useRef(null);

    return (
        <Link href="/Portfolio">
            <button
                ref={buttonRef}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="group p-4 sm:p-5 cursor-pointer relative text-lg sm:text-xl font-normal border-0 flex items-center justify-center bg-transparent text-orange-500 h-auto w-[150px] sm:w-[180px] overflow-hidden transition-all duration-100"
            >
                <span
                    className={`
                        absolute left-0 h-full w-5 border-y border-l border-orange-500
                        transition-all duration-500 ${hovered ? 'w-full' : ''}
                    `}
                ></span>

                <p
                    className={`
                        absolute transition-all duration-200
                        ${hovered ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'}
                    `}
                >
                    Explore More
                </p>

                <span
                    className={`
                        absolute transition-all duration-200
                        ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                    `}
                >
                    Discover Now
                </span>

                <span
                    className={`
                        absolute right-0 h-full w-5 border-y border-r border-orange-500
                        transition-all duration-500 ${hovered ? 'w-full' : ''}
                    `}
                ></span>
            </button>
        </Link>
    );
};

export default function HomePage() {
    const textRef = useRef(null);
    const descriptionRef = useRef(null);
    const roles = [
        {
            title: 'Web Developer',
            description: 'I build fast, user-friendly websites with a focus on responsiveness and security.'
        },
        {
            title: 'Graphic Designer',
            description: 'I design brand-aligned assets, emphasizing aesthetics, messaging, and consistency.'
        },
        {
            title: 'UI/UX Expert',
            description: 'I craft intuitive interfaces through research, prototyping, and testing for seamless usability.'
        }
    ];

    useEffect(() => {
        let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        roles.forEach((role) => {
            tl.to(textRef.current, { opacity: 0, y: -50, duration: 0.6 })
                .set(textRef.current, { textContent: role.title })
                .to(textRef.current, { opacity: 1, y: 0, duration: 0.6 })
                .to(descriptionRef.current, { opacity: 0, y: 10, duration: 0.4 })
                .set(descriptionRef.current, { textContent: role.description })
                .to(descriptionRef.current, {
                    opacity: 1,
                    y: 0,
                    scale: 1.2,
                    color: 'white',
                    ease: 'bounce.out',
                    duration: 1
                })
                .to(descriptionRef.current, {
                    scale: 1,
                    color: '#ddd',
                    duration: 0.4,
                    ease: 'power2.inOut'
                })
                .to(descriptionRef.current, { y: -10, duration: 0.2 })
                .to(descriptionRef.current, { y: 0, duration: 0.2 })
                .to(textRef.current, { delay: 1.5 });
        });
    }, []);

    return (
        <div className="min-h-[800px] bg-gray-900 text-white flex flex-col justify-center items-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-transparent z-[-1]">
                <div className="line-animation bg-gray-800 absolute w-full h-1 animate-line"></div>
            </div>
            <section className="text-center flex flex-col items-center">
                <h1 className="text-sm sm:text-lg font-light text-gray-400 mb-4">I am Sarfraz Ahmad and I am</h1>
                <h2 ref={textRef} className="text-4xl sm:text-6xl lg:text-8xl font-bold text-blue-400 mt-2 h-14"></h2>
                <p
                    ref={descriptionRef}
                    className="text-base sm:text-lg text-gray-300 mt-4 py-10 opacity-0"
                ></p>
                <div className="mt-6 space-x-4 flex justify-center flex-wrap gap-4">
                    <HireMeButton />
                    <ExploreMoreButton />
                </div>
            </section>
        </div>
    );
}

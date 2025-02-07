'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function AboutMeSection() {
    const textRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true }); // Infinite loop with reverse effect
        tl.fromTo(
            textRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 2, ease: 'power4.out' }  // Slowed down duration
        )
        .fromTo(
            descriptionRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 2, ease: 'power4.out' },  // Slowed down duration
            '-=1'  // Adjust overlap for smoother effect
        )
        .fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 2.4, ease: 'bounce.out' },  // Slowed down duration
            '-=1.2'  // Adjust overlap for smoother effect
        );
    }, []);

    return (
        <div className="min-h-[300px] bg-gray-900 text-white flex flex-col justify-center items-center p-8">
            <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left space-y-8 lg:space-y-0">
                <motion.div
                    className="flex-1 space-y-4"
                    ref={textRef}
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500"
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        ref={descriptionRef}
                        className="text-lg sm:text-xl text-gray-300"
                    >
                        <p>
                            Hi, I’m Sarfraz Ahmad. I specialize in building user-friendly websites with a focus on design and performance. I love staying up-to-date with new technologies to create impactful digital experiences.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    ref={imageRef}
                    className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src="/00001000-removebg-preview.png"  // Replace with your image path
                        alt="Sfa"
                        width={300}
                        height={300}
                        className="rounded-full w-[300px] h-[300px] object-cover border-4 border-blue-500"
                    />
                </motion.div>
            </section>
        </div>
    );
}

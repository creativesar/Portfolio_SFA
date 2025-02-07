'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function TestimonialsSection() {
    const testimonialsRef = useRef(null);
    const cardRefs = useRef<any[]>([]);

    const testimonials = [
        {
            name: 'Alice Johnson',
            title: 'CEO at Bright Innovations',
            feedback: 'This product exceeded our expectations and revolutionized the way we do business!',
            rating: 5, // 5 star rating
        },
        {
            name: 'David Lee',
            title: 'Creative Director at Visionary Studios',
            feedback: 'Amazing service! The team was professional, quick, and responsive to all our needs.',
            rating: 5, // 4 star rating
        },
        {
            name: 'Rachel Adams',
            title: 'Founder at NextGen Tech',
            feedback: 'I can’t recommend this enough. Truly outstanding support and top-notch quality!',
            rating: 5, // 5 star rating
        },
    ];

    useEffect(() => {
        gsap.fromTo(
            testimonialsRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.3 }
        );
    }, []);

    const handleMouseEnter = (index: number) => {
        const card = cardRefs.current[index];
        if (!card) return;

        gsap.to(card, {
            scale: 1.05, // Slight scale-up for emphasis
            boxShadow: '0 8px 20px rgba(0, 255, 0, 0.3)', // Enhanced soft green shadow
            borderColor: '#00ff00', // Green border on hover
            borderWidth: '2px',
            backgroundColor: 'rgba(0, 255, 0, 0.05)', // Slight green tint on hover for depth
            duration: 0.4,
            ease: 'power3.out',
        });
    };

    const handleMouseLeave = (index: number) => {
        const card = cardRefs.current[index];
        if (!card) return;

        gsap.to(card, {
            scale: 1, // Reset to original scale
            boxShadow: 'none', // Remove shadow on leave
            borderColor: 'transparent', // Reset border
            borderWidth: '1px',
            backgroundColor: 'transparent', // Reset background color
            duration: 0.3,
            ease: 'power1.out',
        });
    };

    // Function to render star ratings
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="text-yellow-400">★</span>); // Filled star
            } else {
                stars.push(<span key={i} className="text-gray-400">★</span>); // Empty star
            }
        }
        return stars;
    };

    return (
        <div className="min-h-[500px] bg-gray-900 text-white py-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-400 text-center mb-8">
                What Our Clients Say
            </h2>

            <div
                ref={testimonialsRef}
                className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            cardRefs.current[index] = el;
                        }}
                        className="relative bg-gray-700 p-6 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 ease-in-out"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <p className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            {testimonial.name}
                        </p>
                        <p className="text-gray-400 mb-4">{testimonial.title}</p>
                        <div className="mb-4 flex">{renderStars(testimonial.rating)}</div> {/* Star rating component */}
                        <p className="text-gray-300">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

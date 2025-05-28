'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VALUES } from '@/lib/constant';

gsap.registerPlugin(ScrollTrigger);

export default function MyValues() {
    const containerRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const lines = containerRef.current.querySelectorAll('.line');

        // Create a master timeline controlled by ScrollTrigger
        const masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });

        lines.forEach((line) => {
            const words = line.querySelectorAll('.word');

            // Create a timeline for each line, animating words staggered
            const lineTimeline = gsap.timeline();

            lineTimeline.fromTo(
                words,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: 'power3.out',
                }
            );

            // Add this line timeline to the master timeline, so lines animate sequentially
            masterTimeline.add(lineTimeline);
        });

        // Background parallax effect
        if (bgRef.current) {
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }

        // Cleanup ScrollTrigger instances on unmount
        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    const splitTextToLines = (text) => {
        const lines = text.split('\n');
        return lines.map((line, idx) => (
            <div key={idx} className="line block">
                {line.split(' ').map((word, i) => (
                    <span key={i} className="word inline-block mr-2">
                        {word}
                    </span>
                ))}
            </div>
        ));
    };

    return (
        <section
            className="relative bg-black text-white px-6 sm:px-12 py-24 min-h-[60dvh] md:min-h-[80dvh] flex items-center overflow-hidden"
        >
            {/* Background for parallax */}
            <div
                ref={bgRef}
                className="absolute inset-0 bg-gradient-to-b from-black via-primary-400  to-primary-500 opacity-30 pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-4xl mx-auto relative z-10">
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                    My Values;
                </p>
                <div
                    ref={containerRef}
                    className="text-2xl sm:text-3xl md:text-4xl space-y-4 text-gray-300 poppins"
                >
                    {splitTextToLines(VALUES)}
                </div>
            </div>
        </section>
    );
}

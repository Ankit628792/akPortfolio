
'use client';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticEffect from '@/components/effects/MagneticEffect';
import { VISION } from '@/lib/constant';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const containerRef = useRef(null);
    const bgRef = useRef(null);

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const paraRef = useRef(null);
    const imageRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                },
            });

            gsap.from(paraRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2,
                scrollTrigger: {
                    trigger: paraRef.current,
                    start: 'top 85%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        const lines = containerRef.current.querySelectorAll('.line');

        const masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });

        lines.forEach((line) => {
            const words = line.querySelectorAll('.word');

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
                },
                "=-0.6"
            );

            masterTimeline.add(lineTimeline);
        });

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

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.4,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                    },
                }
            );
        });
    }, []);

    useEffect(() => {
        if (imageRef.current && overlayRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 75%',
                },
            });

            tl.fromTo(
                imageRef.current,
                { scale: 1.5 },
                { scale: 1, duration: 1, ease: 'power2.out', delay: 1 }
            ).fromTo(
                overlayRef.current,
                { x: 0 },
                { x: '100%', duration: 1, ease: 'power2.out' },
                '-=0.8'
            );
        }
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
        <>
            <Navbar />
            <section ref={sectionRef} className='fade-in-section flex flex-col items-center justify-end md:justify-center w-full min-h-[80dvh] md:min-h-screen bg-gradient-to-b from-gray-950 to-black p-5'>
                <h1 ref={titleRef} className='text-6xl sm:text-7xl lg:text-[11vw] font-bold ankit text-center exile text-gray-100 !leading-[1]'>about me</h1>
                <p ref={paraRef} className='text-lg sm:text-xl lg:text-2xl max-w-xl md:max-w-2xl lg:max-w-3xl text-center mx-auto mt-4 text-gray-500'>
                    Here&apos;s a little about my journey — how I got here, what I love doing, and why it matters to me.
                </p>
                <MagneticEffect>
                    <div className="col-span-2 flex flex-col items-center mt-16 cursor-grab">
                        <div className="text-sm poppins text-gray-500">Scroll Down</div>
                        <svg
                            className="w-6 h-10 text-gray-400 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v2m0 0a5.25 5.25 0 0 1 5.25 5.25v2.25a5.25 5.25 0 0 1-10.5 0V11.75A5.25 5.25 0 0 1 12 6.5z"
                            />
                        </svg>
                    </div>
                </MagneticEffect>
            </section>

            <section className=" relative bg-black text-white px-6 sm:px-12 py-24 min-h-[80dvh] overflow-hidden flex lg:flex-row items-center justify-around gap-20 max-w-8xl mx-auto">
                <div className="text-gray-300 lg:text-lg space-y-6">
                    <p className='!leading-[2] fade-in-section'>Hi, I&apos;m Ankit — a <strong>self-taught software developer</strong> and a <em>mountain soul</em>.</p>
                    <p className='!leading-[2] fade-in-section'>I write code with purpose — mostly using <strong>React</strong> and <strong>Node.js</strong>. But for me, it&apos;s not just about choosing the “better” technology. It&apos;s about <em>showing up fully</em>, <strong>doing my best every day</strong>, and <em>growing with every challenge</em>.</p>
                    <p className='!leading-[2] fade-in-section'>I never took formal programming classes. Instead, I learned on my own from reading docs, blogs, and spending late nights watching YouTube tutorials. This <em>unconventional path</em> shaped how I think, solve problems, and <strong>push myself beyond limits</strong>.</p>
                    <p className='!leading-[2] fade-in-section'>I live a <strong>balanced life</strong>, both in mind and body. When life gets noisy or I feel low on energy, I pack my backpack and head to the mountains. <em>Hiking and trekking through quiet trails</em> recharges me like nothing else.</p>
                    <p className='!leading-[2] fade-in-section'>Outside of work, I enjoy trying different hobbies to make the most of my free time. It keeps me refreshed and often sparks new ideas. I&apos;ve also trained in psychology to better understand myself and others — especially to explore the question: <em>“<strong>Why do people do the things they do?</strong>”</em> I believe understanding this is the first step to creating meaningful work, because <strong>real impact starts with empathy</strong>.</p>
                </div>
                <div className='fade-in-section w-full min-w-[32rem] max-w-lg rounded-2xl overflow-hidden hidden xl:inline-block relative'>
                    <img ref={imageRef} className='w-full h-full object-cover' src="/assets/1.jpeg" alt="" />
                    <div ref={overlayRef} className='absolute inset-0 bg-primary-400 transform translate-x-full' />
                </div>
            </section>

            <section className="relative bg-black text-white px-6 sm:px-12 py-24 min-h-[60dvh] md:min-h-[80dvh] flex items-center overflow-hidden">
                <div ref={bgRef} className="absolute inset-0 bg-gradient-to-b from-black via-primary-400  to-primary-500 opacity-30 pointer-events-none" aria-hidden="true" />

                <div className="max-w-4xl mx-auto relative z-10 fade-in-section ">
                    <p className="text-sm uppercase tracking-wider text-gray-400">My Vision;</p>
                    <div ref={containerRef} className="text-2xl sm:text-3xl space-y-4 text-gray-300 poppins">
                        {splitTextToLines(VISION)}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About
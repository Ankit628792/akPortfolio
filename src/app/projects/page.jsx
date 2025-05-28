"use client"

import MagneticEffect from '@/components/effects/MagneticEffect'
import Footer from '@/components/Footer'
import MyProjects from '@/components/MyProjects'
import Navbar from '@/components/Navbar'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const paraRef = useRef(null);
    const iconRef = useRef(null);

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

            gsap.from(iconRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'power3.out',
                delay: 0.4,
                scrollTrigger: {
                    trigger: iconRef.current,
                    start: 'top 90%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Navbar />
            <section ref={sectionRef} className='flex flex-col items-center justify-end md:justify-center w-full min-h-[80dvh] md:min-h-screen bg-gray-950 p-5'>
                <h1 ref={titleRef} className='text-6xl sm:text-7xl lg:text-[11vw] font-bold ankit text-center exile text-gray-100 !leading-[1]'>Recent projects</h1>
                <p ref={paraRef} className='text-lg sm:text-xl lg:text-2xl max-w-xl md:max-w-2xl lg:max-w-3xl text-center mx-auto mt-4 text-gray-500'>Check out some of the recent projects I've had the pleasure of working on.</p>
                <MagneticEffect>
                    <div ref={iconRef} className="col-span-2 flex flex-col items-center mt-16 cursor-grab">
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
            <section className='flex flex-col min-h-dvh w-full'>
                <MyProjects />
            </section>
            <Footer />
        </>
    )
}

export default Projects
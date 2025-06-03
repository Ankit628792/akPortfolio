"use client"

import MagneticEffect from '@/components/effects/MagneticEffect'
import MoveText from '@/components/effects/MoveText'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { EmailID } from '@/lib/constant'
import { Mail } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { enqueueSnackbar, SnackbarProvider } from 'notistack'
gsap.registerPlugin(ScrollTrigger);

function Contact() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

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
                delay: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                },
            });

            gsap.from(".email_id", {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'power3.out',
                delay: 1.2,
                scrollTrigger: {
                    trigger: ".email_id",
                    start: 'top 85%',
                },
            });

            gsap.from(".scroll_down", {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'power3.out',
                delay: 1.5,
                scrollTrigger: {
                    trigger: ".scroll_down",
                    start: 'top 85%',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <SnackbarProvider maxSnack={1} />
            <Navbar />
            <section ref={sectionRef} className='flex flex-col items-center justify-end md:justify-center w-full min-h-[80dvh] md:min-h-screen bg-gradient-to-b from-gray-950 to-[#141416] p-5'>
                <h1 ref={titleRef} className='text-6xl sm:text-7xl lg:text-[11vw] max-w-7xl font-bold ankit text-center exile text-gray-100 !leading-[1]'>Drop Email</h1>
                <div onClick={() => {
                    enqueueSnackbar('Copied to clipboard', { key: "email", preventDuplicate: true, timeout: 10, variant: "info", className: "!bg-primary-400", anchorOrigin: { vertical: "bottom", horizontal: "right" } });
                    navigator.clipboard.writeText(EmailID);
                }} className='group text-center flex items-center gap-2 mt-4 email_id'>
                    <p className='text-lg sm:text-xl lg:text-2xl max-w-xl md:max-w-2xl lg:max-w-3xl text-gray-500 group-hover:text-primary-400 transition-all duration-300 ease-out'>
                        <Mail />
                    </p>
                    <MoveText text={EmailID} wrapperClass='text-lg sm:text-xl lg:text-2xl max-w-xl md:max-w-2xl lg:max-w-3xl' initalTextClass='text-gray-500' finalTextClass='text-primary-400' />
                </div>
                <MagneticEffect>
                    <div className="col-span-2 flex flex-col items-center mt-16 cursor-grab scroll_down">
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
            <Footer />
        </>
    )
}

export default Contact
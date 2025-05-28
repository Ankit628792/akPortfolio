
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MoveText from './effects/MoveText';
import MagneticEffect from './effects/MagneticEffect';
import { EmailID, INTAGRAM_LINK, SOCIALS } from '@/lib/constant';
import { Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const textBlockRef = useRef(null);
    const socialRef = useRef(null);
    const ctaRef = useRef(null);

    // 💡 GSAP Scroll Animations
    useEffect(() => {
        if (!footerRef.current) return;

        const ctx = gsap.context(() => {
            // Animate large "Let's work together"
            gsap.from(textBlockRef.current, {
                opacity: 0,
                y: 80,
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top bottom',
                },
            });

            // Animate email/contact block
            gsap.from('.email-block', {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 40%',
                },
            });

            // Animate social buttons
            gsap.from(socialRef.current?.children, {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 30%',
                },
            });

            // Animate CTA button
            gsap.from(ctaRef.current, {
                opacity: 0,
                scale: 0.8,
                y: 40,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 20%',
                },
            });
        }, footerRef);

        return () => ctx.revert(); // 🧼 Clean up on unmount
    }, []);

    const Social = ({ text, url }) => {
        return (
            <a href={url} target="_blank" rel="noreferrer">
                <div className="py-2 px-5 sm:py-3 sm:px-8 md:py-4 md:px-14 rounded-full border border-[#34363c] bg-[#1c1d20] max-w-max cursor-pointer group relative overflow-hidden">
                    <MoveText text={text} finalTextClass={"text-white"} />
                    <div className='absolute w-40 h-20 left-1/2 -translate-x-1/2 rounded-full scale-110 inset-0 bg-primary-400 transform translate-y-20 group-hover:translate-y-0 group-hover:scale-150 transition-all duration-500 ease-in-out origin-bottom'></div>
                </div>
            </a>
        );
    };

    return (
        <section
            ref={footerRef}
            id='contact'
            className="h-dvh overflow-hidden bg-footer flex w-full flex-col justify-end p-5 z-10 relative"
        >
            <div className="w-full max-w-[80rem] mx-auto">
                {/* Header Text Block */}
                <div
                    ref={textBlockRef}
                    className="flex flex-col md:flex-row items-start justify-between gap-10 sm:gap-6"
                >
                    <div className="text-5xl sm:text-6xl font-semibold flex flex-col gap-4">
                        <div className="flex items-center gap-2.5 sm:gap-5 group">
                            <div className="text-white">Let&apos;s</div>
                            <a href={INTAGRAM_LINK} target="_blank" rel="noreferrer" className="h-16 sm:h-20 md:h-24 shrink-0 rounded-full overflow-hidden cursor-pointer">
                                <img
                                    className="w-full h-full object-cover hover:rotate-360 origin-center duration-1000 ease-in-out"
                                    src="/assets/profile.jpeg"
                                    alt=""
                                />
                            </a>
                            <MoveText text={"work"} initalTextClass={"text-primary-400"} finalTextClass={"text-primary-400"} />
                        </div>
                        <div className="flex items-center gap-2.5 sm:gap-5 group">
                            <MoveText text={"together"} initalTextClass={"text-primary-400"} finalTextClass={"text-primary-400"} />
                            <div className='h-12 sm:h-16 md:h-20 shrink-0 overflow-hidden'>
                                <img
                                    className="h-12 sm:h-16 md:h-20 shrink-0 group-hover:rotate-360 origin-bottom duration-1000 ease-in-out"
                                    src="/assets/vector.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email Contact */}
                    <div onClick={() => {
                        navigator.clipboard.writeText(EmailID);
                        alert("Copied to clipboard");
                    }} className="email-block group sm:text-xl 2xl:text-2xl text-[#97a4b6] flex flex-col gap-0.5 sm:gap-2 items-end ml-auto z-10">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-primary-400 group-hover:rotate-90 duration-300 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                        </svg>
                        <h1 className="mt-2">DROP ME A LINE</h1>
                        <MoveText text={EmailID} finalTextClass="text-primary-400" />
                    </div>
                </div>

                {/* Social Buttons */}
                <div ref={socialRef} className="flex flex-wrap gap-4 max-w-2xl sm:text-lg text-white font-medium pt-10">
                    {SOCIALS.map((el, index) => (
                        <Social key={index} text={el.name} url={el.url} />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="h-40 sm:h-52 flex flex-col justify-center">
                    <div className="relative h-32 sm:h-40 md:h-52 flex flex-col justify-center w-full">
                        <div className="w-full h-[0.5px] bg-white relative">
                            {/* <h1 className='text-white text-xs'>or Find me on Google by "Ankit628792"</h1> */}
                        </div>
                        <div
                            ref={ctaRef}
                            className="absolute w-32 sm:w-40 h-32 sm:h-40 md:h-52 md:w-52 left-auto right-0 md:right-10 lg:right-20 top-0 bottom-0 flex flex-col items-center justify-center"
                        >
                            <MagneticEffect>
                                <div onClick={() => {
                                    const searchUrl = `https://www.google.com/search?q=Ankit_628792`;
                                    window.open(searchUrl, '_blank');
                                }} className="w-full h-full bg-primary-400 text-white md:text-lg flex items-center justify-center gap-2 rounded-full overflow-hidden cursor-pointer relative z-10 group">
                                    <div className='flex items-center justify-center gap-1 sm:gap-2 relative z-10'>
                                        <h1 className='text-sm sm:text-base lg:text-lg text-right hidden sm:inline-block'>Find me on<br />Google</h1>
                                        <h1 className='text-sm sm:text-base lg:text-lg text-right sm:hidden'>Google me</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 lg:w-7 lg:h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </div>
                                    <div className='absolute rounded-full inset-0 bg-primary-500 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out origin-bottom'></div>
                                </div>
                            </MagneticEffect>
                            <img className="absolute inset-0 transform scale-[3] sm:scale-[4] z-0 animate-pulse" src="/assets/radial.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* Footer Credit */}
                <div>
                    <h1 className="text-white sm:text-lg flex items-center group cursor-pointer max-w-max">
                        <a href={INTAGRAM_LINK} target="_blank" rel="noreferrer">
                            <MoveText text={'Ankit Kumar'} finalTextClass="text-primary-400" />
                        </a>
                        <span className='shrink-0'>&nbsp;&copy; 2025</span>
                        <Heart className='w-8 text-primary-400 group-hover:fill-primary-400 animate-pulse' />
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Footer;

'use client';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header() {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to('.loader .text', {
            width: '100%',
            delay: 0.5,
            duration: 2.5,
            ease: 'slow(0.7,0.7,false)',
        }, 'loading');

        tl.to('.loader .progress', {
            width: '100%',
            delay: 0.5,
            duration: 2.5,
            ease: 'slow(0.9,0.7,false)',
        }, 'loading');

        tl.to('.loader', {
            opacity: 0,
            duration: 0.5,
            ease: 'none',
        });

        tl.to('.ankit', {
            y: 20,
            duration: 1,
            ease: 'power2.out',
        });

        tl.to('.name', {
            scale: 1,
            duration: 1.6,
            ease: 'power4.out',
        }, 'scaling');

        tl.to('.hero_video', {
            scale: 1,
            filter: 'none',
            duration: 1.6,
            ease: 'power4.out',
        }, 'scaling');

        tl.to('.hero_video .overlay', {
            background: 'linear-gradient(75deg, rgba(179, 178, 251, 0.5) 0%, rgba(179, 178, 251, 0.25) 50%, rgba(179, 178, 251, 0.5) 100%)',
            duration: 1.6,
            ease: 'power4.out',
        }, 'scaling');

        tl.to('.hero p', {
            opacity: 1,
            duration: 1,
            ease: 'slow(0.9,0.7,false)',
        });
    }, []); // <-- important to pass dependency array here

    return (
        <section className="min-h-screen w-full -z-10 flex flex-col items-center justify-center select-none sticky top-0">
            <div className="loader absolute bottom-20">
                <div className="phase1">
                    <div className="relative flex items-center justify-center text-5xl font-medium text-white tracking-wider text-container">
                        <h1 className="opacity-30 poppins">Ankit Kumar</h1>
                        <h1 className="text-nowrap text absolute h-full top-0 left-0 overflow-hidden w-0 poppins">
                            Ankit Kumar
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 my-10">
                        <h1 className="text-lg text-white text-opacity-50 animate-pulse poppins">Loading</h1>
                        <div className="bg-white bg-opacity-30 h-1 w-full max-w-sm rounded-full relative overflow-hidden">
                            <div className="absolute h-full w-0 bg-white progress"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero text-white p-5">
                <div className="h-full w-full overflow-y-hidden transform scale-75 name">
                    <h1 className="text-7xl sm:text-[16vw] leading-none font-bold transform translate-y-[30rem] ankit text-center exile">
                        Mr Ank
                    </h1>
                    <p className="text-lg sm:text-2xl lg:text-3xl max-w-3xl text-center mx-auto opacity-0 poppins mt-4 sm:mt-0">
                        Build websites and apps that don’t just work — they connect, engage, and leave a mark.
                    </p>
                </div>
            </div>

            <div className="hero_video absolute inset-0 -z-10 transform scale-125 filter blur">
                <video
                    className="w-full h-full object-cover filter saturate-150"
                    preload="metadata"
                    muted
                    autoPlay
                    loop
                >
                    <source src="/assets/hero.mp4" type="video/mp4" />
                </video>
                <div
                    className="overlay"
                    style={{
                        background:
                            'linear-gradient(75deg, rgba(179, 178, 251, 0.5) 0%, rgba(179, 178, 251, 1) 50%, rgba(179, 178, 251, 0.5) 100%)',
                        mixBlendMode: 'multiply',
                    }}
                ></div>
            </div>
        </section>
    );
}

export default Header;

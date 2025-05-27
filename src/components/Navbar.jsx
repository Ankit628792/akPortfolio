import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MagneticEffect from './effects/MagneticEffect';
import { useClickOutside } from '@/lib';
import { NAV_OPTIONS, NAV_SOCIALS } from '@/lib/constant';
import MoveText from './effects/MoveText';
import { Heart } from 'lucide-react';

function Navbar() {
    const navRef = useRef();
    const menuTL = useRef(null);      // Timeline for menu icon animation
    const screenNavTL = useRef(null); // Timeline for screen nav

    const [active, setActive] = useState(false);
    useClickOutside(() => active ? handleNav() : {}, navRef);

    const { contextSafe } = useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo(navRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 6 });
    }, { scope: navRef });

    const handleNav = contextSafe(() => {
        const isOpening = !active;
        setActive(isOpening);

        // Kill any previous animations before starting new ones
        if (menuTL.current) menuTL.current.kill();
        if (screenNavTL.current) screenNavTL.current.kill();

        const tl = gsap.timeline();
        const navTl = gsap.timeline();

        menuTL.current = tl;
        screenNavTL.current = navTl;

        if (isOpening) {
            // Animate hamburger to X
            tl.to('.menu .line1', {
                rotate: 45,
                position: 'absolute',
            }, 'menu')
                .to('.menu .line2', {
                    rotate: -45,
                    width: 40,
                    position: 'absolute',
                }, 'menu')
                .to('.menu .line3', {
                    opacity: 0,
                    position: 'absolute',
                }, 'menu');

            // Open full-screen nav
            navTl.to(".full__screen__nav", { right: 0 })
                .fromTo(".full__screen__nav .menuTitle", { opacity: 0 }, { opacity: 1 })
                .to(".full__screen__nav .bar", { width: '100%' })
                .fromTo(".full__screen__nav h1", { y: 100 }, {
                    y: 0,
                    stagger: { each: 0.05, from: 'start' }
                });
        } else {
            // Animate X back to hamburger
            tl.to('.menu .line1', {
                rotate: 0,
                position: 'relative',
            }, 'menu')
                .to('.menu .line2', {
                    rotate: 0,
                    width: 28,
                    position: 'relative',
                }, 'menu')
                .to('.menu .line3', {
                    opacity: 1,
                    position: 'relative',
                }, 'menu');

            // Close full-screen nav
            navTl.to(".full__screen__nav h1", {
                y: 100,
                stagger: { each: 0.05, from: 'end' }
            })
                .to(".full__screen__nav .bar", { width: '0%' })
                .to(".full__screen__nav .menuTitle", { opacity: 0 })
                .to(".full__screen__nav", { right: '-100%' });
        }
    });

    return (
        <nav ref={navRef} className='fixed w-full top-0 z-40 py-4 px-5 md:px-10 xl:px-20 flex items-center justify-between opacity-0'>
            <div className="full__screen__nav fixed top-0 -right-full bottom-0 w-full max-w-xl dark__bg text-white flex flex-col items-start justify-between p-10 sm:px-20 z-50">
                <div className="flex flex-col w-full gap-5 mt-14 sm:mt-4 flex-grow">
                    <div className="mb-6 menuTitle">
                        <h4 className="text-lg py-2 font-light text-right sm:text-left">Menu</h4>
                        <div className="h-0.5 border-b-[1px] border-gray-500 w-0 bar"></div>
                    </div>
                    <div className="flex flex-col gap-4 text-4xl leading-normal px-5 text-right sm:text-left">
                        {NAV_OPTIONS.map((item, index) => (
                            <a onClick={() => handleNav()} href={item.url} key={index}>
                                <MoveText group text={item.name} finalTextClass='text-primary-400' />
                            </a>
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-center w-full gap-6 md:gap-10 text-lg sm:text-xl leading-normal px-5'>
                    {NAV_SOCIALS.map((item, index) => (
                        <a href={item.url} target="_blank" rel="noreferrer" key={index}>
                            <MoveText group text={item.name} finalTextClass='text-primary-400' />
                        </a>
                    ))}
                </div>
                <h1 className="text-white text-base flex items-center justify-center w-full mt-4 group border-t pt-4 border-gray-600">
                    <span>Made with</span>
                    <Heart className='w-8 text-primary-400 group-hover:fill-primary-400 animate-pulse' />
                    <span className='shrink-0'>&nbsp;&copy; 2024</span>
                </h1>
            </div>

            <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="logo cursor-pointer bg-blend-difference mix-blend-difference text-black z-50">
                <MagneticEffect>
                    <img src="/ank.svg" className='w-12 sm:w-14' alt="Logo" />
                </MagneticEffect>
            </div>
            <MagneticEffect>
                <div className={'flex flex-col items-center justify-center gap-1.5 bg-white bg-opacity-20 rounded-full p-1 w-16 h-16 cursor-pointer z-50 group relative ' + (active ? "" : "hover:bg-opacity-30")} onClick={handleNav}>
                    {active && <div className='absolute rounded-full inset-0 bg-primary-500 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out origin-bottom'></div>}
                    <div className='flex flex-col items-center justify-center gap-1.5 menu relative'>
                        <div className='w-10 h-1 rounded-full bg-white line1'></div>
                        <div className='w-7 h-1 mr-auto rounded-full bg-white line2'></div>
                        <div className='w-4 h-1 mr-auto rounded-full bg-white line3'></div>
                    </div>
                </div>
            </MagneticEffect>
        </nav>
    );
}

export default Navbar;


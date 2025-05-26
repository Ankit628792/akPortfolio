import { PROJECTS } from '@/lib/constant'
import useWindowResize from '@/lib/useWindowResize';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const initialPosition = Array(20).fill(1).map((_, i) => 100 * ((i % 2) + 1))

const finalPosition = Array(20).fill(1).map((_, i) => 250 * (i % 2) - 250);
const finalPositionSm = Array(20).fill(0)


function MyProjects({ length = PROJECTS.length }) {
    return (
        <section className='min-h-screen bg-gray-950 px-10 pt-80 pb-40'>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl text-primary-400 opacity-10 exile text-center'>My Projects</h1>
            <div className='w-full max-w-8xl mx-auto flex justify-center flex-wrap gap-20 xl:gap-40 relative'>
                {
                    PROJECTS.slice(0, length).map((project, index) => {
                        return (
                            <Project key={index} {...project} index={index} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MyProjects

const Project = ({ title, subTitle, image, index }) => {
    const projectRef = useRef(null);
    const overlayRef = useRef(null);
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const { width } = useWindowResize();
    const projectFinalPosition = width < 1024 ? finalPositionSm : finalPosition;

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projectRef.current,
                start: "top 70%",
                end: "top 90%",
                toggleActions: "play none none reverse",
            },
        });

        tl.fromTo(
            projectRef.current,
            { opacity: 0, y: initialPosition[index] },
            { opacity: 1, y: projectFinalPosition[index], duration: 1, ease: "power2.out" },
        ).fromTo(
            overlayRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "100%",
                duration: 1,
                ease: "power2.out",
            },
            "-=0.8"
        ).fromTo(
            titleRef.current,
            { width: 0 },
            { width: "100%", duration: 1, ease: "power2.out" },
        ).fromTo(
            subTitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.6"
        )
    }, [width])

    return (
        <div ref={projectRef} className='w-full max-w-xl project-card'>
            <div className='w-full rounded-2xl overflow-hidden relative project-card-image'>
                <img src={image} className='w-full h-full object-cover' alt="" />
                <div ref={overlayRef} className='absolute inset-0 bg-primary-400 transform translate-x-1/2 project-image-overlay' />
            </div>
            <div className='mt-4'>
                <div className="relative flex items-center text-4xl xl:text-5xl font-bold text-white tracking-wider text-container">
                    <h1 className="opacity-10 poppins">{title}</h1>
                    <h1 ref={titleRef} className="text-nowrap text absolute h-full top-0 left-0 overflow-hidden w-0 poppins">
                        {title}
                    </h1>
                </div>
                <p ref={subTitleRef} className='text-gray-500 text-xl project-card-subTitle'>{subTitle}</p>
            </div>
        </div>
    )
}
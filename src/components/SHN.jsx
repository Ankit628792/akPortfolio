"use client"
import { useGSAP } from '@gsap/react'
import { HeartIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'


function SHN() {
    const [loaderFinished, setLoaderFinished] = useState(false);
    const [progress, setProgress] = useState(0);
    const [transitionFinished, setTransitionFinished] = useState(false);
    const [answered, setAnswered] = useState(false);
    useGSAP(() => {
        if (loaderFinished) {

            const tl = gsap.timeline();
            const tl2 = gsap.timeline();

            tl.to('.ball', { opacity: 1, duration: 0.5, ease: "power4.out" })
                .to('.ball', { scale: 50, duration: 2.5, ease: "power4.out" })
                .to('.ball2', { scale: 50, opacity: 1, duration: 2.5, ease: "power4.out" })
                .to('.ball3', { scale: 50, opacity: 1, duration: 2.5, ease: "power4.out" })
                .to('.question_container', { opacity: 1, ease: "power4.out", onComplete: () => setTransitionFinished(true) })


            tl2.to('.text1', { top: "-50%", duration: 3, delay: 0.3, ease: "expoScale(0.5,7,none)" })
                .to('.text2', { top: "-50%", duration: 3, delay: -0.5, ease: "expoScale(0.5,7,none)" })
        }

    }, [loaderFinished])


    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    setLoaderFinished(true);
                    clearInterval(timer);
                }
                else
                    return prevProgress + 1
            })
        }, 50)

        if (loaderFinished) {
            clearInterval(timer);
        }

        return () => clearInterval(timer);

    }, [loaderFinished, setLoaderFinished])

    return (
        <div className={'bg-black w-full h-screen relative overflow-hidden flex flex-col items-center justify-center'}>
            <div className='w-10 h-10 opacity-0 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100 z-10 ball ' />
            <div className='w-10 h-10 opacity-0 rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100 z-20 ball2 ' />
            <div className='w-11 h-11 opacity-0 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100 z-30 ball3 ' />

            <h1 className='absolute transform top-full left-1/2 -translate-x-1/2 mix-blend-difference text-white text-[10vw] min-w-max font-bold z-40 text1'>Too much work?</h1>
            <h1 className='absolute transform top-full left-1/2 -translate-x-1/2 mix-blend-difference text-white text-[10vw] min-w-max font-bold z-40 text2'>Getting bored?</h1>
            {
                loaderFinished
                    ?
                    <></>
                    :
                    <>
                        <div className='w-12 h-12 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100 z-10 loading_ball ' />
                        <div className='w-10 h-1 rounded-full bg-gray-800 absolute left-1/2 transform -translate-x-1/2 loading_ball_base' />
                        <h1 className='absolute transform bottom-20 left-1/2 -translate-x-1/2 mix-blend-difference text-gray-300 text-xl z-40'>{progress}</h1>
                    </>
            }

            <div className=' relative z-50 opacity-0 question_container w-full h-screen bg-white flex flex-col items-center justify-center'>
                {
                    transitionFinished && (
                        answered
                            ?
                            <Answered />
                            :
                            <Question setAnswered={setAnswered} />
                    )
                }
            </div>
        </div>
    )
}

export default SHN


const Question = ({ setAnswered }) => {
    const [scale, setScale] = useState(1);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo('.question', {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
        }, "-=1")
            .fromTo('.question h1', {
                opacity: 0,
                y: 20,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "slow(0.7,0.7,false)",
            })
            .fromTo('.question img', {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0.5,
                ease: "slow(0.7,0.7,false)",
            })
            .fromTo('.question button', {
                opacity: 0,
                y: 20,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "slow(0.7,0.7,false)",
            })
    })

    const onOkClick = () => {
        gsap.to('.question', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
                setAnswered(true)
            }
        })
    }

    return (
        <div className=' w-full flex flex-col items-center justify-center gap-6 question'>
            <h1 className='text-4xl font-medium'>Let&apos;s Go for a Walk??</h1>
            <img className='w-60 h-60' src="/shn/walk.gif" alt="" />
            <div className='flex items-center gap-4 mt-6'>
                <button onClick={onOkClick} className='bg-black text-white px-10 py-2 rounded-full text-xl transform origin-left z-10' style={{ scale }}>Yes</button>
                <button className='bg-transparent text-black px-10 py-2 rounded-full text-xl' onClick={() => {
                    setScale((prev) => prev + 0.3)
                }}>No</button>
            </div>
        </div>
    )
}

const Answered = () => {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo('.answer', {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
        })
            .fromTo('.answer h1', {
                opacity: 0,
                y: 20,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "slow(0.7,0.7,false)",
            })
            .fromTo('.answer img', {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0.5,
                ease: "slow(0.7,0.7,false)",
            })
            .fromTo('.answer p', {
                opacity: 0,
                y: 20,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "slow(0.7,0.7,false)",
            }, "-=0.5")
    })
    return (
        <div className=' w-full flex flex-col items-center justify-center gap-3 answer'>
            <img className='w-80' src="/shn/ans.gif" alt="" onEnded={(event) => {
                const img = event.target
                img.src = img.src
            }} />
            <h1 className='text-5xl font-semibold mt-4 pl-4'>Thanks Cutie! <HeartIcon className='w-12 h-12 inline-block fill-primary-400 stroke-1 stroke-primary-500 animate-pulse' /></h1>
            <p className='text-xl text-gray-500'>See you at staircase in 3 min</p>
        </div>
    )
}
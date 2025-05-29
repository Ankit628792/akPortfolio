'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StringSVG({ text, textClass, wrapperClass = "min-h-screen", stroke = "white" }) {
    const path = useRef(null);
    let yProgress = 0;
    let xProgress = 0.5;

    useEffect(() => {
        setPath(yProgress, xProgress)
    }, [])


    const setPath = (xProgress, yProgress, config) => {
        let params = config ? config : {
            duration: 0.5,
            ease: "power4.out"
        }
        const { innerWidth } = window
        const width = innerWidth;
        gsap.to(path.current, {
            attr: {
                d: `M${0.1 * width} 80 Q${width * xProgress} ${80 + yProgress} ${width - 0.1 * width} 80`
            },
            ...params
        })
    }

    const manageMouseMove = (e) => {
        const { movementY, clientX } = e;
        const { left, width } = path.current.getBoundingClientRect();
        xProgress = (clientX - left) / width;
        yProgress += movementY;
        setPath(xProgress, yProgress);
    }

    const manageMouseLeave = (e) => {
        xProgress = 0.5;
        yProgress = 0;
        setPath(xProgress, yProgress, {
            duration: 1,
            ease: "elastic.out(1.2,0.1)"
        })
    }


    return (
        <>
            <section className={" flex flex-col items-center justify-center " + wrapperClass}>
                <div onMouseMove={manageMouseMove} onMouseLeave={manageMouseLeave} className="line w-full relative cursor-grab bg-black hide-cursor">
                    <svg className="w-full h-40 top-0">
                        <path ref={path} strokeWidth={1} stroke={stroke} fill="none"></path>
                    </svg>
                    {text && <p className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " + textClass}>{text}</p>}
                </div>
            </section>
        </>
    );
}

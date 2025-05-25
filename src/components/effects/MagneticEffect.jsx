'use client'
import gsap from 'gsap';
import React, { useRef } from 'react'

const MagneticEffect = ({ children }) => {
    const ref = useRef(null);

    const handleMouseMove = (event) => {
        const { width, height, left, top } = ref.current.getBoundingClientRect()
        gsap.to(ref.current, {
            x: event.clientX - (left + width / 2),
            y: event.clientY - (top + height / 2),
            duration: 0.5,
            ease: "power1.out"
        })
    };

    const handleMouseLeave = () => {
        gsap.to(ref.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power1.out"
        })
    };

    return (
        React.cloneElement(children, {
            ref,
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave
        })
    )
}

export default MagneticEffect
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trail = trailRef.current;
        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            gsap.to(cursor, {
                x: mouseX - 8,
                y: mouseY - 8,
                duration: 1,
                ease: 'power2.out'
            });
        };

        const animateTrail = () => {
            trailX += (mouseX - trailX) * 0.08;
            trailY += (mouseY - trailY) * 0.08;

            gsap.set(trail, {
                x: trailX - 40,
                y: trailY - 40,
                rotation: (trailX - mouseX) * 0.3
            });

            requestAnimationFrame(animateTrail);
        };

        const hideCursor = () => {
            cursor.style.opacity = '0';
            trail.style.opacity = '0';
        };

        const showCursor = () => {
            cursor.style.opacity = '1';
            trail.style.opacity = '0.3';
        };

        const addHoverListeners = () => {
            const hideTargets = document.querySelectorAll('a, button, .hide-cursor, .cursor-pointer');

            hideTargets.forEach((el) => {
                el.addEventListener('mouseenter', hideCursor);
                el.addEventListener('mouseleave', showCursor);
            });
        };

        document.addEventListener('mousemove', moveCursor);
        animateTrail();
        addHoverListeners();

        return () => {
            document.removeEventListener('mousemove', moveCursor);

            const hideTargets = document.querySelectorAll('a, button, .hide-cursor, .cursor-pointer');
            hideTargets.forEach((el) => {
                el.removeEventListener('mouseenter', hideCursor);
                el.removeEventListener('mouseleave', showCursor);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={trailRef}
                className="pointer-events-none fixed top-0 left-0 z-[9998] w-20 h-20 rounded-full bg-gradient-to-tr from-primary-400 to-primary-500 opacity-30 blur-xl transition-transform duration-200 hidden lg:inline-block"
            />
            <div
                ref={cursorRef}
                className="pointer-events-none fixed -top-8 -left-8 z-[9999] w-4 h-4 rounded-full bg-primary-400 transition-opacity duration-200 hidden lg:inline-block"
            />
        </>
    );
};

export default CustomCursor;

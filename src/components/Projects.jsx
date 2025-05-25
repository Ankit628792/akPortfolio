"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PROJECTS } from "@/lib/constant";
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, roles, image, index }) => {
    const randomOffset = (index % 2 === 0 ? -1 : 1) * (Math.random() * 100);
    const overlayRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const overlayEl = overlayRef.current;
        const cardEl = cardRef.current;
        if (!overlayEl || !cardEl) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardEl,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        tl.fromTo(
            overlayEl,
            { xPercent: index % 2 === 0 ? 0 : 0 },
            {
                xPercent: index % 2 === 0 ? 100 : -100,
                duration: 1,
                ease: "power2.out",
            }
        ).fromTo(
            cardEl,
            { opacity: 0, y: 100 * index },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "<" // start with overlay animation
        );
    }, [index]);

    return (
        <div
            ref={cardRef}
            className="w-full md:w-1/2 p-6"
            style={{ transform: `translateY(${randomOffset}px)` }}
        >
            <div className="relative rounded-3xl overflow-hidden shadow-lg parallax-img">
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-black z-20"
                ></div>
                <Image
                    src={image}
                    alt={title}
                    width={700}
                    height={500}
                    className="object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 z-10">
                    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm">{roles}</p>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".parallax-img").forEach((img, index) => {
                gsap.to(img, {
                    yPercent: -20 * index,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        scrub: true,
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black py-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-white text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>
                <div className="flex flex-wrap justify-center">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
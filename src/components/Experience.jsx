"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticEffect from "./effects/MagneticEffect";
import MoveText from "./effects/MoveText";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        company: "The Neuron Club",
        role: "Full Stack Web Developer",
        period: "Sep 2021 - Feb 2022",
        primaryTech: "Next.js & Web3",
        logo: "/assets/the_neuron_club.jpeg",
        website: "https://www.linkedin.com/company/the-neuron-club/"
    },
    {
        company: "Sugoi Labs",
        role: "Product Development Engineer",
        period: "April 2022 - Mar 2024",
        primaryTech: "React & Node",
        logo: "/assets/sugoi_labs.jpeg",
        website: "https://www.linkedin.com/company/sugoi-labs/"
    },
    {
        company: "Appinventiv",
        role: "Senior Software Engineer",
        primaryTech: "React Native",
        period: "Oct 2024 - Current",
        logo: "/assets/appinventiv.jpeg",
        website: "https://www.linkedin.com/company/appinventiv"
    },
];

export default function Experience() {
    const containerRef = useRef(null);

    useEffect(() => {
        const cards = gsap.utils.toArray(".parallax-card");

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom top",
                        scrub: true, // enables parallax-like scroll interaction
                    },
                }
            );
        });
    }, []);

    return (
        <section
            ref={containerRef}
            className="bg-snow-white py-24 sm:py-32 md:py-40 px-6 sm:px-10 relative"
        >
            <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-2">
                {/* Call to Action Block */}
                <MagneticEffect>
                    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between parallax-card cursor-grab">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                            Wanna see <br /> my experience?
                        </h2>
                        <MagneticEffect>
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: document.documentElement.scrollHeight,
                                        behavior: 'smooth',
                                    })
                                }}
                                className="w-fit bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition cursor-pointer">
                                <MoveText text="Get in Touch" group={true} />
                            </button>
                        </MagneticEffect>
                    </div>
                </MagneticEffect>


                {/* Experience Cards */}
                {experiences.map((item, index) => (
                    <MagneticEffect key={index}>
                        <div
                            className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between parallax-card cursor-grab"
                        >
                            <a href={item.website} target="_blank" rel="noreferrer">
                                <div className="flex items-center gap-3 mb-4">
                                    {item.logo && (
                                        <img
                                            src={item.logo}
                                            alt={`${item.company} logo`}
                                            className="w-8 h-8 rounded object-cover shadow"
                                        />
                                    )}
                                    <span className="text-gray-500 font-medium text-lg">
                                        {item.company}
                                    </span>
                                </div>
                            </a>
                            <p className="text-lg font-medium mb-2">{item.role}</p>
                            <span className="text-sm text-gray-500">{item.period}</span>
                            <p className="text-sm text-gray-500 mt-2">
                                {item.primaryTech}
                            </p>
                        </div>
                    </MagneticEffect>

                ))}
            </div>
        </section>
    );
}

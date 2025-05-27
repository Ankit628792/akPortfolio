

import { useEffect, useRef } from "react";
import MagneticEffect from "./effects/MagneticEffect";
import StringSVG from "./effects/StingSVG";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MoveText from "./effects/MoveText";
import { Codepen, Github, Instagram, Linkedin } from "lucide-react";
import { CODEPEN_LINK, GITHUB_LINK, INTAGRAM_LINK, LINKEDIN_LINK } from "@/lib/constant";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
        },
      });

      tl.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(subTextRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=0.6")
        .from(buttonRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        }, "-=0.6")
        .from(topRightRef.current, {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=0.6")
        .from(bottomLeftRef.current, {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=0.6")
        .from(bottomRightRef.current, {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sm:min-h-screen flex items-center justify-center px-10 py-20 relative bg-black mt-96 w-full overflow-hidden"
    >
      <div className="relative w-full max-w-8xl sm:min-h-[90dvh] space-y-16 md:space-y-0">
        {/* Top Left Text */}
        <div
          className="md:absolute z-10 top-0 left-0 max-w-xl md:max-w-2xl"
        >
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-loose text-white capitalize group max-w-max"
          >
            Creating <br />
            Digital Products <br />
            That <MoveText finalTextClass=" text-primary-400 poetsen-one " initalTextClass="text-primary-400 poetsen-one" text={"Inspire"} finalText={"Impact"}></MoveText>

          </h1>
          <p ref={subTextRef} className="mt-3 text-base sm:text-lg text-gray-300 poppins">
            Craft engaging digital experiences that feel intuitive, meaningful, and built to last.
          </p>
          <MagneticEffect>
            <button
              ref={buttonRef}
              onClick={() => {
                window.scrollBy({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }}
              className="mt-4 sm:mt-6 bg-white text-gray-500 py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-primary-400 hover:text-white transition-all duration-200 ease-out poppins group"
            >
              <MoveText finalTextClass="text-white" initalTextClass="text-gray-500" text={"View Projects"}></MoveText>
            </button>
          </MagneticEffect>
        </div>

        {/* Top Right Text */}
        <div
          ref={topRightRef}
          className="md:absolute z-10 top-0 right-0 sm:max-w-sm md:text-right group"
        >
          <MoveText wrapperClass="pr-8 cursor-auto" finalTextClass="text-primary-400 poetsen-one font-bold text-xl min-w-max" initalTextClass="text-primary-400 poetsen-one font-bold text-xl min-w-max" text={"15+ Products Launched"} finalText={"each with its own tale"} />
          <p className="text-base mt-2 text-gray-300 poppins">
            From early-stage startups to growing businesses, bring powerful ideas to life across various industries.
          </p>
        </div>

        {/* Center Animation */}
        <div ref={buttonRef} className="hidden md:block">
          <StringSVG stroke="#b3b2fb" wrapperClass="md:mt-60 min-h-[60dvh]" text={"Powers I hold"} textClass="text-6xl lg:text-7xl text-primary-400 opacity-10 exile" />
        </div>

        {/* Bottom Left Text */}
        <div
          ref={bottomLeftRef}
          className="md:absolute z-10 bottom-0 left-0 max-w-md lg:max-w-lg"
        >

          <div className="flex items-center gap-4 ">
            <a href={INTAGRAM_LINK} target="_blank" rel="noreferrer">
              <Instagram className="w-6 h-6 text-primary-400 hover:text-white cursor-pointer" />
            </a>
            <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 text-primary-400 hover:text-white cursor-pointer" />
            </a>
            <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 text-primary-400 hover:text-white cursor-pointer" />
            </a>
            <a href={CODEPEN_LINK} target="_blank" rel="noreferrer">
              <Codepen className="w-6 h-6 text-primary-400 hover:text-white cursor-pointer" />
            </a>
          </div>
          <p className="text-base text-gray-300 poppins mt-3">
            I’m a software engineer who breathes life into digital dreams using React and Node — products that don’t just work, but become masterpiece.
          </p>
        </div>

        {/* Bottom Right Text */}
        <div
          ref={bottomRightRef}
          className="md:absolute z-10 bottom-0 right-0 sm:max-w-sm md:text-right group"
        >
          <MoveText wrapperClass="pr-8 cursor-auto" finalTextClass="text-primary-400 poetsen-one font-bold text-xl min-w-max" initalTextClass="text-primary-400 poetsen-one font-bold text-xl min-w-max !leading-none" text={"3+ Years Of Experience"} finalText={"writes stories via code"} />
          <p className="text-base mt-2 text-gray-300 poppins">
            Building thoughtful products that balance innovation with real user needs — from backend logic to beautiful interfaces.
          </p>
        </div>


      </div>
    </section>
  );
}
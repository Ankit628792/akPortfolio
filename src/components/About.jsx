
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticEffect from "./effects/MagneticEffect";
import MoveText from "./effects/MoveText";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollRef = useRef(null);
  const imageRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
      },
    });

    timeline
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      ).fromTo(
        imageRef,
        { opacity: 0, y: 30 },
        { opacity: 1, translateY: 0, duration: 0.6, ease: "power3.out" },
        `-=0.5`
      );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-black text-white min-h-screen flex items-center justify-center px-10 pb-20 pt-0 sm:py-20 relative">
      <div className="max-w-8xl w-full text-center space-y-6">
        <div className="max-w-8xl w-full flex flex-col md:flex-row-reverse md:items-center justify-between gap-10 py-20">
          {/* Right Side: Heading */}
          <div className="max-w-xl space-y-4 text-left md:text-right" ref={headingRef}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-loose group">
              Hi, I&apos;m
              <MoveText finalTextClass=" text-primary-400 poetsen-one " initalTextClass="text-primary-400 poetsen-one" text={"Ankit"} finalText={"안키트"}></MoveText>
              <br />
              Build Digital Products that
              <MoveText finalTextClass=" text-primary-400 poetsen-one " initalTextClass="text-primary-400 poetsen-one" text={"Inspire"} finalText={"Impact"}></MoveText>
              Livings
              <MagneticEffect>
                <span className="inline-block ml-2 cursor-grab">🏀</span>
              </MagneticEffect>
            </h1>
          </div>

          {/* Left Side: Paragraph and Button */}
          <div className="md:w-1/3 text-left">
            <div className="w-full group">
              <MoveText initalTextClass="text-primary-500 text-sm poppins" finalTextClass="text-primary-500 text-sm poppins" wrapperClass="mb-2.5 -ml-1 cursor-auto" group text={"Hello There !!!"} finalText={"안녕하세요 사람인"} />
              <p className="text-gray-300 mb-6 md:text-left poppins" ref={paragraphRef}>
                I love crafting digital experiences that not only look good but also feel natural and useful. My work connects innovation with real people’s needs.
              </p>
            </div>
            <MagneticEffect>
              <button
                ref={buttonRef}
                onClick={() => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                  })
                }}
                className="bg-white text-gray-500 py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-primary-400 hover:text-white transition-all duration-200 ease-out poppins group"
              >
                <MoveText finalTextClass="text-white" initalTextClass="text-gray-500" text={"Get in touch"}></MoveText>
              </button>
            </MagneticEffect>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <MagneticEffect>
          <div ref={scrollRef} className="col-span-2 flex flex-col items-center mt-16 cursor-grab">
            <div className="text-gray-400 text-sm poppins">Scroll Down</div>
            <svg
              className="w-6 h-10 text-gray-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v2m0 0a5.25 5.25 0 0 1 5.25 5.25v2.25a5.25 5.25 0 0 1-10.5 0V11.75A5.25 5.25 0 0 1 12 6.5z"
              />
            </svg>
          </div>
        </MagneticEffect>

        <div className="relative">
          <svg ref={imageRef} viewBox="-10 -10 1350 594" className="w-full relative z-10" fill="#9d9bf6"><path d=" M10 0 L190 0 C190 0, 200 0, 200 10 L200 178 C200 178, 200 188, 210 188 L362 188 C362 188, 372 188, 372 178 L372 10 C372 10, 372 0, 382 0 L562 0 C562 0, 572 0, 572 10 L572 174 C572 174, 572 184, 582 184 L727 184 C727 184, 737 184, 737 174 L737 10 C737 10, 737 0, 747 0 L927 0 C927 0, 937 0, 937 10 L937 174 C937 174, 937 184, 947 184 L1120 184 C1120 184, 1130 184, 1130 174 L1130 10 C1130 10, 1130 0, 1140 0 L1320 0 C1320 0, 1330 0, 1330 10 L1330 190 C1330 190, 1330 200, 1320 200 L1143 200 C1143 200, 1133 200, 1133 210 L1133 360 C1133 360, 1133 370, 1143 370 L1320 370 C1320 370, 1330 370, 1330 380 L1330 560 C1330 560, 1330 570, 1320 570 L1140 570 C1140 570, 1130 570, 1130 560 L1130 394 C1130 394, 1130 384, 1120 384 L958 384 C958 384, 948 384, 948 394 L948 560 C948 560, 948 570, 938 570 L758 570 C758 570, 748 570, 748 560 L748 394 C748 394, 748 384, 738 384 L583 384 C583 384, 573 384, 573 394 L573 564 C573 564, 573 574, 563 574 L383 574 C383 574, 373 574, 373 564 L373 398 C373 398, 373 388, 363 388 L210 388 C210 388, 200 388, 200 398 L200 559 C200 559, 200 569, 190 569 L10 569 C10 569, 0 569, 0 559 L0 379 C0 379, 0 369, 10 369 L173 369 C173 369, 183 369, 183 359 L183 210 C183 210, 183 200, 173 200 L10 200 C10 200, 0 200, 0 190 L0 10 C0 10, 0 0, 10 0, M383 210 L383 364 C383 364, 383 374, 393 374 L545 374 C545 374, 555 374, 555 364 L555 210 C555 210, 555 200, 545 200 L393 200 C393 200, 383 200, 383 210, M755 210 L755 360 C755 360, 755 370, 765 370 L923 370 C923 370, 933 370, 933 360 L933 210 C933 210, 933 200, 923 200 L765 200 C765 200, 755 200, 755 210"></path></svg>
        </div>
      </div>
    </section>
  );
}

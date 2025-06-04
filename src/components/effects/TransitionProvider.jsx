'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function TransitionProvider({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const overlayRef = useRef([]);

  // Animate panels IN (exit) and swap page content
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power4.inOut' },
      onComplete: () => {
        setDisplayChildren(children);
      },
    });

    tl.to(overlayRef.current, {
      y: '0%',
      duration: 0.6,
      stagger: 0.1,
    });

    return () => tl.kill();
  }, [pathname]);

  // Animate panels OUT (enter) + fade in new content
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

    // Panels slide out
    tl.to(overlayRef.current, {
      y: '-100%',
      duration: 1,
      delay: 0.2,
      stagger: 0.1,
    });

    return () => tl.kill();
  }, [displayChildren]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none overflow-hidden">
        <div
          ref={overlayRef}
          className="absolute inset-0 w-full h-full bg-primary-400 grid place-items-center"
          style={{ zIndex: 9999 }}
        >
          <img src="/ank.svg" className='w-12 sm:w-14' alt="Logo" />
        </div>
      </div>

      {displayChildren}
    </>
  );
}

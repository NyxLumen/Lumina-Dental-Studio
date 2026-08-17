import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureCopy() {
  const containerRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Paragraph 1 reveal
      gsap.from(para1Ref.current, {
        scrollTrigger: {
          trigger: para1Ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Paragraph 2 scroll-fade reveal
      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: para2Ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 25,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-[#f6f6fa]">
      <div className="max-w-[760px] mx-auto px-6 text-left sm:text-center space-y-8 select-none">
        
        {/* Paragraph 1 */}
        <p
          ref={para1Ref}
          className="text-xl sm:text-2xl lg:text-3xl font-display font-normal text-[#151581] leading-[1.3] tracking-[-0.025em]"
        >
          At Lumina Dental Studio, we operate as a clinical sanctuary for your smile. Every porcelain restoration is custom-milled to honor your natural enamel opalescence and facial proportion harmony.
        </p>

        {/* Hairline Divider */}
        <div className="w-16 h-0.5 bg-[#5465ff]/30 mx-auto rounded-full" />

        {/* Paragraph 2 */}
        <p
          ref={para2Ref}
          className="text-xl sm:text-2xl lg:text-3xl font-display font-normal text-[#151581] opacity-85 leading-[1.3] tracking-[-0.025em]"
        >
          From zero-impression 3D optical scans to computer-guided keyhole implants, we replace clinical anxiety with prescription-grade precision and pain-free comfort.
        </p>

      </div>
    </section>
  );
}

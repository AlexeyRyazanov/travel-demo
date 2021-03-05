import { RefObject, useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function CloudSvgFilter(): JSX.Element {
   const cloudRef: RefObject<HTMLDivElement> = useRef(null);
   const feturbulence = useRef<SVGFETurbulenceElement>(null);

   useEffect(() => {
      if (feturbulence.current) {
         const tl = gsap.timeline({
            repeat: -1,
            // yoyo: true
         });

         const duration = 10;

         tl
            .fromTo(cloudRef.current,
               {
                  xPercent: 100,
               },
               {
                  duration,
                  xPercent: -100,
                  ease: 'none',
               })
            .to(feturbulence.current, {
               // duration: 100,
               duration,
               ease: 'none',
               // attr: { 'baseFrequency': 0.01 },
               onUpdate() {
                  const bfX = this.progress() * 0.01 + 0.01;
                  const bfY = this.progress() * 0.01 + 0.01;
                  const bfStr = `${bfX.toString()} ${bfY.toString()}`;
                  feturbulence.current.setAttribute('baseFrequency', bfStr);
               },
            }, 0)
         ;

         // tl;
      }
      // return () => {
      //    cleanup
      // }
   }, []);

   return (
      <>
         <svg id="cloud-filter-container" width="0" height="0">
            <filter id="cloud-filter">
               <feTurbulence type="fractalNoise" baseFrequency="0.013" numOctaves="5" seed="448" ref={feturbulence} />
               <feDisplacementMap in="SourceGraphic" scale="212" />
            </filter>
         </svg>
         <div className="relative w_100p h_33vw  will-change_t" ref={cloudRef}>
            <div className="cloud_01" />
         </div>
      </>
   );
}

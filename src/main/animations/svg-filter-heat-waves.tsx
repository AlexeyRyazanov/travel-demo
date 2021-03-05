import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { panoAnimDur } from '../data/constants';

gsap.registerPlugin(ScrollTrigger);

export default function SVGFilterHeatWaves(): JSX.Element {
   const feturbulence = useRef<SVGFETurbulenceElement>(null);

   useEffect(() => {
      if (feturbulence.current) {
         const timeline = gsap.timeline({
            repeat: -1,
            // yoyo: true,
            scrollTrigger: {
               trigger: '.FlightPromoBanner',
               start: 'top bottom',
               toggleActions: 'play pause play pause'
            }
         });

         timeline.to(feturbulence.current, {
            duration: 1,
            ease: 'none',
            // attr: { 'baseFrequency': 0.01 },
            onUpdate() {
               const bfX = this.progress() * 0.1 + 0.1;
               const bfY = this.progress() * 0.1 + 0.1;
               const bfStr = `${bfX.toString()} ${bfY.toString()}`;
               feturbulence.current.setAttribute('baseFrequency', bfStr);
            }
         });
      }
      // return () => {
      //    cleanup
      // }
   }, []);

   return (
      <svg>
         <filter id="heatWaves" filterUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">
            <feTurbulence id="feturbulence" type="turbulence" numOctaves="8" seed="1" baseFrequency="0.1" stitchTiles="noStitch" ref={feturbulence} />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="B" scale="2" in="SourceGraphic" />
            <feBlend in="SourceGraphic" in2="noisy" mode="normal" />
            {/* <feColorMatrix type="saturate" values="0"/> */}
         </filter>
      </svg>
   );
}

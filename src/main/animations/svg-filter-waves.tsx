import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { panoAnimDur } from '../data/constants';

gsap.registerPlugin(ScrollTrigger);

export default function SVGFilterWaves(): JSX.Element {
   const feturbulence = useRef<SVGFETurbulenceElement>(null);

   useEffect(() => {
      if (feturbulence.current) {
         const timeline = gsap.timeline({
            repeat: -1,
            yoyo: true,
            scrollTrigger: {
               trigger: '.FlightPromoBanner',
               start: 'top bottom',
               toggleActions: 'play pause play pause'
            }
         });

         timeline.to(feturbulence.current, {
            duration: panoAnimDur / 2,
            ease: 'none',
            // attr: { 'baseFrequency': 0.01 },
            onUpdate() {
               const bfX = this.progress() * 0.01 + 0.01;
               const bfY = this.progress() * 0.01 + 0.01;
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
         <filter id="waves" filterUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">
            <feTurbulence id="feturbulence" type="turbulence" numOctaves="2" seed="10" baseFrequency="0.01" stitchTiles="noStitch" ref={feturbulence} />
            {/* <feColorMatrix type="saturate" values="0"/> */}
            <feDisplacementMap xChannelSelector="R" yChannelSelector="B" scale="12" in="SourceGraphic" />
            {/* <feBlend in="SourceGraphic" in2="noisy" mode="exclusion" /> */}
         </filter>
      </svg>
   );
}

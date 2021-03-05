import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPFeTurbulence(): JSX.Element {
   const feturbulence = useRef<SVGFETurbulenceElement>(null);

   useEffect(() => {
      if (feturbulence.current) {
         const timeline = gsap.timeline({
            repeat: -1,
            yoyo: true,
         });

         timeline.to(feturbulence.current, {
            duration: 60,
            ease: 'none',
            // attr: { 'baseFrequency': 0.01 },
            onUpdate() {
               const bfX = this.progress() * 0.1 + 0.01;
               const bfY = this.progress() * 0.1 + 0.01;
               const bfStr = `${bfX.toString()} ${bfY.toString()}`;
               feturbulence.current.setAttribute('baseFrequency', bfStr);
            },
         });
      }
      // return () => {
      //    cleanup
      // }
   }, []);

   return (
   // <svg>
   //    <filter id="turbulence" filterUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">
   //       {/* <feTurbulence id="feturbulence" type="fractalNoise" numOctaves="2" seed="1" baseFrequency="0.7" stitchTiles="noStitch" ref={feturbulence} /> */}
   //       {/* <feColorMatrix type="saturate" values="0"/> */}
   //       {/* <feDisplacementMap xChannelSelector="R" yChannelSelector="B" scale="10" in="SourceGraphic" /> */}
   //       {/* <feBlend in="SourceGraphic" in2="noisy" mode="exclusion" /> */}
   //       {/* <feTurbulence y="30px" height="40px" result="waves"
   //          type="turbulence" baseFrequency="0.01 0.1"
   //          numOctaves="1" seed="53" ref={feturbulence} />
   //       <feDisplacementMap in="SourceGraphic" in2="waves"
   //          y="36px" height="30px"
   //          scale="4"
   //          xChannelSelector="G"
   //          yChannelSelector="B" /> */}
   //       <feOffset result="top" y="0" height="36px" />

   //       <feTurbulence y="30px" height="40px"
   //          type="turbulence" baseFrequency="0.01 .1"
   //          numOctaves="1" seed="53" />
   //       <feDisplacementMap in="SourceGraphic" result="waves"
   //          y="36px" height="30px"
   //          scale="4"
   //          xChannelSelector="R"
   //          yChannelSelector="B" />
   //       <feGaussianBlur result="bottom"
   //          y="34px" height="32px"
   //          stdDeviation="0.4" />

   //       <feMerge>
   //          <feMergeNode in="top" />
   //          <feMergeNode in="bottom" />
   //       </feMerge>

   //    </filter>
   // </svg>

      <svg width="4in" height="3in">
         <title>Generated Wave Pattern</title>
         <filter id="turbulence">
            <feTurbulence type="turbulence" baseFrequency="0.01 .1" numOctaves="1" seed="53" />
            <feComposite in2="SourceAlpha" operator="in" />
         </filter>
         <filter id="wave">
            <feTurbulence type="turbulence" baseFrequency="0.01 .1" numOctaves="1" seed="53" />
            <feComponentTransfer result="wave">
               <feFuncR type="linear" slope="0.1" intercept="-0.05" />
               <feFuncG type="gamma" amplitude="0.75" exponent="0.6" offset="0.05" />
               <feFuncB type="gamma" amplitude="0.8" exponent="0.4" offset="0.05" />
               <feFuncA type="linear" slope="6" />
            </feComponentTransfer>
            <feFlood floodColor="lightCyan" />
            <feComposite in="wave" />
            <feComposite in2="SourceAlpha" operator="in" />
         </filter>
         <defs>
            <rect id="r" width="100%" height="50%" rx="8%" />
         </defs>

         <use href="#r" filter="url(#turbulence)" />
         <use href="#r" filter="url(#wave)" y="50%" />
      </svg>
   );
}

import { useEffect, RefObject, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { fi, panoAnimDur } from '../data/constants';

gsap.registerPlugin(ScrollTrigger);

type NumStr = number | string;

type Props = {
   layer?: number;
   xf?: NumStr;
   xt?: NumStr;
   yf?: NumStr;
   yt?: NumStr;
   delay?: NumStr;
}

export default function usePanoClouds(props: Props): RefObject<HTMLDivElement> {
   const
      {
         delay = 0,
         layer = 1,
         xf = 150,
         xt = -150,
         yf = 0,
         yt = 0,
      } = { ...props };

   const ref: RefObject<HTMLDivElement> = useRef(null);
   const coef = layer * fi;

   useEffect(() => {
      let tl: gsap.core.Timeline;

      if (ref.current) {
         const node = ref.current;

         tl = gsap.timeline({
            scrollTrigger: {
               trigger: '.FlightPromoBanner',
               start: 'top bottom',
               toggleActions: 'play pause play pause'
            }
         });

         tl
            .fromTo(node,
               {
                  xPercent: 0,
                  yPercent: yf,
               },
               {
                  duration: 1.5 * panoAnimDur / coef,
                  xPercent: xt,
                  yPercent: yt,
                  ease: 'none',
               })
            .fromTo(node,
               {
                  xPercent: xf,
                  yPercent: yf,
               },
               {
                  xPercent: xt,
                  yPercent: yt,
                  duration: 1.5 * panoAnimDur / coef,
                  ease: 'none',
                  repeat: -1
               }/* , 1.5 * panoAnimDur / coef */);
      }

      return () => {
         if (tl) {
            tl.kill();
         }
      };

   }, [coef, layer, ref, xf, xt, yf, yt]);

   return ref;
}

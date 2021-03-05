import { useEffect, RefObject, useRef } from 'react';
import gsap from 'gsap';
import { fi, panoAnimDur } from '../data/constants';

type NumStr = number | string;

type Props = {
   layer?: number;
   xf?: NumStr;
   xt?: NumStr;
   yf?: NumStr;
   yt?: NumStr;
   delay?: NumStr;
}

export default function usePano(props: Props): RefObject<HTMLDivElement> {
   const
      {
         // delay = 0,
         layer = 1,
         // xf = 100,
         // xt = -130,
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
            repeat: -1,
            scrollTrigger: {
               trigger: '.FlightPromoBanner',
               start: 'top bottom',
               toggleActions: 'play pause play pause'
            }
         });

         tl.fromTo(node,
            {
               xPercent: 50,
               yPercent: yf,
            },
            {
               duration: 2 * panoAnimDur / coef,
               xPercent: -100,
               yPercent: yt,
               ease: 'none'
            }
         )
            .set(node, {
               xPercent: 100,
               yPercent: yf
            })
            .to(node, {
               duration: panoAnimDur / coef / 3,
               xPercent: 50,
               ease: 'none'
            });
      }

      return () => {
         if (tl) tl.kill();
      };

   }, [coef, layer, ref, yf, yt]);

   return ref;
}

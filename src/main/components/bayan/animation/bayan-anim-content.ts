import { EndHandler } from 'react-transition-group/Transition';
import { RefObject } from 'react';
import gsap from 'gsap';
import { bayanAnimDuration as duration } from '../bayan-provider';

export function bayanAnimContentOpen(ref: RefObject<HTMLDivElement>): void {

   const onComplete = () => {
      if (ref.current) {
         gsap.set(ref.current, { clipPath: 'none' });
      }
   };

   if (ref.current) {
      gsap.fromTo(ref.current,
         {
            autoAlpha: 0,
            clipPath: 'inset(0px 0px 100% 0px)',
         },
         {
            duration,
            autoAlpha: 1,
            clipPath: 'inset(0px 0px 0% 0px)',
            ease: 'power4.out',
            onComplete,
         });
   }
}

export function bayanAnimContentClose(ref: RefObject<HTMLDivElement>, done: EndHandler<HTMLElement>): void {
   if (ref.current) {
      gsap.to(ref.current, {
         duration,
         autoAlpha: 0,
         clipPath: 'inset(0px 0px 100% 0px)',
         ease: 'power4.out',
         onComplete: done,
      });
   }
}

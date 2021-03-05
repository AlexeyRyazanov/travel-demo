import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { BayanAnimationParentType } from '../typings/bayan-type';
import { bayanAnimDuration, useBayanStateL0 } from '../bayan-provider';
import calculateOffsetY from '../utils/calculate-offset-y';

export default function useBayanAnimationL0({
   bayanIndex,
   delayDef = 0,
   duration = bayanAnimDuration,
   ease = 'power4.out',

}: BayanAnimationParentType): RefObject<HTMLDivElement> {

   const { heights, selectedIndex } = useBayanStateL0();
   const ref = useRef<HTMLDivElement>(null);

   const onComplete = () => {
      if (ref.current) {
         gsap.set(ref.current, { willChange: 'auto' });
      }
   };

   useEffect(() => {

      let delay = 0;

      const y = calculateOffsetY({ heights, bayanIndex });

      if (delayDef !== 0 && selectedIndex !== null && bayanIndex > selectedIndex) {
         delay = (bayanIndex - selectedIndex) * delayDef;
      }

      if (ref.current) {
         gsap.to(ref.current, {
            duration,
            y,
            delay,
            ease,
            willChange: 'transform',
            onComplete,
         });
      }

   }, [bayanIndex, delayDef, duration, ease, heights, selectedIndex]);

   return ref;
}

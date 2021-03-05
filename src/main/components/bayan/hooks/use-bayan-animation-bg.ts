import { RefObject, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { bayanAnimDuration, BayanType, useBayanStateL0 } from '../bayan-provider';

gsap.registerPlugin(CustomEase);

CustomEase.create('expo-css', '.15,.85,.25,1');

export default function useBayanAnimationBgCss({ bayan }: { bayan: BayanType }): RefObject<HTMLDivElement> {

   const ref = useRef<HTMLDivElement>(null);
   const { heights } = useBayanStateL0();

   useEffect(() => {
      let wrapperHeightOffset = 0;

      if (heights !== null && heights[bayan.l0] > 0) {
         wrapperHeightOffset = heights[bayan.l0];
      }

      if (ref.current) {
         const bg = ref.current;
         const bgHeight = bg.offsetHeight;
         const scaleY = ((bgHeight + wrapperHeightOffset) / bgHeight).toFixed(2);

         gsap.to(ref.current, {
            duration: bayanAnimDuration,
            scaleY,
            ease: 'expo-css',
            transformOrigin: '50% 0%',
         });
      }
      // return () => {
      //    cleanup;
      // };
   }, [bayan.l0, heights]);

   return ref;
}

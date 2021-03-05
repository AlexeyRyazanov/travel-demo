import {
   RefObject, useEffect, useRef, useState,
} from 'react';
import { useBayanStateL0 } from '../bayan-provider';

type BayanAnimationBgCssType = {
   ref: RefObject<HTMLDivElement>;
   scaleY: number;
   height: number;
};

export default function useBayanAnimationBgCss({ bayanIndex }: { bayanIndex: number }): BayanAnimationBgCssType {

   const ref = useRef<HTMLDivElement>(null);
   const { heights } = useBayanStateL0();
   const [scaleY, setScaleY] = useState(1);
   // const scaleY = useRef(1);

   useEffect(() => {
      let wrapperHeightOffset = 0;

      if (ref.current) {

         if (heights !== null && heights[bayanIndex] >= 0) {
            wrapperHeightOffset = heights[bayanIndex];
         }

         const bg = ref.current;
         const bgHeight = bg.offsetHeight;

         if (wrapperHeightOffset !== 0) {
            setScaleY((bgHeight + wrapperHeightOffset) / bgHeight);
         } else {
            setScaleY(1);
         }

         // console.log(bgHeight);
         // console.log(scaleY);

         // gsap.to(bgRef.current, {
         //    duration: bayanAnimDuration,
         //    scaleY,
         //    ease: 'power4.out',
         //    transformOrigin: '50% 0%'
         // });
         // }
         // return () => {
         //    cleanup;
         // console.table({ scaleY: scaleY.current, bgHeight, wrapperHeightOffset });
      }
   }, [bayanIndex, heights]);

   return {
      ref,
      scaleY,
      height: heights !== null ? heights[bayanIndex] : 0,
   };
}

import { BayanHeightsType } from '../typings/bayan-type';

export default function calculateOffsetY({
   bayanIndex,
   heights,
}: {
   bayanIndex: number;
   heights: BayanHeightsType
}): number {

   let y = 0;

   if (heights !== null) {
      const keys = Object.keys(heights);

      for (let i = 0, len = keys.length; i < len; i++) {
         const key = parseInt(keys[i], 10);

         if (bayanIndex > key) {
            y += heights[key];
         }
      }
   }

   return y;
}

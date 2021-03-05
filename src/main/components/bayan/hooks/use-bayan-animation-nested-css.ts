import { useBayanStateL1, useBayanStateL2 } from '../bayan-provider';
import calculateOffsetY from '../utils/calculate-offset-y';

export function useBayanAnimationNestedL1Css(bayanIndex: number): number {
   const { heights } = useBayanStateL1();

   return calculateOffsetY({ bayanIndex, heights });
}

export function useBayanAnimationNestedL2Css(bayanIndex: number): number {
   const { heights } = useBayanStateL2();

   return calculateOffsetY({ bayanIndex, heights });
}
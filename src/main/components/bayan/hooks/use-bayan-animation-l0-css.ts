import { useMemo } from 'react';
import { useBayanStateL0 } from '../bayan-provider';
import calculateOffsetY from '../utils/calculate-offset-y';

export default function useBayanAnimationL0Css(bayanIndex: number): number {
   const { heights } = useBayanStateL0();

   const offset = useMemo(() => calculateOffsetY({ heights, bayanIndex }), [bayanIndex, heights]);

   return offset;
}

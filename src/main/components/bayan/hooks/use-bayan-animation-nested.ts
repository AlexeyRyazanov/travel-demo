import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { BayanAnimationNestedType, BayanStateType } from '../typings/bayan-type';
import { bayanAnimDuration, useBayanStateL1, useBayanStateL2 } from '../bayan-provider';
import calculateOffsetY from '../utils/calculate-offset-y';

function useBayanAnimationNested({
   bayanIndex,
   state,
   duration,
   ease,
   ref,
}: BayanAnimationNestedType & {
   state: BayanStateType;
   ref: RefObject<HTMLDivElement>;
}) {

   const { heights } = state;

   useEffect(() => {
      const y = calculateOffsetY({ heights, bayanIndex });

      if (ref.current) {
         gsap.to(ref.current, { duration, y, ease });
      }

   }, [bayanIndex, duration, ease, heights, ref]);
}

export function useBayanAnimationNestedL1({
   bayanIndex,
   duration = bayanAnimDuration,
   ease = 'power4.out',

}: BayanAnimationNestedType): RefObject<HTMLDivElement> {

   const state = useBayanStateL1();
   const ref = useRef<HTMLDivElement>(null);

   useBayanAnimationNested({
      bayanIndex,
      duration,
      ease,
      ref,
      state,
   });

   return ref;
}

export function useBayanAnimationNestedL2({
   bayanIndex,
   duration = bayanAnimDuration,
   ease = 'power4.out',

}: BayanAnimationNestedType): RefObject<HTMLDivElement> {

   const state = useBayanStateL2();
   const ref = useRef<HTMLDivElement>(null);

   useBayanAnimationNested({
      bayanIndex,
      duration,
      ease,
      ref,
      state,
   });

   return ref;
}

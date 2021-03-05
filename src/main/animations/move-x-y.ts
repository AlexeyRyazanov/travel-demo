import gsap from 'gsap';
import { MouseEvent, RefObject } from 'react';
import getXyFromCenter from '../utils/get-xy-from-center';

export default function moveXY(e: MouseEvent<HTMLDivElement>, el: RefObject<HTMLDivElement>, time: number, coef: number) {
   if (!el.current) {
      return;
   }

   const { x, y } = getXyFromCenter(e);

   gsap.to(el.current, time, {
      duration: time,
      x: coef * x,
      y: coef * y,
      ease: 'power1.out',
   });

   // console.log(x, y);
}

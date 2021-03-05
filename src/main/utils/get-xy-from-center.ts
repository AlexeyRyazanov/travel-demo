import { MouseEvent } from 'react';

export default function getXyFromCenter(e: MouseEvent<HTMLDivElement>): { x: number; y: number } {
   return {
      x: (e.clientX / window.innerWidth) - 0.5,
      y: (e.clientY / window.innerHeight) - 0.5,
   };
}

import { RefObject, useEffect } from 'react';
import gsap from 'gsap';

type Props = {
   current: number;
   ref: RefObject<HTMLDivElement | null>;
};

export default function useImageChange(props: Props) {
   const {
      current,
      ref,
   } = props;

   useEffect(() => {
      if (ref && ref.current) {
         const n = ref.current;
         const tl = gsap.timeline();

         tl
            .to(n, {
               duration: 0.3, scale: 0.6, opacity: 0, ease: 'expo.out',
            })
            .to(n, {
               duration: 0.3, scale: 1, opacity: 1, ease: 'expo.out',
            });
      }
      // return () => {
      //    cleanup
      // };
   }, [current, ref]);
}

import {
   useCallback, useEffect, RefObject, useRef,
} from 'react';
import throttle from '../../../utils/throttle';

type BayanResizeType = {
   contentRef: RefObject<HTMLDivElement>;
   callback: (v: number) => void;
};

export default function useBayanResize({ contentRef, callback }: BayanResizeType): void {

   const wrapperHeightCurrent = useRef(0);

   const onResize = useCallback(() => {
      if (contentRef.current) {
         const wrapperHeight = contentRef.current.getBoundingClientRect().height;
         // console.log(contentRef.current.offsetHeight);
         // console.log('heightCurrent.current', bayan, wrapperHeightCurrent.current);
         // console.log('ref.current.offsetHeight', bayan, wrapperHeight);

         let height = 0;
         if (wrapperHeight !== wrapperHeightCurrent.current) {
            height = wrapperHeight - wrapperHeightCurrent.current;
            wrapperHeightCurrent.current = wrapperHeight;
            callback(height);
         }
      }
   }, [callback, contentRef]);

   const onResizeThrottled = throttle(onResize, 100);

   useEffect(() => {
      if (contentRef.current) {
         wrapperHeightCurrent.current = contentRef.current.getBoundingClientRect().height;
      }
      window.addEventListener('resize', onResizeThrottled);
      return () => {
         window.removeEventListener('resize', onResizeThrottled);
      };
   }, [onResizeThrottled, contentRef]);
}

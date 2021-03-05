import {
   useState, useCallback, useLayoutEffect, RefObject,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export type SizeModel = {
   width?: number;
   height?: number;
};

export default function useDimensions(ref: RefObject<HTMLElement | null>) {
   const [size, sizeSet] = useState<SizeModel>({ width: 0, height: 0 });

   const handleResize = useCallback(() => {
      if (ref && ref.current) {
         const { width, height } = ref.current.getBoundingClientRect();

         sizeSet({ width, height });
      }
   }, [ref]);

   useLayoutEffect(() => {
      if (!ref.current) {
         return;
      }

      handleResize();

      if (typeof ResizeObserver === 'function') {
         let resizeObserver = new ResizeObserver(handleResize);
         resizeObserver.observe(ref.current);

         return () => {
            resizeObserver.disconnect();
            resizeObserver = null;
         };
      }
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };

   }, [handleResize, ref]);

   return size;
}

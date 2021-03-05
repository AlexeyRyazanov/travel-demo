import {
   Dispatch,
   RefObject,
   SetStateAction,
   useCallback,
   useEffect,
   useRef,
   useState,
} from 'react';

import { bayanAnimContentClose, bayanAnimContentOpen } from '../animation/bayan-anim-content';
import useBayanResize from './use-bayan-resize';

import {
   BayanType,
   useBayanDispatchL0,
   useBayanDispatchL1,
   useBayanStateL0,
   RESET_HEIGHTS,
   SET_HEIGHTS,
} from '../bayan-provider';
import throttle from '../../../utils/throttle';

type T = {
   contentRef: RefObject<HTMLDivElement>;
   opened: boolean | null;
   setOpened: Dispatch<SetStateAction<boolean>>;
   openAnim?: (node: HTMLElement, done: () => void) => void;
};

export default function useBayanContentL1(bayan: BayanType): T {

   const contentRef = useRef<HTMLDivElement>(null);

   const [opened, setOpened] = useState<boolean | null>(null);
   const { heights } = useBayanStateL0();

   const bayanDispatchL0 = useBayanDispatchL0();
   const bayanDispatchL1 = useBayanDispatchL1();

   useEffect(() => {
      if (heights === null) {
         setOpened(null);
         bayanDispatchL1({
            type: RESET_HEIGHTS,
         });
      }
   }, [bayanDispatchL1, heights]);

   useEffect(() => {
      if (opened !== null && contentRef.current) {
         const { l0, l1 } = bayan;
         // const heightNode = 400;
         const heightNode = contentRef.current.getBoundingClientRect().height;

         bayanDispatchL1({
            type: SET_HEIGHTS,
            payload: {
               bayanIndex: l1,
               height: opened ? heightNode : 0,
            },
         });

         bayanDispatchL0({
            type: SET_HEIGHTS,
            payload: {
               bayanIndex: l0,
               height: opened ? heightNode : -heightNode,
            },
         });
      }
   }, [/* bayan, bayanDispatchL0, bayanDispatchL1,  */opened]);

   const openAnim = useCallback((_, done: () => void) => {
      if (opened) {
         bayanAnimContentOpen(contentRef);
      } else {
         bayanAnimContentClose(contentRef, done);
      }
   }, [opened, contentRef]);

   const wrapperHeightCurrent = useRef(0);

   const setResizeHeight = useCallback((height: number) => {
      const { l0, l1 } = bayan;
      bayanDispatchL1({
         type: SET_HEIGHTS,
         payload: {
            bayanIndex: l1,
            height,
         },
      });

      bayanDispatchL0({
         type: SET_HEIGHTS,
         payload: {
            bayanIndex: l0,
            height,
         },
      });
   }, [bayan, bayanDispatchL0, bayanDispatchL1]);

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
            setResizeHeight(height);
         }
      }
   }, [setResizeHeight]);

   const onResizeThrottled = throttle(onResize, 100);

   useEffect(() => {
      // if (contentRef.current) {
      //    wrapperHeightCurrent.current = contentRef.current.getBoundingClientRect().height;
      // }
      window.addEventListener('resize', onResizeThrottled);
      return () => {
         window.removeEventListener('resize', onResizeThrottled);
      };
   }, [onResizeThrottled, contentRef]);

   // useBayanResize({ contentRef, callback: setResizeHeight });

   return {
      contentRef,
      opened,
      setOpened,
      openAnim,
   };
}

import {
   Dispatch,
   RefObject,
   SetStateAction,
   useCallback,
   useEffect,
   useRef,
   useState,
} from 'react';

import {
   BayanType,
   useBayanDispatchL0,
   useBayanDispatchL1,
   SET_HEIGHTS,
   useBayanDispatchL2,
} from '../bayan-provider';

import { useBayanAnimationNestedL2Css } from './use-bayan-animation-nested-css';

type T = {
   contentRef: RefObject<HTMLDivElement>;
   offsetY: number;
   openAnim?: (_, done: () => void) => void
   opened: boolean | null;
   setOpened: Dispatch<SetStateAction<boolean>>;
};

export default function useBayanContentL2({ bayan, bayanL1Opened }: { bayan: BayanType; bayanL1Opened: boolean }): T {

   const bayanDispatchL0 = useBayanDispatchL0();
   const bayanDispatchL1 = useBayanDispatchL1();
   const bayanDispatchL2 = useBayanDispatchL2();

   const [opened, setOpened] = useState<boolean | null>(null);

   const contentRef = useRef<HTMLDivElement>(null);
   const offsetY = useBayanAnimationNestedL2Css(bayan.l2);

   const getContentHeight = useCallback(() => {
      if (contentRef.current) {
         return contentRef.current.offsetHeight;
         // return contentRef.current.getBoundingClientRect().height;
      }
   }, []);

   // Logic for closing parent container
   useEffect(() => {
      if (opened !== null && bayanL1Opened === false && contentRef.current) {
         const heightNode = getContentHeight();

         // console.log('TEST', bayanL1Opened);
         if (opened) {
            bayanDispatchL2({
               type: SET_HEIGHTS,
               payload: {
                  bayanIndex: bayan.l2,
                  height: 0,
               },
            });

            bayanDispatchL0({
               type: SET_HEIGHTS,
               payload: {
                  bayanIndex: bayan.l0,
                  height: -heightNode,
               },
            });
         }

         setOpened(null);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [bayanL1Opened]);

   const bayanSetHeights = useCallback(() => {
      if (opened !== null && contentRef.current) {
         // console.log('useEffect initital', bayanL1Opened);
         const heightNode = getContentHeight();
         const height = opened ? heightNode : -heightNode;
         const { l0, l1, l2 } = bayan;

         bayanDispatchL2({
            type: SET_HEIGHTS,
            payload: {
               bayanIndex: l2,
               height,
            },
         });

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
         // setOpened(null);
      }
   }, [/* bayan, bayanDispatchL0, bayanDispatchL1, bayanDispatchL2, getContentHeight,  */opened]);

   useEffect(() => {
      bayanSetHeights();
   }, [bayanSetHeights]);

   // const setResizeHeight = (height: number) => {
   //    dispatchL1({ type: SET_HEIGHTS, payload: { bayanIndex: bayan.l1, height } });
   //    dispatchL0({ type: SET_HEIGHTS, payload: { bayanIndex: bayan.l0, height } });
   // };

   // useBayanResize({
   //    bayan,
   //    wrapperRef,
   //    callback: setResizeHeight
   // });

   return {
      offsetY,
      contentRef,
      opened,
      setOpened,
   };
}

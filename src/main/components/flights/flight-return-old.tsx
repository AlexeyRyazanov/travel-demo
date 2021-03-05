import {
   useEffect, useRef, useCallback, useState, memo,
} from 'react';
import { Transition } from 'react-transition-group';
import { bayanAnimContentOpen, bayanAnimContentClose } from '../bayan/animation/bayan-anim-content';
import {
   BayanType, useBayanDispatchL0, useBayanDispatchL1, SET_HEIGHTS, useBayanStateL0, RESET_HEIGHTS,
} from '../bayan/bayan-provider';
import { BoundType } from '../../typings/flights-amadeus';
import { useBayanAnimationNestedL1Css } from '../bayan/hooks/use-bayan-animation-nested-css';
import FlightDetails from './flight-details';
import FlightInfo from './flight-info';
// import { useBayanAnimationNestedL1 } from '../bayan/hooks/use-bayan-animation-nested';

type Props = {
   data: BoundType;
   logo?: boolean;
} & {
   bayan: BayanType;
};

export default memo(function FlightReturn({ data, logo, bayan }: Props): JSX.Element {

   const { duration, legs } = data;
   const { l0: bayanIndexParent, l1: bayanIndex } = bayan;

   const contentRef = useRef<HTMLDivElement>(null);

   // const [opened, dispatch] = useReducer(v => !v, false);
   const [opened, setOpened] = useState<boolean | null>(null);

   const bayanDispatchL0 = useBayanDispatchL0();
   const bayanDispatchL1 = useBayanDispatchL1();

   const { heights } = useBayanStateL0();

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
         // const heightNode = contentRef.current.offsetHeight;
         const heightNode = contentRef.current.getBoundingClientRect().height;

         bayanDispatchL1({
            type: SET_HEIGHTS,
            payload: {
               bayanIndex,
               height: opened ? heightNode : 0,
            },
         });

         bayanDispatchL0({
            type: SET_HEIGHTS,
            payload: {
               bayanIndex: bayanIndexParent,
               height: opened ? heightNode : -heightNode,
            },
         });
      }
   }, [bayanDispatchL0, bayanDispatchL1, bayanIndex, bayanIndexParent, opened]);

   const openAnim = useCallback((_: HTMLElement, done: () => void) => {
      if (opened) {
         bayanAnimContentOpen(contentRef);
      } else {
         bayanAnimContentClose(contentRef, done);
      }
   }, [opened]);

   // const bayanRef = useBayanAnimationNestedL1({ bayanIndex: bayan.l1 });
   const offseY = useBayanAnimationNestedL1Css(bayan.l1);

   return (
      <div className="relative Flight col trans_06" style={{ transform: `translateY(${offseY}px)` }}>
         <div className="h_2px bg_240" />
         <FlightInfo
            data={data}
            direction="return"
            duration={duration}
            hOpen={() => setOpened(!opened)}
            opened={opened}
         />
         <Transition<undefined>
            in={opened}
            appear
            mountOnEnter
            unmountOnExit
            addEndListener={openAnim}
         >
            <div className="absolute fill b_0 t_100p z0">
               <div ref={contentRef}>
                  <FlightDetails
                     bayan={bayan}
                     legsIds={legs}
                     bayanL1Opened={opened}
                     direction="return"
                  />
               </div>
            </div>
         </Transition>
      </div>
   );
});

import { memo } from 'react';
import { Transition } from 'react-transition-group';
import { BayanType } from '../bayan/bayan-provider';
import { BoundType } from '../../typings/flights-amadeus';
import { useBayanAnimationNestedL1Css } from '../bayan/hooks/use-bayan-animation-nested-css';
import FlightDetails from './flight-details';
import FlightInfo from './flight-info';
import useBayanContentL1 from '../bayan/hooks/use-bayan-content-l1';
// import { useBayanAnimationNestedL1 } from '../bayan/hooks/use-bayan-animation-nested';

type Props = {
   data: BoundType;
   logo?: boolean;
} & {
   bayan: BayanType;
};

export default memo(function FlightReturn({ data, logo, bayan }: Props): JSX.Element {

   const { duration, legs } = data;

   const {
      contentRef,
      opened,
      setOpened,
      openAnim,
   } = useBayanContentL1(bayan);

   // const bayanRef = useBayanAnimationNestedL1({ bayanIndex: bayan.l1 });
   const offsetY = useBayanAnimationNestedL1Css(bayan.l1);

   return (
      <div className="relative Flight col trans_06" style={{ transform: `translateY(${offsetY}px)` }}>
         <div className="h_2px bg_235" />
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

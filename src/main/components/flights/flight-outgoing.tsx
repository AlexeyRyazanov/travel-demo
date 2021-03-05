import { memo } from 'react';
import { Transition } from 'react-transition-group';
import { BayanType } from '../bayan/bayan-provider';
import { BoundType } from '../../typings/flights-amadeus';
import FlightDetails from './flight-details';
import FlightInfo from './flight-info';
import useBayanContentL1 from '../bayan/hooks/use-bayan-content-l1';

type Props = { data: BoundType } & { bayan: BayanType };

export default memo(function FlightOutgoing({ data, bayan }: Props): JSX.Element {

   const { duration, legs } = data;

   const {
      contentRef, opened, setOpened, openAnim,
   } = useBayanContentL1(bayan);

   return (
      <div className="relative Flight col mb_1px">
         <FlightInfo
            data={data}
            direction="outgoing"
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
                     direction="outgoing"
                  />
               </div>
            </div>
         </Transition>
         {/* <div id="bgGragient" className="absolute fill bg_grad_245_b" ref={bgRef} /> */}
      </div>
   );
});

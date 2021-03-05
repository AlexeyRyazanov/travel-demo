import { memo } from 'react';
import arrNotEmpty from '../../utils/array/array-not-empty';
import FlightSegment from './flight-segment';
import { BayanType, BayanProviderL2 } from '../bayan/bayan-provider';

type Props ={
   legsIds: Array<string>;
   direction: 'outgoing' | 'return';
} & {
   bayan: BayanType;
   bayanL1Opened: boolean;
};

export default memo(function FlightDetails({
   legsIds,
   direction,
   bayan,
   bayanL1Opened,
}: Props): JSX.Element {

   return (
      <BayanProviderL2 id="BAYAN_L2 Flight Details">
         <div>
            {
               arrNotEmpty(legsIds)
               && legsIds.map((id, i) => (
                  <FlightSegment
                     bayan={{ ...bayan, l2: i }}
                     bayanL1Opened={bayanL1Opened}
                     legsIds={legsIds}
                     index={i}
                     key={id}
                     id={id}
                     direction={direction}
                  />
               ))
            }
         </div>
      </BayanProviderL2>
   );
});

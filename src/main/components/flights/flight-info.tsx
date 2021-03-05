/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { memo } from 'react';
import M2HM from '../../utils/date/mins-to-hm';
import FlightInfoTime from './flight-info-time';
import FlightLogo from './flight-logo';
import IconExpand from '../icons/icon-expand';
import { BoundType } from '../../typings/flights-amadeus';
import FlightRoute from './flight-route';

type Props = {
   data: BoundType;
   direction: 'outgoing' | 'return';
   duration: number;
   hOpen(): void;
   opened: boolean;
};

export default memo(function FlightInfo({
   data,
   direction,
   duration,
   hOpen,
   opened,
}: Props): JSX.Element {

   const { airlineCode, legs: legsIds } = data;

   return (
      <div className={`relative z1 cur_p lh_13 px_1r -s450-px_-1 py_-1 trans_03 will-change_t usn ${direction === 'outgoing' ? 'br_5500' : ''} bg_248_w h--bg_white !h--y_-1 a--y_1 a--boxsh_xs ${opened ? 'bg_white boxsh_1' : '!h--boxsh_xs'}`} onClick={hOpen}>
         <div className="row nowrap ai_c w_100p ">
            {
               airlineCode
                  ? (
                     <div className="mr_-1">
                        <FlightLogo code={airlineCode} />
                     </div>
                  )
                  : null
            }
            <div className="row ai_c grow_1">
               <FlightInfoTime
                  legsIds={legsIds}
                  direction={direction}
                  airlineCode={airlineCode}
               />
               <div className="w_50p col px_-1 pl_0">
                  <div className="mb_-2 icon icon_duration pb_0 monobold">{M2HM(duration)}</div>
                  <FlightRoute cls="row c_150 fs_0875" legsIds={legsIds} />
               </div>
            </div>
            <IconExpand expanded={opened} />
         </div>
      </div>
   );
});

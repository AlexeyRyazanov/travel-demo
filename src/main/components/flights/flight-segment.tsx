import { memo, useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { differenceInMinutes, parseISO } from 'date-fns';
import M2HM from '../../utils/date/mins-to-hm';
import { flightsLegs } from '../../store/flights';
import FlightSegmentTime from './flight-segment-time';
import FlightAirline from './flight-airline';
import { BayanType } from '../bayan/bayan-provider';
import IconExpand from '../icons/icon-expand';
import FlightEntertainment from './flight-entertainment';
import useBayanContentL2 from '../bayan/hooks/use-bayan-content-l2';

type OwnProps = {
   legsIds: Array<string>;
   id: string;
   index: number;
   direction: 'outgoing' | 'return';
} & {
   bayan: BayanType;
   bayanL1Opened: boolean;
};

const connector = connect(flightsLegs);

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected & OwnProps;

export default memo(connector(function FlightSegment({
   bayan,
   bayanL1Opened,
   id,
   index,
   legs,
   legsIds,
   direction,
}: Props): JSX.Element {

   const {
      dateAirline,
      dateFrom,
      dateTo,
      duration,
      flightNumber,
      from,
      terminalFrom,
      terminalTo,
      to,
   } = legs[id];

   const {
      offsetY, contentRef, opened, setOpened,
   } = useBayanContentL2({ bayan, bayanL1Opened });

   const time = M2HM(differenceInMinutes(parseISO(dateFrom), parseISO(dateTo)));

   const tOpen = useCallback(() => setOpened(!opened), [opened, setOpened]);

   const c = 'px_1-2r py_-2 mr_-1';

   return (
      <div className="col bg_242_w z0 fs_0875 trans_06" style={{ transform: `translateY(${offsetY}px)` }}/*  ref={bayanRef} */>
         {/* <FlightSegmentMain data={seg} /> */}
         <div className="col px_1r -s450-px_-1 py_-2">
            <FlightSegmentTime
               code={from}
               date={dateFrom}
               takeoff
               terminal={terminalFrom}
               direction={direction}
            />
            <FlightSegmentTime
               code={to}
               date={dateTo}
               terminal={terminalTo}
               direction={direction}
            />
            <div className="row">
               <span className={c}>
                  <span className="c_150">Полет:&nbsp;&nbsp;</span>
                  <span className="monobold">{M2HM(duration)}</span>
               </span>
               <span className={c}>
                  <span className="c_150">Рейс:&nbsp;&nbsp;</span>
                  <span className="monobold">
                     {dateAirline}
                     &nbsp;
                     {flightNumber}
                  </span>
               </span>
               <div className={c}>
                  <span className="c_150">А/к:&nbsp;&nbsp;</span>
                  <span className="semibold">
                     <FlightAirline code={dateAirline} />
                  </span>
               </div>
               {/* <span className={c}>{fareType} ({rbd})</span> */}

               {/* <span>Boeing 737</span> */}
            </div>
         </div>
         {/* {
            baggageIsExist(seg) &&
            <FlightBaggage data={seg} />
         } */}
         {/* {
            brandInfoIsExist(seg) &&
            <FlightBrandInfo data={seg} />
         } */}
         {
            legsIds[index + 1]
            && (
               <div className="col bg_253_w">
                  <div className="row ai_c jc_sb px_1r py_-1">
                     <div className={`icon  ${direction === 'outgoing' ? 'icon_flightOutSeg' : 'icon_flightRetSeg'} `}>
                        Пересадка:
                        <span className="mt_-1px monobold">
&nbsp;
                           {time}
                           {/*  {differenceInMinutes(nextSegment.depDateGMT, arvDateGMT)} минут */}
                        </span>
                     </div>
                     <div className="row cur_p" onClick={tOpen}>
                        <div className="underline-dashed mr_-1">Чем заняться?</div>
                        <IconExpand expanded={opened} />
                     </div>
                  </div>
                  <div className="absolute fill b_0 t_100p z0 p_-1" ref={contentRef}>
                     <FlightEntertainment opened={opened} />
                  </div>
               </div>
            )
         }
      </div>
   );
}));

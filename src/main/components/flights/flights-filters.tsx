import { memo } from 'react';
import DictKeys from '../../data/dict-keys';
import flightsFilterLabelBaggage from '../../utils/flights/flights-filter-label-baggage';
import flightsFilterLabelCancel from '../../utils/flights/flights-filter-label-cancel';
import flightsFilterLabelChange from '../../utils/flights/flights-filter-label-change';
import flightsFilterLabelLegs from '../../utils/flights/flights-filter-label-legs';
import flightsFilterLabelTime from '../../utils/flights/flights-filter-label-time';
import FiltersKeys from '../../data/filters-keys';
import FlightRouteCities from './flight-route-cities';
import FlightsResultsView from './flights-results-view';
import { BayanProviderL0 } from '../bayan/bayan-provider';
import useBayanAnimationL0 from '../bayan/hooks/use-bayan-animation-l0';
import IAirline from '../icons/i-airline';
import IAirlineReturn from '../icons/i-airline-return';
import IBaggage from '../icons/i-baggage';
import IChangeTicket from '../icons/i-change-ticket';
import IFlightOutSeg from '../icons/i-flight-out-seg';
import IFlightOutTime from '../icons/i-flight-out-time';
import IFlightRetSeg from '../icons/i-flight-ret-seg';
import IFlightRetTime from '../icons/i-flight-ret-time';
import IReturnTicket from '../icons/i-return-ticket';
import FiltersBlock from '../filters/filters-block';

const FiltersBlockTitle1 = memo(function FiltersBlockTitle1({ bayanIndex }: { bayanIndex: number }): JSX.Element {

   const bayanRef = useBayanAnimationL0({ bayanIndex, delayDef: 0.01 });

   return (
      <div className="row nowrap px_1r py_-1 mt_1r bg_240" ref={bayanRef}>
         <div className="icon icon_flightOut" />
         <FlightRouteCities dir="out" />
      </div>
   );
});

const FiltersBlockTitle2 = memo(function FiltersBlockTitle2({ bayanIndex }: { bayanIndex: number }): JSX.Element {

   const bayanRef = useBayanAnimationL0({ bayanIndex, delayDef: 0.01 });

   return (
      <div className="row nowrap px_1r py_-1 mt_1r bg_240" ref={bayanRef}>
         <div className="icon icon_flightRet" />
         <FlightRouteCities dir="ret" />
      </div>
   );
});

export default function FlightsFilters(): JSX.Element {
   return (
      <div className="relative col h_100p-5_85">
         <div className="fixed t_2-5 l_0 w_16r -l-w_15r -m-w_14r row nowrap jc_sb px_1r py_-1 bg_white z1 boxsh_xs">
            <div className="icon icon_filter semibold">Перелеты</div>
            <FlightsResultsView />
         </div>
         <div className="relative col h_100p t_2_7 ox_h oy_s scrollbar_thin">
            {/* <div className="relative boxsh_1 trans_03 h--y_-1 h--boxsh_2 h--bg_white h--c_main p_1r mt_1 lh_13 semibold">Shadow test</div> */}
            {/* <div className="relative boxsh_1 boxsh_1-ps p_1r mt_1 lh_13 semibold c_main">Shadow test</div> */}
            <BayanProviderL0 id="BAYAN_L0 Flights Filters">
               <FiltersBlock
                  bayanIndex={0}
                  fKey={FiltersKeys.baggage}
                  icon={<IBaggage />}
                  labelGet={flightsFilterLabelBaggage}
                  title="Наличие багажа"
               />
               <FiltersBlock
                  bayanIndex={1}
                  fKey={FiltersKeys.isChangeable}
                  icon={<IChangeTicket />}
                  labelGet={flightsFilterLabelChange}
                  title="Обмен билета"
               />
               <FiltersBlock
                  bayanIndex={2}
                  fKey={FiltersKeys.isCancelable}
                  icon={<IReturnTicket />}
                  labelGet={flightsFilterLabelCancel}
                  title="Возврат билета"
                  clsBody="pb_0"
               />
               <FiltersBlockTitle1 bayanIndex={3} />
               <FiltersBlock
                  bayanIndex={4}
                  fKey={FiltersKeys.legsOut}
                  icon={<IFlightOutSeg />}
                  labelGet={flightsFilterLabelLegs}
                  title="Пересадки"
               />
               <FiltersBlock
                  bayanIndex={5}
                  fKey={FiltersKeys.timeOut}
                  icon={<IFlightOutTime />}
                  labelGet={flightsFilterLabelTime}
                  title="Время вылета"
               />
               <FiltersBlock
                  bayanIndex={6}
                  dictKey={DictKeys.airlines}
                  fKey={FiltersKeys.airlinesOut}
                  icon={<IAirline />}
                  title="Авиакомпания"
                  clsBody="pb_0"
               />
               <FiltersBlockTitle2 bayanIndex={7} />
               <FiltersBlock
                  bayanIndex={8}
                  fKey={FiltersKeys.legsRet}
                  icon={<IFlightRetSeg />}
                  labelGet={flightsFilterLabelLegs}
                  title="Пересадки"
               />
               <FiltersBlock
                  bayanIndex={9}
                  fKey={FiltersKeys.timeRet}
                  icon={<IFlightRetTime />}
                  labelGet={flightsFilterLabelTime}
                  title="Время вылета"
               />
               <FiltersBlock
                  bayanIndex={10}
                  dictKey={DictKeys.airlines}
                  fKey={FiltersKeys.airlinesRet}
                  icon={<IAirlineReturn />}
                  title="Авиакомпания"
               />
            </BayanProviderL0>
         </div>
      </div>
   );
}

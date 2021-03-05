import arrNotEmpty from '../array/array-not-empty';
import FilterCounterType from '../../typings/filter-counter';
import { AmadeusType } from '../../typings/flights-amadeus';
import FlightsFiltersType from '../../typings/flights-filters';
import IFlightsFiltersIds from '../../typings/flights-filters-ids';
import FlightsFiltersListType from '../../typings/flights-filters-list';
import timeRangeGet from '../date/time-range-get';
import undef from '../undef';
import undefNull from '../undef-null';

function filtersGetListWithCounter(filter: FilterCounterType, key: string): FilterCounterType {
   const f = filter;

   if (undef(filter[key])) {
      f[key] = {
         active: false,
         count: 1,
      };
   } else {
      f[key].count += 1;
   }

   return f;
}

export default function flightsFiltersGetAll(content: AmadeusType): FlightsFiltersType {

   // TODO Use Object.key for perf opt

   const {
      legs: legsData,
      solutions,
   } = content;

   const keys = Object.keys(solutions);

   let baggageFilters: FilterCounterType = Object.create(null, {});
   let isChangeable: FilterCounterType = Object.create(null, {});
   let isCancelable: FilterCounterType = Object.create(null, {});

   let airlinesOut: FilterCounterType = Object.create(null, {});
   let airlinesRet: FilterCounterType = Object.create(null, {});

   let legsOut: FilterCounterType = Object.create(null, {});
   let legsRet: FilterCounterType = Object.create(null, {});

   let timeOut: FilterCounterType = Object.create(null, {});
   let timeRet: FilterCounterType = Object.create(null, {});

   for (let i = 0, len = keys.length; i < len; i++) {
      if (!undefNull(solutions[keys[i]])) {
         const {
            baggage,
            bound,
            cancelPenalty,
            changePenalty,
         } = solutions[keys[i]];

         // console.log(baggage);

         baggageFilters = {
            ...baggageFilters,
            ...filtersGetListWithCounter(baggageFilters, baggage),
         };

         isChangeable = {
            ...isChangeable,
            ...filtersGetListWithCounter(isChangeable, changePenalty > 0 ? '0' : '1'),
         };

         isCancelable = {
            ...isCancelable,
            ...filtersGetListWithCounter(isCancelable, cancelPenalty > 0 ? '0' : '1'),
         };

         // Get filter by airlineCode

         if (!undef(bound[0])) {
            const out = bound[0];

            if (!undef(out.airlineCode)) {
               airlinesOut = {
                  ...airlinesOut,
                  ...filtersGetListWithCounter(airlinesOut, out.airlineCode),
               };
            }

            if (arrNotEmpty(out.legs)) {
               const legsIds = out.legs;
               const legId0 = legsIds[0];

               legsOut = {
                  ...legsOut,
                  ...filtersGetListWithCounter(legsOut, legsIds.length.toString()),
               };

               if (legsData[legId0]) {
                  const timeRange = timeRangeGet(legsData[legId0].dateFrom);

                  timeOut = {
                     ...timeOut,
                     ...filtersGetListWithCounter(timeOut, timeRange),
                  };
               }
            }
         }

         if (!undef(bound[1])) {
            const ret = bound[1];

            if (!undef(ret.airlineCode)) {
               airlinesRet = {
                  ...airlinesRet,
                  ...filtersGetListWithCounter(airlinesRet, ret.airlineCode),
               };
            }

            if (arrNotEmpty(ret.legs)) {
               const legsIds = ret.legs;
               const legId0 = legsIds[0];

               legsRet = {
                  ...legsRet,
                  ...filtersGetListWithCounter(legsRet, ret.legs.length.toString()),
               };

               if (legsData[legId0]) {
                  const timeRange = timeRangeGet(legsData[legId0].dateFrom);

                  timeRet = {
                     ...timeRet,
                     ...filtersGetListWithCounter(timeRet, timeRange),
                  };
               }

            }
         }
      }
   }

   const list: FlightsFiltersListType = {
      airlinesOut,
      airlinesRet,
      baggage: baggageFilters,
      isCancelable,
      isChangeable,
      legsOut,
      legsRet,
      timeOut,
      timeRet,
   };

   const ids: IFlightsFiltersIds = {
      airlinesOut: Object.keys(airlinesOut),
      airlinesRet: Object.keys(airlinesRet),
      baggage: Object.keys(baggageFilters),
      isCancelable: Object.keys(isCancelable),
      isChangeable: Object.keys(isChangeable),
      legsOut: Object.keys(legsOut),
      legsRet: Object.keys(legsRet),
      timeOut: Object.keys(timeOut),
      timeRet: Object.keys(timeRet),
   };

   return {
      list,
      ids,
      active: {
         airlinesOut: [],
         airlinesRet: [],
         baggage: [],
         isCancelable: [],
         isChangeable: [],
         legsOut: [],
         legsRet: [],
         timeOut: [],
         timeRet: [],
      },
   };
}

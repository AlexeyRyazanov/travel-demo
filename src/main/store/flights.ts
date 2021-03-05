/* eslint-disable no-restricted-syntax */
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import FlightsFiltersIdsActiveType from 'main/typings/flights-filters-ids-active';
import amadeusExtended from '../data/amadeus-extended';
// import basketReducer from './basket';
import flightsFiltersGetAll from '../utils/flights/flights-filters-get-all';
import FilterCounterType from '../typings/filter-counter';
import { AmadeusType, LegType, SolutionType } from '../typings/flights-amadeus';
import FlightsFiltersType from '../typings/flights-filters';
import IFlightsFiltersIds from '../typings/flights-filters-ids';
import FlightsSortingType from '../typings/flights-sorting';
import IFlightsState from '../typings/flights-state';
import isTimeInRange from '../utils/date/is-time-in-range';
import SortKeys from '../data/sort-keys';
import FiltersKeys from '../data/filters-keys';

export const FILTERS_SET = 'FILTERS_SET';
export const FILTERS_CANCEL = 'FILTERS_CANCEL';

export type FiltersSetPayload = {
   fKey: FiltersKeys;
   id: string;
   val: boolean;
};

export type FiltersCancelPayload = {
   fKey: FiltersKeys;
};

type IFiltersSetAction = {
   type: typeof FILTERS_SET;
   payload: FiltersSetPayload;
};

type IFiltersCancelAction = {
   type: typeof FILTERS_CANCEL;
   payload: FiltersCancelPayload;
};

export type FiltersActionTypes = IFiltersSetAction | IFiltersCancelAction;

export const SORT_SET = 'SORT_SET';

export type SortingSetPayload = {
   sortKey: SortKeys;
   sortOrder: 'asc' | 'desc';
};

type SortingSetAction = {
   type: typeof SORT_SET;
   payload: SortingSetPayload;
};

export type SortingActionTypes = SortingSetAction;

export type RootStore = {
   // basket: IBasketState;
   flights: IFlightsState;
};

type FlightsType = { [key: string]: SolutionType };

export function flightsContentReducer(state: AmadeusType = amadeusExtended, action): AmadeusType {
   // switch (action.type) {
   //    case SET_FILTER: {
   //       const { fKey, id, val } = action.payload;

   //       return {
   //          ...state,
   //          list: {
   //             ...list,
   //             [fKey]: {
   //                ...list[fKey],
   //                [id]: val
   //             },
   //          }
   //       };
   //    };

   //    default: return state;
   // };

   return state;
}
const flightsFiltersInitial = flightsFiltersGetAll(amadeusExtended);

export function flightsFiltersReducer(
   state: FlightsFiltersType = flightsFiltersInitial,
   action: FiltersActionTypes,
): FlightsFiltersType {

   const { list, active } = state;

   switch (action.type) {
      case FILTERS_SET: {
         const { fKey, id, val } = action.payload;
         const filters: { [key: string]: FilterCounterType } = list[fKey];
         const filter = filters[id];

         return {
            ...state,
            list: {
               ...list,
               [fKey]: {
                  ...filters,
                  [id]: {
                     ...filter,
                     active: val,
                  },
               },
            },
            active: {
               ...active,
               [fKey]: val === true
                  ? [
                     ...active[fKey],
                     id,
                  ]
                  : active[fKey].filter((el: string) => el !== id),
            },
         };
      }

      case FILTERS_CANCEL: {
         const { fKey } = action.payload;
         const filters: { [key: string]: FilterCounterType } = list[fKey];

         const keys = Object.keys(state.list[fKey]);
         const filtersCancelled = Object.create(null, {});

         for (let i = 0, len = keys.length; i < len; i++) {
            const key = keys[i];

            filtersCancelled[key] = {
               ...filters[key],
               active: false,
            };
         }

         return {
            ...state,
            list: {
               ...list,
               [fKey]: {
                  ...filters,
                  ...filtersCancelled,
               },
            },
            active: {
               ...active,
               [fKey]: [],
            },
         };
      }

      default: return state;
   }
}

const FlightsSortingInitial: FlightsSortingType = {
   sortKey: SortKeys.price,
   sortOrder: 'asc',
};

export function flightsSortingReducer(
   state: FlightsSortingType = FlightsSortingInitial,
   action: SortingActionTypes,
): FlightsSortingType {

   switch (action.type) {
      case SORT_SET: {
         const { sortKey, sortOrder } = action.payload;

         return {
            sortKey,
            sortOrder,
         };
      }

      default: return state;
   }
}

export const flightsReducer = combineReducers<IFlightsState>({
   content: flightsContentReducer,
   filters: flightsFiltersReducer,
   sorting: flightsSortingReducer,
});

export const rootReducer = combineReducers<RootStore>({
   // basket: basketReducer,
   flights: flightsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export function flightsFiltersActive(state: RootState): FlightsFiltersIdsActiveType {
   return state.flights.filters.active;
}

export function flightGetById(flights: FlightsType, id: string): SolutionType {
   return flights[id];
}

export function flightGetAirlineOutCode(flights: FlightsType, id: string): string {
   return flightGetById(flights, id).bound[0].airlineCode;
}

export function flightGetLegsLength(flights: FlightsType, id: string): string {
   return flightGetById(flights, id).bound[0].legs.length.toString();
}

export function flightsIds(state: RootState): Array<string> {
   return state.flights.content.solutionsIds;
}

export function flightsLegs(state: RootState): { legs: { [key: string]: LegType } } {
   return {
      legs: state.flights.content.legs,
   };
}

export function flightsSolutions(state: RootState): { [key: string]: SolutionType } {
   return state.flights.content.solutions;
}

export function flightsSorting(state: RootState): FlightsSortingType {
   return state.flights.sorting;
}

function filterBy(
   flights: FlightsType,
   filtersActive: Array<string>,
   getVal: (flights: FlightsType, flightId: string) => string,
) {
   return (flightId: string): boolean => filtersActive.length === 0
      || filtersActive.some(
         (airline) => airline === getVal(flights, flightId),
      );
}

export const flightsIdsSorted = createSelector(
   [flightsSolutions, flightsIds, flightsSorting],
   (flights, flightsIdsArr, sorting): Array<string> => {

      const { sortKey, sortOrder } = sorting;

      // return flightsIds.slice().sort((a, b) => {
      return [...flightsIdsArr].sort((a, b) => {
         const { agents: agentsA, bound: boundA } = flights[a];
         const { agents: agentsB, bound: boundB } = flights[b];

         if (sortKey === SortKeys.price) {
            if (sortOrder === 'asc') {
               return agentsA[0].price - agentsB[0].price;
            }
            return flights[b].agents[0].price - flights[a].agents[0].price;
         }

         if (sortKey === SortKeys.duration) {
            if (boundA[1] && boundB[1]) {
               if (sortOrder === 'asc') {
                  return (boundA[0].duration + boundA[1].duration) - (boundB[0].duration + boundB[1].duration);
               }
               return (boundB[0].duration + boundB[1].duration) - (boundA[0].duration + boundA[1].duration);
            }
            if (sortOrder === 'asc') {
               return boundA[0].duration - boundB[0].duration;
            }
            return boundB[0].duration - boundA[0].duration;
         }

         return 0;

         // if (sortKey === sortKeys.time) {
         //    if (sortOrder === 'asc') {
         //       return boundA[0].duration - boundB[0].duration;
         //    }
         //    return flights[b].bound[0].duration - flights[a].bound[0].duration;
         // }
      });
   },
);

export const flightsIdsFiltered = createSelector(
   [flightsSolutions, flightsIdsSorted, flightsFiltersActive, flightsLegs],
   (flights, flightsIdsArr, filtersActive, legs): Array<string> => {

      const t0 = performance.now();
      // let iterations = 0;

      const {
         airlinesOut: airlinesOutActive,
         airlinesRet: airlinesRetActive,
         baggage: baggageActive,
         isCancelable: isCancelableActive,
         isChangeable: isChangeableActive,
         legsOut: legsOutActive,
         legsRet: legsRetActive,
         timeOut: timeOutActive,
         timeRet: timeRetActive,
      } = filtersActive;

      if (
         baggageActive.length === 0
         && isCancelableActive.length === 0
         && isChangeableActive.length === 0
         && airlinesOutActive.length === 0
         && airlinesRetActive.length === 0
         && legsOutActive.length === 0
         && legsRetActive.length === 0
         && timeOutActive.length === 0
         && timeRetActive.length === 0
      ) {
         return flightsIdsArr;
      }

      const filtered = flightsIdsArr
         .filter((flightId) => baggageActive.length === 0 || baggageActive.some((el) => el === flights[flightId].baggage))

         .filter((flightId) => isChangeableActive.length === 0
            || isChangeableActive.some((filterActive) => {
               if (filterActive === '1' && flights[flightId].changePenalty > 0) {
                  return false;
               }
               if (filterActive === '0' && flights[flightId].changePenalty === 0) {
                  return false;
               }
               return true;
            }))

         .filter((flightId) => isCancelableActive.length === 0
            || isCancelableActive.some((filterActive) => {
               if (filterActive === '1' && flights[flightId].cancelPenalty > 0) {
                  return false;
               }
               if (filterActive === '0' && flights[flightId].cancelPenalty === 0) {
                  return false;
               }
               return true;
            }))

         .filter(filterBy(flights, airlinesOutActive, flightGetAirlineOutCode))

         .filter(filterBy(flights, legsOutActive, flightGetLegsLength))

         .filter((flightsId) => timeOutActive.length === 0
            || timeOutActive.some((timeRange) => {
               const legId = flights[flightsId].bound[0].legs[0];
               const legData: LegType = { ...legs.legs[legId] };

               return isTimeInRange(timeRange, legData.dateFrom);
            }))

         .filter((flightId) => airlinesRetActive.length === 0
            || airlinesRetActive.some(
               (airline) => airline === flights[flightId].bound[1].airlineCode,
            ))

         .filter((flightId) => legsRetActive.length === 0
            || legsRetActive.some(
               (legsArr) => legsArr === flights[flightId].bound[1].legs.length.toString(),
            ))

         .filter((flightsId) => timeRetActive.length === 0
            || timeRetActive.some((timeRange) => {
               const legId = flights[flightsId].bound[1].legs[0];
               const legData: LegType = { ...legs.legs[legId] };

               return isTimeInRange(timeRange, legData.dateFrom);
            }));

      // console.log('Iterations: ', iterations);
      console.log(`Filter by all params: ${(performance.now() - t0).toFixed(3)} ms`);

      // console.log('filtered', filtered);

      return filtered;
   },
);

export function filtersCancel(payload: FiltersCancelPayload): FiltersActionTypes {
   return {
      type: FILTERS_CANCEL,
      payload,
   };
}

export function filtersSet(payload: FiltersSetPayload): FiltersActionTypes {
   return {
      type: FILTERS_SET,
      payload,
   };
}

export function sortingSet(payload: SortingSetPayload): SortingActionTypes {
   return {
      type: SORT_SET,
      payload,
   };
}

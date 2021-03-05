import FilterCounterType from './filter-counter';

type FlightsFiltersListType = {
   airlinesOut: FilterCounterType;
   airlinesRet: FilterCounterType;
   baggage: FilterCounterType;
   isCancelable: FilterCounterType;
   isChangeable: FilterCounterType;
   legsOut: FilterCounterType;
   legsRet: FilterCounterType;
   timeOut: FilterCounterType;
   timeRet: FilterCounterType;
};

export default FlightsFiltersListType;

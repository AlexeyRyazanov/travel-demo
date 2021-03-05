import FlightsFiltersIdsType from './flights-filters-ids';
import FlightsFiltersIdsActiveType from './flights-filters-ids-active';
import FlightsFiltersListType from './flights-filters-list';

type FlightsFiltersType = {
   active: FlightsFiltersIdsActiveType;
   ids: FlightsFiltersIdsType;
   list: FlightsFiltersListType;
};

export default FlightsFiltersType;

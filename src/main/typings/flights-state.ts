import { AmadeusType } from './flights-amadeus';
import FlightsFiltersType from './flights-filters';
import FlightsSortingType from './flights-sorting';

type FlightsStateType = {
   content?: AmadeusType;
   filters?: FlightsFiltersType;
   sorting?: FlightsSortingType;
};

export default FlightsStateType;

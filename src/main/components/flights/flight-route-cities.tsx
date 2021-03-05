import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/flights';

type MapStateProps = { route: string };
type OwnProps = { dir: 'out' | 'ret' };

function mapState(state: RootState, ownProps: OwnProps): MapStateProps {
   const { dir } = ownProps;

   let cityFrom = '';
   let cityTo = '';

   const {
      airports,
      cities,
      solutions,
      solutionsIds,
      legs,
   } = state.flights.content;

   const solution0 = solutions[solutionsIds[0]];
   const legFrom = solution0.bound[0].legs[0];
   const legTo = solution0.bound[0].legs[solution0.bound[0].legs.length - 1];

   const airportFrom = legs[legFrom].from;

   if (airports[airportFrom]) {
      const cityCodeFrom = airports[airportFrom].cityCode;
      cityFrom = cities[cityCodeFrom].name;
   }

   const airportTo = legs[legTo].to;

   if (airports[airportTo]) {
      const cityCodeTo = airports[airportTo].cityCode;
      cityTo = cities[cityCodeTo].name;
   }

   return {
      route: dir === 'out' ? `${cityFrom} - ${cityTo}` : `${cityTo} - ${cityFrom}`,
   };
}

const connector = connect(mapState);

type Props = ConnectedProps<typeof connector> & MapStateProps & OwnProps;

export default connector(function FlightRouteCities({ route }: Props) {
   return (
      <div className="semibold">
         {route}
      </div>
   );
});

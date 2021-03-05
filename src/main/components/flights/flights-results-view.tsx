import { ConnectedProps, connect } from 'react-redux';
import { RootState, flightsIdsFiltered } from '../../store/flights';

type MapStateProps = {
   countFiltered: number;
   countTotal: number;
};

function mapState(state: RootState): MapStateProps {
   return {
      countFiltered: flightsIdsFiltered(state).length,
      countTotal: state.flights.content.solutionsIds.length,
   };
}

const connector = connect(mapState);

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected;

export default connector(function FlightsResultsView({ countFiltered, countTotal }: Props): JSX.Element {

   return (
      <div>
         {
            countFiltered !== countTotal
            && (
               <span>
                  <span className="monobold mt_2px">{countFiltered}</span>
               &nbsp;из&nbsp;
               </span>
            )
         }
         <span className="monobold mt_2px">{countTotal}</span>
      </div>
   );
});

import { useEffect, useMemo } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { RootState, flightsIdsFiltered, flightsIds } from '../../store/flights';
import arrNotEmpty from '../../utils/array/array-not-empty';
import { RESET_HEIGHTS, useBayanDispatchL0 } from '../bayan/bayan-provider';
import FlightPackage from './flight-package';

type MapStateProps = {
   ids: Array<string>;
   count: number;
};

type OwnProps = {
   ids: Array<string>;
   rows: number;
};

function mapState(state: RootState): MapStateProps {
   return {
      ids: flightsIdsFiltered(state),
      count: flightsIds.length,
   };
}

const connector = connect(mapState);

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected & OwnProps;

export default connector(function FlightsResultsList({ ids, rows }: Props): JSX.Element {
   const bayanDispatch = useBayanDispatchL0();

   useEffect(() => {
      bayanDispatch({
         type: RESET_HEIGHTS,
      });
   }, [bayanDispatch, ids]);

   return useMemo(() => (
      <div className="col ai_c p_1-2 -m-p_1-2r -s450-p_-1-2 -xs-p_0">
         {
            arrNotEmpty(ids)
               ? ids.map((id, i) => {
                  if (i < rows) {
                     return (
                        <FlightPackage
                           key={id}
                           bayan={{ l0: i }}
                           id={id}
                        />
                     );
                  }
                  return null;
               })
               : null
         }
      </div>
   ), [ids, rows]);
});

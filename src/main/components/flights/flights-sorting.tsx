import { connect, ConnectedProps } from 'react-redux';
import { SortingSetPayload, RootState, sortingSet } from '../../store/flights';
import Sorting from '../atoms/sorting';
import SortKeys from '../../data/sort-keys';

type MapStateProps = {
   sortKey: SortKeys;
   sortOrder: 'asc' | 'desc';
};

type DispatchProps = {
   setSorting: (payload: SortingSetPayload) => void;
};

function mapState(state: RootState): MapStateProps {
   const { sortKey, sortOrder } = state.flights.sorting;

   return {
      sortKey,
      sortOrder,
   };
}

type OwnProps = {
   label: string;
   sKey: SortKeys;
};

const connector = connect<MapStateProps, DispatchProps>(mapState, { setSorting: sortingSet });

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected & OwnProps;

function FlightsSorting(props: Props): JSX.Element {
   const {
      label,
      setSorting,
      sKey,
      sortKey,
      sortOrder,
   } = props;

   const active = sKey === sortKey;

   const hSort = () => {
      let val: 'asc' | 'desc' = 'asc';

      if (sKey === sortKey) {
         if (sortOrder === 'asc') {
            val = 'desc';
         } else {
            val = 'asc';
         }
      }
      setSorting({ sortKey: sKey, sortOrder: val });
   };

   return (
      <Sorting
         active={active}
         label={label}
         order={sortOrder}
         hSort={hSort}
      />
   );
}

export default connector(FlightsSorting);

import { connect, ConnectedProps } from 'react-redux';
import arrNotEmpty from '../../utils/array/array-not-empty';
import DictKeys from '../../data/dict-keys';
import FilterCheckbox from './filter-checkbox';
import FiltersKeys from '../../data/filters-keys';
import { RootStore } from '../../store/flights';

type MapState = { ids: Array<string> };

type OwnProps = {
   dictKey?: DictKeys;
   fKey: FiltersKeys;
   labelGet?: (id: string) => string;
};

function mapState(state: RootStore, ownProps: OwnProps): MapState {
   const { fKey } = ownProps;
   const ids: Array<string> = state.flights.filters.ids[fKey];

   if (fKey === FiltersKeys.baggage) {
      return {
         ids: ids.reverse(),
      };
   }

   if (fKey === FiltersKeys.timeOut || fKey === FiltersKeys.timeRet) {
      return {
         ids: ids.sort((a, b) => {
            const a0 = parseInt(a.split('-')[0], 10);
            const b0 = parseInt(b.split('-')[0], 10);

            return a0 - b0;
         }),
      };
   }

   if (fKey === FiltersKeys.airlinesOut || fKey === FiltersKeys.airlinesRet) {
      const { airlines } = state.flights.content;

      return {
         ids: ids.sort((a, b) => {
            const airlineA = airlines[a].name;
            const airlineB = airlines[b].name;

            if (airlineA < airlineB) {
               return -1;
            }
            // if (airlineA > airlineB) {
            //    return -1;
            // }
            return 0;
         }),
      };
   }

   return { ids };
}

const connector = connect<MapState>(mapState);

type Props = ConnectedProps<typeof connector> & MapState & OwnProps;

export default connector(function FiltersBlockBody({
   dictKey,
   fKey,
   ids,
   labelGet,
}: Props): JSX.Element {

   return (
      <>
         {
            arrNotEmpty(ids)
            && ids.map((id) => (
               <div className="col fs_0875 vis-hidden " key={id}>
                  <FilterCheckbox
                     // setFilter={hFilter}
                     dictKey={dictKey}
                     fKey={fKey}
                     id={id}
                     labelGet={labelGet}
                  />
               </div>
            ))
         }
      </>
   );
});

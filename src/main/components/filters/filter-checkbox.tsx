import { connect, ConnectedProps } from 'react-redux';
import { useCallback } from 'react';
import { FiltersSetPayload, RootState, filtersSet } from '../../store/flights';
import Checkbox from '../atoms/checkbox';
import DictKeys from '../../data/dict-keys';
import FiltersKeys from '../../data/filters-keys';
import scrollToEl from '../../animations/scroll-to';

type MapStateProps = {
   active: boolean;
   count: number;
   label: string;
};

type DispatchProps = {
   filtersSet: (payload: FiltersSetPayload) => void;
};

type OwnProps = {
   dictKey: DictKeys;
   fKey: FiltersKeys;
   id: string;
   labelGet?: (id: string) => string;
   opened?: boolean;
};

function mapState(state: RootState, ownProps: OwnProps): MapStateProps {
   const {
      dictKey,
      fKey,
      id,
      labelGet,
   } = ownProps;

   let label = '';

   const { active, count } = state.flights.filters.list[fKey][id];

   if (typeof labelGet === 'function') {
      label = labelGet(id);
   } else if (
      // TO SOLVE THIS FUCKING HELL
      state.flights.content[dictKey]
      && state.flights.content[dictKey][id]
      && state.flights.content[dictKey][id].name) {
      label = dictKey ? state.flights.content[dictKey][id].name : id;
   }

   return {
      active,
      count,
      label,
   };
}

const connector = connect<MapStateProps, DispatchProps>(mapState, { filtersSet });

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

export default connector(function FilterCheckbox({
   active,
   count,
   filtersSet,
   fKey,
   id,
   label,
}: Props): JSX.Element {

   const hFilter = useCallback((idVal: string, val: boolean) => {
      filtersSet({ fKey, id: idVal, val });
      scrollToEl('#FlightsTopBar');
   }, [fKey, filtersSet]);

   const labelNode = (
      <span className="inflex ai_c grow_1 lh_13">
         <span className="text-overflow-ellipsis">{label}</span>
         <span className="ml_a fs_0875 c_100 mono">{count}</span>
      </span>
   );

   // <button className={`Checkbox row nowrap cur_p usn ai_c trans_03  ${disabled ? 'disabled' : ''} ${cls || ''} ${selected ? 'c_main' : 'op_075 h--op_1'}`} onClick={onClick} type="button" tabIndex={0}></button>

   return (
      <Checkbox
         cls={`trans_03 mb_3px br_2 py_-3 px_-2 bg_240 h--boxsh_1 h--bg_white h--y_-1 a--y_1 ${active ? 'bg_252 boxsh_xs' : ''}`}
         hSelect={hFilter}
         id={id}
         selected={active}
         labelNode={labelNode}
      />
   );
});

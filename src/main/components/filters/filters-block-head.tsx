import {
   ReactNode, memo, useCallback,
} from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { FiltersCancelPayload, filtersCancel, RootState } from '../../store/flights';
import FiltersKeys from '../../data/filters-keys';
import IconCancel from '../icons/icon-cancel';
import IconExpand from '../icons/icon-expand';
import scrollToEl from '../../animations/scroll-to';

type OwnProps = {
   fKey: FiltersKeys;
   icon?: ReactNode;
   loading?: boolean;
   opened?: boolean;
   title?: string;
   toggleOpen?(): void;
};

type MapStateProps = { active: boolean };
type DispatchProps = { flightsFiltersCancel: (payload: FiltersCancelPayload) => void };

function mapState(state: RootState, ownProps: OwnProps): MapStateProps {
   const { fKey } = ownProps;
   return {
      active: state?.flights?.filters?.active[fKey].length > 0,
   };
}

const connector = connect<MapStateProps, DispatchProps>(mapState, { flightsFiltersCancel: filtersCancel });

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

export default memo(connector(function FiltersBlockHead(props: Props): JSX.Element {
   const {
      active,
      flightsFiltersCancel,
      fKey,
      icon,
      opened,
      title,
      toggleOpen,
   } = props;

   const hCancel = useCallback(() => {
      flightsFiltersCancel({ fKey });
      scrollToEl('#FlightsTopBar');
   }, [fKey, flightsFiltersCancel]);

   return (
      <div className={`relative row ai_c jc_sb cur_p trans_03 bg_248 h--y_-1 a--y_1 h--i ${opened ? 'bg_white' : 'h--bg_white'} ${active && !opened ? 'c_main i_active' : 'h--c_main'}`}>
         <button type="button" className={`row nowrap ai_c w_100p px_1r py_1-2r ${opened ? 'boxsh_1' : ''}`} onClick={toggleOpen}/*  onKeyDown={() => { }} */>
            <div className="mr_-1">{icon}</div>
            <div className="semibold">{title}</div>
         </button>
         <div className="absolute r_0 row ai_c nowrap mr_-1">
            {
               (typeof hCancel === 'function' && active)
               && (
                  <IconCancel
                     cls="mr_-2 boxsh_xs"
                     disabled={!active}
                     hClick={hCancel}
                  />
               )
            }
            <IconExpand hClick={toggleOpen} expanded={opened} flat />
         </div>
      </div>
   );
}));

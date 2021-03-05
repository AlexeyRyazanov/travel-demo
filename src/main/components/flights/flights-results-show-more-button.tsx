import { connect, ConnectedProps } from 'react-redux';
import {
   Dispatch, SetStateAction, useCallback,
} from 'react';
import { BayanType } from '../bayan/bayan-provider';
import { RootState, flightsIdsFiltered } from '../../store/flights';
import Button from '../atoms/button';
import useBayanAnimationL0Css from '../bayan/hooks/use-bayan-animation-l0-css';

type OwnProps = {
   bayan: BayanType;
   countView: number;
   rows: number;
   setRows: Dispatch<SetStateAction<number>>;
};

type MapStateProps = {
   countFiltered: number;
};

function mapState(state: RootState): MapStateProps {
   const idsFiltered = flightsIdsFiltered(state);

   return {
      countFiltered: idsFiltered.length,
   };
}

const connector = connect(mapState);

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected & OwnProps;

export default connector(function FlightsResultsShowMoreButton({
   bayan,
   countFiltered,
   countView,
   rows,
   setRows,
}: Props): JSX.Element {
   let showMore = false;

   if (countFiltered > rows) {
      showMore = true;
   }

   let isVisible = true;

   if (countFiltered < countView) {
      isVisible = false;
   }

   const btnLabel = countFiltered > rows ? `Показать еще ${(rows < countFiltered - countView) ? countView : (countFiltered - rows)}` : `Показать первые ${countView}`;

   const onClickShow = useCallback(() => {
      if (showMore) {
         setRows((v) => v + countView);
      } else {
         setRows(countView);
      }
   }, [countView, setRows, showMore]);

   const offsetY = useBayanAnimationL0Css(bayan.l0);

   return (
      <>
         {
            isVisible
               ? (
                  <div className="p_1 pt_0 trans_06" style={{ transform: `translateY(${offsetY}px)` }}>
                     <Button
                        cls="Button_showMore"
                        color="white"
                        hClick={onClickShow}
                        icon="viewB"
                        label={btnLabel}
                     />
                  </div>
               )
               : null
         }
      </>
   );
});

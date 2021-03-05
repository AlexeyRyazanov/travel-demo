import {
   useCallback, memo,
} from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { AgentsType } from '../../typings/flights-amadeus';
import { RootState } from '../../store/flights';
import formatPrice from '../../utils/format-price';
import Button from '../atoms/button';
import { BayanType } from '../bayan/bayan-provider';
import Tooltip from '../atoms/tooltip';
import FlightChangeInfo from './flight-change-info';
import FlightCancelInfo from './flight-cancel-info';
import { useBayanAnimationNestedL1Css } from '../bayan/hooks/use-bayan-animation-nested-css';

type OwnProps = { id: string } & { bayan: BayanType };

type MapStateProps = {
   agents: Array<AgentsType>;
   baggage: '1' | '0';
   cancelPenalty: number;
   changePenalty: number;
};

function mapState(state: RootState, { id }: OwnProps): MapStateProps {
   // TODO Add additional check for dot access of every part of object

   const {
      agents,
      baggage,
      cancelPenalty,
      changePenalty,
   } = state.flights.content.solutions[id];

   return {
      agents,
      baggage,
      cancelPenalty,
      changePenalty,
   };
}

// type DispatchProps = {
//    basketAddFlight: (payload: BasketAddFlightPayload) => void;
// };

const connector = connect<MapStateProps>(mapState);

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected & OwnProps;

export default memo(connector(function FlightPackageBottomBar({
   id,
   agents,
   baggage,
   changePenalty,
   cancelPenalty,
   bayan,

}: Props): JSX.Element {

   // const bayanRef = useBayanAnimationNestedL1({ bayanIndex: bayan.l1 });

   const offsetY = useBayanAnimationNestedL1Css(bayan.l1);

   // const { toBasket } = flights;
   const addToBasket = useCallback(() => {
      // basketAddFlight({ id });
      // console.log('addToBasket', id);
   }, [id]);

   const isChangeable = changePenalty > 0;
   const isCancelable = cancelPenalty > 0;
   const isBaggage = baggage === '1';

   const { price } = agents[0];

   return (
      <div className="col trans_06" style={{ transform: `translateY(${offsetY}px)` }}>
         <div className="relative h_2px bg_235" />
         <div className="row ai_c jc_sb px_1r -s450-px_-1 py_-1 bg_248_w br_0055 boxsh_3">
            <div className="row">
               <div className="mr_-1">
                  <Button
                     cls="monobold"
                     color="accent"
                     hClick={addToBasket}
                     iconAfter="rubleW"
                     label={formatPrice(Math.round(price))}
                     size="s"
                     spinner
                  />
               </div>
               <Tooltip
                  message={
                     isBaggage
                        ? (
                           <span>
                              Багаж&nbsp;на&nbsp;1&nbsp;пассажира:&nbsp;
                              <span className="semibold">23&nbsp;кг</span>
                              <br />
                              Ручная&nbsp;кладь:&nbsp;
                              <span className="semibold">10&nbsp;кг</span>
                           </span>
                        )
                        : (
                           <span>
                              Без&nbsp;багажа.
                              <br />
                              Ручная&nbsp;кладь:&nbsp;
                              <span className="semibold">10&nbsp;кг</span>

                           </span>
                        )
                  }
               >
                  <div className="p_-2 br_2 trans_02 boxsh_xs h--y_-1 bg_248 h--bg_white">
                     <div className={`wh_18px icon ${isBaggage ? 'icon_baggageB' : 'icon_baggage op_03'}`} />
                  </div>
               </Tooltip>
            </div>
            <div className="Flight-CancelOptions row nowrap ai_fs">
               <Tooltip
                  position="right"
                  message={
                     isChangeable
                        ? <FlightChangeInfo price={price} changePenalty={changePenalty} />
                        : <span>Обмен&nbsp;невозможен</span>
                  }
               >
                  <div className="p_-2 br_2 trans_02 boxsh_xs h--y_-1 bg_248 h--bg_white">
                     <div className={`wh_18px icon ${isChangeable ? 'icon_changeTicketB' : 'icon_changeTicket op_03'}`} />
                  </div>
               </Tooltip>
               <Tooltip
                  position="right"
                  message={
                     isCancelable
                        ? <FlightCancelInfo price={price} cancelPenalty={cancelPenalty} />
                        : <span>Возврат&nbsp;невозможен</span>
                  }
               >
                  <div className="ml_-1 p_-2 br_2 trans_02 boxsh_xs h--y_-1 bg_248 h--bg_white">
                     <div className={`wh_18px icon ${isCancelable ? 'icon_returnTicketB' : 'icon_returnTicket op_03'}`} />
                  </div>
               </Tooltip>
            </div>
         </div>
      </div>
   );
}));

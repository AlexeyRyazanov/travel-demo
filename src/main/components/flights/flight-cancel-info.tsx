import formatPrice from '../../utils/format-price';

type Props = {
   price: number;
   cancelPenalty: number;
};

export default function FlightCancelInfo(props: Props): JSX.Element {
   const { price, cancelPenalty } = props;

   const cost = cancelPenalty !== 0 ? price * cancelPenalty : 0;

   return (
      <div className="Flight-CancelInfo">
         <span>
            <span className="c_main">Возврат</span>
            &nbsp;билета&nbsp;возможен за&nbsp;дополнительную&nbsp;плату
         </span>
         <br />
         <span className="c_main monobold">
            {formatPrice(Math.round(cost))}
            &nbsp;руб.
         </span>
      </div>
   );
}

import formatPrice from '../../utils/format-price';

type Props = {
   changePenalty: number;
   price: number;
};

export default function FlightChangeInfo({ changePenalty, price }: Props): JSX.Element {
   const cost = changePenalty !== 0 ? price * changePenalty : 0;

   return (
      <div className="Flight-ChangeInfo">
         <span>
            <span className="c_main">Обмен</span>
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

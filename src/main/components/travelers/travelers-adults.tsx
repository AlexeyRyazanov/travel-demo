import { adultsMaxCount, adultsMinCount } from '../../data/constants';
// import Store from '../../stores/Store';

type Props = {
   // store?: Store;
};

export default function TravelersAdults(props: Props): JSX.Element {
   // const {
   //    adultCount,
   //    adultsSet,
   // } = props.store.searchBar;

   return (
      <div className="row nowrap">
         <div className="mr_1r semibold icon icon_adults">Взрослые</div>
         {/* <Counter
            count={adultCount}
            hChange={adultsSet}
            maxVal={adultsMaxCount}
            minVal={adultsMinCount}
         /> */}
      </div>
   );
}

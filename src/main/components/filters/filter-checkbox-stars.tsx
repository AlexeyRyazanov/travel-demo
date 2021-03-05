import Checkbox from '../atoms/checkbox';
import FilterBaseType from '../../typings/filter-base';
import HotelStars from '../hotel-stars';

type Props = {
   d: FilterBaseType;
   hFilter(id: string | number, v: boolean): void;
};

export default function FilterCheckboxStars(props: Props): JSX.Element {
   const { d, hFilter } = props;
   const { active, id } = d;
   let starsVal: number;

   if (typeof id === 'string') {
      starsVal = parseInt(id, 10);
   } else {
      starsVal = id;
   }

   return (
      <Checkbox
         cls={`FilterCheckbox ai_c br_2 p_-2 trans_03 bg_242 h--boxsh_1 h--bg_white a--y_1 ${active ? 'bg_252 boxsh_xs' : ''}`}
         hSelect={hFilter}
         id={id}
         labelNode={<HotelStars stars={starsVal} />}
         selected={active}
      />
   );
}

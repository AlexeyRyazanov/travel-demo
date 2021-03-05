import Stars from './atoms/stars';
import starsDesc from '../utils/stars-desc';

type Props = {
   stars: number;
};

export default function HotelStars({ stars }: Props): JSX.Element {
   let title = '';
   let desc = '';

   if (stars === 0 || stars > 5) {
      const s = starsDesc(stars);
      title = s.title;
      desc = s.desc;
   }

   if (stars > 0 && stars <= 5) {
      return (
         <Stars stars={stars} />
      );
   }
   return (
      <div className="row nowrap ai_c jc_sb h_14px">
         <div className="mr_-1">{title}</div>
         {/* <Tooltip message={desc} /> */}
      </div>
   );

}

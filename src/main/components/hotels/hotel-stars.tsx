import Stars from '../atoms/stars';

export default function HotelStars({ stars }: { stars: number }): JSX.Element {
   return (
      <Stars stars={stars} />
   );
}

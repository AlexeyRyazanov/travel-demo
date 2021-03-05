import arrNotEmpty from '../../utils/array/array-not-empty';

type Props = {
   stars: number;
};

export default function Stars(props: Props): JSX.Element {
   const { stars } = props;

   const starsArr = [];

   for (let i = 0; i < stars; i++) {
      starsArr.push(i);
   }

   return (
      <div className="h_14px row nowrap ai_c">
         {
            arrNotEmpty(starsArr)
            && starsArr.map((star) => <div key={star} className="Star" />)
         }
      </div>
   );
}

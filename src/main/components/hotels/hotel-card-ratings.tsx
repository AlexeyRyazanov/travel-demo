import HotelStars from './hotel-stars';

type Props = {
   data: any;
   hovered?: boolean;
};

export default function HotelCardRatings(props: Props): JSX.Element {
   const { data, hovered } = props;
   const { starCount, score } = data;

   return (
      <div className={`row jc_sb py_-2 br_2 px_-1 boxsh_xs trans_03 ${hovered ? 'bg_white' : 'bg_245'}`}>
         <div className="py_-2 mr_-1">
            <HotelStars stars={starCount} />
         </div>
         {
            score > 0
            && (
               <div className="c_main semibold icon icon_faceSmileB">
                  {score}
                  {' '}
                  / 100
                  <span className="HotelCard-RatingDesc">&nbsp;Отлично</span>
               </div>
            )
         }
         {/* <div className="HotelCard-Recommend semibold icon icon_likeB">Рекомендуем</div> */}
      </div>
   );
}

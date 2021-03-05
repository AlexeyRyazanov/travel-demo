import { RouteComponentProps } from '@reach/router';
import FlightsResults from './flights-results';
import ScrollToTopOnMount from '../atoms/scroll-to-top';
import FlightPromoBanner from '../flights-promo/flight-promo-banner';
import FlightsSearchPanel from './flights-search-panel';

export default function Flights(props: RouteComponentProps): JSX.Element {
   return (
      <>
         <ScrollToTopOnMount />
         <FlightPromoBanner />
         <div className="px_1 mt_1 z1 usn">
            <FlightsSearchPanel />
         </div>
         <FlightsResults />
         {/* <div className="row"> */}
         {/* <div className="w_33p ">
            <div className="fixed col w_25p r_1 t_2 b_0 scrollbar_thin bg_245">
               <div className="fixed row nowrap px_1 mb_-2 icon icon_hotel semibold z1">Рекомендуем отели</div>
               <HotelsList data={hotelsList} />
               <div className="fixed b_0 w_25p h_3 bg_grad_245_b z1" />
            </div>
         </div> */}
         {/* </div> */}
      </>
   );
}

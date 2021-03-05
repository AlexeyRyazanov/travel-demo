import SmartImage from '../atoms/smart-image';

import imgPng from '../../../images/flight/SmartAvia_plane.png';
import imgWebP from '../../../images/flight/SmartAvia_plane.webp';

export default function FlightPromoBannerPlane(): JSX.Element {

   return (
      <div className="FlightPromo-PlaneWrap absolute w_100p flex_center z2" /* style={{ transform: `translate(0px, ${75 * cursorPosY}px)` }} */>
         <SmartImage
            cls="FlightPromo-Plane"
            imgSrc={imgPng}
            // imgSrcPlh={'../../../images/banners/flight1/PlaneNordavia_plane_plh.png'}
            imgSrcWebp={imgWebP}
         />
      </div>
   );
}

import './flight-promo-banner.scss';
import { Link } from '@reach/router';
import { useRef } from 'react';
import SVGFilterHeatWaves from '../../animations/svg-filter-heat-waves';
import SVGFilterClouds from '../../animations/svg-filter-clouds';
import Routes from '../../data/routes';
import Button from '../atoms/button';
import Cloud from './flight-promo-cloud';
import FlightPromoBannerPlane from './flight-promo-banner-plane';
import FlightPromoClouds, { clouds } from './flight-promo-clouds';
import FlightPromoInfo from './flight-promo-info';
import FlightPromoIslands from './flight-promo-islands';
import SmartImage from '../atoms/smart-image';
import SmartImageType from '../../typings/smart-image';
import usePanoClouds from '../../hooks/use-pano-clouds';
import Logo from '../atoms/logo';
import SVGFilterWaves from '../../animations/svg-filter-waves';
import CloudSvgFilter from './flight-promo-cloud-svg-filter';
import FlightPromoCloudsSvgFilter from './flight-promo-clouds-svg-filter';

export default function FlightPromoBanner(): JSX.Element {

   // console.log('FlightPromoBanner RENDER');
   // const cloudsGroupFront = usePanoClouds({ layer: 6, yf: -20, yt: 20 });

   // DISABLE ALL ANIMATION WHEN BLOCK IS OUT OF SCREEN

   return (
      <div id="FlightPromoBanner" className="FlightPromoBanner relative col z1 pb_27p o_h">
         {/* <div className="p_-2">
            <Logo />
         </div> */}
         {/* <div className="FlightPromo-Header p_2 row"> */}
         {/* <div className="FlsightPromo-Logo"></div> */}
         {/* <h3>Нордавия лого</h3> */}
         {/* <h2>Чартерная программа на собственных рейсах авиакомпании <span className="c_main semibold">«Smart Avia»</span></h2> */}
         {/* </div> */}
         {/* <div className="CloudsFront"></div> */}
         {/* <div className="CloudsFront_copy"></div> */}
         {/* <div className="absolute w_100p h_100p z3 op_085" style={{ top: '0%', left: '50%' }} ref={cloudsGroupFront}>
            {
               clouds.map((el, i) => {
                  if (i === 6) {
                     return (
                        <Cloud
                           cls="absolute fill"
                           imgSrc={el.imgSrc}
                           imgSrcWebp={el.imgSrcWebp}
                           index={i}
                           key={i}
                           layer={7}
                        />
                     );
                  }
               })
            }
         </div> */}
         <div className="absolute fill flex_center">
            <FlightPromoBannerPlane />
         </div>
         <div className="absolute fill z2" />
         <div className="absolute fill row z0">
            <FlightPromoClouds />
            {/* <FlightPromoCloudsSvgFilter /> */}
            <div className="absolute fill z6">
               {/* <CloudSvgFilter /> */}
            </div>
            <div className="Air absolute fill z5" />
            <div className="Sun absolute fill z4" />
            <div className="Sky absolute fill z3" />
            <FlightPromoIslands />
            <div className="SeaHighlight absolute fill z1" />
            {/* <SVGFilterClouds /> */}
            <SVGFilterWaves />
            {/* <SVGFilterHeatWaves /> */}
            {/* <div className="turbulence OceanRipple absolute z1" /> */}
            {/* <div className="turbulence OceanRipple OceanRippleSmall absolute z1" /> */}
            <div className="Sea absolute fill z0" />
         </div>
         {/* <FlightPromoInfo /> */}
      </div>
   );
}

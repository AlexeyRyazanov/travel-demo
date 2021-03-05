/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import Cloud from './flight-promo-cloud';
import SmartImageType from '../../typings/smart-image';
import usePano from '../../hooks/use-pano';
import usePanoClouds from '../../hooks/use-pano-clouds';

export const clouds: Array<SmartImageType> = [];

for (let i = 1; i <= 21; i++) {
   clouds.push({
      imgSrc: `../../../../images/clouds/${i}.png`,
      imgSrcWebp: `../../../../images/clouds/${i}.webp`,
      cls: '',
   });
}

const FlightPromoClouds = memo(() => {
   // console.log('FlightPromoClouds RENDER');

   const cloudsGroup6 = usePanoClouds({
      layer: 6, yt: 50, xf: 100, xt: -150,
   });
   const cloudsGroup5 = usePanoClouds({
      layer: 5, yt: 50, xf: 100, xt: -150,
   });
   // const cloudsGroup5_ = usePanoClouds({ layer: 5, yt: 50, xf: 100, xt: -150 });
   const cloudsGroup4 = usePanoClouds({
      layer: 4, yt: 30, xf: 100, xt: -150,
   });
   // const cloudsGroup4_ = usePanoClouds({ layer: 4, yt: 30, xf: 100, xt: -150 });
   const cloudsGroup3 = usePanoClouds({
      layer: 3, yt: 10, xf: 100, xt: -150,
   });
   const cloudsGroup31 = usePanoClouds({
      layer: 3, yt: 10, xf: 100, xt: -150,
   });
   // const cloudsGroup1 = usePanoClouds({ layer: 1 });

   return (
      <div className="relative !svg-filter_clouds fill z6">
         {/* <div className="CloudsBack6"></div>
         <div className="CloudsBack6_copy"></div>
         <div className="CloudsBack5"></div>
         <div className="CloudsBack5_copy"></div>
         <div className="CloudsBack4"></div>
         <div className="CloudsBack4_copy"></div>
         <div className="CloudsBack3"></div>
         <div className="CloudsBack3"></div>
         <div className="CloudsBack3_copy"></div>
         <div className="CloudsBack2"></div>
         <div className="CloudsBack2_copy"></div>
         <div className="CloudsBack1"></div>
         <div className="CloudsBack1_copy"></div>
         <div className="CloudsBack0"></div>
         <div className="CloudsBack0_copy"></div> */}

         {/* Closest clouds */}
         <div className="absolute fill z6 enabled" style={{ top: '7%' }} ref={cloudsGroup6}>
            {
               clouds.map((el, i) => {
                  if (i < 6) {
                     return (
                        // <div className="cloud absolute w_25p pb_25p" style={{ left: `${i * 20}%`, bottom: '-20%' }} key={i}>
                        <Cloud
                           cls="absolute fill"
                           imgSrc={el.imgSrc}
                           imgSrcWebp={el.imgSrcWebp}
                           index={i}
                           key={i}
                           layer={6}
                        />
                        // </div>
                     );
                  }
                  return null;
               })
            }
         </div>
         <div className="absolute fill z5 enabled" style={{ top: '6%' }} ref={cloudsGroup5}>
            {
               clouds.map((el, i) => {
                  if (i >= 5 && i < 10) {
                     return (
                        <Cloud
                           cls="absolute fill"
                           imgSrc={el.imgSrc}
                           imgSrcWebp={el.imgSrcWebp}
                           index={i - 5}
                           key={i}
                           layer={5}
                        />
                     );
                  }
                  return null;
               })
            }
         </div>
         <div className="absolute fill z4 enabled" style={{ top: '6%' }} ref={cloudsGroup4}>
            {
               clouds.map((el, i) => {
                  if (i >= 10 && i < 15) {
                     return (
                        <Cloud
                           cls="absolute fill"
                           imgSrc={el.imgSrc}
                           imgSrcWebp={el.imgSrcWebp}
                           index={i - 10}
                           key={i}
                           layer={4}
                        />
                     );
                  }
                  return null;
               })
            }
         </div>
         <div className="absolute fill z3 enabled" style={{ top: '7%' }} ref={cloudsGroup3}>
            {
               clouds.map((el, i) => {
                  if (i >= 15 && i < 20) {
                     return (
                        <Cloud
                           cls="absolute fill"
                           imgSrc={el.imgSrc}
                           imgSrcWebp={el.imgSrcWebp}
                           index={i - 15}
                           key={i}
                           layer={3}
                        />
                     );
                  }
                  return null;
               })
            }
         </div>
         {/* <div className="absolute fill z3" style={{ top: '5%' }} ref={cloudsGroup31}>
            {
               clouds.map((el, i) => {
                  if (i >= 5 && i < 10) {
                     return (
                        <Cloud
                           cls="absolute fill"
                           imgSrc={el.imgSrc}
                           imgSrcWebp={el.imgSrcWebp}
                           index={i - 5}
                           key={i}
                           layer={4}
                        />
                     );
                  }
                  return null;
               })
            }
         </div> */}
         {/* <div className="absolute fill z5" style={{ top: '5%' }} ref={cloudsGroup5_}>
            {
               clouds.map((el, i) => {
                  if (i >= 15 && i < 20) {
                     return (
                        <Cloud
                           cls="absolute fill"
                           imgSrc={el.imgSrc}
                           imgSrcWebp={el.imgSrcWebp}
                           index={i - 15}
                           key={i}
                           layer={5}
                        />
                     );
                  }
               })
            }
         </div> */}
         {/* <div className="absolute fill z4" style={{ top: '6%' }} ref={cloudsGroup4_}>
            {
               clouds.map((el, i) => {
                  if (i > 0 && i < 6) {
                     return (
                        <Cloud
                           cls="absolute fill"
                           imgSrc={el.imgSrc}
                           imgSrcWebp={el.imgSrcWebp}
                           index={i}
                           key={i}
                           layer={3}
                        />
                     );
                  }
               })
            }
         </div> */}
         {/* <div className="absolute fill z2" style={{ bottom: '0%' }} ref={cloudsGroup1}>
            {
               clouds.map((el, i) => {
                  if (i > 0 && i < 10) {
                     return (
                        <Cloud
                           cls="absolute fill"
                           imgSrc={el.imgSrc}
                           imgSrcWebp={el.imgSrcWebp}
                           index={i}
                           key={i}
                           layer={1}
                        />
                     );
                  }
               })
            }
         </div> */}
      </div>
   );
});

export default FlightPromoClouds;

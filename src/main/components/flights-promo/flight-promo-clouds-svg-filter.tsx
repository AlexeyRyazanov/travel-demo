/* eslint-disable react/no-array-index-key */
import {
   memo, RefObject, useEffect, useRef,
} from 'react';
import gsap from 'gsap';
import Cloud from './flight-promo-cloud';
import SmartImageType from '../../typings/smart-image';
import usePano from '../../hooks/use-pano';
import usePanoClouds from '../../hooks/use-pano-clouds';
import { fi } from '../../data/constants';

export const clouds: Array<number> = [];

for (let i = 1; i <= 21; i++) {
   clouds[i] = i;
}

// console.log(clouds);

function CloudSvgFilter({ index, layer }: { index: number; layer: number }): JSX.Element {
   const cloudRef: RefObject<HTMLDivElement> = useRef(null);
   const feturbulence = useRef<SVGFETurbulenceElement>(null);

   useEffect(() => {
      if (cloudRef.current && feturbulence.current) {
         const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
         });

         const duration = 100;

         tl
            .fromTo(cloudRef.current,
               {
                  xPercent: 0,
               },
               {
                  duration,
                  xPercent: -100,
                  ease: 'none',
               });
         // .to(feturbulence.current, {
         //    // duration: 100,
         //    duration,
         //    ease: 'none',
         //    // attr: { 'baseFrequency': 0.01 },
         //    onUpdate() {
         //       const baseFrequency = this.progress() * 0.01 + 0.01;
         //       feturbulence.current.setAttribute('baseFrequency', baseFrequency.toString());
         //    }
         // }, 0)
         // ;

         // tl;
      }
      // return () => {
      //    cleanup
      // }
   }, []);

   const filterId = `cloud-filter-${index + 1}`;

   return (

      <>
         <svg width="0" height="0">
            <filter id={filterId}>
               <feTurbulence type="fractalNoise" baseFrequency="0.013" numOctaves="5" seed={index + 1} ref={feturbulence} />
               <feDisplacementMap in="SourceGraphic" scale="212" />
            </filter>
         </svg>
         <div
            className="absolute will-change_t"
            ref={cloudRef}
            style={{
               width: `${20 * layer / fi}%`,
               height: `${17 * layer / fi}%`,
               left: `${index * 30}%`,
            }}
         >
            <div className="cloud_01 absolute " style={{ filter: `url(#${filterId})` }} />
         </div>
      </>
   );
}

const FlightPromoCloudsSvgFilter = memo(() =>
// console.log('FlightPromoClouds RENDER');

// const cloudsGroup6 = usePanoClouds({layer: 6, yt: 50, xf: 75, xt: -125 });
// const cloudsGroup5 = usePanoClouds({layer: 5, yt: 50, xf: 75, xt: -125 });
// // const cloudsGroup5_ = usePanoClouds({layer: 5, yt: 50, xf: 75, xt: -125 });
// const cloudsGroup4 = usePanoClouds({layer: 4, yt: 30, xf: 75, xt: -125 });
// // const cloudsGroup4_ = usePanoClouds({layer: 4, yt: 30, xf: 75, xt: -125 });
// const cloudsGroup3 = usePanoClouds({layer: 3, yt: 10, xf: 75, xt: -125 });
// const cloudsGroup31 = usePanoClouds({layer: 3, yt: 10, xf: 75, xt: -125 });
// const cloudsGroup1 = usePanoClouds({layer: 1 });

   (
      <div className="relative fill z6">
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
         <div className="absolute w_100p h_100p z6" style={{ top: '7%' }}>
            {
               clouds.map((el, i) => {
                  if (i < 6) {
                     return (
                        <CloudSvgFilter
                           key={i}
                           layer={6}
                           index={i}
                        />
                     );
                  }
                  return null;
               })
            }
         </div>
         <div className="absolute w_100p h_100p z6" style={{ top: '1%' }}>
            {
               clouds.map((el, i) => {
                  if (i >= 5 && i < 10) {
                     return (
                        <CloudSvgFilter
                           key={i}
                           layer={5}
                           index={i - 5}
                        />
                     );
                  }
                  return null;
               })
            }
         </div>
         <div className="absolute w_100p h_100p z6" style={{ top: '1%' }}>
            {
               clouds.map((el, i) => {
                  if (i >= 5 && i < 10) {
                     return (
                        <CloudSvgFilter
                           key={i}
                           layer={5}
                           index={i - 5}
                        />
                     );
                  }
                  return null;
               })
            }
         </div>
         {/* <div className="absolute w_100p h_100p z5" style={{ top: '5%' }} ref={cloudsGroup5_}>
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
         {/* <div className="absolute w_100p h_100p z4" style={{ top: '6%' }} ref={cloudsGroup4_}>
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
         {/* <div className="absolute w_100p h_100p z4" style={{ top: '6%' }} ref={cloudsGroup4}>
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
               })
            }
         </div> */}
         {/* <div className="absolute w_100p h_100p z3" style={{ top: '7%' }} ref={cloudsGroup3}>
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
               })
            }
         </div> */}
         {/* <div className="absolute w_100p h_100p z3" style={{ top: '5%' }} ref={cloudsGroup31}>
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
               })
            }
         </div> */}
         {/* <div className="absolute w_100p h_100p z2" style={{ bottom: '0%' }} ref={cloudsGroup1}>
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
   ));

export default FlightPromoCloudsSvgFilter;

import {
   useRef, memo, useCallback,
} from 'react';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';
import SmartImage from '../atoms/smart-image';

import img1 from '../../../images/change/2.jpg';
import img2 from '../../../images/change/21b315f7fcf9015972075f4d30a450ca.jpg';
import img3 from '../../../images/change/23358075.jpg';
import img4 from '../../../images/change/Changi-Airport-Terminal-1-Playground-02-640x427.jpg';

export default memo(function FlightEntertainment({ opened }: { opened: boolean }): JSX.Element {

   const nodesRef = useRef<HTMLDivElement>(null);

   const hOpenAnim = useCallback((node: HTMLElement, done: () => void) => {
      // const tl = gsap.timeline();

      if (nodesRef.current) {
         if (opened) {
            gsap.fromTo(nodesRef.current.children,
               {
                  y: -50,
                  autoAlpha: 0,
               },
               {
                  duration: 0.6,
                  y: 0,
                  autoAlpha: 1,
                  ease: 'expo.out',
                  stagger: 0.03,
               });
         } else {
            gsap.to(nodesRef.current, {
               duration: 0.3,
               autoAlpha: 0,
               ease: 'expo.out',
               onComplete: done,
            });
         }
      }
   }, [opened]);

   return (
      <Transition<undefined>
         in={opened}
         appear
         mountOnEnter
         unmountOnExit
         addEndListener={hOpenAnim}
      >
         <div className="col">
            <div className="ml_1r">Во время пересадки вы можете провести время</div>
            <div className="row p_1-2r" ref={nodesRef}>
               <div className="w_25p cur_p p_1-2r vis-hidden">
                  <div className="relative boxsh_1 br_2 o_h">
                     <div className="absolute b_0 p_-2 mb_-2 ml_-2 bg_250 z1 lh_13 fs_067 semibold br_2 ">
                        Hotel capsule
                     </div>
                     <SmartImage
                        cls="relative pb_66p"
                        imgSrc={img1}
                     />
                  </div>
               </div>
               <div className="w_25p cur_p p_1-2r vis-hidden">
                  <div className="relative boxsh_1 br_2 o_h">
                     <div className="absolute b_0 p_-2 mb_-2 ml_-2 bg_250 z1 lh_13 fs_067 semibold br_2 ">
                        Hotel capsule
                     </div>
                     <SmartImage
                        cls="relative pb_66p"
                        imgSrc={img2}
                     />
                  </div>
               </div>
               <div className="w_25p cur_p p_1-2r vis-hidden">
                  <div className="relative boxsh_1 br_2 o_h">
                     <div className="absolute b_0 p_-2 mb_-2 ml_-2 bg_250 z1 lh_13 fs_067 semibold br_2 ">
                        Hotel capsule
                     </div>
                     <SmartImage
                        cls="relative pb_66p"
                        imgSrc={img3}
                     />
                  </div>
               </div>
               <div className="w_25p cur_p p_1-2r vis-hidden">
                  <div className="relative boxsh_1 br_2 o_h">
                     <div className="absolute b_0 p_-2 mb_-2 ml_-2 bg_250 z1 lh_13 fs_067 semibold br_2 ">
                        Hotel capsule
                     </div>
                     <SmartImage
                        cls="relative pb_66p"
                        imgSrc={img4}
                     />
                  </div>
               </div>
            </div>
         </div>
      </Transition>
   );
});

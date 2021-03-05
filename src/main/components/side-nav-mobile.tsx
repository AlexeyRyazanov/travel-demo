/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
   useEffect, useRef, useState,
} from 'react';
import gsap from 'gsap';
import Logo from './atoms/logo';
import FlightsFilters from './flights/flights-filters';

export default function SideNavMobile(): JSX.Element {

   const [opened, setOpened] = useState(false);
   const btnRef = useRef<HTMLDivElement>(null);
   const maskRef = useRef<HTMLDivElement>(null);
   const sideNavRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (sideNavRef.current && btnRef.current && maskRef.current) {
         const sideNav = sideNavRef.current;
         const btn = btnRef.current;
         const tl = gsap.timeline({ paused: true });

         tl
            .to(sideNav, {
               duration: 0.5,
               xPercent: 0,
               ease: 'expo.out',
            })
            .to(btn, {
               duration: 0.3,
               scale: 0.75,
               autoAlpha: 0,
               ease: 'expo.out',
            }, 0)
            .to(maskRef.current, {
               duration: 0.5,
               autoAlpha: 0.6,
               ease: 'expo.out',
            }, 0);

         if (opened) {
            tl.play();
         } else {
            tl.reverse();
            // gsap.to(sideNav, {
            //    duration: 0.5,
            //    xPercent: -102,
            //    ease: 'expo.out',
            // });
            // gsap.to(btn, {
            //    duration: 0.3,
            //    scale: 1,
            //    autoAlpha: 1,
            //    ease: 'expo.out',
            // });
            // gsap.to(maskRef.current, {
            //    duration: 0.3,
            //    autoAlpha: 0,
            //    ease: 'expo.out',
            // });
         }
      }
   }, [opened, sideNavRef]);

   return (
      <>
         <div className="fixed l_0 t_0 b_0 w_16r -l-w_15r -m-w_14r bg_grad_245_hor_colored_inverted boxsh_3_right z101 trans_z ox_h" ref={sideNavRef}>
            <Logo />
            <FlightsFilters />
            {/* <CallBack cls="b_0">
                  <div className="p_1r boxsh_xs z2 trans_z cur_p c_main semibold icon icon_callCenterB">Обратная связь</div>
               </CallBack> */}
         </div>
         <div className="fixed l_0 b_0 p_1 z100" ref={btnRef}>
            <button type="button" className="circ_42px bg_main cur_p flex_center trans_03 boxsh_3 h--boxsh_4 h--y_-2 a--y_2" onClick={() => setOpened(!opened)}>
               <span className="wh_18px icon_filterW mt_2px" />
            </button>
            {/* <Button
               cls="ButtonIcon boxsh_2"
               color="accent"
               hClick={() => setOpened(!opened)}
               icon="filterW"
            /> */}
         </div>
         <div className="fixed fill bg_250 op_06 z99 vis-hidden" ref={maskRef} onClick={() => setOpened(false)} />
      </>
   );
}

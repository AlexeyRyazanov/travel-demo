import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import scrollToTop from '../../animations/scroll-to-top';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function ButtonToTop(): JSX.Element {

   const wrapperRef = useRef<HTMLDivElement>(null);
   const btnRef = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      if (btnRef.current) {
         const lines = btnRef.current.querySelectorAll('line');

         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: wrapperRef.current,
               start: 'bottom top',
               toggleActions: 'play none reverse none',
            },
         });

         tl
            .fromTo(btnRef.current,
               {
                  autoAlpha: 0,
                  scale: 0.75,
               },
               {
                  duration: 0.4,
                  autoAlpha: 1,
                  scale: 1,
                  ease: 'expo.out',

               })
            .fromTo(lines,
               {
                  drawSVG: '0%',
               },
               {
                  duration: 0.4,
                  drawSVG: '100%',
                  ease: 'expo.out',
               }, 0.3);
      }
      // return () => {
      //    cleanup
      // }
   }, []);

   return (
      <div className="absolute h_66p t_0 r_0 z99" ref={wrapperRef}>
         <div className="fixed r_0 b_0 p_1 !-m-p_1r">
            <button type="button" className="circ_42px vis-hidden bg_248 h--bg_white cur_p flex_center trans_03 boxsh_3 h--boxsh_3 h--y_-2 a--y_2" onClick={scrollToTop} ref={btnRef}>
               <svg x="0px" y="0px" width="14px" height="18px" viewBox="0 0 14 18">
                  <line className="icon_fillB" x1="7" y1="17" x2="7" y2="1" />
                  <line className="icon_fillB" x1="7" y1="1" x2="1" y2="7" />
                  <line className="icon_fillB" x1="7" y1="1" x2="13" y2="7" />
               </svg>
            </button>
         </div>
      </div>
   );
}

import { CSSProperties, memo } from 'react';
// import useBayanAnimationBg from '../bayan/hooks/use-bayan-animation-bg';
import useBayanAnimationBgCss from '../bayan/hooks/use-bayan-animation-bg-css';
// import CSS from 'csstype';

export default memo(function FlightPackageBg({ bayanIndex }: { bayanIndex: number }): JSX.Element {
   const { ref, scaleY, height } = useBayanAnimationBgCss({ bayanIndex });
   // const ref = useBayanAnimationBg({ bayan });

   let style: CSSProperties = {
      // boxShadow: `0 ${2.6 / scaleY}px 8.6px rgba(0,0,0,.1018604651),
      // 0 0 2px 0 rgba(0,0,0,.0380357143)`,
   };

   if (scaleY > 1) {
      style = {
         transform: `scaleY(${scaleY})`,
         // boxShadow: `0 ${2.6 / scaleY}px 8.6px rgba(0,0,0,.1018604651), 0 0 2px 0 rgba(0,0,0,.0380357143)`,
      };
   }
   // box-shadow: 0 2.6px 8.6px 0 rgba(0,0,0,.1018604651), 0 0 2px 0 rgba(0,0,0,.0380357143);

   return (
      <>
         <div className="absolute t_0 l_0 r_0 h_05r boxsh_3 br_5500" />
         <div className="absolute t_05r b_3-2r l_0 r_0 z0 boxsh_3 origin_50_0 trans_06 will-change_t" ref={ref} style={style} />
      </>
   );
});

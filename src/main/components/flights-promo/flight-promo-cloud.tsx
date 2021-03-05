import { RefObject, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { fi, panoAnimDur } from '../../data/constants';
import SmartImage from '../atoms/smart-image';
import SmartImageType from '../../typings/smart-image';

type Props = SmartImageType & {
   index: number;
   layer: 1 | 2 | 3 | 4 | 5 | 6 | 7;
   // speed?: number;
};

export default function Cloud({
   imgSrc = '',
   imgSrcWebp = '',
   index = 1,
   layer = 1,
}: Props): JSX.Element {

   const ref: RefObject<HTMLDivElement> = useRef(null);
   const coef = layer * fi;

   useEffect(() => {
      let tl: gsap.core.Timeline;

      if (ref.current) {
         const node = ref.current;

         tl = gsap.timeline({
            repeat: -1,
            scrollTrigger: {
               trigger: '.FlightPromoBanner',
               start: 'top bottom',
               toggleActions: 'play pause play pause',
            },
         });

         tl.to(node,
            {
               duration: 1.5 * panoAnimDur / coef,
               scale: 1 + (layer - 1) / 12,
               rotation: gsap.utils.random(-20, 20, 2, true),
               repeatRefresh: true,
               ease: 'none',
            });
      }

      return () => {
         if (tl) {
            tl.kill();
         }
      };

   }, [coef, layer]);

   return (
      <div
         className="cloud absolute"
         style={{
            width: `${10 * layer / fi}%`,
            paddingBottom: `${10 * layer / fi}%`,
            left: `${index * 20}%`,
         }}
         ref={ref}
      >
         <SmartImage
            cls="absolute fill"
            imgSrc={imgSrc}
            imgSrcWebp={imgSrcWebp}
         />
      </div>
   );
}

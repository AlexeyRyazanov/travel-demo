import usePano from '../../hooks/use-pano';
import SmartImage from '../atoms/smart-image';
// import { panoAnimDur } from '../../data/Constants';

import imgSrc1 from '../../../images/islands/island_1.png';
// import imgSrcPlh1 from '../../../images/islands/island_1_p.png'
import imgSrcWebp1 from '../../../images/islands/island_1.webp';
// import imgSrcWebpPlh1 from '../../../images/islands/island_1_p.webp'

import imgSrc2 from '../../../images/islands/island_2.png';
// import imgSrcPlh2 from '../../../images/islands/island_2_p.png'
import imgSrcWebp2 from '../../../images/islands/island_2.webp';
// import imgSrcWebpPlh2 from '../../../images/islands/island_2_p.webp'

import imgSrc3 from '../../../images/islands/island_3.png';
// import imgSrcPlh3 from '../../../images/islands/island_3_p.png'
import imgSrcWebp3 from '../../../images/islands/island_3.webp';
// import imgSrcWebpPlh3 from '../../../images/islands/island_3_p.webp'

// import imgSrc4 from '../../../images/islands/island_4.png'
// import imgSrcPlh4 from '../../../images/islands/island_4_p.png'
// import imgSrcWebp4 from '../../../images/islands/island_4.webp'
// import imgSrcWebpPlh4 from '../../../images/islands/island_4_p.webp'

// for (let i = 1; i <= 4; i++) {
//    islands.push({
//       imgSrc: `../../../../images/islands/island_${i}.png`,
//       imgSrcPlh: `../../../../images/islands/island_${i}_p.png`,
//       imgSrcWebp: `../../../../images/islands/island_${i}.webp`,
//       imgSrcWebpPlh: `../../../../images/islands/island_${i}_p.webp`,
//       cls: '',
//    });
// }

export default function FlightPromoIslands(): JSX.Element {
   // console.log('FlightPromoClouds RENDER');

   const islandsGroup = usePano({ layer: 1 });

   return (
      <div className="absolute h_100p z2" ref={islandsGroup} style={{ width: '200%', top: '20%', left: '-75%' }}>
         <div className="island absolute" style={{ width: '38%', left: '-10%', paddingBottom: '12.5%' }}>
            <SmartImage
               cls="absolute fill"
               imgSrc={imgSrc1}
               imgSrcWebp={imgSrcWebp1}
            />
         </div>
         <div className="island absolute" style={{ width: '25%', left: '28%', paddingBottom: '11%' }}>
            <SmartImage
               cls="absolute fill"
               imgSrc={imgSrc2}
               imgSrcWebp={imgSrcWebp2}
            />
         </div>
         <div className="island absolute" style={{ width: '30%', left: `${28 + 25}%`, paddingBottom: '9%' }}>
            <SmartImage
               cls="absolute fill"
               imgSrc={imgSrc3}
               imgSrcWebp={imgSrcWebp3}
            />
         </div>
      </div>
   );
}

import {
   useState, useEffect, useRef, RefObject,
} from 'react';
import Blur from './blur';
import Img from './img';
import SmartImageType from '../../typings/smart-image';
import useIntersection from '../../hooks/use-intersection';

export default function SmartImage(props: SmartImageType): JSX.Element {
   const {
      alt,
      bg,
      blurVal,
      cls,
      clsImage,
      imgSrc,
      imgSrcPlh,
      imgSrcWebp,
      imgSrcWebpPlh,
      logo,
      mask,
      style,
   } = props;

   const ref: RefObject<HTMLImageElement> = useRef(null);

   const [loaded, setLoaded] = useState<boolean>(false);
   const [ready, setReady] = useState<boolean>(false);

   const imgLoadedOptEnter = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
         setReady(true);
      }
   };

   useEffect(() => {
      setReady(false);
      setLoaded(false);
   }, [imgSrc, imgSrcWebp]);

   useIntersection({
      onChange: imgLoadedOptEnter,
      ref,
      triggerAgain: ready,
      triggerOnce: true,
   });

   const onLoad = () => setLoaded(true);

   // TODO Add smooth transition between loading images to avoid flash effect when image's source changes
   // TODO Add transition from blurred placeholder image to full image

   return (
      <div className={`${cls || ''} ${bg ? 'bg_230' : ''}`} ref={ref} style={style}>
         {
            (logo && !loaded)
            && <div className="SmartImage-Logo" />
         }
         {
            (blurVal && imgSrcPlh && !loaded)
            && (
               <Blur
                  blurRadius={blurVal}
                  cls="absolute fill z1"
                  imgSrc={imgSrcPlh}
                  imgSrcWebp={imgSrcWebpPlh}
               />
            )
         }
         {
            (mask && !loaded)
            && <div className="absolute fill bg_grad-radial z1" />
         }
         {
            ready
            && (
               <Img
                  alt={alt}
                  clsImage={clsImage}
                  clsPicture={`trans_1 z0 ${loaded ? 'op_1' : 'op_0'}`}
                  imgSrc={imgSrc}
                  imgSrcWebp={imgSrcWebp}
                  onLoad={onLoad}
               />
            )
         }
      </div>
   );
}

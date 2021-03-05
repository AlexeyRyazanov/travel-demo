import {
   ReactNode, RefObject, useRef, useState, useEffect, useCallback,
} from 'react';
import debounce from '../../utils/debounce';
// import useDimensions from '../../hooks/useDimensions';
import useIntersection from '../../hooks/use-intersection';

const alg = require('./blur-alg');

type Props = {
   blurRadius?: number;
   children?: ReactNode;
   cls?: string;
   enableStyles?: boolean;
   imgSrc: string;
   imgSrcWebp?: string;
   onLoad?(event: Event): void;
   resizeInterval?: number;
};

export default function Blur(props: Props): JSX.Element {
   const {
      blurRadius = 32,
      // children,
      cls,
      // enableStyles,
      imgSrc,
      imgSrcWebp,
      // onLoad,
      // resizeInterval,
   } = { ...props };

   const container: RefObject<HTMLDivElement | null> = useRef(null);
   const canvas: RefObject<HTMLCanvasElement | null> = useRef(null);

   // const { width, height } = useDimensions(container);
   const [ready, setReady] = useState<boolean>(false);
   const [img, setImg] = useState<HTMLImageElement | null>(new Image());

   const isCurrentImgSrc = useCallback(
      (newSrc: string): boolean => img && img.src === newSrc, [img],
   );

   const onLoad = useCallback(() => {
      const { imgSrc, onLoad } = props;
      const src = (/* store.webpSupport &&  */imgSrcWebp) || imgSrc;

      if (!src || !container) {
         return;
      }

      if (isCurrentImgSrc(src)) {
         return;
      }

      const imgNew = new Image();

      imgNew.src = src;

      imgNew.onload = (e: Event) => {
         console.log(e);
         alg(
            imgNew,
            canvas.current,
            blurRadius,
            container.current.getBoundingClientRect().width,
            container.current.getBoundingClientRect().height,
         );
         // StackBlur.image(
         //    imgNew,
         //    canvas.current,
         //    blurRadius,
         // );
         if (typeof onLoad === 'function') {
            onLoad(e);
         }
      };

      imgNew.onerror = (event: Event) => {
         // Remove the onerror listener.
         // Preventing recursive calls caused by setting img.src to a falsey value
         imgNew.onerror = null;
         imgNew.src = '';

         if (typeof onLoad === 'function') {
            onLoad(event);
         }
      };

      setImg(imgNew);
   }, [blurRadius, imgSrcWebp, isCurrentImgSrc, props]);

   const onLoadDebounced = debounce(onLoad, 100);

   useEffect(() => {
      window.addEventListener('resize', onLoadDebounced, false);
      return () => {
         window.removeEventListener('resize', onLoadDebounced, false);
      };
   }, [onLoadDebounced]);

   useEffect(() => {
      setReady(false);
   }, [imgSrc, imgSrcWebp]);

   useEffect(() => {
      if (ready) {
         onLoad();
      }
   }, [onLoad, ready]);

   const imgLoadedOptEnter = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
         setReady(true);
         // loadImage();
      }
   };

   useIntersection({
      onChange: imgLoadedOptEnter,
      ref: container,
      triggerAgain: ready,
      triggerOnce: true,
      options: {
         rootMargin: '0% 0% 100% 0%',
      },
   });

   return (
      <div className={`${cls || ''}`} ref={container}>
         <canvas className="absolute fill" ref={canvas} />
         {/* {children} */}
      </div>
   );
}

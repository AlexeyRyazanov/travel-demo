import { useState, useEffect } from 'react';
import { copyrightLabel } from '../../data/constants';

type Props = {
   alt?: string;
   clsImage?: string;
   clsPicture?: string;
   imgSrc: string;
   imgSrcWebp?: string;
   onLoad?(loaded: boolean): void;
};

export default function Img(props: Props): JSX.Element {
   const {
      alt,
      clsImage,
      clsPicture,
      imgSrc,
      imgSrcWebp,
      onLoad,
   } = props;

   const [image, setState] = useState<HTMLImageElement>(new Image());

   const hLoad = () => {
      if (typeof onLoad === 'function') {
         onLoad(true);
      }
   };

   const hError = (res) => {
      console.log('ERROR: ', res);
      setState({
         ...image,
         src: imgSrc,
         onerror: null,
      });
      onLoad(true);
   };

   useEffect(() => {
      const src = (/* store.webpSupport && */ imgSrcWebp) || imgSrc;
      setState({ ...image, src });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [imgSrc, imgSrcWebp]);

   return (
      <picture className={`absolute fill ${clsPicture || ''}`}>
         {
            imgSrcWebp
            && <source className="absolute fill" srcSet={image.src} type="image/webp" />
         }
         <img
            alt={alt || copyrightLabel}
            className={`absolute fill ${clsImage || 'objfit_cover'}`}
            onError={hError}
            onLoad={hLoad}
            srcSet={image.src}
         />
      </picture>
   );
}

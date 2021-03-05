import { useState, useEffect } from 'react';

type Args = {
   crossOrigin?: string;
   imgSrc: string;
}

type State = {
   img: HTMLImageElement;
   status?: string | 'loading' | 'loaded' | 'failed';
}

const defaultState = {
   img: null,
   status: 'loading',
};

export default function useImage(args: Args) {
   const {
      crossOrigin,
      imgSrc,
   } = { ...args };

   const [state, setState] = useState<State>(defaultState);

   const { img, status } = state;

   useEffect(() => {
      if (!imgSrc) {
         return;
      }

      const imgNew = document.createElement('img');

      function onload() {
         setState({ img: imgNew, status: 'loaded' });
      }

      function onerror() {
         setState({ img: null, status: 'failed' });
      }

      imgNew.addEventListener('load', onload);
      imgNew.addEventListener('error', onerror);

      if (crossOrigin) {
         imgNew.crossOrigin = crossOrigin;
      }

      imgNew.src = imgSrc;

      return () => {
         imgNew.removeEventListener('load', onload);
         imgNew.removeEventListener('error', onerror);
         setState(defaultState);
      };

   }, [imgSrc, crossOrigin]);

   // return array because it it better to use in case of several useImage hooks
   // const [background, backgroundStatus] = useImage(url1);
   // const [patter] = useImage(url2);
   return { img, status };
}

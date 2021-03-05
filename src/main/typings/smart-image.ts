import { CSSProperties } from 'react';

type SmartImageType = {
   alt?: string;
   bg?: boolean;
   blurVal?: number;
   cls: string;
   clsImage?: string;
   id?: string | number;
   imgSrc: string;
   imgSrcPlh?: string;
   imgSrcWebp?: string;
   imgSrcWebpPlh?: string;
   logo?: boolean;
   mask?: boolean;
   style?: CSSProperties;
};

export default SmartImageType;

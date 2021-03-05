import { useLayoutEffect, useRef } from 'react';
import createTextMaskInputElement from '../utils/input-masked/create-text-mask-input-element';
import MaskedInputType from '../typings/masked-input';

export default function useMaskedInput(props: MaskedInputType) {
   const {
      guide,
      initialValue,
      inputElement,
      keepCharPositions,
      mask,
      onChange,
      pipe,
      placeholderChar,
      showMask,
   } = props;

   const textMask = useRef(null);

   useLayoutEffect(() => {
      if (!inputElement.current) {
         return;
      }

      textMask.current = createTextMaskInputElement({
         guide,
         inputElement: inputElement.current,
         keepCharPositions,
         mask,
         pipe,
         placeholderChar,
         showMask,
      });

      textMask.current.update(initialValue);
   }, [inputElement, guide, keepCharPositions, mask, pipe, placeholderChar, showMask]);

   return event => {
      if (textMask.current) {
         textMask.current.update();
      }

      if (typeof onChange === 'function') {
         onChange(event);
      }
   };
}

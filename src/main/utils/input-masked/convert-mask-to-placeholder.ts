import { placeholderCharDef } from '../../data/constants';
import isArray from '../is-array';

const emptyArray = [];

export default function convertMaskToPlaceholder(mask = emptyArray, placeholderChar = placeholderCharDef) {
   if (!isArray(mask)) {
      throw new Error(
         'Text-mask:convertMaskToPlaceholder; The mask property must be an array.'
      );
   }

   if (mask.indexOf(placeholderChar) !== -1) {
      throw new Error(
         'Placeholder character must not be used as part of the mask. Please specify a character ' +
         'that is not present in your mask as your placeholder character.\n\n' +
         `The placeholder character that was received is: ${JSON.stringify(placeholderChar)}\n\n` +
         `The mask that was received is: ${JSON.stringify(mask)}`
      );
   }

   return mask.map((char) => {
      return (char instanceof RegExp) ? placeholderChar : char;
   }).join('');
}

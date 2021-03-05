import isString from '../is-string';
import isNumber from '../is-number';

const emptyString = '';

export default function getSafeRawValue(inputValue: any): string {
   if (isString(inputValue)) {
      return inputValue;
   } if (isNumber(inputValue)) {
      return String(inputValue);
   } if (typeof inputValue === 'undefined' || inputValue === null) {
      return emptyString;
   }

   throw new Error(
      'The \'value\' provided to Text Mask needs to be a string or a number. The value '
      + `received was:\n\n ${JSON.stringify(inputValue)}`,
   );
}

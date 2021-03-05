import InputValidationType from '../../typings/input-validation';
import validateIsRequired from './validate-is-required';
import validateMaxChars from './validate-max-chars';
import validateMinChars from './validate-min-chars';
import validateWordsLength from './validate-words-length';

export default function validateInput(s: string, validation: InputValidationType): string {
   let err: string = null;

   if (validation) {
      if (validation.required) {
         err = validateIsRequired(s);
      }

      if (!err && validation.minChars) {
         err = validateMinChars(s, validation.minChars);
      }

      if (!err && validation.maxChars) {
         err = validateMaxChars(s, validation.maxChars);
      }

      if (!err && validation.maxWords) {
         err = validateWordsLength(s, validation.maxWords);
      }

      if (!err && validation.custom) {
         const { fn, params } = validation.custom;
         err = fn(s, params);
      }
   }
   return err;
}

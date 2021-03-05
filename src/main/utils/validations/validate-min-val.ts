import validationDefault from './validation-default';
import ValidationType from '../../typings/validation';

export default function validateMinVal(val: number, minVal: number): ValidationType {
   let result = validationDefault;

   if (val < minVal) {
      result = {
         isValid: false,
         msg: 'недопустимое значение',
      };
   }

   return result;
}

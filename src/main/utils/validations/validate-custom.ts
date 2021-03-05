import validationDefault from './validation-default';
import ValidationType from '../../typings/validation';

export default function validateCustom(v: string, custObj: { f: Function; params: {} }): ValidationType {
   let result = validationDefault;

   if (custObj) {
      const { f, params } = custObj;
      const validationResult = f(v, params);
      const { isValid, msg } = validationResult;

      if (!isValid) {
         result = { isValid, msg };
      }
   }

   return result;
}

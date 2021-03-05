import arrNotEmpty from '../array/array-not-empty';
import undef from '../undef';

export default function validateForm(d: Object, opt?: Array<string>): boolean {

   for (const key in d) {
      if (arrNotEmpty(opt) && opt.every((field) => field !== key)) {
         if (d[key] === '' || undef(d[key]) || d[key] === null) {
            return false;
         }
      } else if (d[key] === '' || undef(d[key]) || d[key] === null) {
         return false;
      }
   }

   return true;
}

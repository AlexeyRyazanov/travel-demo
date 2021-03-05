import undef from '../undef';

export default function arrNotEmptyReturn(a: Array<unknown>): Array<unknown> {
   if (!undef(a) && Array.isArray(a) && a.length !== 0) {
      return a;
   }

   return [];
}

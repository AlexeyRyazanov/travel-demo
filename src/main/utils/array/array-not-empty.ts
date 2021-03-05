import undef from '../undef';

export default function arrNotEmpty(a: Array<any>): boolean {
   if (!undef(a) && Array.isArray(a) && a.length !== 0) {
      return true;
   }
   return false;
}

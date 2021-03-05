import arrNotEmpty from './array-not-empty';

// TODO Simplify this function

export default function arrSortAlphabet(arr: Array<any>, pName?: string, dir: 'asc' | 'desc' = 'asc'): Array<any> {
   if (arrNotEmpty(arr)) {
      if (pName) {
         return arr.slice().sort((a, b) => {

            if (a[pName] > b[pName]) {
               return dir === 'asc' ? 1 : -1;
            }

            if (a[pName] < b[pName]) {
               return dir === 'asc' ? -1 : 1;
            }

            return 0;
         });
      }

      return arr.slice().sort((a, b) => {

         if (a > b) {
            return dir === 'asc' ? 1 : -1;
         }

         if (a < b) {
            return dir === 'asc' ? -1 : 1;
         }

         return 0;
      });
   }

   return [];
}

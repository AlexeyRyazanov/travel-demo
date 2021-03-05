// eslint-disable-next-line import/prefer-default-export
export function bestForLoop() {
   const n = 1000;
   const arr = Array(n).fill(1);
   const result = [];
   const l = arr.length; // get length outside for loop

   for (let i = 0; i < l; i++) {
      if (arr[i] != null) { // check is element is not null  (if required)
         result[i] = arr[i] + i ** 2; // use direct assignment instead of push
      } else {
         result[i] = null;
      }
   }

   return result;
}

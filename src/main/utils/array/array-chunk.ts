export default function arrChunk<T>(a: Array<T>, size: number): Array<Array<T>> {
   const n: Array<Array<T>> = [];
   const l = a.length;

   let x: number;
   let c = -1;

   for (let i = 0; i < l; i += 1) {
      x = i % size;

      if (x === 1) {
         n[c][x] = a[i];
      } else {
         n[c += 1] = [a[i]];
      }
   }

   return n;
}

/* export function array_chunk(myArray, chunk_size) {
   let results = [];

   while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
   }

   return results;
} */

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// var out = arr.map((_, i, a) => a.slice(i * 2, i * 2 + 2)).filter((el) => el.length);
// console.log(out);

export default function formatPrice(x: number | string, sep = ' ', grp = 3): string {
   const sx = `${x}`.split('.');
   let s = '';
   let i = sx[0].length;
   let j;

   while (i > grp) {
      j = i - grp;
      s = sep + sx[0].slice(j, i) + s;
      i = j;
   }
   s = sx[0].slice(0, i) + s;
   sx[0] = s;

   return sx.join('.');
}

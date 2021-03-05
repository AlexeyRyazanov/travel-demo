export default function formatPriceK(x: number): string {
   const val = Math.round(x / 1000);

   if (val < 1) {
      return `${val}`;
   }

   return `${val}k`;
}

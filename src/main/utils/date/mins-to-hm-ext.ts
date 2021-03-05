export default function M2HMext(mins: number): string {
   const m = Math.abs(mins);
   const h = Math.floor(m / 60);
   const mR = m % 60;

   if (mR !== 0 && h !== 0) {
      return `${h}ч ${mR}м`;
   } if (mR === 0) {
      return `${h}ч`;
   }
   return `${mR}м`;

}

export default function validateAge(date: string, minAge: number): string {

   function dateToMilliseconds(date) {
      const dateObj = new Date(date.replace(/\./g, '-'));
      return dateObj.getTime();
   }

   if (!(dateToMilliseconds(date) > Date.now() - minAge * 365 * 24 * 60 * 60 * 1000)) {
      return `вам должно быть больше ${minAge} лет`;
   }
}

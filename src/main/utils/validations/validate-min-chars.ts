export default function validateMinChars(v: string, min: number): string | null {
   if (v.length < min) {
      return `мин. кол-во символов - ${min}`;
   }

   return null;
}

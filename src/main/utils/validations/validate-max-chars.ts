export default function validateMaxChars(v: string, maxChars: number): string | null {
   if (v.length > maxChars) {
      return `макс. кол-во символов - ${maxChars}`;
   }

   return null;
}

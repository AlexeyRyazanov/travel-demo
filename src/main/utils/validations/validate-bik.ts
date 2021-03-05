export default function validateBik(val: string): string {
   if (!val.match(/^04\d+/)) {
      return 'недопустимое значение';
   }
}

export default function validateInn(val: any): string {
   if (val.match(/\D/)) {
      return '';
   }

   // let isValid;
   // let message;

   const inn = val.match(/(\d)/g);

   if (inn.length === 10) {

      if (inn[9] === String(((
         2 * inn[0] + 4 * inn[1] + 10 * inn[2]
         + 3 * inn[3] + 5 * inn[4] + 9 * inn[5]
         + 4 * inn[6] + 6 * inn[7] + 8 * inn[8]
      ) % 11) % 10)) {
         return '';
      }
      return 'недопустимое значение';

   } if (inn.length === 12) {
      if (inn[10] === String(((
         7 * inn[0] + 2 * inn[1] + 4 * inn[2]
         + 10 * inn[3] + 3 * inn[4] + 5 * inn[5]
         + 9 * inn[6] + 4 * inn[7] + 6 * inn[8]
         + 8 * inn[9]
      ) % 11) % 10) && inn[11] === String(((
         3 * inn[0] + 7 * inn[1] + 2 * inn[2]
         + 4 * inn[3] + 10 * inn[4] + 3 * inn[5]
         + 5 * inn[6] + 9 * inn[7] + 4 * inn[8]
         + 6 * inn[9] + 8 * inn[10]
      ) % 11) % 10)) {
         return '';
      }
      return 'недопустимое значение';

   }

   return 'недопустимое значение';
}

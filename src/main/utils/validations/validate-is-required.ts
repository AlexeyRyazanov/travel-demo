import undef from '../undef';

export default function validateIsRequired(v: string): string {
   if (!v || undef(v) || v === '') {
      return 'обязательное поле';
   }

   return null;
}

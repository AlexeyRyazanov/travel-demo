export const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// https://www.w3.org/TR/html5/forms.html#valid-e-mail-address

export default function validateEmail(v: string): string {
   if (!v.match(emailRegExp)) {
      return 'недопустимое значение';
   }

   return null;
}

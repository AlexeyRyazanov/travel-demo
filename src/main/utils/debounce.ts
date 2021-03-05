export default function debounce(callback, delay, context = this): any {
   let timeout = null;
   let callbackArgs = null;

   const later = () => callback.apply(context, callbackArgs);

   return function () {
      callbackArgs = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(later, delay);
   };
}

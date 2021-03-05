import { useState, useCallback, useRef } from 'react';

export default function useHoverRefCallback() {
   const [value, setValue] = useState(false);

   const handleMouseOver = useCallback(() => setValue(true), []);
   const handleMouseOut = useCallback(() => setValue(false), []);

   // Need to use a ref to keep track of the last node passed to the callback ref,
   // so we can remove its event listeners
   const ref = useRef(null);
   // Use a callback ref so we re-add the event listeners even if the
   // node gets unmounted/remounted
   const callbackRef = useCallback(
      (node) => {
         if (ref.current) {
            ref.current.removeEventListener('mouseover', handleMouseOver);
            ref.current.removeEventListener('mouseout', handleMouseOut);
         }

         ref.current = node;

         if (ref.current) {
            ref.current.addEventListener('mouseover', handleMouseOver);
            ref.current.addEventListener('mouseout', handleMouseOut);
         }
      },
      [handleMouseOver, handleMouseOut],
   );

   return [callbackRef, value];
}

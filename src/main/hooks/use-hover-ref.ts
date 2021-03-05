import { useRef, useState, useEffect } from 'react';

export default function useHoverRef() {
   const ref = useRef(null);
   const [value, setValue] = useState(false);

   useEffect(
      () => {
         const mOver = () => setValue(true);
         const mOut = () => setValue(false);

         const node = ref.current;

         if (node) {
            node.addEventListener('mouseover', mOver);
            node.addEventListener('mouseout', mOut);

            return () => {
               node.removeEventListener('mouseover', mOver);
               node.removeEventListener('mouseout', mOut);
            };
         }

         return null;
      }, [ref], // Recall only if ref changes
   );

   return [ref, value];
}

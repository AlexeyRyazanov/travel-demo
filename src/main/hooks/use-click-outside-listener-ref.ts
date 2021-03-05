import {
   MutableRefObject, RefObject, useCallback, useEffect, useRef,
} from 'react';

export default function useClickOutsideListenerRef(onClose: () => void, additionalNode?: RefObject<any>): MutableRefObject<any> {
   const ref = useRef(null);

   const clickListener = useCallback((e: MouseEvent) => {
      if (additionalNode) {
         if (!(ref.current as any).contains(e.target) && additionalNode && !(additionalNode.current as any).contains(e.target)) {
            onClose();
         }
      } else if (!(ref.current as any).contains(e.target)) {
         onClose();
      }
   }, [additionalNode, onClose]);

   useEffect(() => {
      document.addEventListener('click', clickListener);
      return () => {
         document.removeEventListener('click', clickListener);
      };
   }, [clickListener]);

   return ref;
}

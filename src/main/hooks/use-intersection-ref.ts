import 'intersection-observer'; // optional polyfill
import { useEffect, RefObject, useRef } from 'react';

type Props = {
   onChange?: (entry: IntersectionObserverEntry, unobserve?: () => void) => void;
   options?: IntersectionObserverInit;
   triggerAgain?: boolean;
   triggerOnce?: boolean;
}

export default function useIntersectionRef({
   onChange,
   options,
   triggerAgain = true,
   triggerOnce = false
}: Props): RefObject<HTMLDivElement> {

   const { threshold = 0, root = null, rootMargin = '0%' } = { ...options };

   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!ref) {
         return;
      }

      const node = ref.current;

      // check that the element exists, and has not already been triggered
      const observer = new IntersectionObserver((entries, observerInstance) => {
         if (entries[0].isIntersecting && triggerOnce) {
            // if it is update the state, we set triggered as to not re-observe the element
            observerInstance.unobserve(node);
         }
         if (typeof onChange === 'function') {
            onChange(entries[0]);
         }
      }, {
         threshold,
         root,
         rootMargin,
      });

      observer.observe(node);

      return () => {
         observer.unobserve(node);
      };

   }, [onChange, root, rootMargin, threshold, triggerOnce]);


   return ref;
}

import 'intersection-observer'; // optional polyfill
import { useEffect, RefObject } from 'react';

type Props = {
   onChange?: (entry: IntersectionObserverEntry, unobserve?: () => void) => void;
   options?: IntersectionObserverInit;
   ref: RefObject<HTMLDivElement> | null;
   triggerAgain?: boolean;
   triggerOnce?: boolean;
};

export default function useIntersection({
   onChange,
   options,
   ref,
   triggerAgain = true,
   triggerOnce = false,
}: Props): void {

   const { threshold = 0, root = null, rootMargin = '0%' } = { ...options };

   useEffect(() => {
      if (!ref.current) {
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

      // eslint-disable-next-line consistent-return
      return () => {
         observer.unobserve(node);
      };

   }, [onChange, ref, root, rootMargin, threshold, triggerAgain, triggerOnce]);
}

import { useRef, useEffect } from 'react';

type Props = {
   callback: (...args: Array<unknown>) => unknown;
   delay: number;
   trigger?: unknown;
};

export default function useInterval(props: Props): void {
   const {
      callback,
      delay,
      trigger,
   } = props;

   const savedCallback = useRef(null);

   useEffect(() => {
      savedCallback.current = callback;
   }, [callback]);

   useEffect(() => {
      const handler = (...args: Array<unknown>) => savedCallback.current(...args);

      if (delay !== null) {
         const id = setInterval(handler, delay);
         return () => clearInterval(id);
      }

      return null;

   }, [delay, trigger]);
}

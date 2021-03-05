import { RefObject, useEffect, useRef } from 'react';
import on from '../utils/event-on';
import off from '../utils/event-off';

const defaultEvents = ['mousedown', 'touchstart'];

export default function useClickAwayOpened(
   opened: boolean,
   ref: RefObject<HTMLDivElement>,
   onClickAway: (event: KeyboardEvent) => void,
   events: string[] = defaultEvents,
) {
   const savedCallback = useRef(onClickAway);

   useEffect(() => {
      savedCallback.current = onClickAway;
   }, [onClickAway]);

   useEffect(() => {
      const handler = (event) => {
         const { current: el } = ref;

         if (el && !el.contains(event.target)) {
            savedCallback.current(event);
         }
      };

      if (opened) {
         for (const eventName of events) {
            on(document, eventName, handler);
         }

         return () => {
            for (const eventName of events) {
               off(document, eventName, handler);
            }
         };
      }
   }, [opened, events, ref]);
}

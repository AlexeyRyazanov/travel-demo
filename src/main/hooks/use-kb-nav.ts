import { useEffect } from 'react';

type Props = {
   next(): void;
   prev(): void;
};

export default function useKbNav(props: Props): void {
   useEffect(() => {
      const { next, prev } = props;

      const kbNav = (e: KeyboardEvent) => {
         // console.log(e.keyCode);
         switch (e.keyCode) {
            case 39: next(); // arrow right
               break;
            case 37: prev(); // arrow left
               break;
            default:
               break;
         }
      };

      document.addEventListener('keydown', kbNav);

      return () => {
         document.removeEventListener('keydown', kbNav);
      };
   });
}

import { useEffect } from 'react';

type Props = {
   callback(): void;
};

export default function useKbNav(props: Props): void {
   useEffect(() => {
      const { callback } = props;

      const kbNav = (e: KeyboardEvent) => {
         switch (e.keyCode) {
            case 13: callback(); // key enter
               break;
            default:
               break;
         }
      };

      document.addEventListener('keypress', kbNav);

      return () => {
         document.removeEventListener('keypress', kbNav);
      };
   });
}

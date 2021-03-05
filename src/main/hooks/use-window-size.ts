import { useState, useEffect } from 'react';

// Usage
// function App() {
//   const size = useWindowSize();

//   return (
//     <div>
//       {size.width}px / {size.height}px
//     </div>
//   );
// }

const getWidthHeight = () => {
   return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
   };
};

// Hook
export default function useWindowSize(): { width: number; height: number } {
   // Initialize state with undefined width/height so server and client renders match
   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

   const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
   });

   useEffect(() => {
      let timeoutId = null;

      const resizeListener = () => {
         // prevent execution of previous setTimeout
         clearTimeout(timeoutId);
         // change width from the state object after 150 milliseconds
         timeoutId = setTimeout(() => setWindowSize(getWidthHeight()), 150);
      };

      // Add event listener
      window.addEventListener('resize', resizeListener);

      // Call handler right away so state gets updated with initial window size
      resizeListener();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', resizeListener);
   }, []); // Empty array ensures that effect is only run on mount

   return windowSize;
}

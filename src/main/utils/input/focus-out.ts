const lastTabIndex = 10;

export default function focusOut(currentElement: HTMLInputElement) {
   const tabbables: NodeListOf<HTMLInputElement> = document.querySelectorAll('input, textarea, button');
   let curIndex = currentElement.tabIndex; // get current elements tab index

   if (curIndex === lastTabIndex) { // if we are on the last tabindex, go back to the beginning
      curIndex = 0;
   }

   for (let i = 0; i < tabbables.length; i++) { // loop through each element
      if (tabbables[i].tabIndex === (curIndex + 1)) { // check the tabindex to see if it's the element we want
         tabbables[i].focus(); // if it's the one we want, focus it and exit the loop
         break;
      }
   }
}

export function focusOut1() {
   const focussableElements = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';

   if (document.activeElement) {
      const focussable = Array.prototype.filter.call(document.activeElement.querySelectorAll(focussableElements),
         (element) =>
            // check for visibility while always include the current activeElement
            element.getBoundingClientRect().width > 0 || element.getBoundingClientRect().height > 0 || element === document.activeElement);
      const index = focussable.indexOf(document.activeElement);
      if (index > -1) {
         const nextElement = focussable[index + 1] || focussable[0];
         nextElement.focus();
      }
   }
}

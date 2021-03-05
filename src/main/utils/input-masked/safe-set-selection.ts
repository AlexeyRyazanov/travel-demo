export default function safeSetSelection(element: HTMLInputElement, selectionPosition: number) {
   const isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
   const defer = typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : setTimeout;
   const strNone = 'none';

   if (document.activeElement === element) {
      if (isAndroid) {
         defer(() => element.setSelectionRange(selectionPosition, selectionPosition, strNone));
      } else {
         element.setSelectionRange(selectionPosition, selectionPosition, strNone);
      }
   }
}

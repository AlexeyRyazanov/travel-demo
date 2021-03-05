const isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
const strNone = 'none';
const defer = typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame : setTimeout;

export default function safeSetSelection(element, selectionPosition) {
   if (document.activeElement === element) {
      if (isAndroid) {
         defer(() => element.setSelectionRange(selectionPosition, selectionPosition, strNone));
      } else {
         element.setSelectionRange(selectionPosition, selectionPosition, strNone);
      }
   }
}

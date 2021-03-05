export default function uiSetSize(s: 's' | 'm' | 'l'): string {
   switch (s) {
      case 's': return 'px_-1 py_-2';
      case 'm': return 'p_1r';
      case 'l': return 'p_1';
      default: return 'p_1r';
   }
}

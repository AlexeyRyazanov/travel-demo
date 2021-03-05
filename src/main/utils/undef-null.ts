export default function undefNull(v: unknown): boolean {
   return typeof v === 'undefined' && v !== null;
}

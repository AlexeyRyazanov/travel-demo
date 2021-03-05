export default function isNumber(v: unknown): boolean {
   return typeof v === 'number' && !isNaN(v);
}

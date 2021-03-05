export default function isNil(v: unknown): boolean {
   return typeof v === 'undefined' || v === null;
}

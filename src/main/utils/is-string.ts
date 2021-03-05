export default function isString(v: unknown): boolean {
   return typeof v === 'string' || v instanceof String;
}

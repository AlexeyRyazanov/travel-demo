export default function isArray(v: unknown): boolean {
   return (Array.isArray && Array.isArray(v)) || v instanceof Array;
}

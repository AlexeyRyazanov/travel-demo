import { parseISO } from 'date-fns';

export default function dateParse(v: string): Date {
   const a = v.split('.');

   const d = a[0] || '01';
   const m = a[1] || '01';
   const y = a[2] || '2000';

   return parseISO(`${y}-${m}-${d}`);
}

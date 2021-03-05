import {
   addYears,
   differenceInDays,
   isThisYear,
   parseISO,
} from 'date-fns';

export default function daysBeforeDate(date: string): number {
   let days: number;
   const datePlusYear = addYears(parseISO(date), 1);

   if (isThisYear(parseISO(date))) {
      days = differenceInDays(new Date(), parseISO(date));
   } else {
      days = differenceInDays(datePlusYear, new Date());
   }

   return days;
}

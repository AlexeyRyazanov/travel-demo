import { setYear, getYear } from 'date-fns';

export default function getBdFromAge(age: number): Date {
   return setYear(new Date(), getYear(new Date()) - age);
}

import getHours from 'date-fns/getHours';
import parseISO from 'date-fns/parseISO';
import { timeRangeSplitter as spl } from '../../data/constants';

export default function timeRangeGet(time: string): string {
   const h = getHours(parseISO(time));
   let t = '';

   if (h >= 0 && h < 6) {
      t = `0${spl}6`;
   }
   if (h >= 6 && h < 12) {
      t = `6${spl}12`;
   }
   if (h >= 12 && h < 18) {
      t = `12${spl}18`;
   }
   if (h >= 18 && h <= 23) {
      t = `18${spl}24`;
   }

   return t;
};

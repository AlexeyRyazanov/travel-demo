import getHours from 'date-fns/getHours';
import parseISO from 'date-fns/parseISO';
import { timeRangeSplitter } from '../../data/constants';

export default function isTimeInRange(timeRange = `0${timeRangeSplitter}24`, time: string): boolean {
   const arr = timeRange.split(timeRangeSplitter);
   const minHour = parseInt(arr[0] || '0', 10);
   const maxHour = parseInt(arr[1] || '24', 10);
   const curHour = getHours(parseISO(time));

   if (curHour >= minHour && curHour <= maxHour) {
      return true;
   }

   return false;
}

import arrGroupBy from './array/array-group-by';
import arrNotEmpty from './array/array-not-empty';

export default function groupByToArray<T>(arr: Array<T>, property: string): Array<Array<T>> {
   if (arrNotEmpty(arr)) {
      return Object.values(arrGroupBy(arr, property));
   }

   return [[]];
}

import arrNotEmpty from './array-not-empty';

export default function arrTo2dArr(d: Array<any>, prop: string): Array<Array<any>> {
   let a: Array<any> = [];
   const a2: Array<any> = [];

   if (d && arrNotEmpty(d)) {
      a = d.reduce((acc: Array<Array<any>>, cur: Array<any>) => {

         if (acc.every(el => el[prop] !== cur[prop])) {
            a2.push(cur);
         }

         acc.push(a2);

         return acc;
      }, []);
   }

   return a;
}

/* export function groupBy(arr: Array<any>, prop: string): Array<Array<any>> {
   return arr.reduce((acc: Array<any>, obj: Object) => {
      const key = obj[prop];

      if (!acc[key]) {
         acc[key] = [];
      }

      acc[key].push(obj);

      return acc;

   }, {});
} */

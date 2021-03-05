import undef from '../undef';

export default function arrToObj(
   arr: Array<any>,
   key: string | number,
   prop?: string
): Record<number, any> | Record<string, any> {
   return arr.reduce((accObj: Record<number, any> | Record<string, any>, item: any): Record<number, any> | Record<string, any> => {
      const accNew = accObj;

      if (item[key]) {
         if (typeof prop === 'string' && !undef(item[prop])) {
            accNew[item[key]] = item[prop];
         } else {
            accNew[item[key]] = item;
         }
      }

      return accNew;
   }, {});
}

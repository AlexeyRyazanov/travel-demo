export default function arrToObjCovert(
   arr: Array<any>,
   key: string | number,
   converter: Function,
): Record<number, any> | Record<string, any> {

   return arr.reduce((acc: any, cur: any) => {
      if (cur[key]) {
         acc[cur[key]] = typeof converter === 'function' ? converter(cur) : cur;
      }

      return acc;
   }, {});
}

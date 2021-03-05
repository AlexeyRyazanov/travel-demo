export default function arrToObjAssign(arr: Array<any>, key?: string, prop?: string): Record<number, any> | Record<string, any> {
   return Object.assign({},
      ...arr.map((item) => ({
         [item[key]]: item[prop],
      })));
}

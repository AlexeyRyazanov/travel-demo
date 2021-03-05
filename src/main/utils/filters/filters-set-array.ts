export default function setFiltersArray(arr: Array<string | number> = [], val: string | number): Array<string | number> {
   if (arr.includes(val)) {
      arr.splice(arr.indexOf(val), 1);
   } else {
      arr.push(val);
   }

   return arr;
}

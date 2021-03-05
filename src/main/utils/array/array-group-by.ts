export default function arrGroupBy(arr: Array<unknown>, prop: string): unknown {
   return arr.reduce<unknown>((acc, obj: unknown) => {
      const key = obj[prop];

      if (!acc[key]) {
         acc[key] = [];
      }

      acc[key].push(obj);

      return acc;

   }, {});
}

/* Array.prototype.groupBy = function (prop) {
   return this.reduce(function (groups, item) {
      const val = item[prop];

      groups[val] = groups[val] || [];
      groups[val].push(item);

      return groups;
   }, {});
}; */

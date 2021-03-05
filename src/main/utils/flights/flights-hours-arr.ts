export default function flightsHoursArr(range: Array<string>): Array<number> {
   const h: Array<number> = [];

   range.map((timeRange) => {
      const hArr = timeRange.split('-');
      const min = parseInt(hArr[0], 10);
      const max = parseInt(hArr[1], 10);

      for (let i = min; i <= max; i++) {
         h.push(i);
      }

      return null;
   });

   return h;
}

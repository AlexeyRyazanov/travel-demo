import FilterBaseType from '../../typings/filter-base';

export default function filtersCancel(a: Array<FilterBaseType>): Array<FilterBaseType> {
   a.map((el) => {
      if (el.active) {
         return { ...el, active: false };
      }

      return el;
   });

   return a;
}

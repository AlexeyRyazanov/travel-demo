import FilterBaseType from '../../typings/filter-base';

export default function filtersGetCategories(categories: Array<FilterBaseType>): Array<number> {
   return categories.reduce((acc: Array<number>, cur: FilterBaseType): Array<number> => {
      const { active, id } = cur;

      if (active && typeof id === 'number') {
         acc.push(id);
      }

      return acc;
   }, []);
}

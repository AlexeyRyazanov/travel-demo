import FilterBaseType from '../../typings/filter-base';

export default function filtersGetMealTypes(mealTypes: Array<FilterBaseType>): Array<string> {
   return mealTypes.reduce((acc: Array<string>, cur: FilterBaseType): Array<string> => {
      const { active, id } = cur;

      if (active && typeof id === 'string') {
         acc.push(id);
      }

      return acc;
   }, []);
}

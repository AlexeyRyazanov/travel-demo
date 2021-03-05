import FilterBaseType from '../../typings/filter-base';

export default function filtersGetStars(stars: Array<FilterBaseType>): Array<number> {
   return stars.reduce((acc: Array<number>, cur: FilterBaseType): Array<number> => {
      const { active, id } = cur;

      if (active && typeof id === 'number') {
         acc.push(id);
      }

      return acc;
   }, []);
}

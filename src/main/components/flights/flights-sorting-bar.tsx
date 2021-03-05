import { memo } from 'react';
import { sortingClass } from '../../data/styles';
import FlightsSorting from './flights-sorting';
import SortKeys from '../../data/sort-keys';

export default memo(function FlightsSortingBar(): JSX.Element {
   return (
      <div className="row ai_c">
         <div className="semibold icon icon_sorting mt_1-2r mb_1-2r mr_-1">Сортировка</div>
         <div className={sortingClass}>
            <FlightsSorting
               sKey={SortKeys.price}
               label="Цена"
            />
         </div>
         <div className={sortingClass}>
            <FlightsSorting
               sKey={SortKeys.duration}
               label="В пути"
            />
         </div>
      </div>
   );
});

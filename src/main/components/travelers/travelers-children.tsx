import { childrenMaxCount, childrenMinCount } from '../../data/constants';
import TravelersChildList from './travelers-child-list';

type Props = {
   // store?: Store;
};

export default function TravelersChildren(props: Props): JSX.Element {
   // const { store } = props;
   // const { searchBar } = store;
   // const { childBirthDates, childChange } = searchBar;
   // const counter = childBirthDates.length;

   return (
      <div className="relative row ai_c">
         <div className="row nowrap w_100p jc_sb">
            <div className="mr_1r semibold icon icon_children">Дети</div>
            {/* <Counter
               count={counter}
               hChange={childChange}
               maxVal={childrenMaxCount}
               minVal={childrenMinCount}
            /> */}
         </div>
         {/* { */}
         {/* childBirthDates.length > 0 && */}
         <div className="mt_1r">
            <div className="lh_15 fs_0875">
               Укажите даты рождения детей
               {' '}
               <span className="semibold">для точного расчета цены</span>
            </div>
            {/* <TravelersChildList d={childBirthDates} /> */}
         </div>
         {/* } */}
      </div>
   );
}

import { ReactNode } from 'react';
import arrNotEmpty from '../../utils/array/array-not-empty';
import DropdownItem from './dropdown-item';

type Props = {
   hClick(v: number): void;
   list: Array<string | ReactNode>;
   selectedIndex?: number;
};

export default function DropdownItemsList(props: Props): JSX.Element {
   const {
      hClick,
      list,
      selectedIndex,
   } = props;

   // TODO Remove // eslint-disable-next-line react/no-array-index-key

   return (
      <div className="col z1 br_2">
         {
            arrNotEmpty(list)
            && list.map((listItem, index) => (
               <DropdownItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  listItem={listItem}
                  index={index}
                  selected={selectedIndex === index}
                  hClick={hClick}
               />
            ))
         }
      </div>
   );
}

DropdownItemsList.defaultProps = {
   selectedIndex: 0,
};

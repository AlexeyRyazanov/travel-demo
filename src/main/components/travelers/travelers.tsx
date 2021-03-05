import { useState, useRef, RefObject } from 'react';
import TravelersAdults from './travelers-adults';
import TravelersChildren from './travelers-children';
import useClickAwayOpened from '../../hooks/use-click-away-opened';
import IconClose from '../icons/icon-close';

type Props = {
   // store?: Store;
};

export default function Travelers(props: Props): JSX.Element {
   // const { adultCount, childBirthDates } = props.store.searchBar;

   const [opened, openedSet] = useState(false);
   const ref: RefObject<HTMLDivElement | null> = useRef(null);

   const onClose = () => openedSet(false);
   const onOpen = (): void => openedSet(true);
   const onToggle = () => openedSet(!opened);

   // useClickAwayOpened(opened, ref, _close);

   // TODO Create separated TravelersView component

   return (
      <div className="relative" ref={ref}>
         <div className="px_1r py_-1 lh_13 cur_p" onClick={onToggle}>
            <div className="c_125">Туристы</div>
            <div className="row nowrap mt_-2">
               {/* <div className="w_2_5r semibold c_main mr_1r icon icon_adults">{adultCount}</div> */}
               {/* <div className="w_2_5r semibold c_main icon icon_children">{childBirthDates.length}</div> */}
            </div>
         </div>
         {
            opened
            && (
               <div className="absolute t_100p z0 boxsh_3 br_2 bg_white ">
                  <div className="row jc_sb nowrap px_1r py_-1 bg_245 lh_13 br_5500">
                     <div className="semibold c_main">Туристы</div>
                     <IconClose hClick={onClose} />
                  </div>
                  <div className="p_1r">
                     <TravelersAdults />
                     <div className="mt_1r">
                        <TravelersChildren />
                     </div>
                  </div>
               </div>
            )
         }
      </div>
   );
}

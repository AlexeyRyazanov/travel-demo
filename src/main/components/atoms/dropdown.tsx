import {
   useState, useRef, RefObject, ReactNode,
} from 'react';
import DropdownItemsList from './dropdown-items-list';
import ErrorBoundary from '../error-boundary';
import IconExpand from '../icons/icon-expand';
import useClickAwayOpened from '../../hooks/use-click-away-opened';

type Props = {
   cls?: string;
   clsInput?: string;
   clsVal?: string;
   hSelect(i: number): void;
   label?: string;
   list: Array<string | ReactNode>;
   placeholder?: string | ReactNode;
   selectedIndex?: number;
   size?: string;
};

export default function Dropdown(props: Props): JSX.Element {
   const {
      cls,
      clsVal,
      hSelect,
      label,
      list,
      placeholder,
      selectedIndex,
   } = props;

   const [opened, setOpened] = useState(false);
   const value = list[selectedIndex];

   const hClose = () => setOpened(false);

   const handleSelect = (i: number) => {
      hSelect(i);
      hClose();
   };

   const ref: RefObject<HTMLDivElement | null> = useRef(null);

   const onClick = () => {
      if (list.length > 0) {
         if (!opened) {
            setOpened(true);
         } else if (opened) {
            hClose();
         }
      }
   };

   // TODO Add scroll to selected element when user opens dropdown list

   useClickAwayOpened(opened, ref, hClose);

   return (
      <ErrorBoundary>
         <div className={`relative cur_p ${cls || ''}`} ref={ref}>
            {
               label
               && <div className="c_75 text-overflow-ellipsis usn">{label}</div>
            }
            <button className={`row w_100p jc_sb ai_c semibold usn ${clsVal || 'py_-2 lh_13 bb_1s215'}`} onClick={onClick} type="button">
               {
                  list && list[selectedIndex]
                     ? <span>{value}</span>
                     : <span>{placeholder || 'Выберите опцию'}</span>
               }
               <IconExpand expanded={opened} flat />
            </button>
            <div className="absolute oy_s maxh_16r w_100p boxsh_3 z1 will-change_t bg_250 br_0022 t_100p">
               <DropdownItemsList
                  hClick={handleSelect}
                  list={list}
                  selectedIndex={selectedIndex}
               />
            </div>
         </div>
      </ErrorBoundary>
   );
}

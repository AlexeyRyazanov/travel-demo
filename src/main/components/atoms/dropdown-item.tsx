import { ReactNode } from 'react';

type Props = {
   hClick(v: number): void;
   index: number;
   listItem: string | number | ReactNode;
   selected: boolean;
};

export default function DropdownItem(props: Props): JSX.Element {
   const {
      hClick,
      index,
      listItem,
      selected,
   } = props;

   const onClick = () => hClick(index);

   return (
      <button className={`relative trans_03 h--c_main h--bg_white p_1r bg_250 bt_1s215 ${selected ? 'c_main' : ''}`} onClick={onClick} type="button">
         <span className="relative z1 lh_12">{listItem}</span>
         <span className={`z0 bg_235 br_2 trans_03 ${selected ? 'op_1 scale_1' : 'op_0 scale_0'}`} />
      </button>
   );
}

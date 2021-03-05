import './checkbox.scss';
import { ReactNode } from 'react';
import undef from '../../utils/undef';

type Props = {
   cls?: string;
   disabled?: boolean;
   hSelect?: Function;
   id: string | number;
   label?: string;
   labelNode?: ReactNode;
   selected: boolean;
   selectedPartial?: boolean;
};

export default function Checkbox(props: Props): JSX.Element {
   const {
      // selectedPartial,
      cls,
      disabled,
      hSelect,
      id,
      label,
      labelNode,
      selected,
   } = props;

   // NOTE Wrap Checkbox with wrapper component (aka react's composition)

   // TODO Add partial selection with gray fill instead of main color
   // TODO Checkbox make customElement as child using props.children
   // TODO Improve this mess below for more clear usage

   const onClick = (): void => {
      if (!disabled && typeof hSelect === 'function' && !undef(id)) {
         hSelect(id, !selected);
      }
   };

   const customEl = labelNode || <span>&nbsp;</span>;

   return (
      <button className={`Checkbox row nowrap cur_p usn ai_c !trans_03 ${disabled ? 'disabled' : ''} ${cls || ''} ${selected ? 'c_main' : 'op_075 h--op_1'}`} onClick={onClick} type="button" tabIndex={0}>
         <span className={`relative wh_16px mr_-1 br_2 trans_03 ${selected ? 'bg_main b_1smain i_activeW' : 'b_1s100'}`}>
            <svg viewBox="0 0 16 16">
               <polyline className={`${selected ? 's' : 'i_transparent'}`} points="13 3 8 13 3 8" />
            </svg>
         </span>
         {
            label
               ? <span className="lh_13">{label}</span>
               : customEl
         }
      </button>
   );
}

import { ReactNode, useState } from 'react';
import uiSetSize from '../../utils/ui-set-size';

type Props = {
   cls?: string;
   clsLabel?: string;
   color?: 'accent' | 'white';
   disabled?: boolean;
   hClick?: Function;
   hClickArg?: any;
   icon?: string;
   iconAfter?: string;
   label?: string | ReactNode;
   size?: 's' | 'm' | 'l';
   spinner?: boolean;
};

export default function Button(props: Props): JSX.Element {
   const {
      cls,
      clsLabel,
      color,
      disabled,
      hClick,
      hClickArg,
      icon,
      iconAfter,
      label,
      size,
      spinner,
   } = props;

   const [process, setProcess] = useState(false);

   const onClick = async () => {
      if (typeof hClick === 'function' && !disabled) {
         if (spinner) {
            setProcess(true);
         }

         await hClick(hClickArg);

         // TODO Improve this part by aborting pending request and setProcess un case of unmounting

         if (spinner && setProcess) {
            setProcess(false);
         }
      }
   };

   const ariaLabel = typeof label === 'string' ? label : '';
   const sizeCls = size ? uiSetSize(size) : 'px_1r py_-1';

   return (
      <button
         className={`row ai_c trans_03 semibold nowrap boxsh_xs h--boxsh_2 a--boxsh_xs usn br_2 h--y_-1 !a--y_1 ${color === 'accent' ? 'c_white bg_main h--bg_main-light' : 'c_main bg_250 h--bg_white'} ${cls || ''} ${sizeCls || ''} ${disabled ? 'op_03 c_white bg_125 no-events' : ''}`}
         onClick={onClick}
         disabled={disabled}
         aria-label={ariaLabel}
         type="button"
      >
         {
            icon
            && <span className={`wh_18px icon_${icon} ${spinner && process ? 'Button-Icon_hide' : ''} ${!label ? 'p_0' : 'mr_-1'}`} />
         }
         {
            label
            && <span className={`lh_13 usn ${clsLabel || ''}`}>{label}</span>
         }
         {
            iconAfter
            && <span className={`wh_18px ml_-1 icon_${iconAfter}`} />
         }
      </button>
   );
}

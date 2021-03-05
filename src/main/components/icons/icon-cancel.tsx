import './icon-cancel.scss';
import undef from '../../utils/undef';

const classNames = require('classnames');

type Props = {
   cls?: string;
   disabled?: boolean;
   hClick?(): void;
};

export default function IconCancel(props: Props): JSX.Element {
   const {
      cls,
      disabled,
      hClick,
   } = props;

   const onClick = async () => {
      if (!undef(hClick) && !disabled) {
         await hClick();
      }
   };

   const className = classNames({
      'IconCancel Button': true,
      Icon_isDisabled: disabled,
   });

   return (
      <button type="button" className={`${className} ${cls || ''}`} onClick={onClick}>
         <svg viewBox="0 0 18 18" className="wh_18px">
            <circle className="s" cx="9" cy="9" r="5" />
            <line className="s" x1="6" y1="12" x2="12" y2="6" />
         </svg>
      </button>
   );
}

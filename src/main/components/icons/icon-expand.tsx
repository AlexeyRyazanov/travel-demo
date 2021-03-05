import { cardStyleXs } from '../../data/styles';
import useHover from '../../hooks/use-hover';

type Props = {
   cls?: string;
   expanded: boolean;
   flat?: boolean;
   hClick?(): void;
};

export default function IconExpand(props: Props): JSX.Element {
   const {
      cls,
      expanded,
      flat,
      hClick,
   } = props;

   const onClick = () => {
      if (typeof hClick === 'function') {
         hClick();
      }
   };

   const { hovered, binder } = useHover();

   return (
      <button type="button" aria-label="Expand" className={`IconExpand w_22px h_22px rounded flex_center cur_p ${!flat ? cardStyleXs : ''} ${cls || ''}`} onClick={onClick} {...binder} tabIndex={0}>
         <svg viewBox="0 0 12 12" className={`wh_12px trans_03 ${expanded ? 'rotx_-180' : 'rotx_0'}`}>
            <polyline className={`trans_03 s ${hovered ? 's_main' : 's_100'}`} points="2 5 6 9 10 5" />
         </svg>
      </button>
   );
}

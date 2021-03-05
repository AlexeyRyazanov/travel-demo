import './sorting.scss';

type Props = {
   active?: boolean;
   cls?: string;
   hSort(): void;
   label?: string;
   order: 'asc' | 'desc';
};

export default function Sorting(props: Props): JSX.Element {
   const {
      active,
      cls,
      hSort,
      label,
      order,
   } = props;

   return (
      <button type="button" className={`cur_p trans_03 row nowrap ai_c ${active ? 'Sorting_isActive c_main' : 'c_100 h--c_25'} ${cls || ''}`} onClick={hSort}>
         <span className={`Sorting-Icon ${active && order === 'asc' ? 'Sorting-Icon_asc' : 'Sorting-Icon_desc'}`} />
         <span className="ml_-2 semibold">{label}</span>
      </button>
   );
}

Sorting.defaultProps = {
   active: false,
   cls: '',
   label: '',
};

import RadioGroupOptionType from '../../typings/radio-group-option';
import arrNotEmpty from '../../utils/array/array-not-empty';

type Props = {
   hSelect(pName: string, v: string): void;
   options: Array<RadioGroupOptionType>;
   pName: string;
   row?: boolean;
   selected: string;
};

export default function RadioGroup(props: Props): JSX.Element {
   const {
      hSelect,
      options,
      pName,
      row,
      selected,
   } = props;

   return (
      <div className={`RadioGroup ${row ? 'row' : 'col'}`}>
         {
            arrNotEmpty(options)
            && options.map((i) => {
               const { value, title } = i;
               const isSelected = selected === value;

               return (
                  <button key={value} className="row ai_c p_1-2r cur_p" onClick={() => hSelect(pName, value)} type="button">
                     <span className={`flex_center bs_bb trans_03 ${isSelected ? 'b_1smain' : 'b_1s100 h--b_1smain'} circ_18px mr_-1 trans_03`}>
                        <span className={`circ_12px bg_main trans_03 scale_${isSelected ? '1' : '0'}`} />
                     </span>
                     <span className={`semibold trans_03 ${isSelected ? 'c_main' : 'h--c_main'}`}>{title}</span>
                  </button>
               );
            })
         }
      </div>
   );
}

RadioGroup.defaultProps = {
   row: false,
};

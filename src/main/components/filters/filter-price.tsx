import FiltersKeys from '../../data/filters-keys';
import Input from '../atoms/input';

type Props = {
   hFilter(pName: FiltersKeys, value: string): void;
   max: number;
   min: number;
};

export function formatNumber(v: string): string {
   return v.replace(/\D/g, '');
}

export default function FilterPrice(props: Props): JSX.Element {
   const {
      hFilter,
      max,
      min,
   } = props;

   return (
      <div className="row nowrap">
         <Input
            clsCont="px_1r py_-1"
            clsInput="monobold"
            format={formatNumber}
            hBlur={hFilter}
            label="Цена от"
            pName={FiltersKeys.priceMin}
            pVal={min.toString()}
         />
         <Input
            clsCont="px_1r"
            clsInput="monobold"
            format={formatNumber}
            hBlur={hFilter}
            label="Цена до"
            pName={FiltersKeys.priceMax}
            pVal={max.toString()}
         />
      </div>
   );
}

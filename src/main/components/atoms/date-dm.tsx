import { parseISO } from 'date-fns';
import format from 'date-fns/format';

type Props = { date: string };

export default function DateDM({ date }: Props): JSX.Element {
   return (
      <div className="DateDM ai_b row nowrap monobold">
         {format(parseISO(date), 'dd')}
         .
         {format(parseISO(date), 'MM')}
      </div>
   );
}

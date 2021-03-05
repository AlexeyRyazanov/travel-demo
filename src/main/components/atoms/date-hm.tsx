import { parseISO } from 'date-fns';
import format from 'date-fns/format';

export default function DateHM({ date }: { date: string }): JSX.Element {
   return (
      <div className="row nowrap ai_b monobold">
         {format(parseISO(date), 'HH')}
         :
         {format(parseISO(date), 'mm')}
      </div>
   );
}

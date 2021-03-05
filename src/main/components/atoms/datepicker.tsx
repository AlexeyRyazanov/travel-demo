import './datepicker.scss';
import { format, parseISO } from 'date-fns';
import {
   useRef, useState, useEffect, RefObject, useCallback,
} from 'react';
import { dateFormat, DatepickerView, dateViewDMY } from '../../data/constants';

const $ = require('jquery');
const datepicker = require('air-datepicker');

type Props = {
   cls?: string;
   clsInput?: string;
   disabled?: boolean;
   hClick?: Function; // TODO Add types instead of Funtion
   hSelect?: Function;
   label?: string;
   maxDate?: Date;
   minDate?: Date;
   plh?: string;
   pName?: string;
   pVal?: string;
   view?: 'days' | 'months' | 'years';
};

export default function Datepicker(props: Props): JSX.Element {
   const {
      cls,
      clsInput,
      disabled,
      hSelect,
      label,
      maxDate,
      minDate,
      // plh,
      pName,
      pVal,
      view,
   } = props;

   const [datepickerEl, setDatepickerEl] = useState(null);
   const inputRef: RefObject<HTMLInputElement | null> = useRef(null);

   const onSetUp = useCallback((date: Date) => {
      let d: string | Date;

      if (date) {
         d = format(date, dateFormat);
      } else {
         d = '';
      }

      if (typeof hSelect === 'function' && disabled !== true) {
         if (datepickerEl) {
            datepickerEl.selectDate(d);
         }
         if (pName) {
            hSelect(pName, d);
         } else {
            hSelect(d);
         }
      }
   }, [datepickerEl, disabled, hSelect, pName]);

   useEffect(() => {
      const el = $(inputRef.current).datepicker({
         minDate: minDate || null,
         maxDate: maxDate || null,
         autoClose: true,
         toggleSelected: false,
         // timepicker: true,
         view: view || DatepickerView.days,
         onSelect: (formattedDate, date) => onSetUp(date),
      }).data('datepicker');

      if (pVal) {
         el.selectDate(new Date(pVal));
      }

      setDatepickerEl(el);
   }, [pVal, minDate, maxDate, view, onSetUp]);

   const onClick = () => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
   };

   const value = format(parseISO(pVal), dateViewDMY) !== 'Invalid Date' ? format(parseISO(pVal), dateViewDMY) : '';

   return (
      <div className={`Datepicker col lh_13 cur_t ${cls || ''}`} onClick={onClick} onFocus={onClick} role="button" tabIndex={0}>
         {
            label
            && <div className="c_125 text-overflow-ellipsis usn mb_-2">{label}</div>
         }
         <input
            autoComplete="off"
            className={`semibold ${clsInput || ''}`}
            disabled={disabled}
            onChange={() => { }}
            ref={inputRef}
            tabIndex={0}
            type="text"
            value={value}
         />
      </div>
   );
}

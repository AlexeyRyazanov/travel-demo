import './datepicker.scss';
import {
   useRef, useState, useEffect, RefObject, ChangeEvent,
} from 'react';
import {
   addYears,
   format,
   isValid,
   isWithinInterval,
} from 'date-fns';
import createAutoCorrectedDatePipe from '../../utils/input-masked/create-auto-corrected-date-pipe';
import dateParse from '../../utils/validations/date-parse';
import useMaskedInput from '../../hooks/use-masked-input';

import {
   dateFormat,
   DatepickerView,
   dateViewDMY,
   placeholderCharDef,
   yearsRange,
} from '../../data/constants';

const $ = require('jquery');
const classNames = require('classnames');
const datepicker = require('air-datepicker');

const dateCorrected = createAutoCorrectedDatePipe(dateViewDMY.toLowerCase(), yearsRange);

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

export default function DatepickerEditable(props: Props): JSX.Element {
   const {
      cls,
      clsInput,
      disabled,
      hSelect,
      label,
      maxDate,
      minDate,
      plh,
      pName,
      pVal,
      view,
   } = props;

   const [datepickerEl, setDatepickerEl] = useState(null);
   const [err, setErr] = useState('');
   const inputRef: RefObject<HTMLInputElement | null> = useRef(null);

   const _setUp = (date: Date) => {
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
   };

   const _init = () => {
      const el = $(inputRef.current).datepicker({
         minDate: minDate || null,
         maxDate: maxDate || null,
         autoClose: true,
         toggleSelected: false,
         // timepicker: true,
         view: view || DatepickerView.days,
         onSelect: (formattedDate, date) => _setUp(date),
      }).data('datepicker');

      if (pVal) {
         el.selectDate(new Date(pVal));
      }

      setDatepickerEl(el);
   };

   useEffect(() => {
      _init();
   }, []);

   useEffect(() => {
      if (pVal && datepickerEl) {
         datepickerEl.selectDate(new Date(pVal));
      }
   }, [pVal]);

   const onClick = () => {
      setErr('');
      if (inputRef.current) {
         inputRef.current.focus();
         inputRef.current.select();
      }
   };

   // TODO Fix TypeError: Cannot read property 'length' of undefined in case when user selects 1899 year using calendar

   const _change = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled !== true) {
         let newVal: Date = null;
         let errVal = '';
         const val = e.target.value;

         if (!val.includes(placeholderCharDef)) {
            const dateParsed = dateParse(val);
            const dateMin = minDate || null;
            const dateMax = maxDate || addYears(new Date(), 50);
            const inRange = isWithinInterval(dateParsed, { start: dateMin, end: dateMax });

            if (isValid(dateParsed) && inRange) {
               newVal = dateParsed;
            } else if (!inRange && dateMin && dateMax) {
               errVal = `От ${format(dateMin, dateViewDMY)} до ${format(dateMax, dateViewDMY)}`;
            }
         }

         setErr(errVal);
         _setUp(newVal);
      } else {
         e.preventDefault();

      }
   };

   const _changeMasked = useMaskedInput({
      guide: true,
      inputElement: inputRef,
      keepCharPositions: true,
      mask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],
      onChange: _change,
      pipe: dateCorrected,
      placeholderChar: placeholderCharDef,
      showMask: true,
   });

   return (
      <div className={`Datepicker col lh_13 cur_t ${cls || ''}`} onClick={onClick} onFocus={onClick}>
         {
            label
            && <div className={`c_75 text-overflow-ellipsis usn ${err ? 'c_red' : ''}`}>{label}</div>
         }
         <input
            className={`mt_-1 monobold ${clsInput || ''}`}
            autoComplete="off"
            disabled={disabled}
            onChange={_changeMasked}
            ref={inputRef}
            tabIndex={0}
            type="text"
         />
      </div>
   );
}

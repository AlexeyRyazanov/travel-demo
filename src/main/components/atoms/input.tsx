import './input.scss';
import {
   useState, useRef, useEffect, RefObject, ChangeEvent, useCallback,
} from 'react';
import undef from '../../utils/undef';
import validateInput from '../../utils/validations/validate-input';
import InputValidationType from '../../typings/input-validation';

type Props = {
   clsCont?: string;
   clsError?: string;
   clsInput?: string;
   disabled?: boolean;
   focused?: boolean;
   format?(v: string): string;
   hBlur?(pName: string, val: string): void;
   hChange?(pName: string, val: string): void;
   hClick?(): void;
   hFocus?(): void;
   label?: string;
   plh?: string;
   pName: string;
   pVal?: string;
   textTransform?(v: string): string;
   type?: string;
   validation?: InputValidationType;
   valMin?: string;
};

export default function Input(props: Props) {
   const {
      clsCont,
      clsInput,
      // disabled,
      focused,
      format,
      hBlur,
      hClick,
      label,
      plh,
      pName,
      pVal,
      textTransform,
      type,
      validation,
   } = props;

   const [err, setErr] = useState<string | null>(null);
   const [valid, setValid] = useState<boolean | null>(null);
   const [value, setValue] = useState<string>(!undef(pVal) ? pVal : '');

   const inputRef: RefObject<HTMLInputElement | null> = useRef(null);

   const setUp = useCallback((err: string = null): void => {
      console.log(err);

      if (hBlur) {
         if (!err) {
            hBlur(pName, value);
         } else {
            hBlur(pName, '');
         }
      }
   }, [hBlur, pName, value]);

   /* useEffect(() => {
      const err = validateInput(value, validation);

      if (err) {
         setValid(false);
      } else {
         setValid(true);
      }
   }, [pVal]); */

   const onChange = (ev: ChangeEvent<HTMLInputElement>): void => {
      const { value } = ev.target;
      const valueFormatted = format ? format(value) : value;
      const valueTransformed = textTransform ? textTransform(valueFormatted) : valueFormatted;

      const err = validateInput(value, validation);
      // setErr(err);

      if (err) {
         setValid(false);
      } else {
         setValid(true);
      }

      setValue(valueTransformed);
      setUp(validateInput(value, validation));
   };

   const onClick = (): void => {
      setErr(null);
      inputRef.current.focus();

      if (typeof hClick === 'function') {
         hClick();
      }
   };

   // TODO Change EventListener for Enter key press to avoid error in console

   const onKeyEnter = (e: KeyboardEvent): void => {
      // console.log(e.keyCode);
      switch (e.keyCode) {
         case 13:
            inputRef.current.blur();
            break;
         default:
            break;
      }
   };

   const onFocus = useCallback((): void => {
      document.addEventListener('keydown', onKeyEnter, false);
   }, []);

   const onBlur = useCallback((): void => {
      document.removeEventListener('keydown', onKeyEnter, false);
      setErr(validateInput(value, validation));
      setUp(validateInput(value, validation));
   }, [setUp, validation, value]);

   useEffect(() => {
      if (focused) {
         onFocus();
         onBlur();
      }
   }, [onBlur, onFocus, focused]);

   const labelText = label && validation && validation.required ? `${label} *` : label;

   return (
      <div className={`Input relative col lh_13 bg_white b_1s230 br_2 px_1r py_-1 o_h ${clsCont || ''}`} onClick={onClick} tabIndex={0}>
         {
            label
            && <div className="fs_0875 c_125 text-overflow-ellipsis usn mb_-2">{labelText}</div>
         }
         <div className={`lh_13 ${clsInput || ''}`}>
            {
               err
               && (
                  <div className="Input-Error px_1r mb_-1 z1">
                     {err}
                  </div>
               )
            }
            <input
               onBlur={onBlur}
               onChange={onChange}
               onFocus={onFocus}
               placeholder={plh}
               ref={inputRef}
               tabIndex={0}
               type={type || 'text'}
               value={value}
            />
         </div>
         <div className={`absolute b_0 l_0 r_0 h_1px bg_main z1 trans_03 origin_0_50 ${valid ? 'scaleX_1' : 'scaleX_0'}`} />
         <div className={`absolute b_0 l_0 r_0 h_1px bg_red z1 trans_03 origin_0_50 ${err ? 'scaleX_1' : 'scaleX_0'}`} />
         <div className="absolute b_0 l_0 r_0 h_1px bg_215" />
      </div>
   );
}

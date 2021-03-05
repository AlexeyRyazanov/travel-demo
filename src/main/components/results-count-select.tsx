import { useEffect, useState } from 'react';
import { rowsDef, RowsType, searchRows } from '../data/constants';
import arrNotEmpty from '../utils/array/array-not-empty';

type Props = {
   setRowsParent(v: RowsType): void;
};

export default function ResultsCountSelect({ setRowsParent }: Props): JSX.Element {
   const [rows, setRows] = useState(rowsDef);

   useEffect(() => {
      setRowsParent(rows);
   }, [rows, setRowsParent]);

   const list = arrNotEmpty(searchRows) ? searchRows.filter((el) => el <= 100) : [];

   return (
      <div className="row">
         <div className="py_1-2r semibold icon icon_view">
            <div className="mr_-1">Показывать</div>
            <div className="row nowrap ai_c">
               <div className="row nowrap ai_c monobold lh_12 boxsh_xs br_2 o_h">
                  {
                     list.length > 1
                     && list.map((el, i) => {
                        const cls = `p_-2 trans_03 lh_13 flex_center ${(el === rows ? 'c_white no-events bg_main' : 'cur_p c_100 h--bg_white h--c_main bg_248')} ${(i < list.length - 1 ? 'br_1s235 ' : '')}`;

                        return (
                           <button key={el} type="button" className={cls} onClick={() => setRows(el)}>
                              <span className="mt_1px">{el}</span>
                           </button>
                        );
                     })
                  }
               </div>
            </div>
         </div>
      </div>
   );
}

type Props = {
   cls?: string;
   count: number;
   hChange(v: number): void;
   icon?: string;
   label?: string;
   maxVal?: number;
   minVal?: number;
};

export default function Counter(props: Props): JSX.Element {
   const {
      cls,
      count,
      hChange,
      icon,
      label,
      maxVal = 9999,
      minVal = 0,
   } = props;

   const hPlus = () => {
      let newVal = count;

      if (count < maxVal) {
         newVal += 1;
         hChange(newVal);
      }
   };

   const hMinus = () => {
      let newVal = count;

      if (count > minVal) {
         newVal -= 1;
         hChange(newVal);
      }
   };

   const c = 'w_1 h_1 ta_c br_2 p_-3 trans_02';
   const cDis = 'disabled boxsh_op0 bg_215';
   const cEn = 'boxsh_xs cur_p bg_250 h--bg_main h--c_white h--boxsh_2 h--y_-1 a--y_1';

   return (
      <div className={`row usn ai_c ${cls || ''}`}>
         {
            label
            && <div className={`mr_-1 semibold ${icon ? `icon icon_${icon}` : ''}`}>{label}</div>
         }
         <div className="row nowrap semibold">
            <button className={`${c} ${count === minVal ? cDis : cEn}`} onClick={hMinus} type="button">-</button>
            <div className="Counter-Val flex_center w_2r c_main">{count}</div>
            <button className={`${c} ${count === maxVal ? cDis : cEn}`} onClick={hPlus} type="button">+</button>
         </div>
      </div>
   );
}

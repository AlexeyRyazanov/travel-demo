type Props = {
   hClick(d: any): void;
   selected: boolean;
};

export default function IconFav(props: Props): JSX.Element {
   const { hClick, selected } = props;

   return (
      <div className={`p_-1 cur_p rounded bg_245 boxsh_1 trans_03 h--boxsh_2 a--boxsh_1 h--y_-1 a--y_1 ${selected ? 'i_b' : ''}`} onClick={hClick}>
         <div className="wh_18px">
            <svg viewBox="0 0 18 18" className="mt_1px">
               <path className={`${selected ? 'f s' : 's s_main'}`} d="M9,17.00021l-.28235-.26936C2.64706,11.07428,1,9.23232,1,6,1,3.3064,2.64706,1.00021,5,1.00021,6.92941,1.00021,8.24706,3.0303,9,4c.75294-.9697,2.07059-2.99979,4-2.99979,2.35294,0,4,2.30619,4,4.99979,0,3.23232-1.64706,5.07428-7.71765,10.73085Z" />
            </svg>
         </div>
         {/* <svg viewBox="0 0 18 18">
            <polygon className="icon_fillG" points="9 13 4 17 6 11 1 7 7 7 9 1 11 7 17 7 12 11 14 17 9 13" />
         </svg> */}
      </div>
   );
}

export default function FlightsSearchPanel(): JSX.Element {
   return (
      <div id="FlightsSearchPanel" className="row w_100p bg_252 boxsh_3 br_2">
         <div className="w_16p -l-w_33p col !b_collapse_2-235 br_2s235 px_-1 py_-2 semibold">
            <div className="fs_0875 icon icon_flightOut op_05 mb_-3">Откуда</div>
            <div>Берлин, BER-1</div>
         </div>
         <div className="w_16p -l-w_33p col !b_collapse_2-235 br_2s235 px_-1 py_-2 semibold">
            <div className="fs_0875 icon icon_flightOut op_05 mb_-3">Куда</div>
            <div>Гавана, HAV-3</div>
         </div>
         <div className="w_16p -l-w_33p col !b_collapse_2-235 br_2s235 px_-1 py_-2 semibold">
            <div className="fs_0875 icon icon_adults op_05 mb_-3">Пассажиры</div>
            <div>1&nbsp;чел., эконом</div>
         </div>
         <div className="w_16p -l-w_33p col !b_collapse_2-235 br_2s235 px_-1 py_-2 semibold">
            <div className="fs_0875 icon icon_dateStart op_05 mb_-3">Туда</div>
            <div>14 января, чт</div>
         </div>
         <div className="w_16p -l-w_33p col !b_collapse_2-235 br_2s235 px_-1 py_-2 semibold">
            <div className="fs_0875 icon icon_dateEnd op_05 mb_-3">Обратно</div>
            <div>28 января, чт</div>
         </div>
         <div className="w_16p -l-w_33p flex_center !b_collapse_2-235 px_-1 py_-2 semibold ">
            <div className="icon icon_search">Поиск</div>
         </div>

         {/* <div className="w_16p -l-w_33p b_collapse_2-235">
            <div className="p_-1 fs_0875 icon icon_tour semibold">Эконом</div>
         </div> */}
      </div>
   );
}

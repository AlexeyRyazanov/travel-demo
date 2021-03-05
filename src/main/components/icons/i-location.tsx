export default function ILocation(): JSX.Element {
   return (
      <div className="i ILocation">
         <svg className="icon_svg" viewBox="0 0 18 18">
            <line className="s" x1="7" y1="12" x2="7" y2="15" />
            <polyline className="s" points="11 4 13 5 17 3 17 15 13 17 7 15 1 17 1 10" />
            <path className="s" d="M8,4C8,5.61877,5,9,5,9S2,5.61877,2,4A3,3,0,0,1,8,4Z" />
            <circle className="f" cx="5" cy="4" r="1" />
            <circle className="f" cx="10" cy="9" r="1" />
            <line className="s" x1="13" y1="5" x2="13" y2="17" />
         </svg>
      </div>
   );
}

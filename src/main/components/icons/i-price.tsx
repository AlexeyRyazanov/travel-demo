export default function IPrice(): JSX.Element {
   return (
      <div className="i IPrice">
         <svg className="icon_svg" viewBox="0 0 18 18">
            <rect className="s" x="12" y="9" width="5" height="4" />
            <line className="s" x1="1" y1="5" x2="12" y2="1" />
            <line className="s" x1="12" y1="1" x2="13" y2="5" />
            <polyline className="s" points="16 8.286 16 5 1 5 1 17 16 17 16 13.714" />
            <circle className="f" cx="4" cy="8" r="1" />
            <circle className="f" cx="4" cy="14" r="1" />
         </svg>
      </div>
   );
}

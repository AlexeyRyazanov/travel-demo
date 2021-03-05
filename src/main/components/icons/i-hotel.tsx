export default function IHotel(props: { c?: string }): JSX.Element {
   const { c } = props;

   return (
      <div className={`i IHotel ${c || ''}`}>
         <svg viewBox="0 0 18 18">
            <rect className="s" x="3" y="4" width="12" height="13" />
            <rect className="f" x="5" y="6" width="2" height="2" />
            <rect className="f" x="2" y="0" width="2" height="2" />
            <rect className="f" x="5" y="0" width="2" height="2" />
            <rect className="f" x="8" y="0" width="2" height="2" />
            <rect className="f" x="11" y="0" width="2" height="2" />
            <rect className="f" x="14" y="0" width="2" height="2" />
            <rect className="f" x="8" y="6" width="2" height="2" />
            <rect className="f" x="11" y="6" width="2" height="2" />
            <rect className="f" x="5" y="9" width="2" height="2" />
            <rect className="f" x="8" y="9" width="2" height="2" />
            <rect className="f" x="11" y="9" width="2" height="2" />
            <rect className="s" x="7" y="13" width="4" height="4" />
            <rect className="s" x="1" y="15" width="1" height="2" />
            <rect className="s" x="16" y="15" width="1" height="2" />
         </svg>
      </div>
   );
}

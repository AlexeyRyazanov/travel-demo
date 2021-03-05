export default function IFlightOutSeg(): JSX.Element {
   return (
      <div className="i IFlightOutSeg">
         <svg viewBox="0 0 18 18">
            <circle className="f" cx="16" cy="2" r="2" />
            <circle className="f" cx="2" cy="16" r="2" />
            <line className="s" x1="7" y1="11" x2="12" y2="6" />
            <line className="s s_sqr" x1="10" y1="8" x2="6" y2="8" />
            <line className="s s_sqr" x1="10" y1="8" x2="10" y2="12" />
            <line className="s s_sqr" x1="7" y1="11" x2="7" y2="12" />
            <line className="s s_sqr" x1="7" y1="11" x2="6" y2="11" />
         </svg>
      </div>
   );
}

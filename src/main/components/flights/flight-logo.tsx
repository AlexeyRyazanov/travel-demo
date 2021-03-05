import { memo } from 'react';

export default memo(function FlightLogo({ code }: { code: string }): JSX.Element {
   return (
      <div className="relative circle_3r -s-circle_2_5r -s450-circle_2r -xs-circle_1_5r boxsh_xs bg_250">
         <img className="absolute abs_offset_4px" src={`../../images/airlines/${code}.svg`} alt={code} />
      </div>
   );
});

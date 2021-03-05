import { ConnectedProps, connect } from 'react-redux';
import DateHM from '../atoms/date-hm';
import FlightAirline from './flight-airline';
import { flightsLegs } from '../../store/flights';

type OwnProps = {
   airlineCode: string;
   direction: 'outgoing' | 'return';
   legsIds: Array<string>;
};

const connector = connect(flightsLegs);

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected & OwnProps;

function FlightInfoTime(props: Props): JSX.Element {
   const {
      airlineCode,
      direction,
      legs,
      legsIds,
   } = props;

   const icon = direction === 'outgoing' ? 'icon_flightOutTime' : 'icon_flightRetTime';

   const segFirst = legs[legsIds[0]];
   const segLast = legs[legsIds[legsIds.length - 1]];

   return (
      <div className="w_50p col px_-1 pl_0">
         <div className={`row nowrap mb_-2 icon ${icon}`}>
            {
               segFirst && typeof segFirst.dateFrom === 'string'
               && <DateHM date={segFirst.dateFrom} />
            }
            <div className="w_1r ta_c monobold c_150"> - </div>
            {
               segLast && typeof segLast.dateFrom === 'string'
               && <DateHM date={segLast.dateTo} />
            }
         </div>
         <div className="c_150 fs_0875 text-overflow-ellipsis">
            <FlightAirline code={airlineCode} />
         </div>
      </div>
   );
}

export default connector(FlightInfoTime);

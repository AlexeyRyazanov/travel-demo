import { connect, ConnectedProps } from 'react-redux';
import { AirportsType } from '../../typings/flights-amadeus';
import { RootState } from '../../store/flights';
import DateDM from '../atoms/date-dm';
import DateHM from '../atoms/date-hm';

type OwnProps = {
   code: string;
   date: string;
   takeoff?: boolean;
   terminal?: string;
   direction: 'outgoing' | 'return';
};

type MapStateProps = {
   airports: { [key: string]: AirportsType };
};

function mapState(state: RootState): MapStateProps {
   return {
      airports: state.flights.content.airports,
   };
}

const connector = connect(mapState);

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected & OwnProps;

export default connector(function FlightSegmentTime({
   airports,
   code,
   date,
   takeoff,
   terminal,
   direction,
}: Props): JSX.Element {

   const { name = '', cityCode = '' } = { ...airports[code] };

   return (
      <div className="FlightSegmentTime row px_1-2r py_-3">
         <div className="row ai_c px_-1 py_-1-2 bg_white br_2 mr_-2 ml_--1">
            <div className="flex">
               <div className="absolute wh_18px bg_242 rounded" />
               <div className={`relative icon icon_${takeoff ? 'takeoff' : 'landing'}_${direction}`} />
            </div>
            <DateDM date={date} />
            <span className="w_1r ta_c monobold"> </span>
            <span className="c_main"><DateHM date={date} /></span>
         </div>
         <div className="grow_1 p_-1-2">
            {name}
            {' '}
            (
            {cityCode}
            {terminal ? `-${terminal}` : ''}
            )
         </div>
      </div>
   );
});

import { connect, ConnectedProps } from 'react-redux';
import arrNotEmpty from '../../utils/array/array-not-empty';
import undef from '../../utils/undef';
import { flightsLegs } from '../../store/flights';

type OwnProps = {
   cls?: string;
   legsIds: Array<string>;
};

const connector = connect(flightsLegs);

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected & OwnProps;

export default connector(function FlightRoute({ cls, legs, legsIds }: Props): JSX.Element {
   return (
      <div className={`FlightRoute ${cls || ''}`}>
         {
            arrNotEmpty(legsIds)
            && legsIds.map((el, index) => {
               const legData = { ...legs[el] };
               const nextSegmentIsExist = index < legsIds.length - 1 && !undef(legsIds[index + 1]);

               // TODO Move this smelling code ousdide of this component

               if (legsIds.length <= 1) {
                  return (
                     <span key={el}>
                        {legData.from}
                        {' '}
                        -
                        {' '}
                        {legData.to}
                        {' '}
                        (прямой)
                     </span>
                  );
               }

               if (
                  nextSegmentIsExist
                  && legsIds[index + 1]
                  && legs[legsIds[index + 1]]
                  && legs[legsIds[index + 1]].from === legData.to
               ) {
                  return (
                     <span key={el}>
                        {legData.from}
                        {' '}
                        -&nbsp;
                     </span>
                  );
               }

               if (
                  nextSegmentIsExist
                  && legsIds[index + 1]
                  && legs[legsIds[index + 1]]
                  && legs[legsIds[index + 1]].from !== legData.to
               ) {
                  return (
                     <span key={el}>
                        {legData.from}
                        {' '}
                        -
                        {' '}
                        {legData.to}
                        /
                     </span>
                  );
               }

               return (
                  <span key={el}>
                     {legData.from}
                     {' '}
                     -
                     {' '}
                     {legData.to}
                  </span>
               );
            })
         }
      </div>
   );
});

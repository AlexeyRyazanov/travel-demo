import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/flights';

type OwnProps = { code: string };

function mapState(state: RootState, ownProps: OwnProps): { name: string } {
   let name = '';
   const airline = state.flights.content.airlines[ownProps.code];

   if (airline) {
      name = state.flights.content.airlines[ownProps.code].name;
   }

   return { name };
}

const connector = connect(mapState);

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected & OwnProps;

export default connector(function FlightAirline(props: Props): JSX.Element {
   const { name } = props;

   return (
      <span>{name}</span>
   );
});

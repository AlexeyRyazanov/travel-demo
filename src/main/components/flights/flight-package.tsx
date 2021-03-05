import { useMemo } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/flights';
import { BayanType, BayanProviderL1 } from '../bayan/bayan-provider';
import ErrorBoundary from '../error-boundary';
import FlightOutgoing from './flight-outgoing';
import FlightPackageBottomBar from './flight-package-bottom-bar';
import FlightReturn from './flight-return';
import { BoundType } from '../../typings/flights-amadeus';
import FlightPackageBg from './flight-package-bg';
import useBayanAnimationL0Css from '../bayan/hooks/use-bayan-animation-l0-css';
// import useBayanAnimationL0 from '../bayan/hooks/use-bayan-animation-l0';

type OwnProps = { id: string } & { bayan: BayanType };
type MapStateProps = { bound: Array<BoundType> };

function mapState(state: RootState, { id }: OwnProps): MapStateProps {
   // TODO Add additional check for dot access of every part of object
   const { bound } = state.flights.content.solutions[id];
   return { bound };
}

const connector = connect<MapStateProps>(mapState);

type PropsConnected = ConnectedProps<typeof connector>;
type Props = PropsConnected & OwnProps;

export default connector(function FlightPackage({ bound, bayan, id }: Props): JSX.Element {
   // const bayanRef = useBayanAnimationL0({ bayanIndex: bayan.l0 });
   // const flightNode = useRef<HTMLFDivElement>(null);

   // const [inView, setInView] = useState<boolean>(false);

   // const enterView = (entry: IntersectionObserverEntry) => {
   //    if (entry.isIntersecting) {
   //       setInView(true);
   //    }
   // };

   // const ref = useIntersectionRef({
   //    onChange: enterView,
   // });

   // console.log(inView, bayan.l0 + 1);
   const offsetY = useBayanAnimationL0Css(bayan.l0);

   return useMemo(() => (
      <ErrorBoundary>
         <div className="FlightPackage w_100p p_1-2 -m-p_1-2r -m-mt_-1 -s450-p_-1-2 trans_06" style={{ transform: `translateY(${offsetY}px)` }}>
            <BayanProviderL1 id="BAYAN_L1 Flight Package">
               {/* <h3>{bayan.l0 + 1}</h3> */}
               <div className="relative">
                  <FlightPackageBg bayanIndex={bayan.l0} />
                  <FlightOutgoing bayan={{ ...bayan, l1: 0 }} data={bound[0]} />
                  {
                     bound[1]
                        ? <FlightReturn bayan={{ ...bayan, l1: 1 }} data={bound[1]} />
                        : null
                  }
                  <FlightPackageBottomBar bayan={{ ...bayan, l1: 2 }} id={id} />
               </div>
            </BayanProviderL1>
         </div>
      </ErrorBoundary>
   ), [bayan, bound, id, offsetY]);
});

// export default FlightPackage;

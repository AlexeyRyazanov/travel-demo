import Routes from '../../data/routes';
import ErrorBoundary from '../error-boundary';
import ScrollToTopOnMount from '../atoms/scroll-to-top';

type Props = {
   path: Routes;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HomePage(props: Props): JSX.Element {
   return (
      <ErrorBoundary>
         <ScrollToTopOnMount />
         {/* <FlipAdv /> */}
         <section className="relative">
            <div className="row">
               {/* <div className="w_50p">
                  <BayanList />
               </div> */}
               <div className="w_50p">
                  {/* <CollapsibleList2 /> */}
               </div>
            </div>
            {/* <FlightPromoBanner /> */}
            {/* <div className="fixed fill will-change_t z0">
               <SmartImage
                  blurVal={32}
                  cls="fixed fill z0"
                  imgSrc="../../../images/bg/bg_404.jpg"
                  imgSrcPlh="../../../images/bg/bg_404_p.jpg"
                  imgSrcWebp="../../../images/bg/bg_404.webp"
                  imgSrcWebpPlh="../../../images/bg/bg_404_p.webp"
               />
            </div> */}
         </section>
      </ErrorBoundary>
   );
}

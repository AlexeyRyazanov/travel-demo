import { hot } from 'react-hot-loader';
import { Router } from '@reach/router';
import { Default, Mobile } from './components/media';
import ButtonToTop from './components/atoms/button-to-top';
import Flights from './components/flights/flights';
import Routes from './data/routes';
import SideNavMobile from './components/side-nav-mobile';
import SideNav from './components/side-nav';
import Page404 from './components/pages/page-404';

export default hot(module)(function App() {
   return (
      <>
         <Default>
            <SideNav />
         </Default>
         <Mobile>
            <SideNavMobile />
         </Mobile>
         <Router className="relative h_100p maxw_1350 ml_16r -l-ml_15r -m-ml_14r -s-m_0 bg_grad_245_hor_colored_inverted">
            {/* <HomePage path={Routes.home} /> */}
            <Flights path={Routes.home} />
            <Page404 default />
         </Router>
         <ButtonToTop />
         {/* <BottomBar route={location.pathname} /> */}
         {/* <Route render={({ location }) => (
            <Footer isSitemapNeed={location.pathname === '/'} route={location.pathname} />
         )} /> */}
      </>
   );
});

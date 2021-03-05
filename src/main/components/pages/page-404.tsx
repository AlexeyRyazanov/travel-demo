import { Link, RouteComponentProps } from '@reach/router';
import Routes from '../../data/routes';
import ScrollToTopOnMount from '../atoms/scroll-to-top';
import SmartImage from '../atoms/smart-image';

import bgImageJpg from '../../../images/bg/bg_404.jpg';
import bgImageJpgPlh from '../../../images/bg/bg_404_p.jpg';
import bgImageWebp from '../../../images/bg/bg_404.webp';
import bgImageWebpPlh from '../../../images/bg/bg_404_p.webp';

export default function Page404(props: RouteComponentProps): JSX.Element {
   return (
      <div className="Page404 w_100p h_100p flex_center usn z0">
         <ScrollToTopOnMount />
         <div className="p_2 mt_2 z1 maxw_870 ta_c as_fs">
            <h1>
               <span className="c_main">Ошибка 404.</span>
               {' '}
               <span>Страница не найдена</span>
            </h1>
            <div className="mt_2 fs_12 lh_16">
               Если вы видите эту страницу, значит вы перешли по ссылке, которая не работает или устарела.
               {' '}
               <Link to={Routes.home} className="semibold c_main mt_1">Перейдите на&nbsp;главную&nbsp;страницу</Link>
               {' '}
            </div>
         </div>
         <div className="absolute z0 fill flex_center p_2 o_h">
            <div className="z1 c_white fs_404 bold op_08 txtsh_4">404</div>
            <SmartImage
               // blurVal={32}
               cls="absolute fill scale_125--30s"
               imgSrc={bgImageJpg}
               imgSrcPlh={bgImageJpgPlh}
               imgSrcWebp={bgImageWebp}
               imgSrcWebpPlh={bgImageWebpPlh}
            />
         </div>
      </div>
   );
}

import Logo from './atoms/logo';
import FlightsFilters from './flights/flights-filters';
// import CallBack from '../Callback';

export default function SideNav(): JSX.Element {
   return (
      <div className="fixed l_0 t_0 b_0 w_16r -l-w_15r -m-w_14r bg_grad_245_hor_colored_inverted boxsh_3_right z101 trans_z">
         <Logo />
         <FlightsFilters />
      </div>
   );
}

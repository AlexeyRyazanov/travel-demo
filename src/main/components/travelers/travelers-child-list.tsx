import arrNotEmpty from '../../utils/array/array-not-empty';
import TravelersChild from './travelers-child';

type Props = {
   d: Array<string>;
};

export default function TravelersChildList(props: Props): JSX.Element {
   const { d } = props;

   if (arrNotEmpty(d)) {
      return (
         <div className="mt_1r">
            {
               d.map((age, index) => (
                  <TravelersChild
                     birthdate={age}
                     index={index}
                     // eslint-disable-next-line react/no-array-index-key
                     key={index}
                  />
               ))
            }
         </div>
      );
   }
   return null;
}

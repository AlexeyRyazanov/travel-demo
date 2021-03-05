// import { paramsMember } from '../../data/params-member';
import Datepicker from '../atoms/datepicker';

import {
   childrenMaxAge,
   childrenMinAge,
   childrenMinBd,
   childrenMinBdPrecise,
   DatepickerView,
} from '../../data/constants';

type Props = {
   birthdate: string;
   index: number;
   // store?: Store;
};

export default function TravelersChild(props: Props): JSX.Element {
   const {
      birthdate,
      index,
      // store
   } = props;

   // const { childBdSet } = store.searchBar;

   const childrenAgeList = [];

   for (let i = childrenMinAge; i <= childrenMaxAge; i++) {
      childrenAgeList.push(i);
   }

   // const selectBirthDate = (pName: string, value: string) => childBdSet(index, value);

   return (
      <div className="Travelers-Child">
         {/* <Datepicker
            cls="w_100p px_1r py_-2 b_1s215"
            // hSelect={selectBirthDate}
            maxDate={childrenMinBd}
            minDate={childrenMinBdPrecise}
            pName={paramsMember.birthdate}
            pVal={birthdate}
            view={DatepickerView.years}
         /> */}
      </div>
   );
}

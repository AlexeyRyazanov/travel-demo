import {
   useEffect, useMemo, useState,
} from 'react';
import { rowsDef } from '../../data/constants';
import FlightsResultsShowMoreButton from './flights-results-show-more-button';
import ResultsCountSelect from '../results-count-select';
import FlightsSortingBar from './flights-sorting-bar';
import FlightsResultsList from './flights-results-list';
import { BayanProviderL0 } from '../bayan/bayan-provider';

export default function FlightsResults(): JSX.Element {
   const [countView, setCountView] = useState(rowsDef);
   const [rows, setRows] = useState(rowsDef);

   useEffect(() => { setRows(countView); }, [countView]);

   return useMemo(() => (
      <>
         <div id="FlightsTopBar" className="row jc_sb usn px_1 py_-1 mb_-1">
            <FlightsSortingBar />
            <ResultsCountSelect setRowsParent={setCountView} />
         </div>
         <BayanProviderL0 id="BAYAN_L0 Collapsible Flights">
            <FlightsResultsList rows={rows} />
            <FlightsResultsShowMoreButton
               bayan={{ l0: 9999 }}
               countView={countView}
               rows={rows}
               setRows={setRows}
            />
         </BayanProviderL0>
      </>
   ), [countView, rows]);
}

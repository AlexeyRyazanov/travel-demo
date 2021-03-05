import TravelersChildList from './travelers-child-list';

type Props = {
   d: Array<string>;
   opened: boolean;
};

export default function TravelersChildPanel(props: Props): JSX.Element {
   const { d, opened } = props;

   return (
      <div className="mt_1r">
         <div className="fs_0875">
            Укажите возраст детей и выберите даты рождения для
            {' '}
            <span className="semibold c_main">точного расчета цены</span>
         </div>
         <TravelersChildList d={d} />
      </div>
   );
}

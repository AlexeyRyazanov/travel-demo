import Routes from '../../data/routes';
import Button from '../atoms/button';

type Props = {
   // store?: Store;
};

export default function TouristChildBirthdate(props: Props): JSX.Element {
   // const { store } = props;
   // const { basket, history } = store;
   // const { clear } = basket;

   const onClick = async () => {
      // await clear();

      // history.push(`/${routes.packagetours}`);

      console.log('Clear basket');
   };

   return (
      <div className="p_1-2">
         <div className="mb_1r">Если вы неверно ввели дату рождения ребенка перед поиском и хотите ее изменить, то вам необходимо скорректировать дату рождения, заново произвести поиск и сформировать свое путешествие во избежании недоразумений, связанных с неправильной стоимостью проживания или перелета. Изменить дату рождения (ваша корзина будет очищена).</div>
         <Button
            color="accent"
            hClick={onClick}
            icon="editW"
            label="Изменить дату"
            spinner
         />
      </div>
   );
}

const c = 'p_1-2 icon icon';

export default function FlightPromoInfo(): JSX.Element {
   return (
      <div className="py_2 px_3">
         <div className="FlightPromo-Info boxsh_6 row jc_sb p_1-2 semibold">
            <div className="col">
               <div className={`${c}_flightOut`}>Рейсы осуществляются на Боингах 737-800</div>
               <div className={`${c}_flightOutTime`}>Ежедневные вылеты из Москвы в Анталию</div>
            </div>
            <div className="col">
               <div className={`${c}_baggage`}>Багаж: 23 кг, ручная кладь: 5 кг</div>
               <div className={`${c}_meal`}>Места повышенной комфортности</div>
            </div>
            <div className="col">
               <div className={`${c}_meal`}>На борту предоставляется горячее питание</div>
               <div className={`${c}_flightOutDur`}>Утренние и дневные вылеты из Москвы</div>
            </div>
         </div>
      </div>
   );
}

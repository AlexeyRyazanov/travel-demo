import Button from './atoms/button';

type Props = {
   onAccept?(): void;
   onDecline?(): void;
};

export default function Dialog(props: Props): JSX.Element {
   const {
      onAccept,
      // onDecline,
   } = props;

   // const {
   //    dialogClose,
   //    dialogOpened,
   // } = store;

   // const _decline = () => {
   //    dialogClose();
   //    if (typeof onDecline === 'function') {
   //       onDecline();
   //    }
   // };

   return (
      <div className="Dialog fixed row b_0 l_0 z103 p_2">
         <div className="col boxsh_4 br_5 p_1-2r bg_white semibold">
            <div className="p_1-2r lh_14">Доступна новая версия сервиса!</div>
            <div className="row nowrap">
               <div className="p_1-2r">
                  <Button
                     color="accent"
                     hClick={onAccept}
                     icon="refreshUpdatedAppW"
                     label="Обновить"
                     size="s"
                  />
               </div>
               <div className="p_1-2r">
                  {/* <Button
                           hClick={_decline}
                           icon="timeB"
                           label="Позже"
                           size="s"
                        /> */}
               </div>
            </div>
         </div>
      </div>
   );
}

import { ReactNode } from 'react';

type Props = {
   cls?: string;
   message: string;
   nestedComponent?: ReactNode | null;
   opened: boolean;
};

export default function Message(props: Props): JSX.Element {
   const {
      cls,
      message,
      nestedComponent,
      opened,
   } = props;

   return (
      <>
         {
            opened
            && (
               <div className={`w_66p -l-w_100p p_1 col ai_fs boxsh_3 br_5 bg_white ${cls || ''}`}>
                  <h4>{message}</h4>
                  {
                     nestedComponent && nestedComponent
                  }
               </div>
            )
         }
      </>
   );
}

Message.defaultProps = {
   cls: '',
   nestedComponent: null,
};

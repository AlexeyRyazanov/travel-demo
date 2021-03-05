import { useEffect, useState } from 'react';

type ApiHookState<T> = {
   state: T;
   loading: boolean;
};

export default function useApi(endpoint: string): ApiHookState<string> {
   const [state, setState] = useState<string>('');
   const [loading, setLoading] = useState<boolean>(true);

   useEffect((): void => {
      fetch(endpoint).then((response: Response): Promise<void> => {
         if (response.status === 200) {
            return response.json().then((data: { title: string }) => {
               setState(data.title);
               setLoading(false);

               return null;
            });
         }
         setLoading(false);

         return null;
      }).catch((err: Error) => {
         setLoading(false);

         throw err;
      });
   }, [endpoint]);

   return {
      state,
      loading,
   };
}

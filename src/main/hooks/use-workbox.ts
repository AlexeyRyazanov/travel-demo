import { useEffect, useState, useCallback } from 'react';
import { Workbox } from 'workbox-window';

type Args = {
   dialogOpen?: () => void;
};

export default function useWorkbox(args?: Args) {
   // const { dialogOpen = () => { return null; } } = { ...args };
   const { dialogOpen = () => null } = { ...args };
   const [swRegistration, setSwRegistration] = useState<ServiceWorkerRegistration | null>(null);

   const checkForUpdate = useCallback(async () => {
      if (swRegistration) {
         try {
            console.log('CHECK FOR UPDATE', swRegistration);
            return await swRegistration.update();
         } catch (err) {
            console.log('Service-worker could not be updated', err);
         }
      }

      return null;

   }, [swRegistration]);

   const registerServiceWorker = useCallback(() => {
      const wb = new Workbox('./service-worker.js', {});

      if (wb) {
         wb.addEventListener('installed', (event) => {
            console.log('INSTALLED', event);

            if (event.isUpdate) {
               wb.messageSW({ type: 'SKIP_WAITING' });
               // window.location.reload();
               dialogOpen();
            }
         });

         wb.addEventListener('waiting', (event) => {
            console.log('WAITING', event);

            // wb.addEventListener('controlling', event => {
            //    dialogOpen();
            // });

            // wb.addEventListener('controlling', (event) => {
            // });

            // Send a message telling the service worker to skip waiting.
            // This will trigger the `controlling` event handler above.
            // wb.messageSW({ type: 'SKIP_WAITING' });

            // const urlsToCache = [
            //    location.href,
            //    ...performance.getEntriesByType('resource').map((r) => r.name),
            // ];

            // Send that list of URLs to your router in the service worker.
            // wb.messageSW({
            //    type: 'CACHE_URLS',
            //    payload: { urlsToCache },
            // });
         });

         wb.addEventListener('activated', (event) => {
            console.log('ACTIVATED', event);

            if (event.isUpdate) {
               dialogOpen();
            }

            if (!event.isUpdate) {
               // If your service worker is configured to precache assets, those
               // assets should all be available now.
               // So send a message telling the service worker to claim the clients
               // This is the first install, so the functionality of the app
               // should meet the functionality of the service worker!
               wb.messageSW({ type: 'SKIP_WAITING' });
            }
         });

         wb.addEventListener('controlling', (event) => {
            console.log('CONTROLLING', event);
         });

         // wb.addEventListener('externalinstalled', event => {
         //    console.log('EXTERNAL INSTALLED', event);
         //    // await wb.messageSW({ type: 'SKIP_WAITING' });
         // });

         // wb.addEventListener('externalwaiting', event => {
         //    console.log('EXTERNAL WAITING', event);
         //    // await wb.messageSW({ type: 'SKIP_WAITING' });
         //    // window.location.reload();
         //    // if (confirm(`Приложение было обновлено в фоновом режиме. Обновить страницу?`)) {
         //    //    wb.addEventListener('controlling', event => {
         //    //    });
         //    // }
         //    // }
         // });

         // wb.addEventListener('externalactivated', event => {
         //    console.log('EXTERNAL ACTIVATED', event);
         //    // window.location.reload();
         // });

         wb.addEventListener('message', (event) => {
            console.log('MESSAGE', event);

            if (event.data.type === 'CACHE_UPDATED') {
               const { updatedURL } = event.data.payload;

               console.log(`A newer version of ${updatedURL} is available!`);
            }
         });

         wb.register()
            .then((reg) => {
               console.log(reg);
               setSwRegistration(reg);

               return null;
            })
            .catch((err) => {
               console.log('Error registering service worker', err);
            });
      }

      // const swVersion = await wb.messageSW({ type: 'GET_VERSION' });
      // console.log('Service Worker version:', swVersion);

      // try {
      //    setSwRegistration(await wb.register());
      // } catch (e) {
      //    console.log('Error registering service worker', e);
      // }
   }, [dialogOpen]);

   useEffect(() => {
      registerServiceWorker();
      checkForUpdate();
   }, [checkForUpdate, registerServiceWorker]);

   return {
      checkForUpdate,
      swRegistration,
   };
}

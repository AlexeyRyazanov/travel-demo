/* eslint-disable no-underscore-dangle */
// This file must have worker types, but not DOM types.
// The global should be that of a service worker.

// This fixes `self`'s type.
// import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { cleanupOutdatedCaches, matchPrecache, precacheAndRoute, getCacheKeyForURL } from 'workbox-precaching';

import { cacheNames, setCacheNameDetails, clientsClaim, skipWaiting } from 'workbox-core';

// import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';

declare let self/* : ServiceWorkerGlobalScope */;
export { };

console.log(self.clients);


self.addEventListener('message', event => {
   if (!event.data || !event.data.type) return;
   const port = event.ports[0];
   switch (event.data.type) {
      case 'SKIP_WAITING':
         self.skipWaiting();
         break;
      case 'CLIENTS_COUNT':
         self.clients.matchAll().then(allClients => {
            port.postMessage(allClients.length);
         });
         break;
      default: break;
   }
});

// self.addEventListener('fetch', (event: any) => {
//    console.log(event.request);
// });

setCacheNameDetails({
   prefix: 'd-mind',
   suffix: 'v1',
   precache: 'install-time',
   runtime: 'run-time',
   googleAnalytics: 'ga',
});
// import { strategy as streamsStrategy } from 'workbox-streams';

precacheAndRoute(self.__WB_MANIFEST);

console.log('Service-worker hello');

// default page handler for offline usage,
// where the browser does not how to handle deep links
// it's a SPA, so each path that is a navigation should default to index.html
registerRoute(
   ({ event }) => event ? event.request.mode === 'navigate' : '',
   async () => {
      const defaultBase = '/index.html';
      return caches
         .match(getCacheKeyForURL(defaultBase), {
         })
         .then(response => {
            console.log(response);
            return response || fetch(defaultBase);
         })
         .catch(err => {
            console.log(err);
            return fetch(defaultBase);
         });
   }
);

// Make sure this is the last fetch event listener
// self.addEventListener('fetch', event => {
//    if (
//       event.request.mode !== 'navigate' ||
//       event.request.mode !== 'GET' ||
//       !self.registration.waiting
//    ) {
//       return;
//    }

//    event.respondWith(
//       self.clients.matchAll().then(clients => {
//          if (clients.length < 2 && self.registration.waiting) {
//             skipWaiting();
//             return new Response('', { headers: { Refresh: '0' } });
//          }
//          return fetch(event.request);
//       })
//    );
// });

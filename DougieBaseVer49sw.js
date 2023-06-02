/*DougieBaseVer49sw.js DougieBaseVer48sw.js sw47 reverted to original sw April25 2023  DougieBaseVer47sw.js Feb 27 2023 DougieBaseVer46sw.js Feb2 2023 DougieBaseVer45sw.js Dec28 2022 DougieBaseVer44sw.js Dec4 2022 DougieBaseVer43sw.js DougieBaseVer42sw.js Date Nov 22 2022 - Oct4 2022 DougieBaseVer40sw.js from DougieBaseVer39sw.js Feb 14 2022 Dec25 Dec10 from mobileFriendlyDougieBaseVer37sw.js from Copy of tryThisSw.js Nov16
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v48';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
 // 'index.html',
  //'./', // Alias for index.html
 // 'styles.css',
 // '../../styles/main.css',
//  'demo.js'
 '/',//https://github.com/trainee45/trainee45.github.io',//directory path to project folder
       '/index.html',//directory path to project folder/app name.html file
	   
	    // 'https://github.com/trainee45/trainee45.github.io/TableNotesVer29.html',//directory path to project folder/app name.html file
       '/DougieBaseVer49.js',//directory path to project folder/app name.js file
       '/DougieBaseVer49.css',////directory path to project folder/app name.css file
	   '/smallDeviceDougieBaseVer49.css',//tested in Inspect Dec10 2021
	   '/trainsDBTableNotes.webmanifest',////directory path to project folder/app name.trainmanifest file
	   '/jquery-3.6.0.min.js',////directory path to project folder/app name.jQuery file
	    '/eeyore.JPG',//add this file to github repository
		'/fudd4.jpeg'

];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});

//Updates

//There is still one point to cover: how do you upgrade a Service Worker when a new version of the app containing new assets is available? The version number in the cache name is key to this:

/*var cacheName = 'js13kPWA-v1';
When this updates to v2, we can then add all of our files (including our new files) to a new cache:

contentToCache.push('/pwa-examples/js13kpwa/icons/icon-32.png');

// ...

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('js13kPWA-v2').then((cache) => {
      return cache.addAll(contentToCache);
    })
  );
}); */

//A new service worker is installed in the background, and the previous one (v1) works correctly up until there are no pages using it — the new Service Worker is then activated and takes over management of the page from the old one.

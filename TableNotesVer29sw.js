//TableNotesVer29sw.js
var cacheName = 'DougieBase-v1'
self.addEventListener('install', function(e) {
 e.waitUntil(
//was 'video-store're'In the install listener, we can initialize the cache and add files to it for offline use. The service worker does not install until the code inside waitUntil is executed. It returns a promise — this approach is needed because installing may take some time, so we have to wait for it to finish. we open a cache with a given name, then add all the files our app uses to the cache, so they are available next time it loads (identified by request URL).
//line below was —-caches.open('notes-os').then(function(cache) {..replaced notes-os with DougieBase-v1 via the variable cacheName Date:July 4 2021 the variable name does not have quotes ?correct????
  caches.open(cacheName).then(function(cache) {
     return cache.addAll([
       '/'//https://github.com/trainee45/trainee45.github.io',//directory path to project folder
       '/index.html',//directory path to project folder/app name.html file
	   
	    // 'https://github.com/trainee45/trainee45.github.io/TableNotesVer29.html',//directory path to project folder/app name.html file
       '/TableNotesVer29.js',//directory path to project folder/app name.js file
       '/TableNotesVer29.css'////directory path to project folder/app name.css file
	   '/trainsDBTableNotes.webmanifest'////directory path to project folder/app name.trainmanifest file
	   '/jquery-3.6.0.min.js'////directory path to project folder/app name.jQuery file
     ]);
   })
 );
});

//fetch event at our disposal, which fires every time an HTTP request is fired off from our app. This is very useful, as it allows us to intercept requests and respond to them with custom responses.The response can be anything we want: the requested file, its cached copy, or a piece of JavaScript code that will do something specific we serve content from the cache instead of the network as long as the resource is actually in the cache. We do this whether the app is online or offline. If the file is not in the cache, the app adds it there first before then serving it:

/*self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});  */

//Here, we respond to the fetch event with a function that tries to find the resource in the cache and return the response if it's there. If not, we use another fetch request to fetch it from the network, then store the response in the cache so it will be available there next time it is requested.

//The FetchEvent.respondWith method takes over control — this is the part that functions as a proxy server between the app and the network. This allows us to respond to every single request with any response we want: prepared by the Service Worker, taken from cache, modified if needed.


//here is the complete code!

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});


/* 
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});


*/

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



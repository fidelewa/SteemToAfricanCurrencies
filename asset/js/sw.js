var CACHE_STATIC_NAME = 'static-v7'; 
var CACHE_DYNAMIC_NAME = 'dynamic-v2';
var STATIC_FILES = [
  '/',
  '/index.html',
  '/asset/js/script.js',
  '/asset/js/app.js',
  '/asset/fonts/dayrom.eot',
  '/asset/fonts/dayrom.ttf',
  '/asset/fonts/dayrom.woff',
  '/asset/css/style.css',
  '/asset/images/fond_jaune.png',
  '/asset/images/ico_top.png',
  '/asset/images/ombre.png',
  '/asset/images/separateur.png',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
];

function trimCache(cacheName, maxItems) {
  caches.open(cacheName)
    .then(function(cache) {
      return cache.keys()
        .then(function (keys) {
          if (keys.length > maxItems) {
            cache.delete(keys[0])
              .then(trimCache(cacheName, maxItems));
          }
        });
    })
}

// Définition du déclencheur de l'évènement "install"
self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
      caches.open(CACHE_STATIC_NAME)
        .then(function(cache) {
          console.log('[Service Worker] Precaching App Shell');
          cache.addAll(STATIC_FILES);
        })
    )
  });
  
self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ....', event);
    event.waitUntil(
      caches.keys()
        .then(function(keyList) {
          return Promise.all(keyList.map(function(key){
            if (key!== CACHE_STATIC_NAME && key !==CACHE_DYNAMIC_NAME){
              console.log('[Service Worker] Removing old cache.', key);
              return caches.delete(key);
            }
          }));
        })
    )
    return self.clients.claim();
});

function isInArray(string, array) {
  var cachePath;
  if (string.indexOf(self.origin) === 0) { // request targets domain where we serve the page from (i.e. NOT a CDN)
    console.log('matched ', string);
    cachePath = string.substring(self.origin.length); // take the part of the URL AFTER the domain (e.g. after localhost:8080)
  } else {
    cachePath = string; // store the full request (for CDNs)
  }
  return array.indexOf(cachePath) > -1;
}

self.addEventListener('fetch', function (event) {
  var url_1 = 'https://api.coinmarketcap.com/v1/ticker/steem/';
  var url_2 = 'https://api.coinmarketcap.com/v1/ticker/steem-dollars/';
  var url_3 = 'https://www.apilayer.net/api/live?access_key=4d73aac2ff6459c12dbef1d8f6530845&format=1';

  if ((event.request.url.indexOf(url_1) > -1) && (event.request.url.indexOf(url_2) > -1) && (event.request.url.indexOf(url_3) > -1)) {
    event.respondWith(
      caches.open(CACHE_DYNAMIC_NAME)
        .then(function (cache) {
          return fetch(event.request)
            .then(function (res) {
              trimCache(CACHE_DYNAMIC_NAME, 2);
              cache.put(event.request, res.clone());
              return res;
            });
        })
    );
    // Rechercher tous les éléments dans l'array STATIC_FILES qui ont des séparateurs en testant que l'url de la requête correspond 
    // au modèle de recherche de l'expression régulière pour vérifier que l'url de la requête fait partie de notre array STATIC_FILES
  } else if (isInArray(event.request.url, STATIC_FILES)) {
      event.respondWith(
        caches.match(event.request) // On repond avec le fichier ou l'élément en cache correspondant à la requête courante
      );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response;
          } else {
            return fetch(event.request)
              .then(function (res) {
                return caches.open(CACHE_DYNAMIC_NAME)
                  .then(function (cache) {
                    trimCache(CACHE_DYNAMIC_NAME, 2);
                    cache.put(event.request.url, res.clone());
                    return res;
                  })
              })
          }
        })
    );
  }
});

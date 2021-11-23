var cacheName = 'holamundo-pwa'
var filescache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

/* Inicie el service worker y almacene en cache todo el contenido de la aplicación*/

self.addEventListener('install', function(e)
{
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      return cache.addAll(filesToCache);
    })
  );
});

/*Sirve contenido almacenado en cache sin conexión*/

self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request).then(function(response){
      return response || fetch(e.request);
    })
  );
});

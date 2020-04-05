'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "70c47d4b3c2e0c59179c40562f04a4a4",
"main.dart.js": "33aaae350c6b25a4498b868bd1099ffa",
"favicon.png": "dd4a93828e0ec1be65c6a671c6ec684e",
"icons/Icon-192.png": "1049990074ecd0d0c33c52e50d680e88",
"icons/Icon-512.png": "4680dc8acb7971f662f79ef973e9e528",
"manifest.json": "4ca121fbaf74209bf13cbc953bd18510",
"assets/LICENSE": "36d0fc47e8d468eca46e4dbe8f07ec3a",
"assets/AssetManifest.json": "16bcfbdb2e4be61c156b8f46ef5a00b7",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/Mahesh.jpg": "3de1d92deab0562c86a92d1e5ae2b42a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

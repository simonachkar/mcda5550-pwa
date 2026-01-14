const CACHE_NAME = "indexeddb-demo-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./db.js",
  "./script.js",
  "./manifest.json",
  "./favicon.ico",
  "./smu-icon-96x96.png",
  "./smu-icon-192x192.png",
];

// Install event - cache app files
self.addEventListener("install", function (event) {
  console.log("[SW] Installing...");

  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("[SW] Caching app files");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", function (event) {
  console.log("[SW] Activating...");
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("[SW] Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

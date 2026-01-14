const CACHE_NAME = "localStorage-demo-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./script.js",
  "./manifest.json",
  "./favicon.ico",
  "./smu-icon-192x192.png",
];

// Install event - cache files
self.addEventListener("install", function (event) {
  console.log("[SW] Installing...");
  
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("[SW] Caching files");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Return cached version or fetch from network
      return response || fetch(event.request);
    })
  );
});

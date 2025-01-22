/**
 * Service Worker Lifecycle: Install Event
 *
 * The 'install' event is the first step in the service worker lifecycle.
 * During this phase, we perform the initial setup, which includes:
 *  - Opening a cache.
 *  - Caching essential assets like HTML, CSS, JavaScript, and image files.
 *  - Ensuring all required assets are cached for offline use.
 *
 * The 'waitUntil' method ensures that the service worker doesn't proceed
 * to the next lifecycle stage until the caching is complete.
 */
self.addEventListener("install", (event) => {
  const cacheName = "my-cache-v1";

  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/script.js",
        "/manifest.json",
        "/favicon.ico",
        "/smu-icon-192x192.png",
      ]);
    }).catch((err) => {
      console.error("Error during service worker install:", err);
    })
  );
});

/**
 * Service Worker Lifecycle: Activate Event
 *
 * The 'activate' event is fired when the service worker starts.
 * It's an opportunity to clean up old caches, if necessary, and
 * to prepare the service worker for handling fetch events or other tasks.
 */
self.addEventListener("activate", (event) => {
  const cacheList = ["my-cache-v1"];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      // Delete old caches that are no longer needed
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheList.includes(cacheName)) {
            console.log(`Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    }).catch((err) => {
      console.error("Error during service worker activate:", err);
    })
  );
});

/**
 * Fetch Event Handling
 *
 * The 'fetch' event is fired every time the web app requests a resource.
 * This can include HTML pages, images, scripts, and other assets.
 *
 * In this event, we:
 *  - Attempt to match the request with an item in the cache.
 *  - If a match is found, return the cached item.
 *  - If not, the request will proceed to the network as usual.
 *
 * The goal is to allow for efficient loading and offline availability
 * of previously accessed resources.
 */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request)
    }).catch((error) => {
      console.error('Fetch error:', error);
    })
  );
});

// For more information on Service Workers, refer to:
// https://developers.google.com/web/fundamentals/primers/service-workers

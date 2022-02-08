/**
 * Installs a service worker
 * Perform install steps (via the callback): 
 *      - Open a cache.
 *      - Cache our files.
 *      - Confirm whether all the required assets are cached or not.
 */
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('my-cache-name')
            .then(function (cache) {
                cache.addAll([
                    '/',
                    '/index.html',
                    '/styles.css',
                    '/script.js'
                ])
            })
    );
    return self.clients.claim();
});

/**
 * Return cached response
 */
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                return res;
            })
    );
});

// More about Service Workers: Ref: https://developers.google.com/web/fundamentals/primers/service-workers
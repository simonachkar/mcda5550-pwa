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
                    '/script.js',
                    '/manifest.json',
                    '/favicon.ico',
                    '/smu-icon-192x192.png'
                ])
            })
    );
    return self.clients.claim();
});

/**
 * Activating the service worker
 */
self.addEventListener('activate', function (event) {
    console.log('Service worker activated', event);
})

/**
 * Return cached response. 
 * Will get triggered whenever the web app fetched something (pages, images, scripts...)
 */
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                console.log('Fetched:', res);
                return res;
            })
    );
});

// More about Service Workers: Ref: https://developers.google.com/web/fundamentals/primers/service-workers
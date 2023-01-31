// Install a service worker (required)
self.addEventListener('install', function (event) {
    // TODO: Cache webpages and files ('/', '/index.html', '/styles.css', '/script.js')
});

// Activate the service worker (optional)
self.addEventListener('activate', function (event) {
    // TODO: Log a message that indicated that the service worker is activated
})

// Handle network requests (optional)
self.addEventListener('fetch', function (event) {
});

// You can use this code to cache important files:
/**
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
 */
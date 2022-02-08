var title = document.querySelector('.title');
var courseElements = document.querySelectorAll('.course');

/**
 * 
 * This code checks to see if the service worker API is available.
 * If yes, we register the service worker at /sw.js once the page is loaded.
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful');
        }, function (err) {
            // registration failed
            console.log('ServiceWorker registration failed', err);
        });
    });
}

function animate() {
    title.classList.remove('animate-in');

    for (var i = 0; i < courseElements.length; i++) {
        courseElements[i].classList.remove('animate-in');
    }

    setTimeout(function () {
        title.classList.add('animate-in');
    }, 1000);

    setTimeout(function () {
        courseElements[0].classList.add('animate-in');
    }, 1500);

    setTimeout(function () {
        courseElements[1].classList.add('animate-in');
    }, 2000);

    setTimeout(function () {
        courseElements[2].classList.add('animate-in');
    }, 2500);

    setTimeout(function () {
        courseElements[3].classList.add('animate-in');
    }, 3000);

    setTimeout(function () {
        courseElements[4].classList.add('animate-in');
    }, 3500);

    setTimeout(function () {
        courseElements[5].classList.add('animate-in');
    }, 4000);

    setTimeout(function () {
        courseElements[6].classList.add('animate-in');
    }, 4500);

    setTimeout(function () {
        courseElements[7].classList.add('animate-in');
    }, 5000);

    setTimeout(function () {
        courseElements[8].classList.add('animate-in');
    }, 5500);
}

animate();

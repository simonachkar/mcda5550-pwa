var title = document.querySelector('.title');
var courseElements = document.querySelectorAll('.course');


// TODO: Register the service worker


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

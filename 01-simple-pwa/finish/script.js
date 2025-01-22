/**
 * This code below animates the components when app first loads.
 * The function animate() adds animation classes ("animate-in") to elements with a staggered delay.
 */

const title = document.querySelector(".title");
const courseElements = document.querySelectorAll(".course");

function animate() {
  title.classList.remove("animate-in");
  courseElements.forEach((el) => el.classList.remove("animate-in"));

  setTimeout(() => title.classList.add("animate-in"), 1000);

  courseElements.forEach((el, index) => {
    setTimeout(() => el.classList.add("animate-in"), 1500 + index * 500);
  });
}

animate();


/**
 * This code checks to see if the service worker API is available.
 * If yes, we register the service worker at /sw.js once the page is loaded.
 */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service worker registration successful:', registration);
    } catch (err) {
      console.error('Service worker registration failed:', err);
    }
  });
}

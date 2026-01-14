/**
 * This code animates the components when app first loads.
 * The function animate() adds animation classes ("animate-in") to elements with a staggered delay.
 * 
 * How it works:
 * 1. Removes any existing animations (in case function is called again)
 * 2. Waits 1 second, then animates the title
 * 3. Animates each course with a 500ms delay between them
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

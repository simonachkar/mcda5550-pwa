// == REGISTER SERVICE WORKER == 

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").then(
      function (registration) {
        console.log("✅ ServiceWorker registered successfully", registration);
      },
      function (err) {
        console.error("❌ ServiceWorker registration failed:", err);
      }
    );
  });
}


// == TODO APP LOGIC ==

// Select DOM elements
const form = document.querySelector("form");
const input = document.querySelector("[name='todo']");
const todoList = document.getElementById("todos");

/**
 * Load existing todos from localStorage
 * localStorage stores everything as strings, so we use JSON.parse() to convert back to an array
 */
const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

// In-memory array to track todos
const todoData = [...existingTodos];

// Display existing todos when page loads
existingTodos.forEach((todo) => {
  addTodo(todo, false); // false = don't save to localStorage again
});

/**
 * Add a todo to the list and save to localStorage
 * @param {string} todoText - The text of the todo
 * @param {boolean} shouldSave - Whether to save to localStorage (default: true)
 */
function addTodo(todoText, shouldSave = true) {
  if (!todoText || !todoText.trim()) return;

  todoData.push(todoText);

  const li = document.createElement("li");
  li.textContent = todoText;
  todoList.appendChild(li);

  // Save to localStorage (only when adding new todos, not when loading existing ones)
  if (shouldSave) {
    localStorage.setItem("todos", JSON.stringify(todoData));
    console.log("Saved to localStorage:", todoData);
  }

  input.value = "";
}

/**
 * Handle form submission
 */
form.onsubmit = (event) => {
  event.preventDefault();
  addTodo(input.value.trim());
};

// Got this code from fireship-io -> https://github.com/fireship-io/10-javascript-frameworks/blob/main/vanilla-app/index.html

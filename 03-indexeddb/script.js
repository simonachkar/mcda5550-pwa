async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("./sw.js")
        .then((reg) => console.log("✅ ServiceWorker registered", reg))
        .catch((err) => console.error("❌ ServiceWorker registration failed:", err));
    });
  }
}

/**
 * Main function to handle the student form and display logic.
 */
async function main() {
  // Select form and input elements
  const form = document.querySelector("form");
  const nameInput = document.querySelector("[name='sname']");
  const idInput = document.querySelector("[name='sid']");
  const cityInput = document.querySelector("[name='city']");
  const studentsList = document.getElementById("students");
  const searchInput = document.getElementById("search");

  // Function to clear and re-add students
  function clearAndDisplayStudents(students) {
    studentsList.innerHTML = ""; // Clear current list
    students.forEach((student) => addStudent(student)); // Re-display students
  }

  // Function to add a student to the list and update the database
  async function addStudent({ name, id, city }) {
    const div = document.createElement("div");
    div.classList.add("student");

    const h1 = document.createElement("h1");
    h1.textContent = name;

    const h2 = document.createElement("h2");
    h2.textContent = id;

    const p = document.createElement("p");
    p.textContent = city;

    div.append(h1, h2, p);
    studentsList.appendChild(div);

    // Add the student to the IndexedDB (this is now the only source of truth)
    await addStudentToDB(name, id, city); // Assuming addStudentToDB is defined

    // Refresh the list to ensure it's up-to-date
    await refreshStudentList();
  }

  // Function to get all students from the database and update the list
  async function refreshStudentList() {
    const existingStudents = await getAllStudentsFromDB() || [];
    clearAndDisplayStudents(existingStudents);
  }

  // Fetch and display initial students from the database
  await refreshStudentList();

  // Handle form submission
  form.onsubmit = (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const id = idInput.value;
    const city = cityInput.value;

    if (name && id && city) {
      addStudent({ name, id, city });
      [nameInput, idInput, cityInput].forEach((input) => (input.value = "")); // Clear inputs
    }
  };

  // Handle search input
  searchInput.addEventListener("input", async (event) => {
    const searchTerm = event.target.value.trim();

    if (searchTerm === "") {
      // If search is empty, show all students
      await refreshStudentList(); // Refresh list from the DB
    } else {
      // Query the database for students matching the search term
      const filteredStudents = await queryByName(searchTerm);
      clearAndDisplayStudents(filteredStudents);
    }
  });
}

// Initialize service worker and main application logic
registerServiceWorker();
main();

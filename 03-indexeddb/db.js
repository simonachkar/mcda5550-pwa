/**
 * Database setup using Dexie.js
 */
const db = new Dexie("studentsDatabase");

/**
 * Define the database schema
 * - 'id' is the primary key (must be unique)
 * - 'name' and 'city' are indexed for fast queries
 */
db.version(1).stores({
  students: "id, name, city",
});

/**
 * Fetch all student records from IndexedDB
 * @returns {Promise<Array>} Array of student objects
 */
async function getAllStudentsFromDB() {
  try {
    const students = await db.students.toArray();
    console.log("📚 Retrieved", students.length, "students from IndexedDB");
    return students;
  } catch (err) {
    console.error("❌ Error retrieving students:", err);
    return [];
  }
}

/**
 * Add or update a student record in IndexedDB
 * Uses put() which updates if id exists, or creates new if it doesn't
 * @param {string} name - Student's full name
 * @param {string} id - Student ID (primary key, must start with 'A' + 6 digits)
 * @param {string} city - Student's city of residence
 * @returns {Promise<boolean>} Success status
 */
async function addStudentToDB(name, id, city) {
  try {
    await db.students.put({ name, id, city });
    console.log("✅ Student saved to IndexedDB:", { name, id, city });
    return true;
  } catch (err) {
    console.error("❌ Error saving student:", err);
    return false;
  }
}

/**
 * Search for students by name (case-insensitive partial match)
 * @param {string} name - Search term to match against student names
 * @returns {Promise<Array>} Array of matching students
 * 
 * Example: queryByName('john') will match 'John', 'Johnny', 'Johnson', etc.
 */
async function queryByName(name) {
  if (name === undefined || name === "") return [];

  const regex = new RegExp(name, "i"); // 'i' for case-insensitive
  return await db.students
    .filter((student) => regex.test(student.name))
    .toArray();
}

// Ref -> https://dexie.org/docs/Tutorial/Hello-World

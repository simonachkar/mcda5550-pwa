const db = new Dexie("studentsDatabase");

// Define the schema for the database
db.version(1).stores({
  students: "id, name, city",
});

// Fetch all student records from the database
async function getAllStudentsFromDB() {
  try {
    const students = await db.students.toArray();
    return students;
  } catch (err) {
    console.error("Error retrieving students from database:", err);
    return [];
  }
}

// Add a new student record to the database
async function addStudentToDB(name, id, city) {
  try {
    await db.students.put({ name, id, city });
    console.log("Student added successfully");
    return true;
  } catch (err) {
    console.error("Error adding student to database:", err);
    return false;
  }
}

/**
 * Queries the database for students by name.
 * (Not used in the app, just to showcase Dexie's capabilities)
 */
async function queryByName(name) {
  if (name === undefined || name === "") return [];

  const regex = new RegExp(name, "i"); // 'i' for case-insensitive search
  return await db.students
    .filter((student) => regex.test(student.name)) // Filter using regex
    .toArray();
}

// Ref -> https://dexie.org/docs/Tutorial/Hello-World

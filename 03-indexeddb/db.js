var db = new Dexie("studentsDatabase");

// DB with single table "students" with primary key "id" and
// indexes on properties "name" and "city"
db.version(1).stores({
    students: `
        id,
        name,
        city`,
});

function getAllStudentsFromDB() {
    return db.students.toArray().then((data) => {
        return data
    })

}

function addStudentToDB(name, id, city) {
    db.students.put({ id, name, city })
        .then(() => true)
        .catch(err => {
            alert("Ouch... " + err);
        });
}

async function queryByName(name) {
    if (name === undefined) return 0
    return await db.students
        .filter((student) => {
            return student.name === name
        })
        .toArray()
}


// Ref -> https://dexie.org/docs/Tutorial/Hello-World
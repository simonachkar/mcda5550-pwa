var db = new Dexie("studentsDatabase");

// DB with single table "students" with primary key "id" and
// indexes on properties "name" and "city"
db.version(1).stores({
    students: `
        id,
        name,
        city`,
});

// Adding some values
db.friends.bulkPut([
    { id: 1, name: "Josephine", age: 21 },
    { id: 2, name: "Per", age: 75 },
    { id: 3, name: "Simon", age: 5 },
    { id: 4, name: "Sara", age: 50, notIndexedProperty: 'foo' }
]).then(() => {

    return db.friends.where("age").between(0, 25).toArray();

}).then(friends => {

    alert("Found young friends: " +
        friends.map(friend => friend.name));

    return db.friends
        .orderBy("age")
        .reverse()
        .toArray();

}).then(friends => {

    alert("Friends in reverse age order: " +
        friends.map(friend => `${friend.name} ${friend.age}`));

    return db.friends.where('name').startsWith("S").keys();

}).then(friendNames => {

    alert("Friends on 'S': " + friendNames);

}).catch(err => {

    alert("Ouch... " + err);

});

// Ref -> https://dexie.org/docs/Tutorial/Hello-World
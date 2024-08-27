/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    [
        { "_id": { "$oid": "66cd12b214002d1c5e42d1f4" }, "name": "java", "price": 900, "Instructor": "Neelmani" },
        { "_id": { "$oid": "66cd12b214002d1c5e42d1f5" }, "name": "python", "price": 850, "Instructor": "Alex" },
        { "_id": { "$oid": "66cd12b214002d1c5e42d1f6" }, "name": "javascript", "price": 950, "Instructor": "Maria" },
        { "_id": { "$oid": "66cd12b214002d1c5e42d1f7" }, "name": "c++", "price": 800, "Instructor": "John" },
        { "_id": { "$oid": "66cd12b214002d1c5e42d1f8" }, "name": "ruby", "price": 780, "Instructor": "Sophia" }
      ]
      
]);

console.log("Done inserting data")

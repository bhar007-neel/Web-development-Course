use("crudDB")

// db.createCollection("courses")

// db.courses.insertOne({
//     name: "Neel learning mongo again",
//     price: 0,
//     assignment:12,
//     projects:3
// })

// db.courses.insertMany(
//     [
//         { "name": "Neel learning Python", "price": 100, "assignment": 10, "projects": 2 },
//         { "name": "Neel learning JavaScript", "price": 150, "assignment": 8, "projects": 4 },
//         { "name": "Neel mastering Java", "price": 200, "assignment": 15, "projects": 5 },
//         { "name": "Neel diving into C++", "price": 50, "assignment": 5, "projects": 1 },
//         { "name": "Neel exploring Data Science", "price": 300, "assignment": 20, "projects": 6 },
//         { "name": "Neel studying Machine Learning", "price": 400, "assignment": 18, "projects": 7 },
//         { "name": "Neel tackling SQL databases", "price": 120, "assignment": 9, "projects": 3 },
//         { "name": "Neel learning Web Development", "price": 250, "assignment": 12, "projects": 4 },
//         { "name": "Neel getting into Cloud Computing", "price": 350, "assignment": 14, "projects": 5 },
//         { "name": "Neel understanding DevOps", "price": 180, "assignment": 11, "projects": 4 }
//       ]
      
//     )

// let a =db.courses.find({price:0})  
// // console.log(a)  


// console.log(a.count())

// let b =db.courses.findOne({price:0})  
// console.log(b)  


// // console.log(b.count())




//update

db.courses.updateOne({price:0},{$set:{price:100}})


db.courses.updateMany({price:0},{$set:{price:1000}})


// delete

db.courses.deleteOne({price:100})

db.courses.deleteMany({price:100})
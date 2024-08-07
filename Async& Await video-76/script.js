// async function getData() {
//     // simulTE GETTING DATA FROM THE SERVER
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {
    // simulTE GETTING DATA FROM THE SERVER
let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
let data = await x.json()

return data
}

async function main() {
    console.log("loding models")
    console.log("do sonething")
    console.log("load data")


    let data = await getData()
    console.log(data)
    console.log("process data")
    console.log("task 2")



}

main()



// approch 1---
// data.then((v)=> {


// console.log(data)

// console.log("processing data")

// console.log("task 2")
// })


// approch 2-------------
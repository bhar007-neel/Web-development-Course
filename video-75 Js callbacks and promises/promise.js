console.log("this is promise")
// promise is promise of code execution

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < .5) {
        reject("No random number was supporting you")
    }
    else {
        setTimeout(() => {
            console.log("yes im done")
            resolve("Harry")
        }, 3000);

    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < .5) {
        reject("No random number was supporting you2")
    }
    else {
        setTimeout(() => {
            console.log("yes im done2")
            resolve("Harry2")
        }, 1000);

    }
})



// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     comsole.log("err")
// })


// let p3=Promise.all([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })
let p3=Promise.allSettled([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
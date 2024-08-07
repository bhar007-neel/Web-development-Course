async function sleep() {
    return new Promise((resolve, project)=> {
        setTimeout(()=>{
resolve(45)
        })
    },1000);
    
}
function sum(a,b,c){
    return a+b+c
}
// IIFE CONCEPT
(async function main(){
// let a = await sleep()
// let b = await sleep()



// Destructuing

// let [x,y, ...rest] =[1,5,7,8,9,4,5,6]
// console.log(x,y,rest)
let obj ={
    a:1, 
    b:2, 
    c:3

}
let {a,b} =obj
console.log(a,b)
let arr=[1,4,6]
console.log(arr[0]+arr[1]+arr[2])
console.log(sum(...arr))
})()
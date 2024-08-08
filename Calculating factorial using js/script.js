// let x = parseInt(prompt("what is the number you want the factorial for"))
// let a =1;
// for (let index = 1; index <= x; index++) {
//     a= a*index


    
// }
// console.log(a)


// Another way 
let a = 6
function factorial(number){
let arr= Array.from(Array(number+1).keys()) //array.keys returns an array
let c = arr.slice(1,).reduce((a,b)=>{
    return a*b
})
return(c)
}
factorial(a)
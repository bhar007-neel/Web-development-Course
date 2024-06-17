let arr= [1,2,3,4,5]
console.log(arr)
console.log(arr.length)
//  arrays are mutable , whereas strings are immutable
console.log(arr[0])
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
    
}
console.log(arr[-1])
arr[0]=5666
console.log(arr)

let a ="harry"
a[0]= "k"
console.log(a)

console.log(typeof arr)
// array is a object in jsc.

// methods in array
// changes array to string.
console.log(arr.toString())

// join method(imp)

console.log(arr.join(" And "))

// pop method - takes out the last element

console.log(arr.pop())
console.log(arr.push(100))
console.log(arr)
console.log(arr.push("neel"))
// push also returns the length of the stack as well
console.log(arr)
// shifts takes out the first element and returns it.
console.log(arr.shift())
// unshift adds the element at the bottom of the stack or makes it as a first element
console.log(arr.unshift("diya"))
console.log(arr)
console.log(delete arr[3])
console.log(arr)

// so after deleting the element, the element still shows the memory 6, even though elements are only 5 because the deleted element still holds its position.

// concat method join array

let k1 =[1,2,3,4,5,6]
let k2 =[1,2,3,4,5,6]
let k3 =[1,2,3,4,5,6]

console.log(k1.concat(k2,k3))
//  just a reminder concat method does not change the orignal array , now look at this.

console.log(k1)

// sort method sorts the method
let numbers = [1,2,3,4,3,5,6]
console.log(arr.splice(1,2))
console.log(numbers)
let n=[1,6,9,77]
let j=[1,6,9,77]
console.log(n.splice(0,3))
console.log(j.splice(0,3,222,333,999))
console.log(j)

let l =[1,2,3,4]
console.log(l.slice(2))

let l3 =[1,2,3,4]
console.log(l3.slice(1,3))



// loops in arrays

let i= [1,93,5,6,88]
i.forEach((value, index,arr)=>{
    console.log(value,index,arr)
})


let obj={
    a:1,
    b:2,
    c:3

}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(obj)
    }
}

for (const iterator of i) {
    console.log(i)
}


// map,filter and reduced

let kke =[1,2,3,3,4];


// for (let index = 0; index < kke.length; index++) {
//     const element = kke[index];
//     newkke.push(element**2)
    
// }

let newkke=kke.map((e)=>{
    return e**2
})
console.log(newkke)

// let newkke1=kke.map((e,index,array)=>{
//     return e**2
// })

const greater_than_7=(e)=>{
    if(e>7){
        return true
    }
    else{
        return false
    }
}
console.log(newkke.filter(greater_than_7))


// reduce method , reduces an array to singal value

let arr2=[1,2,3,4,56,4]
const red = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))

// array.from

console.log(Array.from("Neelmani"))



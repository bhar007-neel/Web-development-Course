// strings are created to store and manipulate the text.
let a ="harry"
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}
console.log(a.length)
let real_name= "neel"
let f_name="diya"

// template literal syntex
console.log(`his name is ${real_name} and his friend name is ${f_name}`)

// escape sequence characters ---- \n-new line   , \t-tab     ,  \r-carrige return
// adding new line
console.log("neel\nbhardwaj")


let b = "harry"
console.log(b.toUpperCase())
console.log(b.toLowerCase())

console.log(b.slice(1,4))

console.log(b.slice(1,2,4))
console.log(b.replace("rr",69))
console.log(b.concat(a))

console.log(b.trim())

// strings are immutable, bc are orignals strings are not changed.
console.log(b)

// more fns like- charat(n), indexof("rr")- if noit in strings returns -1,  endswith()- returns boolean
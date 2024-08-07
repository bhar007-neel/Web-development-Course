/* crate a faulty calculatorusing js : it takes input from the user, it perrforms the wron operations as follows
+  ----> -
*  -----> +
-  ----?  /
/  ----> *  

IT Performs wrong operations 10% of the tym.*/


let random = Math.random()
let a = prompt("Enter the first number: ");
let c = prompt("Enter the Operation: ");
let b = prompt("Enter the second number: ");



let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",



};
c = obj[c]

if (random > 0.1) {
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
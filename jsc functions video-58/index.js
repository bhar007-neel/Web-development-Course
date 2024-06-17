console.log("hey harry you are A good teacher")
function nice(name) {
    console.log("hey " + name +" you are nice")
    console.log("hey " + name +" you have a good behaviour")
    console.log("hey " + name +" your tee is really good")
}
nice("neel")

function sum(a,b,c=3) {
    console.log(a+b);
    return a+b +c
}

result = sum(3,4)
console.log("the sum of the function is " + result)


// arrow function
const func1= (x) => {
    console.log("hey im a arrow function " + x)
}
func1(45)
func1(377)
func1(69)
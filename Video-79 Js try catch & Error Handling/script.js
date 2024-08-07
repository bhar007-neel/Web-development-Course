let a = prompt("Enter a number")
let b = prompt("Enter a number2")
if (isNaN(a)||isNaN(b)){
    throw("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)



try {
    console.log("the is sum is ", sum*x) 
} catch (error) {
    console.log("Error aagaya bhai")
}

finally{
    comsole.log("files are being closed and db connections is being closed")
}
console.log("script.js initialising")
let boxes = document.getElementsByClassName("box")
// let boxes=document.querySelector(".container").children //another way of selecting boxes.
console.log(boxes)


function getRandomColor(){
    let val1 = Math.ceil(0+ Math.random()*254);
    let val2 = Math.ceil(0+ Math.random()*254);
    let val3 = Math.ceil(0+ Math.random()*254);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor= getRandomColor()
    e.style.Color= getRandomColor()
})
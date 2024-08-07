let rand1 = Math.random()
let rand2 = Math.random()
let rand3 = Math.random()
let first, second, third;

// lets generate the first word
if (rand1 < 0.33){
first= "crazy"
}
else if(0.66 < rand1 && rand1 >= .33){
    first ="amazing"
}
else{
    first= "fire"
}

// lets generate the second word
if (rand2 < 0.33){
second= "Engine"
}
else if(0.66 < rand2 && rand2 >= .33){
    second ="Food"
}
else{
    second= "Clothes"
}

// lets generate the thired word
if (rand3 < 0.33){
third= "Bros"
}
else if(0.66 < rand3 && rand3 >= .33){
    third ="Limited"
}
else{
    third= "Hub"
}

console.log(` ${first} ${second} ${third}`)
console.log("im a tutorial on loops")
let a=1;

for (let i = 0; i < 100; i++) {
    console.log(i)
    
}
// forin loop
let obj ={
    name: "neelmani",
    role:"programmmer",
    salary:200000
    }

for (const key in obj) {
        const element = obj[key];
        console.log(element,key)
        
    
}   
// for in loop
for (const key in obj) {
    console.log(key)
    

}   

for (const c of "Neelmani") {

    console.log(c)
}

let k =1;
while(k<7){
    console.log(k);
    k++;
}
let i =10
do {
    console.log(i)
    i++
} while (i<10);
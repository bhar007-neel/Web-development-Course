const fs = require("fs")


console.log("Starting")
// fs.writeFileSync("Neel.txt", "Neel is a good boy")
fs.writeFile("Neel2.txt", "neel is a very good boy", ()=>{
    console.log("Done")
    fs.readFile("Neel2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
}
)
console.log("Ending")


// use write file instead of write filesyn in js because it is a anchroyrous language and we want to finsih our code and file operations can keep happening at the back where filesyn acts like a block and block our code.
// call back HELL- keep writingand reading a file
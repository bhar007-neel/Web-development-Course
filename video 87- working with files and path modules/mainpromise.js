import { readFile } from "fs"
import fs from "fs/promises"
let a = await fs.readFile("Neel.txt")
// let b = await fs.writeFile("Neel.txt"," /n/n/n/n/He is an amazing boy")
 let b = await fs.appendFile("Neel.txt"," /n/n/n/n/He is an amazing boy")
console.log(a.toString(),b)
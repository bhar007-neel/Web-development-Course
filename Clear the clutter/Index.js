// You have to write a node js program to clear the clutter inside of a directory and organise the contents of that directory into different folders
// example
// these files become 


// 1. name.jpg
// 2. name.png
// 3. this .pdf 
// 4. harry.zip
// 5. rohan.zip. 
// 6. cat.jpg

// this:  jpg/cat.jpg, jpg/name.jpg
// png/name.png 
//  zip/harry.zip, zip/rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import { exit } from "process"

const basepath= "C:\\Users\\HP\\Sigma web development course\\Web-development-Course\\Clear the clutter"

let files =await fs.readdir(basepath)
console.log(files)

let extensions=[]     
for (const item of files) {
    let ext = item.split(".")[item.split(".").length-1]
    if(fsn.existsSync(path.join(basepath,ext))){
        // Move this file to the directory
        fs.rename(path.join(basepath, item), path.join(basepath,ext,item))
    }
    else{
        fs.mkdir(ext)
    }
    console.log(item)
    
}
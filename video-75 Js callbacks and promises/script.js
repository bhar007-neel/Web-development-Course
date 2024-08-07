console.log("Neel is a hacker")
// excution of set time will be late bc of asynchronous nature of settimeout.
setTimeout(() => {
    console.log("Im inside settime out function")
}, 2000);

setTimeout(() => {
    console.log("Im inside settime out function2")
}, 1000);

console.log("the end")

const fn = (params) => {
    console.log("Nothing")
    
}
const callback = (arg,fn) => {
    console.log(arg)
    console.log(arg)
    fn()
}
const loadscript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("harry",fn)
    document.head.append(sc)
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
// const http = require('node:http');
// const fs = require("fs")
// import http from"http"
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// import {a,b} from "./mymodule.js"
// console.log(a,b)


import obj from "./mymodule.js"
console.log(obj)

// const a = require("./mymodule2.js")   //require and import are both same things, they help us import our exports

// console.log(a)
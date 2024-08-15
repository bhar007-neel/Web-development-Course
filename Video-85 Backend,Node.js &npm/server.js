// https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
var slugify = require('slugify')

let a =slugify('some string') // some-string
console.group(a)
// if you prefer something other than '-' as separator
const b=slugify('some string$$$$&&&&&^^7', '_')  // some_string
console.log(b)
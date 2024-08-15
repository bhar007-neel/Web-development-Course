const express = require('express')

const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))



// ...

app.use('/blog', blog)

// Middleware 1 -Logger for our aplication
app.use((req, res, next) => {
    console.log(req.headers)
    req.neel = "Im Neelmani";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

// middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.neel = "Im Yash bhai";
    next()
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})



// middle ware holds up the req and deal with it
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!'+ req.neel)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
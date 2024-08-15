const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)

app.get('/', (req, res) => {
  console.log("it is a get request")
  res.send('Hello World221!')
})

app.post('/',(req,res) => {
  console.log("it is a post request")
  res.send('Hello World post!')
})

app.put('/',(req,res) => {
  console.log("it is a put request")
  res.send('Hello World put!')
})

app.get('/index',(req,res)=>{
  console.log("it is a Index")
  res.sendFile("templates/index.html",{root:__dirname})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
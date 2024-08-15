const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post, app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Neelmani1')
})


app.get('/about', (req, res) => {
  res.send('Hello blog')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact')
})

app.get('/contact2', (req, res) => {
  res.send('Intro to Express learning class')
})

app.get('/contact3/:slug', (req, res) => {
  res.send(`Intro to Express thats is our framework ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
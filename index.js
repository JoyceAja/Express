const express = require('express') // import express
const morgan = require('morgan')
const port = 8000; // we will use this later
const app = express() // create an express server
app.use(morgan('dev')) //in dev mode

app.get('/', (req, res) => { //very similar to the http module from yesterday
  res.send('<h1> Hello World!</h1> <a href= page2> page 2</a>')
}) // routes the '/' URL path to produce a response of 'Hello World!'


app.get('/page2', (req, res) => { //very similar to the http module from yesterday
    res.send('<h1> Hello World too!</h1> <a href = /> Home </a>')
  })
//   app.get('/users/:name', (req, res) => {
//     res.send(`hello ${name}! `)
//   })
  app.get('/users/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
  })

  app.get('*', (req, res) => { //think of it as the else statement
    res.redirect('/')
  })

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working

//hello
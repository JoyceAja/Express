const express = require('express') // import express
const morgan = require('morgan')
const port = 8000; // we will use this later
const serveStatic = require('serve-static')
const app = express() // create an express server
app.use(morgan('dev')) //in dev mode
app.use(serveStatic('files'))

// operator = ['add', 'sub','mul','div']

app.get('/:userChoice/:num1/:num2', (req,res) => {
    if(!['add','sub','mul','div'].includes(req.params.userChoice)){
        res.status(404)
        res.send('please use add, sub, mul or div')
    }

    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    
    res.send({
        num1: num1,
        num2: num2,
        result: {
            add: () => num1 + num2,
            sub: () => num1 - num2,
            mul: () => num1 * num2,
            div: () => num1 / num2
        }[req.params.userChoice]() //the () is there because you are calling the method // instead of an if statement
    })
    // res.send(JSON.stringify(obj))
})

app.listen(port, () => {
    console.log(`calculator app listening on port ${port}`)
  })

//   app.get('/:add/:num1/:num2', (req,res) => {
//     let act = req.params.add
//     let num1 = req.params.num1
//     let num2 = req.params.num2
//     let ans = calc(num1,num2,act)
//     let obj = {
//         num1: num1,
//         num2: num2,
//         result: ans
//     }
//     res.send(JSON.stringify(obj))
// })
//   app.get('/:sub/:num1/:num2', (req,res) => {
//     let act = req.params.sub
//     let num1 = req.params.num1
//     let num2 = req.params.num2
//     let ans = calc(num1,num2,act)
//     let obj = {
//         num1: num1,
//         num2: num2,
//         result: ans
//     }
//     res.send(JSON.stringify(obj))
// })
//   app.get('/:mul/:num1/:num2', (req,res) => {
//     let act = req.params.mul
//     let num1 = req.params.num1
//     let num2 = req.params.num2
//     let ans = calc(num1,num2,act)
//     let obj = {
//         num1: num1,
//         num2: num2,
//         result: ans
//     }
//     res.send(JSON.stringify(obj))
// })
//   app.get('/:div/:num1/:num2', (req,res) => {
//     let act = req.params.div
//     let num1 = req.params.num1
//     let num2 = req.params.num2
//     let ans = calc(num1,num2,act)
//     let obj = {
//         num1: num1,
//         num2: num2,
//         result: ans
//     }
//     res.send(JSON.stringify(obj))
// })
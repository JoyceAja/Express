const express = require('express') // import express
const morgan = require('morgan')
const port = 8000; // we will use this later
const app = express() // create an express server
app.use(morgan('dev')) //in dev mode

const randomVal = (arr) => {
    if (Math.round(Math.random())) {
        return arr[1]
    }
    return arr[0]
}
// const aiPic = (val) => {
//     if(val === 'rock'){
//         randomVal('paper','scissors')
//     }
// }
app.get('/rock', (req, res) => {
    let ai = randomVal(['paper', 'scissors'])
    if (ai === 'paper') {
        res.send(`{"user": "rock", "ai": ${ai}, "result": "Win"}`)
    } else if (ai === 'scissors') {
        res.send(`{"user": "rock", "ai": ${ai}, "result": "Lose"}`)
    }
    res.send(`{"user": "rock", "ai": ${ai}, "result": "Tie"}`)
})
// app.get('paper', (req,res) => {
//     app.send()
// })
// app.get('scissor', (req,res) => {
//     app.send()
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
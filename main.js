const express = require('express') // import express
const morgan = require('morgan')
const port = 8000; // we will use this later
const app = express() // create an express server
app.use(morgan('dev')) //in dev mode

const storage = {}
const rps = ['rock', 'paper', 'scissors']
let loss = ['paperscissors', 'rockpaper', 'scissorsrock']

const rpsChoice = () => rps[Math.floor(Math.random) * 3]

const rpsResult = (user, ai) => {
    let userAi = user + ai
    if (user === ai) {
        return 'tie'
    } else if (loss.includes(user)) {
        return 'lose'
    }
    return 'win'
}

const userStat = (user) => storage[user] || { wins: 0, losses: 0, ties: 0 }

const updateStat = (stats, result) => {
    if (result === 'tie') {
        stats.ties += 1
    } else if (result === 'win') {
        stats.wins += 1
    } else {
        stats.losses += 1
    }
}
app.get('/:userChoice', (req, res) => {

    if (!rps.include(userChoice)) {
        res.status(404)
        res.send('Please use one of rock,paper or scissors')
    }
    let ai = rpsChoice()
    let result = rspResult('rock', ai)

    let stats = userStat(req.params.user)
    updateStat(req.params.user, stats, result)

    let response = {
        user: req.params.userChoice,
        ai: ai,
        result: result,
        stats: stats
    }
    res.send(JSON.stringify(response))

})

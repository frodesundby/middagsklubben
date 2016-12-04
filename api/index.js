const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/config')


app.use(bodyParser.json({type: '*/*', limit: '50mb'}))
app.use(morgan('combined'))
require('./config/routes')(app)
app.set('port', config.port)

const logError = (err, req, res, next) => {
    console.error('Error: %s', err.message)
    return next(err)
}

const errorHandler = (err, req, res, next) => {
    res.send({
        status: 500,
        message: err.message || 'internal error'
    })
}

app.use(logError)
app.use(errorHandler)

mongoose.connect(config.dbUrl)
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
console.log('Using MongoDB URL', config.dbUrl)

module.exports = app
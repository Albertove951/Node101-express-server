// import files and packages up here
var express = require('express')
var morgan = require('morgan')
var data = require('./data')

// create your express server below
var app = express()

// add your routes and middleware below
    // app.use(morgan('combined'))
    app.get('/', function (req, res) {
        res.status(200).send('we made it')
    })
    
    app.get('/data', function (req, res) {
        res.send(data)
    })

// finally export the express application
module.exports = app;

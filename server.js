
const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send("first route")
})

module.exports = server
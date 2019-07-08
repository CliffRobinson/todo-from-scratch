
const express = require('express')
const server = express()

const path = require('path')
server.use(express.json())

server.use(express.static(path.join(__dirname,'../public')))

const currentTasksRouter = require('./routes/current')
server.use('/api/current', currentTasksRouter)

server.get('/', (req, res) => {
    res.send("Hello I am front paeg")
})


module.exports = server
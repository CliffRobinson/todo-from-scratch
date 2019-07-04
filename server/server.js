
const express = require('express')
const server = express()
server.use(express.json())

const currentTasksRouter = require('./routes/current')
server.use('/api/current', currentTasksRouter)

server.get('/', (req, res) => {
    res.send("Hello I am front paeg")
})


module.exports = server
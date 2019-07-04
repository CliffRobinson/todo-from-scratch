
const express = require('express')
const server = express()

const currentTasksRouter = require('./routes/current')

server.use('/api/current', currentTasksRouter)

module.exports = server
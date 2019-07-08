const router = require('express').Router()

const currentDB = require('../db/current')

router.get("/", (req, res) => {
    currentDB.getCurrent()
        .then(current => {
            res.json(current)
        })
})

router.post("/", (req, res) => {
    const task = req.body
    console.log(`Task: ${task}`)
    currentDB.addCurrent(task)
        .then (result => {
            res.json(result)
        })
})

module.exports = router
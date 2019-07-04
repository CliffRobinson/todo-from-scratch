const router = require('express').Router()

const currentDB = require('../db/current')

router.get("/", (req, res) => {
    currentDB.getCurrent()
        .then(current => {
            res.json(current)
        })
})

module.exports = router
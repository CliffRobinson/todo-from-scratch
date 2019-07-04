const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Dees de tasks")
})

module.exports = router
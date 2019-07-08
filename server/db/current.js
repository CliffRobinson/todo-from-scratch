const conn = require('./connection')


function getCurrent() {
    return conn('current')
}

function addCurrent(task) {
    return conn('current')
        .insert(task)
}

module.exports = {
    getCurrent,
    addCurrent
}
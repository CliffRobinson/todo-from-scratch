const conn = require('./connection')


function getCurrent() {
    return conn('current')
}


module.exports = {
    getCurrent
}
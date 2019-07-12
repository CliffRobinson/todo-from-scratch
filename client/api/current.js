import request from 'superagent'



export function getCurrent() {
    return dispatch => {
        request
            .get('/api/current')
            .then(res => {
                console.log(`api/GetCurrent result is:`)
                console.log(res.body)
            })
    }
}
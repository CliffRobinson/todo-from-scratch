import request from 'superagent'
import {receiveCurrent} from '../actions/current'


export function getCurrent() {
    return dispatch => {
        request
            .get('/api/current')
            .then(res => {
                console.log(`api/GetCurrent result is:`)
                console.log(res.body)
                dispatch(receiveCurrent(res.body))
            })
    }
}
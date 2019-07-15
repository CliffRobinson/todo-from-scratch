import {RECEIVE_CURRENT} from '../actions/current'

export default function (state = [], action) {
    console.log("Current reducer received action:")
    console.log(action)
    switch (action.type) {
        case RECEIVE_CURRENT:
            return action.current
        default:
            return state
    }
}
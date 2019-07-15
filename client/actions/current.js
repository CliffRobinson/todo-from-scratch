export const RECEIVE_CURRENT = 'RECEIVE_CURRENT'

export function receiveCurrent(current) {
    return {
        type: RECEIVE_CURRENT,
        current
    }
}
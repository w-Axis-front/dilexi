import {BUY, UPDATE_TIME} from './types'

export function buy(chosenProduct) {
    return {
        type: BUY,
        payload: chosenProduct
    }
}

export function updateTime(time) {
    return {
        type: UPDATE_TIME,
        payload: time
    }
}
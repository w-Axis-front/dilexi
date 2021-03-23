import {BUY} from './types'

export function buy(chosenProduct) {
    return {
        type: BUY,
        payload: chosenProduct
    }
}

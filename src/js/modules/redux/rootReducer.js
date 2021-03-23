import {combineReducers} from 'redux';
import {BUY} from './types';

function buyProducts(chosenProduct, chosenProducts) {
    return [...chosenProducts, chosenProduct];
}

const initialCartState = {
    chosenProducts: [],
    total: 0,
    promoTotal: 0
};

function cartReducer(state = initialCartState, action) {
    switch (action.type) {
        case BUY:
            return {
                ...state,
                chosenProducts: buyProducts(action.payload, state.chosenProducts),
                total: state.total + 23,
                promoTotal: state.promoTotal + 23
            };
        default: return state
    }
}

export const rootReducer = combineReducers({
    cart: cartReducer
});
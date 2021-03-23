import { combineReducers } from "redux";
import { BUY, UPDATE_TIME } from "./types";

const initialCartState = {
	chosenProducts: [],
	price: 0,
	oldPrice: 0,
	total: 0,
	promoTotal: 0
};

function timeReducer(state = null, action) {
	switch (action.type) {
		case UPDATE_TIME:
			return action.payload;
		default:
			return state;
	}
}

function cartReducer(state = initialCartState, action) {
	switch (action.type) {
		case BUY:
			return {
				...state,
				chosenProducts: buyProducts(action.payload, state.chosenProducts),
				total: state.total + 23,
				promoTotal: state.promoTotal + 23
			};
		default:
			return state;
	}
}

export const rootReducer = combineReducers({
	cart: cartReducer,
	time: timeReducer
});

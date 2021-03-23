import { combineReducers } from "redux";
import {
	SET_PRICES,
	ADD_ITEM,
	INCREMENT_ITEM,
	DECREMET_ITEM,
	DELETE_ITEM
} from "./types";

const initialCartState = {
	chosenProducts: [],
	price: 0,
	oldPrice: 0
};

function cartReducer(state = initialCartState, action) {
	switch (action.type) {
		case SET_PRICES:
			return {
				...state,
				price: action.payload.price,
				oldPrice: action.payload.oldPrice
			};
		case ADD_ITEM:
			const isAlreadyBuyed =
				state.chosenProducts.filter((p) => p.id == action.payload.id).length >
				0;
			return isAlreadyBuyed
				? state
				: {
						...state,
						chosenProducts: [...state.chosenProducts, action.payload]
				  };
		case INCREMENT_ITEM:
			let itemFound = false;
			const itemsWithInc = state.chosenProducts.map((product) => {
				if (product.id == action.payload) {
					itemFound = true;
					product.count++;
				}
				return product;
			});
			return {
				...state,
				chosenProducts: itemFound
					? itemsWithInc
					: [...itemsWithInc, { id: action.payload, count: 1 }]
			};
		case DECREMET_ITEM:
			const itemsWithDec = state.chosenProducts.reduce((accum, product) => {
				if (product.id == action.payload) {
					if (product.count > 1) {
						product.count--;
						accum.push(product);
					}
				} else {
					accum.push(product);
				}
				return accum;
			}, []);
			return {
				...state,
				chosenProducts: itemsWithDec
			};
		case DELETE_ITEM:
			const itemsWithoutDel = state.chosenProducts.filter(
				(p) => p.id != action.payload
			);
			return {
				...state,
				chosenProducts: itemsWithoutDel
			};
		default:
			return state;
	}
}

export const rootReducer = combineReducers({
	cart: cartReducer
});

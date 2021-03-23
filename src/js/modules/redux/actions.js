import { SET_PRICES, UPDATE_ITEMS, DELETE_ITEM, UPDATE_TIME } from "./types";

export function setPrices({ price, oldPrice }) {
	return {
		type: SET_PRICES,
		payload: { price, oldPrice }
	};
}

export function updateItems(chosenProduct) {
	return {
		type: UPDATE_ITEMS,
		payload: chosenProduct
	};
}

export function removeItem(chosenProduct) {
	return {
		type: DELETE_ITEM,
		payload: chosenProduct
	};
}

export function updateTime(time) {
	return {
		type: UPDATE_TIME,
		payload: time
	};
}

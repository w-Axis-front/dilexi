import {
	SET_PRICES,
	ADD_ITEM,
	INCREMENT_ITEM,
	DECREMET_ITEM,
	DELETE_ITEM
} from "./types";

export function setPrices({ price, oldPrice }) {
	return {
		type: SET_PRICES,
		payload: { price, oldPrice }
	};
}

export function addItem(chosenProduct) {
	return {
		type: ADD_ITEM,
		payload: chosenProduct
	};
}

export function incrementItem(id) {
	return {
		type: INCREMENT_ITEM,
		payload: id
	};
}

export function decrementItem(id) {
	return {
		type: DECREMET_ITEM,
		payload: id
	};
}

export function removeItem(chosenProduct) {
	return {
		type: DELETE_ITEM,
		payload: chosenProduct
	};
}

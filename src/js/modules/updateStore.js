// @ts-check
import _ from "underscore";
import {
	setPrices,
	addItem,
	incrementItem,
	decrementItem,
	removeItem
} from "./redux/actions";
import { store } from "../main";

export default function updateStore() {
	//get DOM elements
	const cardBtns = $(".js_card-btn");
	const incItem = $(".js_inc-item");
	const decItem = $(".js_dec-item");

	// const card =
	//set card prices
	store.dispatch(setPrices({ price: 23, oldPrice: 109 }));

	//set card events
	cardBtns.on("click", function (e) {
		e.preventDefault();
		//get card
		const card = $(this).parents(".assortment__card");
		if (!card) return;
		//dispatch new item
		store.dispatch(
			addItem({
				id: card.data("id"),
				count: +card.find(".assortment__card-count-number").text()
			})
		);
	});

	incItem.on("click", function (e) {
		e.preventDefault();
		//get card
		const card = $(this).parents(".assortment__card");
		if (!card) return;

		//dispatch increment item
		store.dispatch(incrementItem(card.data("id")));
	});

	decItem.on("click", function (e) {
		e.preventDefault();
		//get card
		const card = $(this).parents(".assortment__card");
		if (!card) return;

		//dispatch increment item
		store.dispatch(decrementItem(card.data("id")));
	});

	// if (cardBtns.length) {
	// 	for (let i = 0; i < cardBtns.length; i++) {
	// 		cardBtns[i].addEventListener("click", function () {
	// 			const cardBtnParent = $(this).parent();
	// 			const card = $(this).parents(".assortment__card");
	// 			const amountToBuy =
	// 				Number(cardBtnParent.find(".assortment__card-count-number").text()) ||
	// 				1;
	// 			// console.log("amountToBuy", amountToBuy);

	// 			store.dispatch(buy({ amount: amountToBuy, id: 0 }));
	// 			cardBtnParent
	// 				.find(".assortment__card-bin-btn")
	// 				.css({ display: "flex" });
	// 			cardBtnParent
	// 				.find(".assortment__card-link")
	// 				.css({ display: "inline-flex" });
	// 			card.css({ border: "2px solid #000000" });
	// 		});
	// 	}
	// }

	let {
		chosenProducts: chosenProductsPrev,
		price: pricePrev,
		oldPrice: oldPricePrev
	} = store.getState().cart;

	store.subscribe(() => {
		const { chosenProducts, price, oldPrice } = store.getState().cart;

		if (_.isEqual(chosenProducts, chosenProductsPrev)) {
			console.log(chosenProducts);
		}
		// cart.textContent = state.cart;
		// [addBtn, subBtmentn].forEach(btn => {
		//     btn.disabled = state.data.disabled;
		// })

		chosenProductsPrev = chosenProducts;
		pricePrev = price;
		oldPricePrev = oldPrice;
	});
}

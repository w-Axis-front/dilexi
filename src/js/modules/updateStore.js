// @ts-check
import { setPrices, updateItems, removeItem } from "./redux/actions";
import { store } from "../main";

export default function updateStore() {
	//get DOM elements
	const cardBtns = $(".js_card-btn");
	// const card =
	//set card prices
	store.dispatch(setPrices({ price: 23, oldPrice: 109 }));

	//set card events
	cardBtns.on("click", function (e) {
		e.preventDefault();
		//get card
		const card = $(this).parents(".assortment__card");
		if (!card) return;

		store.dispatch(
			updateItems({
				id: card.data("id"),
				count: +card.find(".assortment__card-count-number").text()
			})
		);
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

	store.subscribe(() => {
		const state = store.getState();
		console.log("state.cart", state.cart);
		// cart.textContent = state.cart;
		// [addBtn, subBtmentn].forEach(btn => {
		//     btn.disabled = state.data.disabled;
		// })
	});
}

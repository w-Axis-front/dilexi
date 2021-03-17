import {buy} from './redux/actions';
import {store} from '../main';

export default function updateStore() {
    const cardBtns = document.getElementsByClassName("js_card-btn");

    if (cardBtns.length) {
        for (let i = 0; i < cardBtns.length; i++) {
            cardBtns[i].addEventListener("click", function () {
                const cardBtnParent = $(this).parent();
                const card = $(this).parents(".assortment__card");
                const amountToBuy = Number(cardBtnParent.find(".assortment__card-count-number").text()) || 1;
                // console.log("amountToBuy", amountToBuy);

                store.dispatch(buy({amount: amountToBuy, id: 0}));
                cardBtnParent.find(".assortment__card-bin-btn").css({"display": "flex"});
                cardBtnParent.find(".assortment__card-link").css({"display": "inline-flex"});
                card.css({"border": "2px solid #000000"});
            });
        }
    }

    store.subscribe(() => {
        const state = store.getState();
        // console.log("state.cart", state.cart);
        // cart.textContent = state.cart;
        // [addBtn, subBtn].forEach(btn => {
        //     btn.disabled = state.data.disabled;
        // })
    });

    store.dispatch({ type: 'INIT_STORE_DATA' });
}
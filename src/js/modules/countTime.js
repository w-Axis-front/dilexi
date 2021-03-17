import {store} from '../main';
import {updateTime} from "./redux/actions";

export default function countTime() {
    const DEADLINE = new Date(Date.parse(new Date()) + 6 * 60 * 60 * 1000);
    const clock = document.getElementById("countdown");
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    // const secondsSpan = clock.querySelector('.seconds');

    function getTimeRemaining(endtime) {
        // DEADLINE format: getTimeRemaining Wed Mar 17 2021 23:44:32 GMT+0200 (Восточная Европа, стандартное время)

        let t;
        if (endtime.total === undefined) {
            t = Date.parse(endtime) - Date.parse(new Date());
        } else {
            t = endtime.total - 1000;
        }

        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock() {
        const state = store.getState();

        if (state.time === null) {
            const t = getTimeRemaining(DEADLINE);
            store.dispatch(updateTime(t));
        } else {
            store.dispatch(updateTime(state.time));
        }

        function updateClock() {
            const state = store.getState();
            const t = getTimeRemaining(state.time);
            store.dispatch(updateTime(t));
            if (t.total <= 999) {
                clearInterval(timeInterval);
            }
        }

        const timeInterval = setInterval(updateClock, 1000);
    }

    initializeClock();

    store.subscribe(() => {
        const state = store.getState();
        // console.log("state.time", state.time);
        daysSpan.innerHTML = state.time.days;
        hoursSpan.innerHTML = ('0' + state.time.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + state.time.minutes).slice(-2);
        // secondsSpan.innerHTML = ('0' + state.time.seconds).slice(-2);
    });
}
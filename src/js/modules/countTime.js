import {store} from '../main';
import {updateTime} from "./redux/actions";

export default function countTime() {
    const DEADLINE = new Date(Date.parse(new Date()) + 6 * 60 * 60 * 1000);
    const clock = document.getElementById("countdown");
    // const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');

    // const secondsSpan = clock.querySelector('.seconds');

    function getTimeRemaining(endtime) {
        let t;
        if (!endtime.total) {
            t = Date.parse(endtime) - Date.parse(new Date());
        } else {
            t = endtime.total - 1000;
        }

        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const remindedTimeObg = {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
        localStorage.setItem("remindedTimeDilexi", JSON.stringify(remindedTimeObg));
        return remindedTimeObg;
    }

    const INTERVAL = 1000; // ms
    function initializeClock() {
        let remindedTime;
        if (localStorage && localStorage.getItem("remindedTimeDilexi")) {
            remindedTime = JSON.parse(localStorage.getItem("remindedTimeDilexi"));
        } else {
            remindedTime = DEADLINE;
        }
        const t = getTimeRemaining(remindedTime);
        store.dispatch(updateTime(t));

        let expected = Date.now() + INTERVAL;
        setTimeout(step, INTERVAL);

        function step() {
            const dt = Date.now() - expected; // the drift (positive for overshooting)
            if (dt > INTERVAL) {
                console.log('overshooting')
                // something really bad happened. Maybe the browser (tab) was inactive?
                // possibly special handling to avoid futile "catch up" run
            }
            const state = store.getState();
            const t = getTimeRemaining(state.time);

            if (t.total > 999) {
                store.dispatch(updateTime(t));
                expected += INTERVAL;
                setTimeout(step, Math.max(0, INTERVAL - dt)); // take into account drift
            }
        }
    }

    initializeClock();

    store.subscribe(() => {
        const state = store.getState();
        // daysSpan.innerHTML = state.time.days;
        hoursSpan.innerHTML = ('0' + state.time.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + state.time.minutes).slice(-2);
        // secondsSpan.innerHTML = ('0' + state.time.seconds).slice(-2);
    });
}
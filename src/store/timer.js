import {makeObservable, observable, computed, action} from 'mobx';

class Timer {
    count = 0;

    constructor() {
        makeObservable(
            this,
            {
                count: observable,
                incrementTimer: action,
                getTimerResult: computed,
            },
            {deep: false}
        );
    }

    incrementTimer() {
        this.count++;
    }

    get getTimerResult() {
        //* This computed property
        //* If count changes the method returns new result
        return `${this.count} seconds passed from start`;
    }
}

export const TimerInstance = new Timer();

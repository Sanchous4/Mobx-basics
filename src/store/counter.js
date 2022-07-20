import {makeAutoObservable} from 'mobx';

class Counter {
    count = 0;
    constructor() {
        makeAutoObservable(this);
    }

    increment = () => {
        this.count += 1;
    };

    decrement = () => {
        this.count -= 1;
    };
}

export const CounterInstance = new Counter();

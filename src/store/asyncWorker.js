import {makeAutoObservable} from 'mobx';
import {flow} from 'mobx';

const sleep = (milliseconds) =>
    new Promise((resolve, reject) => setTimeout(resolve, milliseconds));

const getRandomNumber = () => Math.round(Math.random() * 100);

class AsyncWorker {
    number = 0;
    loader = 0;
    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async generateNumberByAsync() {
        this.loader = 0;
        while (this.loader < 100) {
            await sleep(10);
            this.loader += 1;
        }
        this.number = getRandomNumber();
    }

    generateNumberByPromise() {
        if (this.loader >= 100) this.loader = 0;
        const newWaiter = sleep(10);

        const incrementLoader = () => {
            this.loader++;
            if (this.loader < 100) this.generateNumberByPromise();
            else this.number = getRandomNumber();
        };

        const resetLoader = () => {
            this.loader = 100;
        };

        newWaiter.then(incrementLoader, resetLoader);
    }

    *generateNumberByFlow() {
        this.loader = 0;
        while (this.loader < 100) {
            yield sleep(10);
            this.loader += 1;
        }
        this.number = getRandomNumber();
    }

    generateNumberByManualFlow = flow(
        /**
         * @param {AsyncWorker} self
         */
        function* (self) {
            self.loader = 0;
            while (self.loader < 100) {
                yield sleep(10);
                self.loader += 1;
            }
            self.number = getRandomNumber();
        }
    );
}

export const AsyncWorkerInstance = new AsyncWorker();

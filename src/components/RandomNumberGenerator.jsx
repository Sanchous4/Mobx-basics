import {observer} from 'mobx-react-lite';
import {AsyncWorkerInstance} from '../store/asyncWorker';

const LoaderStyles = `
    .loader {
        height: 40px;
        width: 200px;
        border: 5px solid red;
        border-radius: 5px;
        margin: 0%;
        padding: 0%;
    }

    .loaderLabel {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        /* mix-blend-mode: difference; */
        height: 40px;
        width: 200px;
        margin: 0%;
        padding: 0%;
    }

    .loader .bar {
        margin: 0%;
        padding: 0%;
        position: relative;
        height: 100%;
        background-color: #03fc03;
    }
`;

const Loader = ({percentageDone}) => {
    return (
        <div>
            <div className='loader'>
                <div className='bar' style={{width: `${percentageDone}%`}}>
                    <div className='loaderLabel'>
                        <h3>{percentageDone}%</h3>
                    </div>
                </div>
            </div>

            <style>{LoaderStyles}</style>
        </div>
    );
};

export default observer(() => {
    const getRandomNumberAsync = () => {
        AsyncWorkerInstance.generateNumberByAsync();
    };

    const getRandomNumberPromise = () => {
        AsyncWorkerInstance.generateNumberByPromise();
    };

    const getRandomNumberFlow = () => {
        AsyncWorkerInstance.generateNumberByFlow();
    };

    const getRandomNumberManualFlow = () => {
        AsyncWorkerInstance.generateNumberByManualFlow();
    };
    return (
        <div>
            <h2>Number: {AsyncWorkerInstance.number}</h2>
            <Loader percentageDone={AsyncWorkerInstance.loader} />
            <p>
                <button onClick={getRandomNumberAsync}>
                    Generate by Async
                </button>
            </p>

            <p>
                <button onClick={getRandomNumberPromise}>
                    Generate by Promise
                </button>
            </p>

            <p>
                <button onClick={getRandomNumberFlow}>Generate by Flow</button>
            </p>

            <p>
                <button onClick={getRandomNumberManualFlow}>
                    Generate by Manual Flow
                </button>
            </p>
        </div>
    );
});

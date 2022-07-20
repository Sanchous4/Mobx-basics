import {CounterInstance} from '../store/counter';
import AddSpacer from './AddSpacer';
import {observer} from 'mobx-react-lite';

const SimpleCounter = observer(() => (
    <div>
        <h2>{CounterInstance.count}</h2>
        <button onClick={() => CounterInstance.increment()}>PLUS</button>
        <AddSpacer />
        <button onClick={() => CounterInstance.decrement()}>MINUS</button>
    </div>
));

export default SimpleCounter;

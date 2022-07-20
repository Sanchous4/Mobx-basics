import {observer} from 'mobx-react-lite';
import {TimerInstance} from '../store/timer';
import {useEffect} from 'react';

export default observer(() => {
    useEffect(() => {
        const intervalController = setInterval(() => {
            TimerInstance.incrementTimer();
        }, 1000);

        return () => clearInterval(intervalController);
    }, []);
    return <div>{TimerInstance.getTimerResult}</div>;
});

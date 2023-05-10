/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selector/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1>
                value:
                {' '}
                {counterValue}
            </h1>
            <button onClick={increment} type="button">increment</button>
            <button onClick={decrement} type="button">decrement</button>
        </div>
    );
};

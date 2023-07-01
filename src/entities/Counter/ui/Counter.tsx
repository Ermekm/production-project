/* eslint-disable i18next/no-literal-string */
import { t } from 'i18next';
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
            <h1 data-testid="value-title">
                {t('value')}
                :
                {' '}
                {counterValue}
            </h1>
            <button
                data-testid="increment-btn"
                onClick={increment}
                type="button"
            >
                {t('increment')}
            </button>
            <button
                data-testid="decrement-btn"
                onClick={decrement}
                type="button"
            >
                {t('decrement')}
            </button>
        </div>
    );
};

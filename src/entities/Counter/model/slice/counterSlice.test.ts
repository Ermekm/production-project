import { counterReducer } from 'entities/Counter';
import { StateSchema } from '../../../../app/providers/StoreProvier/config/StateSchema';
import { CounterSchema } from '../types/counterSchema';
import { counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});

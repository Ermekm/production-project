import { StateSchema } from 'app/providers/StoreProvier/config/StateSchema';

export const getCounterValue = (state: StateSchema) => state.counter.value;

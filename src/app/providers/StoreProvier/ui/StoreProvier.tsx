import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProvierProps {
    children?: ReactNode;
    initialState?: StateSchema
}

export const StoreProvier = (props: StoreProvierProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

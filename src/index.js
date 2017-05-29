import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import RootContainer from './RootContainer';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk)
        )
    );

    return store;
}

const store = configureStore();

render(
    <Provider store={store}>
        <RootContainer />
    </Provider>,
    document.getElementById('root')
);

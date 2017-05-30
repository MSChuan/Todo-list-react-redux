import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import RootContainer from './RootContainer';
import rootReducer from './Reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialState } from './ConstantsHelper';

const store = createStore(rootReducer, initialState);

render(
    <Provider store={store}>
        <RootContainer />
    </Provider>,
    document.getElementById('root')
);

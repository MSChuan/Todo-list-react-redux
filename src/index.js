import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import RootContainer from './Containers/RootContainer';
import rootReducer from './Reducers/ReducerFactory';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialState } from './Helpers/ConstantsHelper';
import DevTools from './DebugTool/DevTools';

const store = createStore(rootReducer, initialState, DevTools.instrument());

render(
    <Provider store={store}>
        <div>
            <RootContainer />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

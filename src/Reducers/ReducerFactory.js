import { combineReducers } from 'redux';
import { initialState } from '../Helpers/ConstantsHelper';

const todoItems = (state = initialState.todoItems, action) => {
    switch(action.type) {
        case "AddItem":
            return [...state, {
                content: action.content,
                isDone: false
            }];
        case "Done":
            return [...state.slice(0, action.index),
                    Object.assign({}, state[action.index], {isDone: !state[action.index].isDone}),
                    ...state.slice(action.index + 1)];
        default:
            return state;
    }
};

const shownMode = (state = initialState.shownMode, action) => {
    switch(action.type) {
        case "SetMode":
            return action.shownMode;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todoItems,
    shownMode
});

export default rootReducer;

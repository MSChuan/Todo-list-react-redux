import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import actionFactory from '../Actions/ActionFactory';
import { bindActionCreators } from 'redux';
import TodoList from '../Components/TodoList';
import ShownModes from '../Components/ShownModes';
import AddTodo from '../Components/AddTodo';

class RootContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { state, actions } = this.props;
        return (<div>
                    <AddTodo actions={actions} />
                    <TodoList state={state} actions={actions} />
                    <ShownModes shownMode={state.shownMode} actions={actions} />
                </div>);
    }
}

RootContainer.propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object
};

const buildActionDispatcher = (dispatch) => ({
    actions: bindActionCreators(actionFactory, dispatch)
});

export default connect(
(state) => {
    return ({ state: state });
}, buildActionDispatcher)(RootContainer);

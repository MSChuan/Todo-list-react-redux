import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import actionFactory from '../Actions/ActionFactory';
import { bindActionCreators } from 'redux';
import TodoList from '../Components/TodoList';
import ShownModes from '../Components/ShownModes';

class RootContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let input = '';
        const { state, actions } = this.props;
        return (<div>
                    <input type="text" ref={(text) => {input = text;}} placeholder={"Todo"} />
                    <input type="button" onClick={() => actions.AddItem(input.value)} value="Add" />
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

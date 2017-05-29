import React, { PropTypes } from 'react';

class TodoList extends React.Component {
    render() {
        const { state, actions } = this.props;
        const todoList = state.todoItems.map((item, index) => {
            let styleString = 'visible';
            if((state.shownMode === 1 && item.isDone) || (state.shownMode === 2 && !item.isDone)) {
                styleString = 'hidden';
            }
            return (<li style={{textDecoration: item.isDone ? 'line-through' : 'none', visibility: styleString}} 
                        onClick={() => actions.Done(index)}>
                        {item.content}
                    </li>);
        });
        return <ul>{todoList}</ul>;
    }
}

TodoList.propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object
};

export default TodoList;
import React, { PropTypes } from 'react';

class TodoList extends React.Component {
    render() {
        const { state, actions } = this.props;
        const todoList = state.todoItems.map((item, index) => {
            if((state.shownMode === "Todo" && item.isDone) || (state.shownMode === "Done" && !item.isDone)) {
                return;
            }
            return (<li style={{textDecoration: item.isDone ? 'line-through' : 'none'}} 
                        onClick={() => actions.Done(index)}>
                        <a href="#">{item.content}</a>
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
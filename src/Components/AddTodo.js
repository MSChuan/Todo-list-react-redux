import React, { PropTypes } from 'react';

class AddTodo extends React.Component {
    render() {
        const { actions } = this.props;
        let input = '';
        return (<div>
                    <input type="text" ref={(text) => {input = text;}} placeholder={"Todo"} />
                    <input type="button" onClick={() => actions.AddItem(input.value)} value="Add" />
                </div>);
    }
}

AddTodo.propTypes = {
    actions: PropTypes.object
};

export default AddTodo;
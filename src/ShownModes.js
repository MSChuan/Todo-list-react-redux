import React, { PropTypes } from 'react';

class ShownModes extends React.Component {
    render() {
        const { shownMode, actions } = this.props;
        const shownModes = ["All", "Todo", "Done"].map((item, index) => {
            return (<li style={{color: shownMode === index ? "red" : "black"}} onClick={() => actions.SetMode(index)}>{item}</li>);
        });
        return <ul>{shownModes}</ul>;
    }
}

ShownModes.propTypes = {
    shownMode: PropTypes.number,
    actions: PropTypes.object
};

export default ShownModes;
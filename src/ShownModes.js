import React, { PropTypes } from 'react';
import { AppConstants } from './ConstantsHelper';

class ShownModes extends React.Component {
    render() {
        const { shownMode, actions } = this.props;
        const shownModes = AppConstants.ShownModesString.map((item, index) => {
            return (<li onClick={() => actions.SetMode(item)}><a href="#" style={{color: item === shownMode ? "red" : "black"}}>{item}</a></li>);
        });
        return <ul>{shownModes}</ul>;
    }
}

ShownModes.propTypes = {
    shownMode: PropTypes.string,
    actions: PropTypes.object
};

export default ShownModes;
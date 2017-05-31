import React, { PropTypes } from 'react';
import { AppConstants } from '../Helpers/ConstantsHelper';

class ShownModes extends React.Component {
    render() {
        const { shownMode, actions } = this.props;
        const shownModes = AppConstants.ShownModesString.map((item, index) => {
            return (<input type="button" value={item} style={{color: item === shownMode ? "red" : "black"}} onClick={() => actions.SetMode(item)} />);
        });
        return <div>{shownModes}</div>;
    }
}

ShownModes.propTypes = {
    shownMode: PropTypes.string,
    actions: PropTypes.object
};

export default ShownModes;
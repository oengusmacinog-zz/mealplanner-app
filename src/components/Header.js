import React from 'react';
import PropTypes from 'prop-types';
// import {
//   DocumentCard,
//   DocumentCardPreview,
//   DocumentCardTitle,
//   DocumentCardActivity
// } from 'office-ui-fabric-react/lib/DocumentCard';

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>My Meal Planner</h1>
                <h3 className="tagline"><span>{this.props.tagline}</span></h3>
            </header>
        )
    }
}


Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

export default Header;

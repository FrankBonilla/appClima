import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return(
        <nav>
            <div className="nav-wrapper ligth-blue darken-2"></div>
            <a href="#!" className="brand-logo">{titulo}</a>
        </nav>
    )
}
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;
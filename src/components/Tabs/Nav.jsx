import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Nav = ({ className, styles, children }) => (
  <ul className={`nav nav-tabs ${className}`} style={styles}>
    {children}
  </ul>
);

Nav.propTypes = {
  className: PropTypes.string,
  styles: stylePropType,
  children: PropTypes.node.isRequired,
};

Nav.defaultProps = {
  className: '',
  styles: {},
};

export default Nav;

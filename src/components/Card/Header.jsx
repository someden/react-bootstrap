import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Header = ({ className, style, children }) => (
  <div className={`card-header ${className}`} style={style}>
    {children}
  </div>
);

Header.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  children: PropTypes.node,
};

Header.defaultProps = {
  className: '',
  style: {},
  children: null,
};

export default Header;

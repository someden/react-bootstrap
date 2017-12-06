import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ className, children, ...props }) => (
  <div {...props} className={`card-header ${className}`}>
    {children}
  </div>
);

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  className: '',
  children: null,
};

export default Header;

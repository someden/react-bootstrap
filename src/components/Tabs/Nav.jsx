import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Nav = ({ className, children, ...props }) => (
  <ul {...props} className={cn('nav', 'nav-tabs', className)}>
    {children}
  </ul>
);

Nav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Nav.defaultProps = {
  className: '',
};

export default Nav;

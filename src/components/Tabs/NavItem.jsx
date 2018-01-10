import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const NavItem = ({ title, active, className, onClick, ...props }) => (
  <li {...props} className={cn('nav-item', className)}>
    {/* eslint-disable jsx-a11y/anchor-is-valid */}
    <a
      href='#'
      className={cn('nav-link', { active })}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {title}
    </a>
  </li>
);

NavItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

NavItem.defaultProps = {
  title: '',
  active: false,
  className: '',
  onClick: () => {},
};

export default NavItem;

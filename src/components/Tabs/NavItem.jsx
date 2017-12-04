import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const NavItem = ({ title, active, className, styles, onClick }) => (
  <li className={`nav-item ${className}`} style={styles}>
    {/* eslint-disable jsx-a11y/anchor-is-valid */}
    <a
      href='#'
      className={`nav-link ${active ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
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
  styles: stylePropType,
  onClick: PropTypes.func,
};

NavItem.defaultProps = {
  title: '',
  active: false,
  className: '',
  styles: {},
  onClick: () => {},
};

export default NavItem;

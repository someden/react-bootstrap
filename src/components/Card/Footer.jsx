import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

const Footer = ({ className, style, children }) => (
  <div className={`card-footer ${className}`} style={style}>
    {children}
  </div>
);

Footer.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  children: PropTypes.node,
};

Footer.defaultProps = {
  className: '',
  style: {},
  children: null,
};

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ className, children, ...props }) => (
  <div {...props} className={`card-footer ${className}`}>
    {children}
  </div>
);

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Footer.defaultProps = {
  className: '',
  children: null,
};

export default Footer;

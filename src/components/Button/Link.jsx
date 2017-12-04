import React from 'react';
import PropTypes from 'prop-types';

import buttonColors from '../../utils/buttonColors';
import sizes from '../../utils/sizes';

const Link = ({ outline, color, size, disabled, className, children, ...props }) => (
  <a
    {...props}
    className={`
      btn btn${outline ? '-outline' : ''}-${color}
      btn-${size}
      ${disabled ? 'disabled' : ''}
      ${className}
    `}
  >
    {children}
  </a>
);

Link.propTypes = {
  outline: PropTypes.bool,
  color: PropTypes.oneOf(buttonColors),
  size: PropTypes.oneOf(sizes),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  outline: false,
  color: 'primary',
  size: 'md',
  disabled: false,
  className: '',
  children: null,
};

export default Link;

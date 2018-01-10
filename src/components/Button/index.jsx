import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Group from './Group';
import Link from './Link';

import buttonColors from '../../utils/buttonColors';
import sizes from '../../utils/sizes';

const Button = ({ outline, color, size, className, children, ...props }) => (
  <button
    {...props}
    className={cn('btn', `btn-${size}`, `btn${outline ? '-outline' : ''}-${color}`, className)}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  outline: PropTypes.bool,
  color: PropTypes.oneOf(buttonColors),
  size: PropTypes.oneOf(sizes),
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  outline: false,
  color: 'primary',
  size: 'md',
  className: '',
  children: null,
};

Button.Group = Group;
Button.Link = Link;

export default Button;

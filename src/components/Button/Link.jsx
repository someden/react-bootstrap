import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import buttonColors from '../../utils/buttonColors';
import sizes from '../../utils/sizes';

const Link = ({ tag: Tag, outline, color, size, disabled, className, children, ...props }) => (
  <Tag
    {...props}
    className={cn(
      'btn',
      `btn-${size}`,
      `btn${outline ? '-outline' : ''}-${color}`,
      { disabled },
      className
    )}
  >
    {children}
  </Tag>
);

Link.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  outline: PropTypes.bool,
  color: PropTypes.oneOf(buttonColors),
  size: PropTypes.oneOf(sizes),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Link.defaultProps = {
  tag: 'a',
  outline: false,
  color: 'primary',
  size: 'md',
  disabled: false,
  className: '',
  children: null,
};

export default Link;

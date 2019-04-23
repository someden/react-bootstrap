import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import createComponent from '../../utils/createComponent';
import buttonColors from '../../utils/buttonColors';
import sizes from '../../utils/sizes';

const Button = forwardRef(({ tag, type, active, outline, color, size, ...props }, ref) => {
  const Tag = props.href && tag === 'button' ? 'a' : tag;

  const className = cn(
    'btn',
    `btn-${size}`,
    `btn${outline ? '-outline' : ''}-${color}`,
    { active, disabled: props.disabled },
    props.className
  );

  return <Tag ref={ref} {...props} {...(Tag === 'button' ? { type } : {})} className={className} />;
});

Button.displayName = 'Button';

Button.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(buttonColors),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
};

Button.defaultProps = {
  active: false,
  className: undefined,
  color: 'primary',
  disabled: false,
  href: undefined,
  outline: false,
  size: 'md',
  tag: 'button',
  type: 'button',
};

Button.Group = createComponent('Button.Group', 'btn-group');

Button.Toolbar = createComponent('Button.Toolbar', 'btn-toolbar');

export default Button;

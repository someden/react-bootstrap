import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import buttonColors from '../../utils/buttonColors';
import createComponent from '../../utils/createComponent';
import sizes from '../../utils/sizes';

const Group = createComponent('Button.Group', 'btn-group');

class Button extends Component {
  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    type: PropTypes.string,
    active: PropTypes.bool,
    outline: PropTypes.bool,
    color: PropTypes.oneOf(buttonColors),
    size: PropTypes.oneOf(sizes),
    innerRef: PropTypes.func,
  };

  static defaultProps = {
    tag: 'button',
    type: 'button',
    active: false,
    outline: false,
    color: 'primary',
    size: 'md',
    innerRef: null,
  };

  static Group = Group;

  render() {
    const { tag, type, active, outline, color, size, innerRef, ...props } = this.props;

    const Tag = props.href && tag === 'button' ? 'a' : tag;

    const className = cn(
      'btn',
      `btn-${size}`,
      `btn${outline ? '-outline' : ''}-${color}`,
      { active, disabled: props.disabled },
      props.className
    );

    return (
      <Tag
        {...props}
        type={Tag === 'button' ? type : undefined}
        ref={typeof innerRef === 'function' ? innerRef : undefined}
        className={className}
      />
    );
  }
}

export default Button;

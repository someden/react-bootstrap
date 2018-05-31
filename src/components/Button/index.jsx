import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Group from './Group';

import buttonColors from '../../utils/buttonColors';
import sizes from '../../utils/sizes';

class Button extends Component {
  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    type: PropTypes.string,
    active: PropTypes.bool,
    outline: PropTypes.bool,
    color: PropTypes.oneOf(buttonColors),
    size: PropTypes.oneOf(sizes),
    className: PropTypes.string,
    innerRef: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    tag: 'button',
    type: 'button',
    active: false,
    outline: false,
    color: 'primary',
    size: 'md',
    className: '',
    innerRef: null,
    children: null,
  };

  static Group = Group;

  render() {
    const {
      tag,
      type,
      active,
      outline,
      color,
      size,
      className,
      innerRef,
      children,
      ...props
    } = this.props;

    const Tag = props.href && tag === 'button' ? 'a' : tag;

    const classNames = cn(
      'btn',
      `btn-${size}`,
      `btn${outline ? '-outline' : ''}-${color}`,
      { active, disabled: props.disabled },
      className
    );

    return (
      <Tag
        {...props}
        type={Tag === 'button' ? type : undefined}
        ref={typeof innerRef === 'function' ? innerRef : undefined}
        className={classNames}
      >
        {children}
      </Tag>
    );
  }
}

export default Button;

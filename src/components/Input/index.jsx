import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Autocomplete from './Autocomplete';
import File from './File';
import Group from './Group';

import sizes from '../../utils/sizes';

const unstyledInputTypes = [
  'button',
  'checkbox',
  'file',
  'hidden',
  'image',
  'radio',
  'reset',
  'submit',
  'range',
];

class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(sizes),
    className: PropTypes.string,
    innerRef: PropTypes.func,
  };

  static defaultProps = {
    type: 'text',
    size: 'md',
    className: '',
    innerRef: null,
  };

  static Autocomplete = Autocomplete;

  static File = File;

  static Group = Group;

  render() {
    const { size, className, innerRef, ...props } = this.props;

    return (
      <input
        {...props}
        {...(typeof innerRef === 'function' ? { ref: innerRef } : {})}
        className={cn(
          !unstyledInputTypes.includes(props.type) && `form-control form-control-${size}`,
          className
        )}
      />
    );
  }
}

export default Input;

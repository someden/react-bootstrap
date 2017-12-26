import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

// Class based component instead stateless functional, because refs needed.
// eslint-disable-next-line react/prefer-stateless-function
class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(sizes),
    className: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
    size: 'md',
    className: '',
  };

  render() {
    const { size, className, ...props } = this.props;

    return (
      <input
        {...props}
        className={`
          ${unstyledInputTypes.includes(props.type) ? '' : `form-control form-control-${size}`}
          ${className}
        `}
      />
    );
  }
}

Input.Autocomplete = Autocomplete;
Input.File = File;
Input.Group = Group;

export default Input;

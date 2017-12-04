import React from 'react';
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

const Input = ({ size, className, ...props }) => (
  <input
    {...props}
    className={`
      ${unstyledInputTypes.includes(props.type) ? '' : `form-control form-control-${size}`}
      ${className}
    `}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  size: 'md',
  className: '',
};

Input.Autocomplete = Autocomplete;
Input.File = File;
Input.Group = Group;

export default Input;

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import createComponent from '../../utils/createComponent';
import sizes from '../../utils/sizes';

import File from './File';

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

const Input = forwardRef(({ size, ...props }, ref) => {
  const className = !unstyledInputTypes.includes(props.type)
    ? cn(
        props.readOnly ? 'form-control-plaintext' : 'form-control',
        `form-control-${size}`,
        props.className
      )
    : '';
  return <input ref={ref} {...props} {...(className ? { className } : {})} />;
});

Input.displayName = 'Input';

Input.propTypes = {
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  type: PropTypes.string,
};

Input.defaultProps = {
  className: undefined,
  readOnly: undefined,
  size: 'md',
  type: 'text',
};

Input.File = File;

Input.Group = createComponent('Input.Group', 'input-group');

Input.GroupPrepend = createComponent('Input.GroupPrepend', 'input-group-prepend');

Input.GroupAppend = createComponent('Input.GroupAppend', 'input-group-append');

Input.GroupText = createComponent('Input.GroupText', 'input-group-text');

export default Input;

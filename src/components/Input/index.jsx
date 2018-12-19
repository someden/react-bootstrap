import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import createComponent from '../../utils/createComponent';
import sizes from '../../utils/sizes';

import Autocomplete from './Autocomplete';
import File from './File';

const Group = createComponent('Input.Group', 'input-group');
const GroupPrepend = createComponent('Input.GroupPrepend', 'input-group-prepend');
const GroupAppend = createComponent('Input.GroupAppend', 'input-group-append');
const GroupText = createComponent('Input.GroupText', 'input-group-text');

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
    innerRef: PropTypes.func,
  };

  static defaultProps = {
    type: 'text',
    size: 'md',
    innerRef: null,
  };

  static Autocomplete = Autocomplete;

  static File = File;

  static Group = Group;

  static GroupPrepend = GroupPrepend;

  static GroupAppend = GroupAppend;

  static GroupText = GroupText;

  render() {
    const { size, innerRef, ...props } = this.props;

    return (
      <input
        {...props}
        {...(typeof innerRef === 'function' ? { ref: innerRef } : {})}
        className={cn(
          !unstyledInputTypes.includes(props.type) && `form-control form-control-${size}`,
          props.className
        )}
      />
    );
  }
}

export default Input;

import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import cn from 'classnames';

import buttonColors from '../../utils/buttonColors';
import sizes from '../../utils/sizes';

import './File.css';

const File = ({ id, color, outline, size, disabled, className, style, children, ...props }) => (
  <label
    htmlFor={id}
    className={cn(
      'btn',
      'btn-file',
      `btn-${size}`,
      `btn${outline ? '-outline' : ''}-${color}`,
      { disabled },
      className
    )}
    style={style}
  >
    {children}
    <input {...props} id={id} type='file' disabled={disabled} />
  </label>
);

File.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.oneOf(buttonColors),
  outline: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType,
  children: PropTypes.node,
};

File.defaultProps = {
  color: 'primary',
  outline: false,
  size: 'md',
  disabled: false,
  className: '',
  style: {},
  children: null,
};

File.displayName = 'Input.File';

export default File;

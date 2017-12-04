import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import buttonColors from '../../utils/buttonColors';
import sizes from '../../utils/sizes';

const File = ({
  id,
  name,
  color,
  outline,
  size,
  disabled,
  className,
  style,
  onChange,
  children,
}) => (
  <label
    htmlFor={id}
    className={`
      btn
      btn${outline ? '-outline' : ''}-${color}
      btn-${size}
      ${disabled ? 'disabled' : ''}
      ${className}
    `}
    style={{
      position: 'relative',
      marginBottom: 0,
      overflow: 'hidden',
      ...style,
    }}
  >
    {children}
    <input
      id={id}
      name={name}
      type='file'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
      }}
      disabled={disabled}
      onChange={onChange}
    />
  </label>
);

File.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  color: PropTypes.oneOf(buttonColors),
  outline: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

File.defaultProps = {
  name: '',
  color: 'primary',
  outline: false,
  size: 'md',
  disabled: false,
  className: '',
  style: {},
  onChange: () => {},
  children: null,
};

export default File;

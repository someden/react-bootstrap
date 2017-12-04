import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import iconSizes from '../../utils/iconSizes';

const Icon = ({ name, size, rotate, fixedWidth, spin, pulse, className, style }) => (
  <i
    className={`
      fa
      fa-${name}
      ${size ? `fa-${size}` : ''}
      ${rotate ? `fa-rotate-${rotate}` : ''}
      ${fixedWidth ? 'fa-fw' : ''}
      ${spin ? 'fa-spin' : ''}
      ${pulse ? 'fa-pulse' : ''}
      ${className}
    `}
    style={style}
  />
);

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(iconSizes),
  rotate: PropTypes.oneOf(['', '90', '180', '270']),
  fixedWidth: PropTypes.bool,
  spin: PropTypes.bool,
  pulse: PropTypes.bool,
  className: PropTypes.string,
  style: stylePropType,
};

Icon.defaultProps = {
  name: 'question',
  size: '',
  rotate: '',
  fixedWidth: false,
  spin: false,
  pulse: false,
  className: '',
  style: {},
};

export default Icon;

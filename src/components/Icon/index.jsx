import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import iconSizes from '../../utils/iconSizes';

const Icon = ({ name, size, rotate, fixedWidth, spin, pulse, className, ...props }) => (
  <i
    {...props}
    className={cn(
      'fa',
      `fa-${name}`,
      {
        'fa-fw': fixedWidth,
        'fa-spin': spin,
        'fa-pulse': pulse,
        [`fa-${size}`]: size,
        [`fa-rotate-${rotate}`]: rotate,
      },
      className
    )}
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
};

Icon.defaultProps = {
  name: 'question',
  size: '',
  rotate: '',
  fixedWidth: false,
  spin: false,
  pulse: false,
  className: '',
};

export default Icon;

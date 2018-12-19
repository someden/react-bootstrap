import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import iconSizes from '../../utils/iconSizes';

const Icon = ({ name, size, rotate, fixedWidth, spin, pulse, ...props }) => (
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
      props.className
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
};

Icon.defaultProps = {
  name: 'question',
  size: '',
  rotate: '',
  fixedWidth: false,
  spin: false,
  pulse: false,
};

export default Icon;

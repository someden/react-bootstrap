import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import iconSizes from '../../utils/iconSizes';

const Icon = forwardRef(({ name, size, rotate, fixedWidth, spin, pulse, ...props }, ref) => (
  <i
    ref={ref}
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
));

Icon.displayName = 'Icon';

Icon.propTypes = {
  className: PropTypes.string,
  fixedWidth: PropTypes.bool,
  name: PropTypes.string,
  pulse: PropTypes.bool,
  rotate: PropTypes.oneOf(['', '90', '180', '270']),
  size: PropTypes.oneOf(iconSizes),
  spin: PropTypes.bool,
};

Icon.defaultProps = {
  className: undefined,
  fixedWidth: false,
  name: 'question',
  pulse: false,
  rotate: '',
  size: '',
  spin: false,
};

export default Icon;

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import buttonColors from '../../utils/buttonColors';
import sizes from '../../utils/sizes';

import './File.css';

const File = forwardRef(
  ({ id, color, outline, size, disabled, className, style, children, ...props }, ref) => (
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
      <input ref={ref} {...props} id={id} type='file' disabled={disabled} />
    </label>
  )
);

File.displayName = 'Input.File';

File.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(buttonColors),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

File.defaultProps = {
  children: null,
  className: undefined,
  color: 'primary',
  disabled: false,
  outline: false,
  size: 'md',
  style: {},
};

export default File;
